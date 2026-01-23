import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import AnimatedSection from './AnimatedSection';
import { Clock, FileText, ArrowRight, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Article {
  id: string;
  title: string;
  excerpt: string;
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

const ArticlesSection = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleReadArticle = (articleId: string) => {
    navigate(`/article/${articleId}`);
  };

  useEffect(() => {
    const fetchArticles = async () => {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('is_published', true)
        .order('created_at', { ascending: false })
        .limit(4);

      if (!error && data) {
        setArticles(data);
      }
      setLoading(false);
    };

    fetchArticles();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  if (loading) {
    return (
      <section id="articles" className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-8 w-48 bg-muted rounded animate-pulse mx-auto mb-4" />
            <div className="h-4 w-96 bg-muted rounded animate-pulse mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-card rounded-2xl p-6 h-48 animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="articles" className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <FileText className="w-4 h-4" />
            Ressources
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Articles & Tutoriels
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des contenus pratiques pour approfondir vos connaissances en robotique et intelligence artificielle.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article, index) => (
            <AnimatedSection key={article.id} delay={index * 0.1}>
              <div className="group bg-card border border-border/50 rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${categoryLabels[article.category]?.color || 'bg-muted text-muted-foreground'}`}>
                    {categoryLabels[article.category]?.label || article.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {formatDate(article.created_at)}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>

                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5" />
                      {article.author_name}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {article.read_time_minutes} min de lecture
                    </span>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => handleReadArticle(article.id)}
                    className="text-primary hover:text-primary hover:bg-primary/10 group/btn gap-1"
                  >
                    Lire
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4} className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            className="gap-2 border-border hover:border-primary/50"
            onClick={() => window.location.href = '/articles'}
          >
            Voir tous les articles
            <ArrowRight className="w-4 h-4" />
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ArticlesSection;
