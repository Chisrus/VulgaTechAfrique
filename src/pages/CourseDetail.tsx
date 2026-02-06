import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LanguageSelector, { Language, languages } from '@/components/LanguageSelector';
import CourseChat from '@/components/CourseChat';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock, BookOpen, Loader2, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cleanText, cleanCategory, cleanDifficulty } from '@/utils/textCleaner';

interface Course {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  duration_minutes: number;
  category: string;
  content_preview: string | null;
}

const difficultyColors: Record<string, string> = {
  'débutant': 'bg-green-500/10 text-green-400',
  'intermédiaire': 'bg-yellow-500/10 text-yellow-400',
  'avancé': 'bg-red-500/10 text-red-400'
};

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState('fr');
  const [translatedContent, setTranslatedContent] = useState<string | null>(null);
  const [isTranslating, setIsTranslating] = useState(false);

  useEffect(() => {
    const fetchCourse = async () => {
      if (!id) return;
      
      const { data, error } = await supabase
        .from('courses')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching course:', error);
        toast({
          title: "Cours non trouvé",
          description: "Le cours demandé n'existe pas.",
          variant: "destructive"
        });
        navigate('/');
        return;
      }

      setCourse(data);
      setTranslatedContent(data.content_preview);
      setLoading(false);
    };

    fetchCourse();
  }, [id, navigate, toast]);

  const handleLanguageChange = async (language: Language) => {
    setSelectedLanguage(language.code);
    
    if (language.code === 'fr') {
      setTranslatedContent(course?.content_preview || null);
      return;
    }

    if (!course?.content_preview) return;

    setIsTranslating(true);
    
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/translate-content`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({
            text: course.content_preview,
            targetLanguage: language.code,
            sourceLang: 'fr',
          }),
        }
      );

      const data = await response.json();
      
      if (data.translatedText) {
        setTranslatedContent(data.translatedText);
        toast({
          title: "Traduction effectuée",
          description: `Contenu traduit en ${language.nativeName}`,
        });
      }
    } catch (error) {
      console.error('Translation error:', error);
      toast({
        title: "Erreur de traduction",
        description: "Impossible de traduire le contenu. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsTranslating(false);
    }
  };

  const openTelegram = () => {
    window.open('https://t.me/VulgaTechbot', '_blank');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="container mx-auto px-4 py-20">
          <div className="flex items-center justify-center min-h-[50vh]">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!course) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8 md:py-16">
        {/* Back button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-6 gap-2 hover:bg-muted"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour aux cours
        </Button>

        {/* Course header */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span className={`text-sm font-medium ${difficultyColors[course.difficulty] || 'text-muted-foreground'}`}>
              {cleanDifficulty(course.difficulty)}
            </span>
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              {course.duration_minutes} min
            </span>
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <BookOpen className="w-4 h-4" />
              {cleanCategory(course.category)}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {cleanText(course.title)}
          </h1>

          <p className="text-lg text-muted-foreground mb-8">
            {cleanText(course.description)}
          </p>

          {/* Language selector and Telegram button */}
          <div className="flex flex-wrap items-center gap-4 mb-8 p-4 bg-card rounded-xl border border-border">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Lire en :</span>
              <LanguageSelector 
                selectedLanguage={selectedLanguage}
                onLanguageChange={handleLanguageChange}
                isTranslating={isTranslating}
              />
            </div>
            <div className="flex-1" />
            <Button 
              variant="outline" 
              size="sm"
              onClick={openTelegram}
              className="gap-2"
            >
              <Send className="w-4 h-4" />
              Continuer sur Telegram
            </Button>
          </div>

          {/* Course content */}
          <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
            {isTranslating ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="w-6 h-6 animate-spin text-primary mr-2" />
                <span className="text-muted-foreground">Traduction en cours...</span>
              </div>
            ) : translatedContent ? (
              <div className="prose prose-invert max-w-none">
                <div className="text-foreground leading-relaxed whitespace-pre-wrap">
                  {cleanText(translatedContent)}
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <BookOpen className="w-12 h-12 mx-auto mb-4 text-muted-foreground opacity-50" />
                <p className="text-muted-foreground">
                  Le contenu complet de ce cours est disponible sur notre bot Telegram.
                </p>
                <Button 
                  onClick={openTelegram}
                  className="mt-4 gap-2"
                >
                  <Send className="w-4 h-4" />
                  Accéder au cours complet
                </Button>
              </div>
            )}
          </div>

          {/* Telegram CTA */}
          <div className="mt-8 p-6 bg-primary/10 rounded-2xl border border-primary/20 text-center">
            <h3 className="text-lg font-semibold mb-2">
              Besoin d'aide ou du cours complet ?
            </h3>
            <p className="text-muted-foreground mb-4">
              Notre bot Telegram est disponible 24/7 pour vous accompagner dans votre apprentissage.
            </p>
            <Button onClick={openTelegram} className="gap-2">
              <Send className="w-4 h-4" />
              Ouvrir Telegram
            </Button>
          </div>
        </div>
      </main>
      <Footer />
      
      {/* Chat component */}
      <CourseChat 
        courseTitle={course.title}
        courseContent={translatedContent || course.content_preview || course.description}
        language={selectedLanguage}
      />
    </div>
  );
};

export default CourseDetail;
