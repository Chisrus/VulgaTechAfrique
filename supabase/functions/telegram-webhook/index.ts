import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const TELEGRAM_BOT_TOKEN = Deno.env.get("TELEGRAM_BOT_TOKEN")!;
const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const HUGGINGFACE_API_KEY = Deno.env.get("HUGGINGFACE_API_KEY")!;
const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY")!;

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

// African language codes and their names
const AFRICAN_LANGUAGES: Record<string, string> = {
  "sw": "Swahili", "lg": "Luganda", "rw": "Kinyarwanda", "so": "Somali",
  "om": "Oromo", "ti": "Tigrinya", "yo": "Yoruba", "ha": "Hausa",
  "ig": "Igbo", "wo": "Wolof", "tw": "Twi", "ak": "Akan",
  "bm": "Bambara", "ff": "Fula/Fulfulde", "ee": "Ewe", "fon": "Fon",
  "mos": "Mooré/Mossi", "bci": "Baoulé", "ln": "Lingala", "kg": "Kikongo",
  "zu": "Zulu", "xh": "Xhosa", "sn": "Shona", "ny": "Chichewa",
  "st": "Sesotho", "tn": "Setswana", "am": "Amharic", "mg": "Malagasy",
};

const SYSTEM_PROMPT = `Tu es VulgaTechAfrique, un assistant éducatif spécialisé en technologie pour l'Afrique.

RÈGLES STRICTES :
- Sois PRÉCIS et CONCIS : max 3-4 phrases par point
- Va DROIT AU BUT, pas de bavardage
- Structure avec des puces ou étapes numérotées
- Donne des exemples concrets adaptés au contexte africain
- Si tu ne sais pas, dis-le en une phrase
- Réponds dans la même langue que la question
- Pour les questions techniques : donne le code ou la commande directement
- Pour les concepts : explique en termes simples avec une analogie

Tu couvres : programmation, IA, robotique, développement web/mobile, data science.`;

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
    if (!response.ok) return "fr";
    const result = await response.json();
    if (Array.isArray(result) && result.length > 0) {
      return result[0]?.label || "fr";
    }
    return "fr";
  } catch {
    return "fr";
  }
}

function getNLLBCode(langCode: string): string {
  const nllbCodes: Record<string, string> = {
    "fr": "fra_Latn", "en": "eng_Latn", "sw": "swh_Latn", "lg": "lug_Latn",
    "rw": "kin_Latn", "so": "som_Latn", "om": "orm_Latn", "ti": "tir_Ethi",
    "yo": "yor_Latn", "ha": "hau_Latn", "ig": "ibo_Latn", "wo": "wol_Latn",
    "tw": "twi_Latn", "ak": "aka_Latn", "bm": "bam_Latn", "ff": "fuv_Latn",
    "ee": "ewe_Latn", "fon": "fon_Latn", "mos": "mos_Latn", "bci": "aka_Latn",
    "ln": "lin_Latn", "kg": "kon_Latn", "zu": "zul_Latn", "xh": "xho_Latn",
    "sn": "sna_Latn", "ny": "nya_Latn", "st": "sot_Latn", "tn": "tsn_Latn",
    "am": "amh_Ethi", "mg": "plt_Latn",
  };
  return nllbCodes[langCode] || "fra_Latn";
}

async function translateWithHuggingFace(text: string, sourceLang: string, targetLang: string): Promise<string> {
  try {
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
          parameters: { src_lang: sourceLang, tgt_lang: targetLang },
        }),
      }
    );
    if (!response.ok) return text;
    const result = await response.json();
    if (Array.isArray(result) && result[0]?.translation_text) {
      return result[0].translation_text;
    }
    return text;
  } catch {
    return text;
  }
}

async function sendTelegramMessage(chatId: number, text: string) {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text, parse_mode: "Markdown" }),
  });
}

async function getOrCreateConversation(chatId: number, username?: string, firstName?: string, lastName?: string) {
  const { data: existing } = await supabase
    .from("telegram_conversations")
    .select("*")
    .eq("chat_id", chatId)
    .single();

  if (existing) return existing;

  const { data: newConvo, error } = await supabase
    .from("telegram_conversations")
    .insert({ chat_id: chatId, username, first_name: firstName, last_name: lastName })
    .select()
    .single();

  if (error) throw error;
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
    conversation_id: conversationId, chat_id: chatId, message_id: messageId, role, content,
  });
}

async function getAIResponse(messages: { role: string; content: string }[], userLanguage: string): Promise<string> {
  const languageHint = userLanguage !== "fr" && AFRICAN_LANGUAGES[userLanguage]
    ? `\n\nL'utilisateur parle ${AFRICAN_LANGUAGES[userLanguage]}. Réponds dans cette langue si possible, sinon en français.`
    : "";

  const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${LOVABLE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "google/gemini-3-flash-preview",
      messages: [
        { role: "system", content: SYSTEM_PROMPT + languageHint },
        ...messages,
      ],
    }),
  });

  if (!response.ok) {
    console.error("AI Gateway error:", response.status, await response.text());
    return "Désolé, une erreur est survenue. Réessayez dans un instant.";
  }

  const data = await response.json();
  return data.choices?.[0]?.message?.content || "Désolé, je n'ai pas pu générer de réponse.";
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

    if (update.message && update.message.text) {
      const message = update.message;
      const chatId = message.chat.id;
      const text = message.text;
      const messageId = message.message_id;
      const username = message.from?.username;
      const firstName = message.from?.first_name;
      const lastName = message.from?.last_name;

      if (text === "/start") {
        await sendTelegramMessage(chatId,
          `🎓 *Bienvenue sur VulgaTechAfrique !*\n\nJe suis ton assistant pour apprendre la tech.\n\nPose-moi une question sur :\n• Programmation\n• Intelligence artificielle\n• Robotique\n• Développement web/mobile\n\nEnvoie ton message pour commencer !`
        );
        return new Response("OK", { status: 200 });
      }

      if (text === "/help") {
        await sendTelegramMessage(chatId,
          `*Aide VulgaTechAfrique*\n\n/start - Démarrer\n/help - Aide\n/languages - Langues supportées\n/clear - Effacer l'historique\n\nEnvoie ta question directement !`
        );
        return new Response("OK", { status: 200 });
      }

      if (text === "/languages") {
        const langs = Object.entries(AFRICAN_LANGUAGES).map(([, name]) => `• ${name}`).join("\n");
        await sendTelegramMessage(chatId, `🌍 *Langues supportées :*\n\n${langs}`);
        return new Response("OK", { status: 200 });
      }

      if (text === "/clear") {
        const conversation = await getOrCreateConversation(chatId, username, firstName, lastName);
        await supabase.from("telegram_messages").delete().eq("conversation_id", conversation.id);
        await sendTelegramMessage(chatId, "🗑️ Historique effacé !");
        return new Response("OK", { status: 200 });
      }

      const conversation = await getOrCreateConversation(chatId, username, firstName, lastName);
      const userLanguage = await detectLanguage(text);
      await saveMessage(conversation.id, chatId, messageId, "user", text);
      const history = await getConversationHistory(conversation.id);
      const aiResponse = await getAIResponse(history, userLanguage);
      await saveMessage(conversation.id, chatId, messageId, "assistant", aiResponse);
      await sendTelegramMessage(chatId, aiResponse);
    }

    return new Response("OK", { status: 200 });
  } catch (error) {
    console.error("Webhook error:", error);
    return new Response("Internal error", { status: 500 });
  }
});
