import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const TELEGRAM_BOT_TOKEN = Deno.env.get("TELEGRAM_BOT_TOKEN")!;
const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY")!;
const HUGGINGFACE_API_KEY = Deno.env.get("HUGGINGFACE_API_KEY")!;

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

// African language codes and their names
const AFRICAN_LANGUAGES: Record<string, string> = {
  // East African
  "sw": "Swahili",
  "lg": "Luganda",
  "rw": "Kinyarwanda",
  "so": "Somali",
  "om": "Oromo",
  "ti": "Tigrinya",
  
  // West African
  "yo": "Yoruba",
  "ha": "Hausa",
  "ig": "Igbo",
  "wo": "Wolof",
  "tw": "Twi",
  "ak": "Akan",
  "bm": "Bambara",
  "ff": "Fula/Fulfulde",
  "ee": "Ewe",
  "fon": "Fon",
  "mos": "Mooré/Mossi",
  "bci": "Baoulé", // Mapped to Akan
  
  // Central African
  "ln": "Lingala",
  "kg": "Kikongo",
  
  // Southern African
  "zu": "Zulu",
  "xh": "Xhosa",
  "sn": "Shona",
  "ny": "Chichewa",
  "st": "Sesotho",
  "tn": "Setswana",
  
  // Horn of Africa
  "am": "Amharic",
  
  // Island
  "mg": "Malagasy",
};

const SYSTEM_PROMPT = `Tu es VulgaTechAfrique, un assistant éducatif spécialisé dans la vulgarisation technologique pour l'Afrique.

Ton rôle :
- Expliquer des concepts technologiques de manière simple et accessible
- Aider les étudiants et professionnels africains à apprendre la programmation, l'IA, et les nouvelles technologies
- Répondre dans la langue de l'utilisateur de manière claire et pédagogique
- Donner des exemples concrets et pertinents pour le contexte africain
- Encourager et motiver les apprenants
- Tu peux répondre en français, anglais, et plusieurs langues africaines

Règles :
- Sois concis mais complet
- Utilise des analogies simples
- Si tu ne sais pas, dis-le honnêtement
- Adapte ton niveau au besoin de l'utilisateur
- Réponds toujours dans la même langue que la question posée`;

// Detect if text contains African language patterns using Hugging Face
async function detectLanguage(text: string): Promise<string> {
  try {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/facebook/mms-lid-256",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${HUGGINGFACE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputs: text }),
      }
    );

    if (!response.ok) {
      console.log("Language detection failed, defaulting to French");
      return "fr";
    }

    const result = await response.json();
    if (Array.isArray(result) && result.length > 0) {
      // Get the top prediction
      const topLang = result[0]?.label || "fr";
      console.log(`Detected language: ${topLang}`);
      return topLang;
    }
    return "fr";
  } catch (error) {
    console.error("Language detection error:", error);
    return "fr";
  }
}

// Translate text using Hugging Face's African language models
async function translateWithHuggingFace(text: string, sourceLang: string, targetLang: string): Promise<string> {
  try {
    // Use NLLB (No Language Left Behind) model for African languages
    const response = await fetch(
      "https://api-inference.huggingface.co/models/facebook/nllb-200-distilled-600M",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${HUGGINGFACE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: text,
          parameters: {
            src_lang: sourceLang,
            tgt_lang: targetLang,
          },
        }),
      }
    );

    if (!response.ok) {
      console.error("Translation failed:", await response.text());
      return text;
    }

    const result = await response.json();
    if (Array.isArray(result) && result[0]?.translation_text) {
      return result[0].translation_text;
    }
    return text;
  } catch (error) {
    console.error("Translation error:", error);
    return text;
  }
}

// Map simple language codes to NLLB language codes
function getNLLBCode(langCode: string): string {
  const nllbCodes: Record<string, string> = {
    // European
    "fr": "fra_Latn",
    "en": "eng_Latn",
    
    // East African
    "sw": "swh_Latn",
    "lg": "lug_Latn",
    "rw": "kin_Latn",
    "so": "som_Latn",
    "om": "orm_Latn",
    "ti": "tir_Ethi",
    
    // West African
    "yo": "yor_Latn",
    "ha": "hau_Latn",
    "ig": "ibo_Latn",
    "wo": "wol_Latn",
    "tw": "twi_Latn",
    "ak": "aka_Latn",
    "bm": "bam_Latn",
    "ff": "fuv_Latn",
    "ee": "ewe_Latn",
    "fon": "fon_Latn",
    "mos": "mos_Latn",
    "bci": "aka_Latn", // Baoulé mapped to Akan (linguistically close)
    
    // Central African
    "ln": "lin_Latn",
    "kg": "kon_Latn",
    
    // Southern African
    "zu": "zul_Latn",
    "xh": "xho_Latn",
    "sn": "sna_Latn",
    "ny": "nya_Latn",
    "st": "sot_Latn",
    "tn": "tsn_Latn",
    
    // Horn of Africa
    "am": "amh_Ethi",
    
    // Island
    "mg": "plt_Latn",
  };
  return nllbCodes[langCode] || "fra_Latn";
}

async function sendTelegramMessage(chatId: number, text: string) {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  
  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: text,
      parse_mode: "Markdown",
    }),
  });
}

async function getOrCreateConversation(chatId: number, username?: string, firstName?: string, lastName?: string) {
  const { data: existing } = await supabase
    .from("telegram_conversations")
    .select("*")
    .eq("chat_id", chatId)
    .single();

  if (existing) {
    return existing;
  }

  const { data: newConvo, error } = await supabase
    .from("telegram_conversations")
    .insert({
      chat_id: chatId,
      username,
      first_name: firstName,
      last_name: lastName,
    })
    .select()
    .single();

  if (error) {
    console.error("Error creating conversation:", error);
    throw error;
  }

  return newConvo;
}

