import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LanguageSelector, { Language } from '@/components/LanguageSelector';
import CourseChat from '@/components/CourseChat';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock, User, FileText, Loader2, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string | null;
  category: string;
  read_time_minutes: number;
  author_name: string;
  created_at: string;
}

const categoryLabels: Record<string, { label: string; color: string }> = {
  'tutoriel': { label: 'Tutoriel', color: 'bg-blue-500/10 text-blue-400' },
  'article': { label: 'Article', color: 'bg-purple-500/10 text-purple-400' },
  'actualité': { label: 'Actualité', color: 'bg-orange-500/10 text-orange-400' }
};

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState('fr');
  const [translatedContent, setTranslatedContent] = useState<string | null>(null);
  const [translatedTitle, setTranslatedTitle] = useState<string | null>(null);
  const [isTranslating, setIsTranslating] = useState(false);

  useEffect(() => {
    const fetchArticle = async () => {
      if (!id) return;
      
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('id', id)
        .eq('is_published', true)
        .single();

      if (error) {
        console.error('Error fetching article:', error);
        toast({
          title: "Article non trouvé",
          description: "L'article demandé n'existe pas.",
          variant: "destructive"
        });
        navigate('/');
        return;
      }

      setArticle(data);
      setTranslatedContent(data.content);
      setTranslatedTitle(data.title);
      setLoading(false);
    };

    fetchArticle();
  }, [id, navigate, toast]);

  const handleLanguageChange = async (language: Language) => {
    setSelectedLanguage(language.code);
    
    if (language.code === 'fr') {
      setTranslatedContent(article?.content || null);
      setTranslatedTitle(article?.title || null);
      return;
    }

    if (!article?.content) return;

    setIsTranslating(true);
    
    try {
      // Translate both title and content
      const [titleResponse, contentResponse] = await Promise.all([
        fetch(
          `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/translate-content`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
            },
            body: JSON.stringify({
              text: article.title,
              targetLanguage: language.code,
              sourceLang: 'fr',
            }),
          }
        ),
        fetch(
          `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/translate-content`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
            },
            body: JSON.stringify({
              text: article.content,
              targetLanguage: language.code,
              sourceLang: 'fr',
            }),
          }
        )
      ]);

      const [titleData, contentData] = await Promise.all([
        titleResponse.json(),
        contentResponse.json()
      ]);
      
      if (titleData.translatedText) {
        setTranslatedTitle(titleData.translatedText);
      }
      if (contentData.translatedText) {
        setTranslatedContent(contentData.translatedText);
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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
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

  if (!article) {
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
          Retour aux articles
        </Button>

        {/* Article header */}
        <article className="max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${categoryLabels[article.category]?.color || 'bg-muted text-muted-foreground'}`}>
              {categoryLabels[article.category]?.label || article.category}
            </span>
            <span className="text-sm text-muted-foreground">
              {formatDate(article.created_at)}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {isTranslating ? article.title : (translatedTitle || article.title)}
          </h1>

          <p className="text-lg text-muted-foreground mb-6">
            {article.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              {article.author_name}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {article.read_time_minutes} min de lecture
            </span>
          </div>

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
              Discuter sur Telegram
            </Button>
          </div>

          {/* Article content */}
          <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
            {isTranslating ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="w-6 h-6 animate-spin text-primary mr-2" />
                <span className="text-muted-foreground">Traduction en cours...</span>
              </div>
            ) : translatedContent ? (
              <div className="prose prose-invert max-w-none">
                <div className="text-foreground leading-relaxed whitespace-pre-wrap">
                  {translatedContent}
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <FileText className="w-12 h-12 mx-auto mb-4 text-muted-foreground opacity-50" />
                <p className="text-muted-foreground">
                  Le contenu complet de cet article est disponible sur notre bot Telegram.
                </p>
                <Button 
                  onClick={openTelegram}
                  className="mt-4 gap-2"
                >
                  <Send className="w-4 h-4" />
                  Accéder à l'article complet
                </Button>
              </div>
            )}
          </div>

          {/* Telegram CTA */}
          <div className="mt-8 p-6 bg-primary/10 rounded-2xl border border-primary/20 text-center">
            <h3 className="text-lg font-semibold mb-2">
              Des questions sur cet article ?
            </h3>
            <p className="text-muted-foreground mb-4">
              Notre bot Telegram est disponible 24/7 pour répondre à vos questions.
            </p>
            <Button onClick={openTelegram} className="gap-2">
              <Send className="w-4 h-4" />
              Ouvrir Telegram
            </Button>
          </div>
        </article>
      </main>
      <Footer />
      
      {/* Chat IA pédagogique */}
      <CourseChat
        courseTitle={article.title}
        courseContent={article.content || article.excerpt}
        language={selectedLanguage}
      />
    </div>
  );
};

export default ArticleDetail;
