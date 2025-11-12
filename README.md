# 🚗 Garage Auto Expert Illzach

Site web moderne et responsive conçu pour le **Garage Auto Expert à Illzach**, membre du réseau **Eurorepar**.

**Slogan :** *« La confiance, ça s'entretient ! »*

---

## 🚀 Fonctionnalités principales

- 🔍 **Identification de véhicule** par immatriculation ou saisie manuelle  
- 🧰 **Catalogue de services** avec détails et tarifs  
- 📅 **Système de réservation** avec choix de créneaux horaires  
- ⭐ **Avis clients** avec notation sur 5 étoiles  
- 💳 **Paiement sécurisé (interface UI)**  
- 📱 **Design responsive** (mobile, tablette, desktop)  
- 🔎 **SEO optimisé** avec balises meta et HTML sémantique  

---

## 📋 Structure des pages

| Page | Description |
|------|--------------|
| `/` | Accueil et recherche de véhicule |
| `/services` | Liste complète des prestations |
| `/vehicle` | Identification du véhicule |
| `/booking` | Réservation et sélection du créneau |
| `/reviews` | Avis clients |
| `/payment` | Interface de paiement |

---

## 🛠️ Technologies utilisées

- ⚛️ **React 18** — Interface utilisateur moderne  
- 🧾 **TypeScript** — Typage statique et fiabilité  
- ⚡ **Vite** — Outil de build rapide  
- 🎨 **Tailwind CSS** — Framework CSS utility-first  
- 🧩 **Shadcn/ui** — Composants UI accessibles et élégants  
- 🧭 **React Router** — Gestion de la navigation  
- 🔔 **Lucide React** — Bibliothèque d’icônes  

---

## 📦 Installation et lancement

    # Cloner le projet
    git clone <votre-repo-url>
    cd <nom-du-projet>

    # Installer les dépendances
    npm install

    # Lancer le serveur de développement
    npm run dev

Le site sera accessible sur :  
👉 http://localhost:8080

---

## 🏗️ Build de production

    # Créer un build optimisé
    npm run build

    # Prévisualiser le build
    npm run preview

Les fichiers générés se trouvent dans le dossier `dist/`.

---

## 🎨 Personnalisation du design

### Design System
Les styles sont centralisés dans :  
- `src/index.css` — Variables CSS (couleurs, ombres, transitions)  
- `tailwind.config.ts` — Configuration Tailwind  

**Couleurs principales :**
- Bleu primaire : `--primary` (208, 88%, 48%)  
- Orange accent : `--accent` (25, 95%, 53%)  
- Gris secondaire : `--secondary` (210, 10%, 45%)  

Pour modifier les couleurs :

    :root {
      --primary: 208 88% 48%;
      --accent: 25 95% 53%;
      /* ... */
    }

---

## 🧩 Modifier le contenu

### Ajouter un service
Dans `src/pages/Services.tsx`, ajoutez un objet au tableau `allServices` :

    {
      title: "Votre service",
      description: "Description courte",
      price: "À partir de XX€",
      image: "url-de-l-image",
      icon: <Wrench className="h-5 w-5" />,
      details: "Description détaillée..."
    }

### Modifier les avis clients
Dans `src/pages/Reviews.tsx`, mettez à jour le tableau `reviews`.

---

## 🗂️ Structure du projet

    src/
    ├── components/          # Composants réutilisables
    │   ├── ui/              # Composants Shadcn
    │   ├── Header.tsx       # En-tête
    │   ├── Footer.tsx       # Pied de page
    │   ├── VehicleSearch.tsx
    │   ├── ServiceCard.tsx
    │   └── ReviewCard.tsx
    ├── pages/               # Pages principales
    │   ├── Home.tsx
    │   ├── Services.tsx
    │   ├── Vehicle.tsx
    │   ├── Booking.tsx
    │   ├── Reviews.tsx
    │   ├── Payment.tsx
    │   └── NotFound.tsx
    ├── hooks/               # Hooks personnalisés
    ├── lib/                 # Fonctions utilitaires
    ├── App.tsx              # Racine de l’application
    ├── main.tsx             # Point d’entrée
    └── index.css            # Styles globaux

---

## ⚙️ Configuration

### Référencement (SEO)
Dans `index.html`, personnalisez :
- `<title>`  
- `<meta name="description">`  
- `<meta name="keywords">`  
- Balises Open Graph / Twitter Cards  

### Carte Google Maps
Dans `src/components/Footer.tsx`, remplacez l’iframe par vos coordonnées :

    src="https://www.google.com/maps/embed?pb=!1m18!...">

### Coordonnées de contact
Modifiez dans `src/components/Header.tsx` et `src/components/Footer.tsx` :
- Numéro de téléphone  
- Email  
- Adresse  
- Horaires  

---

## 🚀 Déploiement

### Vercel

    npm install -g vercel
    vercel

### Netlify

    npm run build
    # Puis déposez le dossier dist/ sur Netlify

### Autres plateformes
Le dossier `dist/` peut être hébergé sur **GitHub Pages**, **AWS S3**, **Firebase Hosting**, ou tout autre hébergeur statique.

---

## 🔒 Sécurité & évolutions futures

- Le paiement actuel est une **interface de démonstration** (aucun traitement réel).  
- Pour un vrai système :
  - Intégrer un backend pour la gestion des réservations et paiements  
  - Utiliser un fournisseur comme **Stripe**, **PayPlug** ou **PayPal**  
  - Mettre en place l’authentification client et un envoi d’emails automatiques (confirmation, rappel, facture)  
  - Activer HTTPS pour le déploiement final  

---

## 📈 Améliorations suggérées

1. **Backend** — Ajout d’une base de données (ex. : Supabase, PostgreSQL, MongoDB)  
2. **Paiement** — Intégration d’un service réel (Stripe, PayPlug, PayPal)  
3. **Emailing** — Notifications automatiques  
4. **Analytics** — Suivi des conversions avec Google Analytics ou Hotjar  

---

## 👨‍💻 Crédits développeur

Développé par **Aldrit Kuleta** — *Développeur Full-Stack*  
📧 aldritkuleta2@gmail.com 
💼 Spécialisé dans la conception d’applications performantes, modernes et maintenables.

---
