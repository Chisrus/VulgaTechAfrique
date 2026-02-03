import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import AnimatedSection from './AnimatedSection';
import { Clock, BookOpen, ArrowRight, Cpu, Lightbulb, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Course {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  duration_minutes: number;
  category: string;
  content_preview: string | null;
  thumbnail_url: string | null;
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


const CoursesSection = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      const { data, error } = await supabase
        .from('courses')
        .select('*')
        .eq('is_free_preview', true)
        .limit(4);

      if (!error && data) {
        setCourses(data);
      }
      setLoading(false);
    };

    fetchCourses();
  }, []);

  const handleViewCourse = (courseId: string) => {
    navigate(`/cours/${courseId}`);
  };

  if (loading) {
    return (
      <section id="courses" className="py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-8 w-48 bg-muted rounded animate-pulse mx-auto mb-4" />
            <div className="h-4 w-96 bg-muted rounded animate-pulse mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-card rounded-2xl h-80 animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="courses" className="py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            Formations
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Cours disponibles
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des formations pratiques pour maîtriser la robotique et l'intelligence artificielle.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {courses.map((course, index) => {
            const CategoryIcon = categoryIcons[course.category] || BookOpen;
            
            return (
              <AnimatedSection key={course.id} delay={index * 0.1}>
                <div 
                  className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 cursor-pointer h-full flex flex-col"
                  onClick={() => handleViewCourse(course.id)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <CategoryIcon className="w-6 h-6 text-primary" />
                    </div>
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${difficultyColors[course.difficulty] || 'bg-muted text-muted-foreground'}`}>
                      {course.difficulty}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 line-clamp-2 flex-grow">
                    {course.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-border/30">
                    <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {course.duration_minutes} min
                    </span>
                    
                    <Button 
                      variant="ghost" 
                      size="sm"
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

        {/* View All Button */}
        <AnimatedSection delay={0.4} className="text-center">
          <Button 
            asChild
            variant="outline" 
            size="lg"
            className="gap-2 border-primary/50 text-primary hover:bg-primary/10 font-semibold"
          >
            <a href="/cours">
              Voir tous les cours
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CoursesSection;
