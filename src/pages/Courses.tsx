import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { Clock, BookOpen, ArrowRight, Cpu, Lightbulb, Brain, Search, Filter, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cleanText, cleanAndTruncate, cleanCategory, cleanDifficulty } from '@/utils/textCleaner';

interface Course {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  duration_minutes: number;
  category: string;
  content_preview: string | null;
  is_free_preview: boolean;
}

const difficultyColors: Record<string, string> = {
  'débutant': 'bg-green-500/10 text-green-400',
  'intermédiaire': 'bg-yellow-500/10 text-yellow-400',
  'avancé': 'bg-red-500/10 text-red-400'
};

const categoryIcons: Record<string, React.ElementType> = {
  'robotique': Cpu,
  'programmation': BookOpen,
  'électronique': Lightbulb,
  'ia': Brain
};

const categories = [
  { id: 'all', label: 'Tous', icon: Filter },
  { id: 'robotique', label: 'Robotique', icon: Cpu },
  { id: 'programmation', label: 'Programmation', icon: BookOpen },
  { id: 'électronique', label: 'Électronique', icon: Lightbulb },
  { id: 'ia', label: 'Intelligence Artificielle', icon: Brain },
];

const Courses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      const { data, error } = await supabase
        .from('courses')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && data) {
        setCourses(data);
        setFilteredCourses(data);
      }
      setLoading(false);
    };

    fetchCourses();
  }, []);

  useEffect(() => {
    let result = courses;

    if (selectedCategory !== 'all') {
      result = result.filter(course => course.category === selectedCategory);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(course => 
        course.title.toLowerCase().includes(query) || 
        course.description.toLowerCase().includes(query)
      );
    }

    setFilteredCourses(result);
  }, [selectedCategory, searchQuery, courses]);

  const handleViewCourse = (courseId: string) => {
    navigate(`/cours/${courseId}`);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <AnimatedSection className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              Formations
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Tous nos cours
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
              Des formations pratiques pour maîtriser la robotique et l'intelligence artificielle, 
              accessibles dans plus de 30 langues africaines.
            </p>
            <div className="inline-flex items-center gap-2 text-sm text-primary bg-primary/10 px-4 py-2 rounded-full">
              <Bot className="w-4 h-4" />
              Chat IA intégré dans chaque cours pour vous accompagner
            </div>
          </AnimatedSection>

          {/* Filters */}
          <AnimatedSection delay={0.1} className="mb-10">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Rechercher un cours..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((cat) => (
                  <Button
                    key={cat.id}
                    variant={selectedCategory === cat.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(cat.id)}
                    className="gap-2"
                  >
                    <cat.icon className="w-4 h-4" />
                    {cat.label}
                  </Button>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Courses Grid */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-card rounded-2xl p-6 h-56 animate-pulse" />
              ))}
            </div>
          ) : filteredCourses.length === 0 ? (
            <div className="text-center py-20">
              <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Aucun cours trouvé</h3>
              <p className="text-muted-foreground">
                Essayez de modifier vos filtres ou votre recherche.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course, index) => {
                const CategoryIcon = categoryIcons[course.category] || BookOpen;
                return (
                  <AnimatedSection key={course.id} delay={index * 0.05}>
                    <div className="group bg-card border border-border/50 rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 h-full flex flex-col">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <CategoryIcon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex gap-2">
                          {course.is_free_preview && (
                            <span className="text-xs font-medium px-2 py-1 rounded-full bg-green-500/10 text-green-400">
                              Gratuit
                            </span>
                          )}
                          <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${difficultyColors[course.difficulty] || 'bg-muted text-muted-foreground'}`}>
                            {cleanDifficulty(course.difficulty)}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {cleanText(course.title)}
                      </h3>

                      <p className="text-muted-foreground mb-4 line-clamp-3 flex-grow">
                        {cleanAndTruncate(course.description, 150)}
                      </p>

                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/30">
                        <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                          <BookOpen className="w-4 h-4" />
                          {cleanCategory(course.category)}
                        </span>
                        <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          {course.duration_minutes} min
                        </span>
                        
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleViewCourse(course.id)}
                          className="text-primary hover:text-primary hover:bg-primary/10 group/btn gap-1"
                        >
                          Voir le cours
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
