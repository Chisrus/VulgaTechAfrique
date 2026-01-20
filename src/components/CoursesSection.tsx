import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import AnimatedSection from './AnimatedSection';
import { Clock, BookOpen, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
  'débutant': 'bg-green-500/10 text-green-400 border-green-500/20',
  'intermédiaire': 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  'avancé': 'bg-red-500/10 text-red-400 border-red-500/20'
};

const categoryIcons: Record<string, string> = {
  'robotique': ,
  'programmation': ,
  'électronique': ,
  'ia': 
};

const CoursesSection = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const { data, error } = await supabase
        .from('courses')
        .select('*')
        .eq('is_free_preview', true)
        .order('created_at', { ascending: false })
        .limit(4);

      if (!error && data) {
        setCourses(data);
      }
      setLoading(false);
    };

    fetchCourses();
  }, []);

  if (loading) {
    return (
      <section id="courses" className="py-20 md:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-8 w-48 bg-muted rounded animate-pulse mx-auto mb-4" />
            <div className="h-4 w-96 bg-muted rounded animate-pulse mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-card rounded-2xl p-6 h-64 animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="courses" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            Cours disponibles
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Commencez votre apprentissage
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des cours structurés pour maîtriser la robotique et l'IA, du niveau débutant à avancé.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <AnimatedSection key={course.id} delay={index * 0.1}>
              <div className="group bg-card border border-border/50 rounded-2xl p-6 h-full flex flex-col hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{categoryIcons[course.category] || }</span>
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${difficultyColors[course.difficulty] || 'bg-muted text-muted-foreground'}`}>
                    {course.difficulty}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-3">
                  {course.description}
                </p>

                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {course.duration_minutes} min
                  </span>
                  <span className="flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5" />
                    Gratuit
                  </span>
                </div>

                <Button 
                  variant="ghost" 
                  className="w-full justify-between text-primary hover:text-primary hover:bg-primary/10 group/btn"
                >
                  Voir le cours
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
