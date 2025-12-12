import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import {
  Droplets,
  Wrench,
  Wind,
  Disc,
  Gauge,
  Battery,
  Lightbulb,
  Zap,
  Car,
  Shield,
} from "lucide-react";

const Services = () => {
  const allServices = [
    {
      title: "Vidange",
      description: "Vidange complète avec filtres à huile, air et carburant",
      price: "À partir de 89€",
      image: "/src/assets/images/services/vidange.jpg",
      icon: <Droplets className="h-5 w-5" />,
      details:
        "Vidange complète incluant : huile moteur de qualité adaptée à votre véhicule, filtre à huile neuf, filtre à air, filtre à carburant. Contrôle gratuit des niveaux et des points de sécurité essentiels.",
    },
    {
      title: "Révision",
      description: "Révision selon préconisations constructeur",
      price: "À partir de 149€",
      image: "/src/assets/images/services/revision.jpg",
      icon: <Wrench className="h-5 w-5" />,
      details:
        "Révision complète avec contrôle approfondi de tous les points de sécurité selon le carnet constructeur.",
    },
    {
      title: "Pneumatiques",
      description: "Montage, équilibrage et réparation",
      price: "À partir de 29€",
      image: "/src/assets/images/services/pneumatique.jpg",
      icon: <Wind className="h-5 w-5" />,
      details:
        "Montage, équilibrage et contrôle complet de vos pneus. Pression, usure, géométrie visuelle.",
    },
    {
      title: "Freinage",
      description: "Remplacement plaquettes et disques",
      price: "À partir de 199€",
      image: "/src/assets/images/services/freinage.jpg",
      icon: <Disc className="h-5 w-5" />,
      details:
        "Remplacement des plaquettes/disques, purge et contrôle du circuit hydraulique.",
    },
    {
      title: "Batterie",
      description: "Contrôle et remplacement batterie",
      price: "À partir de 119€",
      image: "/src/assets/images/services/batterie.jpg",
      icon: <Battery className="h-5 w-5" />,
      details:
        "Test complet et remplacement d’une batterie adaptée. Garantie constructeur incluse.",
    },
    {
      title: "Visibilité",
      description: "Éclairage et essuie-glaces",
      price: "À partir de 39€",
      image: "/src/assets/images/services/visibilite.jpg",
      icon: <Lightbulb className="h-5 w-5" />,
      details:
        "Changement d'ampoules, réglage optique et remplacement des balais essuie-glaces.",
    },
    {
      title: "Échappement",
      description: "Contrôle et remplacement échappement",
      price: "À partir de 89€",
      image: "/src/assets/images/services/echappement.jpg",
      icon: <Zap className="h-5 w-5" />,
      details:
        "Pose, soudure, diagnostic du catalyseur, silencieux et ligne d’échappement.",
    },
    {
      title: "Kit de distribution",
      description: "Remplacement kit distribution complet",
      price: "À partir de 549€",
      image: "/src/assets/images/services/kitDistribution.jpg",
      icon: <Zap className="h-5 w-5" />,
      details:
        "Courroie/chaîne + galets + pompe à eau si applicable. Intervention vitale pour votre moteur.",
    },
    {
      title: "Suspension",
      description: "Amortisseurs & ressorts",
      price: "À partir de 249€",
      image: "/src/assets/images/services/suspension.jpg",
      icon: <Car className="h-5 w-5" />,
      details:
        "Remplacement amortisseurs, soufflets, butées et contrôle du train roulant.",
    },
    {
      title: "Pré-contrôle technique",
      description: "Inspection avant contrôle",
      price: "À partir de 89€",
      image: "/src/assets/images/services/preControleTechnique.jpg",
      icon: <Shield className="h-5 w-5" />,
      details:
        "Inspection complète avant passage au contrôle technique pour éviter une contre-visite.",
    },
    {
      title: "Mécanique",
      description: "Interventions mécaniques diverses",
      price: "Sur devis",
      image: "/src/assets/images/services/mecanique.jpg",
      icon: <Wrench className="h-5 w-5" />,
      details:
        "Embrayage, alternateur, démarreur, cardans, joints, fuites, moteur… Toutes interventions mécaniques.",
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
              Une gamme complète de prestations pour l'entretien et la
              réparation de votre véhicule
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allServices.map((service, index) => (
                <ServiceCard id={0} key={index} {...service} />
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
              N'hésitez pas à nous contacter pour toute demande particulière.
              Notre équipe est à votre écoute pour vous proposer la meilleure
              solution.
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
