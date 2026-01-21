import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// NLLB language codes mapping
const nllbLanguageCodes: Record<string, string> = {
  'fr': 'fra_Latn',
  'en': 'eng_Latn',
  'bm': 'bam_Latn',
  'sw': 'swh_Latn',
  'wo': 'wol_Latn',
  'ha': 'hau_Latn',
  'yo': 'yor_Latn',
  'ig': 'ibo_Latn',
  'am': 'amh_Ethi',
  'zu': 'zul_Latn',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { text, targetLanguage, sourceLang = 'fr' } = await req.json();

    if (!text || !targetLanguage) {
      return new Response(
        JSON.stringify({ error: 'Missing text or targetLanguage' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // If target is French, return original text
    if (targetLanguage === 'fr') {
      return new Response(
        JSON.stringify({ translatedText: text }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const huggingfaceApiKey = Deno.env.get('HUGGINGFACE_API_KEY');
    
    if (!huggingfaceApiKey) {
      // Fallback to AI translation if no HuggingFace key
      return await fallbackAITranslation(text, targetLanguage, sourceLang);
    }

    const srcLang = nllbLanguageCodes[sourceLang] || 'fra_Latn';
    const tgtLang = nllbLanguageCodes[targetLanguage] || 'eng_Latn';

    // Use NLLB-200 for translation
    const response = await fetch(
      'https://api-inference.huggingface.co/models/facebook/nllb-200-distilled-600M',
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${huggingfaceApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          inputs: text,
          parameters: {
            src_lang: srcLang,
            tgt_lang: tgtLang,
          },
        }),
      }
    );

    if (!response.ok) {
      console.error('HuggingFace error:', await response.text());
      return await fallbackAITranslation(text, targetLanguage, sourceLang);
    }

    const result = await response.json();
    const translatedText = result[0]?.translation_text || result[0]?.generated_text || text;

    return new Response(
      JSON.stringify({ translatedText }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error: unknown) {
    console.error('Translation error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ error: errorMessage, translatedText: null }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});

async function fallbackAITranslation(text: string, targetLanguage: string, sourceLang: string) {
  const lovableApiKey = Deno.env.get('LOVABLE_API_KEY');
  
  const languageNames: Record<string, string> = {
    'fr': 'French',
    'en': 'English',
    'bm': 'Bambara',
    'sw': 'Swahili',
    'wo': 'Wolof',
    'ha': 'Hausa',
    'yo': 'Yoruba',
    'ig': 'Igbo',
    'am': 'Amharic',
    'zu': 'Zulu',
  };

  const response = await fetch('https://api.lovable.dev/ai/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${lovableApiKey}`,
    },
    body: JSON.stringify({
      model: 'google/gemini-2.5-flash',
      messages: [
        {
          role: 'system',
          content: `You are a translator. Translate the following text from ${languageNames[sourceLang] || 'French'} to ${languageNames[targetLanguage] || 'English'}. Only output the translation, nothing else.`
        },
        {
          role: 'user',
          content: text
        }
      ],
      max_tokens: 2000,
    }),
  });

  const data = await response.json();
  const translatedText = data.choices?.[0]?.message?.content || text;

  return new Response(
    JSON.stringify({ translatedText }),
    { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
  );
}
