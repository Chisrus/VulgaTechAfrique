import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useToast } from '@/hooks/use-toast';
import { Loader2, User, Mail, Save, ArrowLeft } from 'lucide-react';

interface Profile {
  id: string;
  user_id: string;
  display_name: string | null;
  avatar_url: string | null;
}

const Profile = () => {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [displayName, setDisplayName] = useState('');

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/');
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!user) return;

      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', user.id)
        .maybeSingle();

      if (!error && data) {
        setProfile(data);
        setDisplayName(data.display_name || '');
      }
      setLoading(false);
    };

    if (user) {
      fetchProfile();
    }
  }, [user]);

  const handleSave = async () => {
    if (!user || !profile) return;

    setSaving(true);
    const { error } = await supabase
      .from('profiles')
      .update({ display_name: displayName })
      .eq('user_id', user.id);

    if (error) {
      toast({
        title: "Erreur",
        description: "Impossible de mettre à jour le profil.",
        variant: "destructive"
      });
    } else {
      toast({
        title: "Profil mis à jour",
        description: "Vos modifications ont été enregistrées."
      });
      setProfile({ ...profile, display_name: displayName });
    }
    setSaving(false);
  };

  const getInitials = () => {
    if (displayName) {
      return displayName.slice(0, 2).toUpperCase();
    }
    if (user?.email) {
      return user.email.slice(0, 2).toUpperCase();
    }
    return 'VT';
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-6 gap-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Button>

          <Card className="bg-card border-border">
            <CardHeader className="text-center pb-8">
              <div className="flex justify-center mb-4">
                <Avatar className="w-24 h-24 border-4 border-primary/20">
                  <AvatarFallback className="bg-primary/10 text-primary text-2xl font-bold">
                    {getInitials()}
                  </AvatarFallback>
                </Avatar>
              </div>
              <CardTitle className="text-2xl font-display">Mon Profil</CardTitle>
              <CardDescription>
                Gérez vos informations personnelles
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={user.email || ''}
                  disabled
                  className="bg-secondary/50 border-border text-muted-foreground"
                />
                <p className="text-xs text-muted-foreground">
                  L'email ne peut pas être modifié
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="displayName" className="text-sm font-medium flex items-center gap-2">
                  <User className="w-4 h-4 text-muted-foreground" />
                  Nom d'affichage
                </Label>
                <Input
                  id="displayName"
                  type="text"
                  placeholder="Votre nom"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  className="bg-secondary border-border"
                />
              </div>

              <div className="pt-4">
                <Button
                  onClick={handleSave}
                  disabled={saving || displayName === profile?.display_name}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-11 gap-2"
                >
                  {saving ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      <Save className="w-4 h-4" />
                      Enregistrer les modifications
                    </>
                  )}
                </Button>
              </div>

              <div className="pt-6 border-t border-border">
                <h3 className="text-sm font-medium text-foreground mb-3">Informations du compte</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>
                    Membre depuis : {new Date(user.created_at || '').toLocaleDateString('fr-FR', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
