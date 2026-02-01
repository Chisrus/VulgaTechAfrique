
# Plan de Restructuration du Site VulgaTechAfrique

## Objectif
Reorganiser le site selon la maquette proposee pour renforcer la clarte, le professionnalisme et l'impact emotionnel, tout en mettant en avant la mission d'education inclusive.

---

## 1. Mise a jour du Header (Navigation)

### Etat actuel
- Logo + Slogan manquant
- Menu : Cours, Articles, Fonctionnalites, Comment ca marche
- Pas de liens vers Inclusion, Langues, A propos/Contact

### Modifications prevues
- Ajouter le slogan "La tech pour tous, partout" sous le logo
- Restructurer le menu :
  - **Accueil** (nouveau)
  - **Cours** (existant)
  - **Articles** (existant) 
  - **Inclusion** (nouveau - ancre vers section)
  - **A propos** (nouveau - lien vers page dediee)
- Ameliorer le selecteur de langue (le rendre plus visible avec le globe)

---

## 2. Amelioration de la Page d'Accueil (Hero)

### Etat actuel
- Badge d'accessibilite present
- Slogan "La tech pour tous, partout" present
- Boutons : "Demarrer gratuitement" (Telegram) + "Voir la demo"

### Modifications prevues
- Renforcer les boutons d'action directe :
  - "Commencer un cours" -> vers section cours
  - "Lire un article" -> vers /articles
  - "Decouvrir nos valeurs" -> vers section inclusion
- Ajouter une section temoignages/cas d'usage concrets apres les stats

---

## 3. Section Cours Amelioree

### Etat actuel
- Cartes visuelles avec titre, description, niveau, duree
- 4 cours affiches

### Modifications prevues
- Ajouter des filtres par theme (robotique, IA, Arduino, Python)
- Bouton "Voir tous les cours" vers page dediee /cours
- Mention du chat IA integre

---

## 4. Page Articles (Deja implementee)

### Etat actuel
- Page /articles avec filtres par categorie
- Recherche et pagination fonctionnelles

### Ameliorations prevues
- Ajouter une section "Articles populaires" ou "Recents" en haut
- Ameliorer visuellement les cartes avec thumbnails

---

## 5. Section Inclusion Renforcee

### Etat actuel
- Video en langue des signes avec sous-titres multilingues
- 4 cartes (Communautes rurales, Sourds, Sans diplome, Langues locales)
- Un temoignage

### Modifications prevues
- Ajouter un ID "inclusion" pour la navigation
- Ajouter d'autres temoignages ou mini-reportages
- Creer un carrousel de temoignages

---

## 6. Section Langues (Nouveau)

### Nouveau composant : LanguagesSection
- Affichage clair du selecteur multilingue
- Liste visuelle des 30+ langues supportees par region
- Option future : carte interactive de l'Afrique

---

## 7. Page A propos / Contact (Nouveau)

### Nouvelle page : /a-propos
- Mission et vision de VulgaTechAfrique
- Presentation de l'equipe ou partenaires
- Formulaire de contact simple
- Liens vers reseaux sociaux

---

## 8. Amelioration du Footer

### Etat actuel
- Logo + description
- Liens : Cours, Articles, Fonctionnalites, Contact
- LinkedIn + copyright

### Modifications prevues
- Ajouter lien vers Inclusion
- Ajouter lien vers A propos
- Ajouter mentions legales / politique de confidentialite (pages separees)

---

## 9. Identite Visuelle

### Etat actuel
- Bleu premium deja en place
- Police : Inter + Space Grotesk

### Verifications
- Les couleurs actuelles (bleu profond) correspondent a la demande
- Suggerer d'ajouter des touches de vert (nature) et orange (energie) en accent
- Icones deja presentes pour chaque section

---

## Fichiers a creer/modifier

| Fichier | Action |
|---------|--------|
| `src/components/Header.tsx` | Modifier - ajouter slogan, reorganiser menu |
| `src/components/HeroSection.tsx` | Modifier - nouveaux boutons d'action |
| `src/components/CoursesSection.tsx` | Modifier - ajouter filtres et bouton "Voir tous" |
| `src/components/InclusionSection.tsx` | Modifier - ajouter ID, plus de temoignages |
| `src/components/LanguagesSection.tsx` | Creer - nouvelle section langues |
| `src/components/TestimonialsCarousel.tsx` | Creer - carrousel de temoignages |
| `src/pages/About.tsx` | Creer - page A propos/Contact |
| `src/pages/Courses.tsx` | Creer - page listant tous les cours |
| `src/components/Footer.tsx` | Modifier - ajouter liens |
| `src/App.tsx` | Modifier - ajouter routes |
| `src/pages/Index.tsx` | Modifier - integrer LanguagesSection |

---

## Details techniques

### Nouvelles routes
```text
/a-propos    ->  Page A propos avec mission, equipe, contact
/cours       ->  Page liste complete des cours avec filtres
```

### Structure mise a jour de Index.tsx
```text
Header
HeroSection (amelioree)
InclusionSection (id="inclusion")
PlatformsSection
CoursesSection (amelioree)
ArticlesSection
LanguagesSection (nouveau)
FeaturesSection
HowItWorksSection
TestimonialsCarousel (nouveau)
SignupCTASection
Footer
```

### Navigation Header mise a jour
```text
Desktop: Accueil | Cours | Articles | Inclusion | A propos | [Globe] FR | [Connexion/Compte]
Mobile: Menu hamburger avec les memes elements
```

---

## Ordre d'implementation

1. Header - Slogan et navigation reorganisee
2. HeroSection - Boutons d'action ameliores
3. InclusionSection - ID et ancrage
4. LanguagesSection - Nouvelle section
5. CoursesSection - Filtres et lien vers page dediee
6. Page Courses.tsx - Liste complete des cours
7. Page About.tsx - A propos et contact
8. TestimonialsCarousel - Carrousel de temoignages
9. Footer - Liens mis a jour
10. Routes App.tsx - Nouvelles pages
