import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Star, Zap, Brain, Rocket, Shield } from "lucide-react";
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
      case "débutant": return "text-green-400 bg-green-500/20 border-green-500/30";
      case "intermédiaire": return "text-yellow-400 bg-yellow-500/20 border-yellow-500/30";
      case "avancé": return "text-red-400 bg-red-500/20 border-red-500/30";
      default: return "text-gray-400 bg-gray-500/20 border-gray-500/30";
    }
  };

  const getCategoryIcon = (category: string) => {
    const icons = {
      "Robotique": <Rocket className="w-6 h-6" />,
      "IA": <Brain className="w-6 h-6" />, 
      "Programmation": <Zap className="w-6 h-6" />,
      "Data Science": <Shield className="w-6 h-6" />,
      "Blockchain": <Zap className="w-6 h-6" />,
      "Mobile": <Shield className="w-6 h-6" />
    };
    return icons[category as keyof typeof icons] || <Zap className="w-6 h-6" />;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900">
      <div className="container-modern">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold shadow-2xl mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Zap className="w-5 h-5" />
            <span>Formations Technologiques d'Excellence</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Formez l'<span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">avenir</span> avec la{" "}
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">technologie</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Des formations pratiques et interactives conçues par des experts pour vous donner les compétences 
            nécessaires dans le numérique africain et mondial.
          </motion.p>
        </div>

        {/* Courses Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 animate-pulse">
                <div className="w-full h-48 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl mb-6" />
                <div className="h-6 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg mb-3" />
                <div className="h-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg mb-6" />
                <div className="flex justify-between">
                  <div className="h-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg w-20" />
                  <div className="h-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg w-16" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-2">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                      {getCategoryIcon(course.category)}
                    </div>
                    
                    <div className="flex flex-col items-end gap-2">
                      {course.is_free_preview && (
                        <span className="text-xs font-semibold text-green-400 bg-green-500/20 px-3 py-1 rounded-full border border-green-500/30">
                          Gratuit
                        </span>
                      )}
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${getDifficultyColor(course.difficulty)}`}>
                        {cleanText(course.difficulty)}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {cleanText(course.title)}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 line-clamp-2 leading-relaxed">
                    {cleanAndTruncate(course.description, 120)}
                  </p>

                  {/* Info */}
                  <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-purple-400" />
                      <span>{course.duration_minutes} min</span>
                    </div>
                    
                    {course.rating && (
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="font-semibold text-yellow-400">{course.rating}</span>
                      </div>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="pt-6 border-t border-purple-500/20">
                    <Button 
                      asChild
                      variant="ghost" 
                      className="w-full justify-between text-purple-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20 font-semibold rounded-xl transition-all duration-300"
                    >
                      <Link to={`/cours/${course.id}`}>
                        <span>Découvrir la formation</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* CTA */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 shadow-2xl shadow-purple-500/25">
            <h3 className="text-3xl font-bold text-white mb-4">
              Prêt à commencer votre aventure technologique ?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Rejoignez-nous dans cette révolution technologique qui transforme l'Afrique.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-50 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link to="/cours" className="flex items-center gap-3">
                <span>Explorer toutes les formations</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesSection;
