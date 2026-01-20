-- Create courses table for course previews
CREATE TABLE public.courses (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  thumbnail_url TEXT,
  difficulty TEXT NOT NULL DEFAULT 'débutant',
  duration_minutes INTEGER NOT NULL DEFAULT 30,
  category TEXT NOT NULL DEFAULT 'robotique',
  is_free_preview BOOLEAN NOT NULL DEFAULT true,
  content_preview TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create articles table for tutorials/blog posts
CREATE TABLE public.articles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT,
  thumbnail_url TEXT,
  category TEXT NOT NULL DEFAULT 'tutoriel',
  read_time_minutes INTEGER NOT NULL DEFAULT 5,
  is_published BOOLEAN NOT NULL DEFAULT true,
  author_name TEXT NOT NULL DEFAULT 'VulgaTech Team',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create profiles table for user data
CREATE TABLE public.profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
  display_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Courses: Public read access (for previews)
CREATE POLICY "Anyone can view courses" 
ON public.courses 
FOR SELECT 
USING (true);

-- Articles: Public read access for published articles
CREATE POLICY "Anyone can view published articles" 
ON public.articles 
FOR SELECT 
USING (is_published = true);

-- Profiles: Users can view all profiles, but only update their own
CREATE POLICY "Profiles are viewable by everyone" 
ON public.profiles 
FOR SELECT 
USING (true);

CREATE POLICY "Users can update their own profile" 
ON public.profiles 
FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own profile" 
ON public.profiles 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Create trigger for automatic timestamp updates on profiles
CREATE TRIGGER update_profiles_updated_at
BEFORE UPDATE ON public.profiles
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_courses_updated_at
BEFORE UPDATE ON public.courses
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_articles_updated_at
BEFORE UPDATE ON public.articles
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create function to auto-create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (user_id, display_name)
  VALUES (NEW.id, COALESCE(NEW.raw_user_meta_data->>'display_name', split_part(NEW.email, '@', 1)));
  RETURN NEW;
END;
$$;

-- Trigger to create profile on signup
CREATE TRIGGER on_auth_user_created
AFTER INSERT ON auth.users
FOR EACH ROW
EXECUTE FUNCTION public.handle_new_user();

-- Insert sample courses for preview
INSERT INTO public.courses (title, description, difficulty, duration_minutes, category, is_free_preview, content_preview) VALUES
('Introduction à la Robotique', 'Découvrez les bases de la robotique : capteurs, moteurs et programmation de base.', 'débutant', 45, 'robotique', true, 'Dans ce cours, vous apprendrez les fondamentaux de la robotique moderne...'),
('Python pour l''IA', 'Apprenez Python avec des exemples pratiques appliqués à l''intelligence artificielle.', 'débutant', 60, 'programmation', true, 'Python est le langage de référence pour l''IA. Commençons par les bases...'),
('Arduino et Capteurs', 'Maîtrisez Arduino et connectez différents types de capteurs pour vos projets.', 'intermédiaire', 90, 'électronique', true, 'Arduino est une plateforme open-source parfaite pour débuter en électronique...'),
('Machine Learning Fondamentaux', 'Comprenez les algorithmes de base du Machine Learning avec des exemples concrets.', 'intermédiaire', 120, 'ia', true, 'Le Machine Learning permet aux machines d''apprendre à partir de données...');

-- Insert sample articles
INSERT INTO public.articles (title, excerpt, category, read_time_minutes, author_name) VALUES
('Comment construire votre premier robot', 'Guide étape par étape pour construire un robot simple avec des composants accessibles.', 'tutoriel', 8, 'VulgaTech Team'),
('Les 5 langages essentiels pour la robotique', 'Découvrez quels langages de programmation maîtriser pour exceller en robotique.', 'article', 5, 'VulgaTech Team'),
('Introduction aux réseaux de neurones', 'Comprendre les bases des réseaux de neurones artificiels de manière simple.', 'tutoriel', 10, 'VulgaTech Team'),
('L''IA en Afrique : opportunités et défis', 'Analyse du paysage de l''intelligence artificielle sur le continent africain.', 'article', 7, 'VulgaTech Team');