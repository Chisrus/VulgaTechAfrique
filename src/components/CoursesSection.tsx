import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import AnimatedSection from './AnimatedSection';
import { Clock, BookOpen, ArrowRight, Cpu, Lightbulb, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';

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
  'débutant': 'bg-green-500/20 text-green-400 border border-green-500/30',
  'intermédiaire': 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30',
  'avancé': 'bg-red-500/20 text-red-400 border border-red-500/30'
};

const categoryIcons: Record<string, React.ElementType> = {
  'robotique': Cpu,
  'programmation': BookOpen,
  'électronique': Lightbulb,
  'ia': Brain
};

const categoryImages: Record<string, string> = {
  'robotique': 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
  'programmation': 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
  'électronique': 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
  'ia': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop'
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
            const imageUrl = course.thumbnail_url || categoryImages[course.category] || categoryImages['robotique'];
            
            return (
              <AnimatedSection key={course.id} delay={index * 0.1}>
                <div 
                  className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 cursor-pointer"
                  onClick={() => handleViewCourse(course.id)}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <AspectRatio ratio={16/9}>
                      <img 
                        src={imageUrl} 
                        alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                    </AspectRatio>
                    
                    {/* Category badge on image */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur-sm border border-border/50">
                      <CategoryIcon className="w-4 h-4 text-primary" />
                      <span className="text-xs font-medium text-foreground capitalize">{course.category}</span>
                    </div>
                    
                    {/* Difficulty badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${difficultyColors[course.difficulty] || 'bg-muted text-muted-foreground'}`}>
                        {course.difficulty}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-1">
                      {course.title}
                    </h3>

                    <p className="text-muted-foreground mb-5 line-clamp-2 leading-relaxed">
                      {course.description}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <span className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span className="font-medium">{course.duration_minutes} min</span>
                      </span>
                      
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-primary hover:text-primary hover:bg-primary/10 group/btn gap-2 font-semibold"
                      >
                        Voir le cours
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
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
