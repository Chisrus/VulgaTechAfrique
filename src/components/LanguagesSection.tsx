import { Globe, MapPin } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const languageRegions = [
  {
    region: "Afrique de l'Ouest",
    languages: ["Bambara", "Wolof", "Fon", "Ewe", "Mooré", "Dioula", "Hausa", "Yoruba", "Igbo"],
    color: "from-green-500/20 to-green-500/5 text-green-400"
  },
  {
    region: "Afrique Centrale",
    languages: ["Lingala", "Sango", "Kikongo", "Tshiluba"],
    color: "from-blue-500/20 to-blue-500/5 text-blue-400"
  },
  {
    region: "Afrique de l'Est",
    languages: ["Swahili", "Amharique", "Tigrinya", "Oromo", "Somali"],
    color: "from-orange-500/20 to-orange-500/5 text-orange-400"
  },
  {
    region: "Afrique du Nord",
    languages: ["Arabe", "Amazigh", "Tamazight"],
    color: "from-purple-500/20 to-purple-500/5 text-purple-400"
  },
  {
    region: "International",
    languages: ["Français", "English", "Português", "Español"],
    color: "from-primary/20 to-primary/5 text-primary"
  },
];

const LanguagesSection = () => {
  return (
    <section id="languages" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Globe className="w-4 h-4" />
            Multilingue
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-5 tracking-tight">
            Apprenez dans{" "}
            <span className="text-gradient-primary">votre langue</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            25 langues africaines et internationales supportées pour que la barrière 
            linguistique ne soit jamais un obstacle à votre apprentissage.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {languageRegions.map((item, index) => (
            <AnimatedSection key={item.region} delay={index * 0.1}>
              <div className="bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {item.region}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.languages.map((lang) => (
                    <span 
                      key={lang}
                      className="px-3 py-1.5 text-sm bg-secondary rounded-full text-foreground/80 hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.5} className="mt-12 text-center">
          <p className="text-muted-foreground">
            <span className="text-foreground font-medium">25</span> langues disponibles • 
            Traduction automatique IA • 
            <span className="text-foreground font-medium"> Mise à jour continue</span>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default LanguagesSection;
