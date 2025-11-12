# Garage Auto Expert Illzach

Site web moderne pour le Garage Auto Expert à Illzach, membre du réseau Eurorepar.

**Slogan :** "La confiance, ça s'entretient !"

## 🚀 Fonctionnalités

- **Identification de véhicule** par immatriculation ou saisie manuelle
- **Catalogue de services** avec détails et tarifs
- **Système de réservation** avec choix de créneaux horaires
- **Avis clients** avec notation 5 étoiles
- **Paiement sécurisé** (interface UI)
- **Design responsive** optimisé mobile/desktop
- **SEO optimisé** avec meta tags et semantic HTML

## 📋 Pages

- `/` - Accueil avec recherche de véhicule
- `/services` - Liste complète des prestations
- `/vehicle` - Identification du véhicule
- `/booking` - Récapitulatif et choix du créneau
- `/reviews` - Avis clients
- `/payment` - Paiement sécurisé

## 🛠️ Technologies

- **React 18** - Framework UI
- **TypeScript** - Typage statique
- **Vite** - Build tool ultra-rapide
- **Tailwind CSS** - Framework CSS utility-first
- **Shadcn/ui** - Composants UI accessibles
- **React Router** - Navigation
- **Lucide React** - Icônes

## 📦 Installation

```bash
# Cloner le projet
git clone <votre-repo-url>
cd <nom-du-projet>

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:8080`

## 🏗️ Build de production

```bash
# Créer le build optimisé
npm run build

# Prévisualiser le build
npm run preview
```

Les fichiers seront générés dans le dossier `dist/`.

## 🎨 Personnalisation

### Design System

Le design system est centralisé dans :
- `src/index.css` - Variables CSS (couleurs, ombres, transitions)
- `tailwind.config.ts` - Configuration Tailwind

**Couleurs principales :**
- Bleu primaire : `--primary` (208, 88%, 48%)
- Orange accent : `--accent` (25, 95%, 53%)
- Gris secondaire : `--secondary` (210, 10%, 45%)

### Modifier les couleurs

Éditez `src/index.css` dans la section `:root` :

```css
:root {
  --primary: 208 88% 48%;  /* HSL format */
  --accent: 25 95% 53%;
  /* ... */
}
```

### Ajouter des services

Éditez `src/pages/Services.tsx` et ajoutez votre service dans le tableau `allServices` :

```typescript
{
  title: "Votre service",
  description: "Description courte",
  price: "À partir de XX€",
  image: "url-de-l-image",
  icon: <Wrench className="h-5 w-5" />,
  details: "Description détaillée..."
}
```

### Modifier les avis clients

Éditez `src/pages/Reviews.tsx` dans le tableau `reviews`.

## 📝 Structure du projet

```
src/
├── components/          # Composants réutilisables
│   ├── ui/             # Composants Shadcn
│   ├── Header.tsx      # En-tête de navigation
│   ├── Footer.tsx      # Pied de page
│   ├── VehicleSearch.tsx
│   ├── ServiceCard.tsx
│   └── ReviewCard.tsx
├── pages/              # Pages de l'application
│   ├── Home.tsx        # Page d'accueil
│   ├── Services.tsx    # Liste des services
│   ├── Vehicle.tsx     # Identification véhicule
│   ├── Booking.tsx     # Réservation
│   ├── Reviews.tsx     # Avis clients
│   ├── Payment.tsx     # Paiement
│   └── NotFound.tsx    # Page 404
├── hooks/              # Hooks React personnalisés
├── lib/                # Utilitaires
├── App.tsx             # Composant racine
├── main.tsx            # Point d'entrée
└── index.css           # Styles globaux
```

## 🔧 Configuration

### Meta tags SEO

Les meta tags sont dans `index.html`. Personnalisez :
- `<title>` - Titre du site
- `<meta name="description">` - Description
- `<meta name="keywords">` - Mots-clés
- Open Graph et Twitter Cards

### Google Maps

Dans `src/components/Footer.tsx`, remplacez l'URL de l'iframe Google Maps par vos coordonnées :

```typescript
src="https://www.google.com/maps/embed?pb=!1m18!..."
```

### Coordonnées

Modifiez dans `src/components/Footer.tsx` et `src/components/Header.tsx` :
- Numéro de téléphone
- Email
- Adresse
- Horaires

## 🚀 Déploiement

### Via Lovable (recommandé)
1. Cliquez sur "Publish" dans l'interface Lovable
2. Votre site sera en ligne instantanément

### Déploiement manuel

**Vercel :**
```bash
npm install -g vercel
vercel
```

**Netlify :**
```bash
npm run build
# Puis uploadez le dossier dist/ sur Netlify
```

**Autres plateformes :**
Le dossier `dist/` peut être déployé sur n'importe quel hébergeur statique (GitHub Pages, AWS S3, etc.)

## 🔒 Notes de sécurité

- Le paiement est actuellement une **interface UI uniquement**
- Pour un vrai paiement, intégrez Stripe, PayPlug ou équivalent
- Ajoutez un backend pour stocker les réservations
- Utilisez HTTPS en production

## 💡 Prochaines étapes recommandées

1. **Backend** - Connecter à Lovable Cloud ou Supabase pour :
   - Stocker les réservations
   - Authentification clients
   - Gestion des services/tarifs
   
2. **Paiement** - Intégrer une vraie solution de paiement :
   - Stripe
   - PayPlug
   - PayPal

3. **Email** - Notifications automatiques :
   - Confirmation de RDV
   - Rappels
   - Factures

4. **Analytics** - Suivre les conversions :
   - Google Analytics
   - Hotjar pour l'UX

## 📄 Licence

Ce projet est créé pour le Garage Auto Expert Illzach.

## 🤝 Support

Pour toute question sur le développement :
- Documentation Lovable : https://docs.lovable.dev/
- React : https://react.dev/
- Tailwind CSS : https://tailwindcss.com/

---

**Développé avec ❤️ par Lovable**
