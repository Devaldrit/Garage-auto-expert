import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Droplets, Wrench, Wind, Disc, Gauge, Battery, Lightbulb, Zap, Car, Shield } from "lucide-react";

const Services = () => {
  const allServices = [
    {
      title: "Vidange",
      description: "Vidange complète avec filtres à huile, air et carburant",
      price: "À partir de 89€",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
      icon: <Droplets className="h-5 w-5" />,
      details: "Vidange complète incluant : huile moteur de qualité adaptée à votre véhicule, filtre à huile neuf, filtre à air, filtre à carburant. Contrôle gratuit des niveaux (liquide de refroidissement, lave-glace, liquide de frein) et des points de sécurité essentiels."
    },
    {
      title: "Révision Complète",
      description: "Révision selon préconisations constructeur",
      price: "À partir de 149€",
      image: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800&q=80",
      icon: <Wrench className="h-5 w-5" />,
      details: "Révision complète avec contrôle approfondi de tous les points de sécurité selon le carnet d'entretien constructeur. Changement des filtres nécessaires, contrôle du système de freinage, direction, suspension, éclairage. Rapport détaillé avec photos."
    },
    {
      title: "Freinage",
      description: "Remplacement plaquettes et disques de frein",
      price: "À partir de 199€",
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80",
      icon: <Disc className="h-5 w-5" />,
      details: "Remplacement des plaquettes et disques de frein avant ou arrière avec pièces de qualité d'origine. Contrôle complet du circuit hydraulique, purge si nécessaire, graissage des étriers. Test sur route après intervention."
    },
    {
      title: "Climatisation",
      description: "Recharge et entretien climatisation",
      price: "À partir de 79€",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
      icon: <Wind className="h-5 w-5" />,
      details: "Recharge complète du système de climatisation avec gaz réfrigérant R134a ou R1234yf selon votre véhicule. Contrôle d'étanchéité du circuit, désinfection antibactérienne et désodorisation complète de l'habitacle."
    },
    {
      title: "Diagnostic Électronique",
      description: "Diagnostic complet avec valise multimarque",
      price: "À partir de 59€",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
      icon: <Gauge className="h-5 w-5" />,
      details: "Diagnostic électronique approfondi de tous les calculateurs de votre véhicule. Lecture et suppression des codes défaut, analyse des paramètres en temps réel. Rapport détaillé avec recommandations."
    },
    {
      title: "Batterie",
      description: "Test et remplacement de batterie",
      price: "À partir de 119€",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80",
      icon: <Battery className="h-5 w-5" />,
      details: "Test complet de votre batterie et du circuit de charge. Remplacement par une batterie de qualité adaptée à votre véhicule. Garantie constructeur. Recyclage gratuit de l'ancienne batterie."
    },
    {
      title: "Éclairage",
      description: "Remplacement et réglage optiques",
      price: "À partir de 39€",
      image: "https://images.unsplash.com/photo-1449130015084-2fae5afe6b48?w=800&q=80",
      icon: <Lightbulb className="h-5 w-5" />,
      details: "Remplacement de toutes ampoules (codes, phares, feux de position, clignotants). Réglage précis de la hauteur des feux. Vérification du bon fonctionnement de tous les feux de signalisation."
    },
    {
      title: "Distribution",
      description: "Remplacement kit de distribution",
      price: "À partir de 549€",
      image: "https://images.unsplash.com/photo-1632823469850-1b5dd1f2a5e7?w=800&q=80",
      icon: <Zap className="h-5 w-5" />,
      details: "Remplacement complet du kit de distribution (courroie ou chaîne, galets tendeurs, pompe à eau selon préconisation). Intervention cruciale pour la longévité de votre moteur. Pièces d'origine constructeur."
    },
    {
      title: "Géométrie",
      description: "Parallélisme et géométrie des trains",
      price: "À partir de 69€",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
      icon: <Car className="h-5 w-5" />,
      details: "Réglage précis de la géométrie des trains roulants avec équipement de dernière génération. Permet d'éviter l'usure prématurée des pneus et d'améliorer la tenue de route. Rapport avec mesures avant/après."
    },
    {
      title: "Contrôle Technique",
      description: "Préparation et passage du contrôle",
      price: "À partir de 89€",
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80",
      icon: <Shield className="h-5 w-5" />,
      details: "Pré-contrôle technique complet pour identifier les points à corriger avant le passage officiel. Réparation des défaillances constatées. Possibilité de prise en charge et restitution de votre véhicule au centre de contrôle."
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary-dark text-primary-foreground py-16 px-4">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Nos Services
            </h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Une gamme complète de prestations pour l'entretien et la réparation de votre véhicule
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allServices.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-muted">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">
              Besoin d'un service spécifique ?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              N'hésitez pas à nous contacter pour toute demande particulière. Notre équipe est à votre écoute pour vous proposer la meilleure solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+33389000000"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-primary-foreground font-medium hover:bg-primary-dark transition-colors"
              >
                Nous appeler
              </a>
              <a
                href="mailto:contact@garage-auto-expert.fr"
                className="inline-flex items-center justify-center rounded-lg bg-secondary px-8 py-3 text-secondary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                Nous écrire
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
