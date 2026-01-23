import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Clock, FileText, ArrowRight, User, Filter, Search, BookOpen, Newspaper, TrendingUp } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  read_time_minutes: number;
  author_name: string;
  created_at: string;
  thumbnail_url: string | null;
}

const ARTICLES_PER_PAGE = 6;

const categoryConfig: Record<string, { label: string; color: string; icon: typeof FileText; description: string }> = {
  'tutoriel': { 
    label: 'Tutoriel', 
    color: 'bg-blue-500/10 text-blue-400 border-blue-500/30', 
    icon: BookOpen,
    description: 'Guides pratiques étape par étape'
  },
  'article': { 
    label: 'Article', 
    color: 'bg-purple-500/10 text-purple-400 border-purple-500/30', 
    icon: Newspaper,
    description: 'Analyses et réflexions approfondies'
  },
  'actualité': { 
    label: 'Actualité', 
    color: 'bg-orange-500/10 text-orange-400 border-orange-500/30', 
    icon: TrendingUp,
    description: 'Les dernières nouvelles tech'
  }
};

const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const currentCategory = searchParams.get('category') || 'all';
  const currentPage = parseInt(searchParams.get('page') || '1', 10);

  const handleReadArticle = (articleId: string) => {
    navigate(`/article/${articleId}`);
  };

  const handleCategoryChange = (category: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (category === 'all') {
      newParams.delete('category');
    } else {
      newParams.set('category', category);
    }
    newParams.set('page', '1');
    setSearchParams(newParams);
  };

  const handlePageChange = (page: number) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('page', page.toString());
    setSearchParams(newParams);
  };

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      
      let query = supabase
        .from('articles')
        .select('*', { count: 'exact' })
        .eq('is_published', true)
        .order('created_at', { ascending: false });

      if (currentCategory !== 'all') {
        query = query.eq('category', currentCategory);
      }

      if (searchQuery) {
        query = query.or(`title.ilike.%${searchQuery}%,excerpt.ilike.%${searchQuery}%`);
      }

      const from = (currentPage - 1) * ARTICLES_PER_PAGE;
      const to = from + ARTICLES_PER_PAGE - 1;
      query = query.range(from, to);

      const { data, error, count } = await query;

      if (!error && data) {
        setArticles(data);
        setTotalCount(count || 0);
      }
      setLoading(false);
    };

    fetchArticles();
  }, [currentCategory, currentPage, searchQuery]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const totalPages = Math.ceil(totalCount / ARTICLES_PER_PAGE);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <AnimatedSection className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <FileText className="w-4 h-4" />
              Centre de Ressources
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Articles & Tutoriels
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des contenus pratiques pour maîtriser la robotique et l'intelligence artificielle, 
              accessibles à tous, où que vous soyez.
            </p>
          </AnimatedSection>

          {/* Search and Filters */}
          <AnimatedSection delay={0.1} className="mb-10">
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Rechercher un article..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 bg-card border-border/50 focus:border-primary/50"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              <Button
                variant={currentCategory === 'all' ? 'default' : 'outline'}
                size="sm"
                onClick={() => handleCategoryChange('all')}
                className="gap-2"
              >
                <Filter className="w-4 h-4" />
                Tous
              </Button>
              {Object.entries(categoryConfig).map(([key, config]) => {
                const Icon = config.icon;
                return (
                  <Button
                    key={key}
                    variant={currentCategory === key ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => handleCategoryChange(key)}
                    className={`gap-2 ${currentCategory !== key ? config.color : ''}`}
                  >
                    <Icon className="w-4 h-4" />
                    {config.label}
                  </Button>
                );
              })}
            </div>
          </AnimatedSection>

          {/* Category Description */}
          {currentCategory !== 'all' && categoryConfig[currentCategory] && (
            <AnimatedSection delay={0.15} className="text-center mb-8">
              <p className="text-muted-foreground">
                {categoryConfig[currentCategory].description}
              </p>
            </AnimatedSection>
          )}

          {/* Results Count */}
          <AnimatedSection delay={0.2} className="mb-6">
            <p className="text-sm text-muted-foreground">
              {totalCount} article{totalCount !== 1 ? 's' : ''} trouvé{totalCount !== 1 ? 's' : ''}
              {currentCategory !== 'all' && ` dans la catégorie "${categoryConfig[currentCategory]?.label}"`}
            </p>
          </AnimatedSection>

          {/* Articles Grid */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-card rounded-2xl p-6 h-64 animate-pulse border border-border/50" />
              ))}
            </div>
          ) : articles.length === 0 ? (
            <AnimatedSection className="text-center py-16">
              <FileText className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Aucun article trouvé</h3>
              <p className="text-muted-foreground mb-6">
                Essayez de modifier vos filtres ou votre recherche.
              </p>
              <Button variant="outline" onClick={() => {
                setSearchQuery('');
                handleCategoryChange('all');
              }}>
                Réinitialiser les filtres
              </Button>
            </AnimatedSection>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article, index) => (
                <AnimatedSection key={article.id} delay={index * 0.05}>
                  <article className="group bg-card border border-border/50 rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 h-full flex flex-col">
                    {/* Thumbnail placeholder */}
                    <div className="h-40 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                      {(() => {
                        const config = categoryConfig[article.category];
                        if (config) {
                          const Icon = config.icon;
                          return <Icon className="w-12 h-12 text-primary/40" />;
                        }
                        return <FileText className="w-12 h-12 text-primary/40" />;
                      })()}
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${categoryConfig[article.category]?.color || 'bg-muted text-muted-foreground'}`}>
                          {categoryConfig[article.category]?.label || article.category}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {formatDate(article.created_at)}
                        </span>
                      </div>

                      <h2 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </h2>

                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-1">
                        {article.excerpt}
                      </p>

                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/30">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <User className="w-3.5 h-3.5" />
                            {article.author_name}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {article.read_time_minutes} min
                          </span>
                        </div>
                        
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleReadArticle(article.id)}
                          className="text-primary hover:text-primary hover:bg-primary/10 group/btn gap-1 -mr-2"
                        >
                          Lire
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </article>
                </AnimatedSection>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <AnimatedSection delay={0.3} className="mt-12">
              <Pagination>
                <PaginationContent>
                  {currentPage > 1 && (
                    <PaginationItem>
                      <PaginationPrevious 
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handlePageChange(currentPage - 1);
                        }}
                      />
                    </PaginationItem>
                  )}
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <PaginationItem key={page}>
                      <PaginationLink
                        href="#"
                        isActive={page === currentPage}
                        onClick={(e) => {
                          e.preventDefault();
                          handlePageChange(page);
                        }}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  
                  {currentPage < totalPages && (
                    <PaginationItem>
                      <PaginationNext 
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handlePageChange(currentPage + 1);
                        }}
                      />
                    </PaginationItem>
                  )}
                </PaginationContent>
              </Pagination>
            </AnimatedSection>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Articles;
