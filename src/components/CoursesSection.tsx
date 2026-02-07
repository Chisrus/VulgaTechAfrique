import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Clock, Star } from "lucide-react";
import { cleanText, cleanAndTruncate } from "@/utils/textCleaner";

interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: string;
  duration_minutes: number;
  is_free_preview: boolean;
  rating?: number;
}

const CoursesSection = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const mockCourses: Course[] = [
          {
            id: "1",
            title: "Robotique IA pour l'Afrique",
            description: "Maîtrisez la robotique et l'intelligence artificielle avec des projets concrets adaptés au contexte africain.",
            category: "Robotique",
            difficulty: "Débutant",
            duration_minutes: 120,
            is_free_preview: true,
            rating: 4.9
          },
          {
            id: "2", 
            title: "IA Générative et Créativité",
            description: "Apprenez à utiliser l'IA pour créer des solutions innovantes pour les défis africains.",
            category: "IA",
            difficulty: "Intermédiaire",
            duration_minutes: 180,
            is_free_preview: false,
            rating: 4.8
          },
          {
            id: "3",
            title: "Code Python pour l'Innovation",
            description: "Devenez expert en Python et créez des applications qui transforment votre communauté.",
            category: "Programmation",
            difficulty: "Débutant", 
            duration_minutes: 150,
            is_free_preview: true,
            rating: 4.7
          },
          {
            id: "4",
            title: "Data Science pour le Développement",
            description: "Analysez les données et prenez des décisions éclairées pour l'impact social.",
            category: "Data Science",
            difficulty: "Intermédiaire",
            duration_minutes: 200,
            is_free_preview: false,
            rating: 4.9
          },
          {
            id: "5",
            title: "Blockchain et FinTech Africaine",
            description: "Explorez la blockchain et créez des solutions financières inclusives pour l'Afrique.",
            category: "Blockchain",
            difficulty: "Avancé",
            duration_minutes: 160,
            is_free_preview: false,
            rating: 4.6
          },
          {
            id: "6",
            title: "Mobile Dev pour le Marché Africain",
            description: "Créez des applications mobiles performantes adaptées aux réalités africaines.",
            category: "Mobile",
            difficulty: "Intermédiaire",
            duration_minutes: 140,
            is_free_preview: true,
            rating: 4.8
          }
        ];
        
        setCourses(mockCourses);
      } catch (error) {
        console.error("Erreur lors du chargement des cours:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "débutant": return "text-green-600 bg-green-50";
      case "intermédiaire": return "text-yellow-600 bg-yellow-50";
      case "avancé": return "text-red-600 bg-red-50";
      default: return "text-gray-600 bg-gray-50";
    }
  };

  const getCategoryIcon = (category: string) => {
    // Icônes culturels africains simplifiés
    const icons = {
      "Robotique": "🤖",
      "IA": "🧠", 
      "Programmation": "💻",
      "Data Science": "📊",
      "Blockchain": "⛓",
      "Mobile": "📱"
    };
    return icons[category as keyof typeof icons] || "📚";
  };

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <div className="container-modern">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-amber-600 text-white rounded-full text-sm font-medium mb-6">
            Formations Technologiques Africaines
          </span>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Formez l'<span className="text-orange-600">avenir</span> avec la technologie
          </h2>
          
          <p className="text-xl text-gray-700 leading-relaxed">
            Des formations pratiques et interactives conçues pour vous donner les compétences 
            nécessaires dans le numérique africain et mondial.
          </p>
        </div>

        {/* Courses Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-lg p-6 animate-pulse">
                <div className="w-full h-48 bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg mb-6" />
                <div className="h-6 bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg mb-3" />
                <div className="h-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg mb-6" />
                <div className="flex justify-between">
                  <div className="h-3 bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg w-20" />
                  <div className="h-3 bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg w-16" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-amber-200">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-3xl mb-2">
                      {getCategoryIcon(course.category)}
                    </div>
                    
                    <div className="flex flex-col items-end gap-2">
                      {course.is_free_preview && (
                        <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">
                          Gratuit
                        </span>
                      )}
                      <span className={`text-xs font-medium px-2 py-1 rounded ${getDifficultyColor(course.difficulty)}`}>
                        {cleanText(course.difficulty)}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {cleanText(course.title)}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 line-clamp-2 leading-relaxed">
                    {cleanAndTruncate(course.description, 120)}
                  </p>

                  {/* Info */}
                  <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration_minutes} min</span>
                    </div>
                    
                    {course.rating && (
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="font-medium">{course.rating}</span>
                      </div>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="pt-4 border-t border-amber-100">
                    <Button 
                      asChild
                      variant="ghost" 
                      className="w-full justify-between text-orange-600 hover:text-orange-700 hover:bg-orange-50 font-medium"
                    >
                      <Link to={`/cours/${course.id}`}>
                        <span>Découvrir la formation</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl p-12 shadow-xl">
            <h3 className="text-3xl font-bold text-white mb-4">
              Prêt à commencer votre voyage ?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Rejoignez-nous dans cette aventure technologique qui transforme l'Afrique.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-white text-orange-600 hover:bg-amber-50 font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link to="/cours" className="flex items-center gap-3">
                <span>Explorer toutes les formations</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
