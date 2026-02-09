import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, courseTitle, courseContent, language, history } = await req.json();

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const languageInstruction = language !== 'fr' 
      ? `Réponds en ${getLanguageName(language)}.` 
      : 'Réponds en français.';

    const systemPrompt = `Tu es un assistant pédagogique de VulgaTechAfrique, spécialisé en robotique et IA pour l'Afrique.

Cours actuel : "${courseTitle}"
Contenu du cours :
${courseContent}

RÈGLES STRICTES :
- Réponds de manière PRÉCISE et CONCISE (max 3-4 phrases par point)
- Va droit à l'essentiel, pas de bavardage inutile
- Structure ta réponse avec des puces ou des étapes numérotées quand c'est pertinent
- Donne des exemples concrets et pratiques
- Si la question sort du cadre du cours, dis-le clairement en une phrase et redirige
- ${languageInstruction}
- Ne répète jamais le contenu du cours mot pour mot, reformule et simplifie`;

    const messages = [
      { role: 'system', content: systemPrompt },
      ...history,
      { role: 'user', content: message }
    ];

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ response: "Le service est temporairement surchargé. Réessayez dans quelques instants." }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ response: "Le service IA nécessite un rechargement de crédits." }),
          { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      const errorText = await response.text();
      console.error("AI Gateway error:", response.status, errorText);
      throw new Error(`AI Gateway error: ${response.status}`);
    }

    const data = await response.json();
    const aiResponse = data.choices?.[0]?.message?.content || "Désolé, je n'ai pas pu générer de réponse.";

    return new Response(
      JSON.stringify({ response: aiResponse }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error: unknown) {
    console.error('Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ 
        response: "Désolé, une erreur s'est produite. Veuillez réessayer.",
        error: errorMessage 
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});

function getLanguageName(code: string): string {
  const languages: Record<string, string> = {
    'fr': 'français',
    'en': 'anglais',
    'bm': 'bambara',
    'sw': 'swahili',
    'wo': 'wolof',
    'ha': 'hausa',
    'yo': 'yoruba',
    'ig': 'igbo',
    'am': 'amharique',
    'zu': 'zoulou',
  };
  return languages[code] || 'français';
}
