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

    const languageInstruction = language !== 'fr' 
      ? `Réponds en ${getLanguageName(language)}.` 
      : 'Réponds en français.';

    const systemPrompt = `Tu es un assistant pédagogique expert pour VulgaTechAfrique. 
Tu aides les apprenants à comprendre les cours sur la robotique et l'intelligence artificielle.

Contexte du cours actuel:
- Titre: ${courseTitle}
- Contenu: ${courseContent}

Instructions:
- Réponds de manière claire et pédagogique
- Utilise des exemples concrets adaptés au contexte africain quand c'est pertinent
- Si la question n'est pas liée au cours, guide poliment l'utilisateur vers le sujet du cours
- ${languageInstruction}
- Sois encourageant et bienveillant`;

    const messages = [
      { role: 'system', content: systemPrompt },
      ...history,
      { role: 'user', content: message }
    ];

    // AI service currently unavailable - lovable API removed
    const aiResponse = "Désolé, le service AI est temporairement indisponible. Veuillez réessayer plus tard.";

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
