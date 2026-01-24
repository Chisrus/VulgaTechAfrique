import { useState } from "react";
import { Heart, Ear, Home, GraduationCap, Globe, Users, HandHeart, MessageCircle, Play, X } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import signLanguageVideo from "@/assets/sign-language-intro.mp4";

const inclusionFeatures = [
  {
    icon: Home,
    title: "Communautés Rurales",
    description: "Des contenus adaptés aux réalités des villages et zones éloignées, avec support hors-ligne.",
    color: "from-green-500/20 to-green-500/5 text-green-400"
  },
  {
    icon: Ear,
    title: "Sourds & Malentendants",
    description: "Contenus visuels, textes détaillés et supports adaptés pour une accessibilité totale.",
    color: "from-blue-500/20 to-blue-500/5 text-blue-400"
  },
  {
    icon: GraduationCap,
    title: "Sans Diplôme Formel",
    description: "Pas de prérequis académiques. Tout le monde peut apprendre la tech à son rythme.",
    color: "from-purple-500/20 to-purple-500/5 text-purple-400"
  },
  {
    icon: Globe,
    title: "Langues Locales",
    description: "Bambara, Wolof, Swahili, Lingala, Hausa... Apprenez dans votre langue maternelle.",
    color: "from-orange-500/20 to-orange-500/5 text-orange-400"
  },
];

const InclusionSection = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/30 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <HandHeart className="w-4 h-4" />
            Notre Engagement
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-5 tracking-tight">
            La technologie n'exclut{" "}
            <span className="text-gradient-primary">personne</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            VulgaTechAfrique est né d'une conviction : chaque africain, qu'il soit en ville ou au village, 
            entendant ou sourd, diplômé ou autodidacte, mérite d'accéder au savoir technologique.
          </p>
        </AnimatedSection>

        {/* Sign Language Video Section */}
        <AnimatedSection delay={0.15} className="mb-16">
          <div className="max-w-3xl mx-auto bg-card rounded-2xl border border-border/50 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Video Thumbnail */}
              <div 
                className="relative aspect-video md:aspect-auto cursor-pointer group"
                onClick={() => setVideoOpen(true)}
              >
                <video 
                  src={signLanguageVideo}
                  className="w-full h-full object-cover"
                  muted
                  playsInline
                >
                  <track kind="subtitles" src="/subtitles/sign-language-intro-fr.vtt" srcLang="fr" label="Français" />
                  <track kind="subtitles" src="/subtitles/sign-language-intro-en.vtt" srcLang="en" label="English" />
                  <track kind="subtitles" src="/subtitles/sign-language-intro-bm.vtt" srcLang="bm" label="Bambara" />
                  <track kind="subtitles" src="/subtitles/sign-language-intro-wo.vtt" srcLang="wo" label="Wolof" />
                  <track kind="subtitles" src="/subtitles/sign-language-intro-sw.vtt" srcLang="sw" label="Swahili" />
                </video>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-primary/30">
                    <Play className="w-7 h-7 text-primary-foreground ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/90 text-white text-xs font-medium">
                    <Ear className="w-3.5 h-3.5" />
                    Langue des Signes
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-blue-400 text-sm font-medium mb-3">
                  <Ear className="w-4 h-4" />
                  Accessibilité
                </div>
                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">
                  Présentation en langue des signes
                </h3>
                <p className="text-muted-foreground mb-4">
                  Découvrez VulgaTechAfrique dans une vidéo spécialement conçue pour 
                  la communauté sourde et malentendante. Nous croyons que le savoir 
                  technologique doit être accessible à tous.
                </p>
                <Button 
                  onClick={() => setVideoOpen(true)}
                  className="w-fit gap-2"
                >
                  <Play className="w-4 h-4" />
                  Regarder la vidéo
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Video Modal */}
        <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black">
            <DialogHeader className="sr-only">
              <DialogTitle>Présentation en langue des signes</DialogTitle>
            </DialogHeader>
            <div className="relative aspect-video">
              <video 
                src={signLanguageVideo}
                className="w-full h-full"
                controls
                autoPlay
                playsInline
              >
                <track kind="subtitles" src="/subtitles/sign-language-intro-fr.vtt" srcLang="fr" label="Français" default />
                <track kind="subtitles" src="/subtitles/sign-language-intro-en.vtt" srcLang="en" label="English" />
                <track kind="subtitles" src="/subtitles/sign-language-intro-bm.vtt" srcLang="bm" label="Bambara" />
                <track kind="subtitles" src="/subtitles/sign-language-intro-wo.vtt" srcLang="wo" label="Wolof" />
                <track kind="subtitles" src="/subtitles/sign-language-intro-sw.vtt" srcLang="sw" label="Swahili" />
              </video>
            </div>
          </DialogContent>
        </Dialog>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {inclusionFeatures.map((feature, index) => (
            <AnimatedSection key={feature.title} delay={index * 0.1 + 0.2}>
              <div className="group h-full bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/40 transition-all duration-300 text-center">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Quote/Testimony */}
        <AnimatedSection delay={0.6} className="mt-16 max-w-2xl mx-auto text-center">
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/30">
            <MessageCircle className="w-10 h-10 text-primary/60 mx-auto mb-4" />
            <blockquote className="text-lg italic text-foreground/90 mb-4">
              "Grâce à VulgaTech, mon fils au village apprend Python comme les enfants de la capitale. 
              La distance n'est plus une barrière."
            </blockquote>
            <cite className="text-sm text-muted-foreground">
              — Aminata K., Mère de famille, Région de Ségou, Mali
            </cite>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default InclusionSection;
