# 🚀 Déploiement de VulgaTechAfrique

## Configuration du déploiement automatique

Le site est configuré pour un déploiement automatique via GitHub Actions.

### Prérequis
1. **Repository GitHub** : `https://github.com/Chisrus/VulgaTechAfrique`
2. **Hébergement** : Netlify (configuré pour le domaine `vulgatech.online`)
3. **Build automatique** : GitHub Actions

### Secrets GitHub requis
Pour le déploiement automatique, configurez ces secrets dans votre repository GitHub :
- `NETLIFY_AUTH_TOKEN` : Token d'authentification Netlify
- `NETLIFY_SITE_ID` : ID du site Netlify

### Processus de déploiement
1. **Push sur main** → Déclenche le workflow GitHub Actions
2. **Build** → `npm run build` crée le dossier `dist/`
3. **Deploy** → GitHub Actions déploie sur Netlify
4. **Live** → Site mis à jour sur `https://www.vulgatech.online`

### Configuration des fichiers
- `vercel.json` : Configuration Vercel (alternative)
- `netlify.toml` : Configuration Netlify
- `.github/workflows/deploy.yml` : Workflow GitHub Actions

### Routes disponibles
```
/                    - Accueil
/cours               - Liste des cours
/cours/:id           - Détail d'un cours
/articles             - Liste des articles
/article/:id          - Détail d'un article
/a-propos             - À propos
/inclusion            - Inclusion (NOUVEAU)
/confidentialite        - Confidentialité (NOUVEAU)
/conditions           - Conditions (NOUVEAU)
/profil               - Profil utilisateur
```

### Déploiement manuel (urgence)
Si le déploiement automatique ne fonctionne pas :

1. **Build local** :
   ```bash
   npm install
   npm run build
   ```

2. **Déployer avec Netlify CLI** :
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod --dir=dist
   ```

### Résolution des problèmes
- **Erreur 404** : Vérifiez que les routes sont bien dans `App.tsx`
- **Build failed** : Vérifiez les erreurs TypeScript dans la console
- **Deploy failed** : Vérifiez les secrets GitHub et la connexion Netlify

### Monitoring
- **GitHub Actions** : https://github.com/Chisrus/VulgaTechAfrique/actions
- **Netlify Dashboard** : https://app.netlify.com/sites/vulgatech-online/overview
- **Site en ligne** : https://www.vulgatech.online