async function getConversationHistory(conversationId: string, limit = 10) {
  const { data: messages } = await supabase
    .from("telegram_messages")
    .select("role, content")
    .eq("conversation_id", conversationId)
    .order("created_at", { ascending: false })
    .limit(limit);

  return (messages || []).reverse();
}

async function saveMessage(conversationId: string, chatId: number, messageId: number, role: string, content: string) {
  await supabase.from("telegram_messages").insert({
    conversation_id: conversationId,
    chat_id: chatId,
    message_id: messageId,
    role,
    content,
  });
}

async function getAIResponse(messages: { role: string; content: string }[], userLanguage: string) {
  // Get response from Lovable AI (which handles multiple languages well)
  const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${LOVABLE_API_KEY}`,
    },
    body: JSON.stringify({
      model: "google/gemini-3-flash-preview",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages,
      ],
      max_tokens: 1000,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    console.error("AI API error:", error);
    throw new Error("Failed to get AI response");
  }

  const data = await response.json();
  let aiResponse = data.choices[0].message.content;

  // If user is using an African language, translate the response
  if (userLanguage in AFRICAN_LANGUAGES) {
    console.log(`Translating response to ${AFRICAN_LANGUAGES[userLanguage]}`);
    aiResponse = await translateWithHuggingFace(
      aiResponse,
      getNLLBCode("fr"),
      getNLLBCode(userLanguage)
    );
  }

  return aiResponse;
}

serve(async (req) => {
  if (req.method === "GET") {
    return new Response("Telegram webhook is active!", { status: 200 });
  }

  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  try {
    const update = await req.json();
    console.log("Received update:", JSON.stringify(update));

    // Handle message
    if (update.message && update.message.text) {
      const message = update.message;
      const chatId = message.chat.id;
      const text = message.text;
      const messageId = message.message_id;
      const username = message.from?.username;
      const firstName = message.from?.first_name;
      const lastName = message.from?.last_name;

      // Handle /start command
      if (text === "/start") {
        await sendTelegramMessage(
          chatId,
          `🎓 *Bienvenue sur VulgaTechAfrique !*\n\nJe suis ton assistant éducatif pour apprendre la technologie.\n\n💡 Pose-moi n'importe quelle question sur :\n• La programmation\n• L'intelligence artificielle\n• Les nouvelles technologies\n• Le développement web/mobile\n\nEnvoie simplement ton message pour commencer !`
        );
        return new Response("OK", { status: 200 });
      }

      // Handle /help command
      if (text === "/help") {
        await sendTelegramMessage(
          chatId,
          `🆘 *Aide VulgaTechAfrique*\n\n*Commandes :*\n/start - Démarrer le bot\n/help - Afficher cette aide\n/languages - Voir les langues supportées\n/clear - Effacer l'historique\n\n*Comment m'utiliser :*\nEnvoie simplement ta question et je te répondrai !\n\nExemples :\n• "Qu'est-ce que Python ?"\n• "Comment créer un site web ?"\n• "Explique-moi l'IA"`
        );
        return new Response("OK", { status: 200 });
      }

      // Handle /languages command
      if (text === "/languages") {
        const languagesList = `🌍 *Langues Africaines Supportées*\n
*Afrique de l'Ouest :*
• Bambara (Mali)
• Yoruba (Nigeria)
• Hausa (Nigeria/Niger)
• Igbo (Nigeria)
• Wolof (Sénégal)
• Twi/Akan (Ghana)
• Baoulé (Côte d'Ivoire) ⚠️
• Fula/Fulfulde
• Ewe (Ghana/Togo)
• Fon (Bénin)
• Mooré (Burkina Faso)

*Afrique de l'Est :*
• Swahili
• Luganda (Ouganda)
• Kinyarwanda
• Somali
• Oromo (Éthiopie)
• Tigrinya (Érythrée/Éthiopie)

*Afrique Centrale :*
• Lingala (RDC/Congo)
• Kikongo

*Afrique Australe :*
• Zulu
• Xhosa
• Shona (Zimbabwe)
• Chichewa (Malawi)
• Sesotho
• Setswana

*Autres :*
• Amharic (Éthiopie)
• Malagasy (Madagascar)

⚠️ _Le Baoulé utilise l'Akan comme approximation_`;
        
        await sendTelegramMessage(chatId, languagesList);
        return new Response("OK", { status: 200 });
      }

      // Handle /clear command
      if (text === "/clear") {
        const conversation = await getOrCreateConversation(chatId, username, firstName, lastName);
        await supabase
          .from("telegram_messages")
          .delete()
          .eq("conversation_id", conversation.id);
        
        await sendTelegramMessage(chatId, "🗑️ Historique effacé ! Tu peux recommencer une nouvelle conversation.");
        return new Response("OK", { status: 200 });
      }

      // Get or create conversation
      const conversation = await getOrCreateConversation(chatId, username, firstName, lastName);

      // Detect user's language
      const userLanguage = await detectLanguage(text);
      console.log(`User language detected: ${userLanguage}`);

      // Save user message
      await saveMessage(conversation.id, chatId, messageId, "user", text);

      // Get conversation history
      const history = await getConversationHistory(conversation.id);

      // Get AI response with language support
      const aiResponse = await getAIResponse(history, userLanguage);

      // Save AI response
      await saveMessage(conversation.id, chatId, messageId, "assistant", aiResponse);

      // Send response to user
      await sendTelegramMessage(chatId, aiResponse);
    }

    return new Response("OK", { status: 200 });
  } catch (error) {
    console.error("Webhook error:", error);
    return new Response("Internal error", { status: 500 });
  }
});
