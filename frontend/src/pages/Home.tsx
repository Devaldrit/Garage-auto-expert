import { Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import ReviewCard from "@/components/ReviewCard";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Award,
  Clock,
  Wrench,
  Droplets,
  Wind,
  Disc,
  Star,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { toast } from "sonner";
import ManualSearchForm from "../components/ManualSearchForm.tsx";
import HeroSection from "@/components/HeroSection.tsx";
import bgImage from "../assets/images/logo/heroBackground.jpg";
import logoNoText from "../assets/images/logo/LogoNoText.jpg";
import OffersCarousel from "@/components/OffersCarousel.tsx";

import offre1 from "../assets/images/promotions/promotion-kit-de-distribution-garage-toulouse.png";
import offre2 from "../assets/images/promotions/promotion-entretien-vehicule-garage-ad-toulouse.png";
import offre3 from "../assets/images/promotions/offre-pomo-1.jpg";

const Home = () => {
  const navigate = useNavigate();

  const handleSubmitManual = (vehicle: {
    brand: string;
    model: string;
    year: string;
  }) => {
    toast.success("Véhicule identifié !");
    navigate("/booking", {
      state: { vehicle: `${vehicle.brand} ${vehicle.model} (${vehicle.year})` },
    });
  };

  const services = [
    {
      id: 1,
      title: "Vidange",
      description: "Vidange complète avec filtres à huile, air et carburant",
      price: "À partir de 89€",
      image:
        "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
      icon: <Droplets className="h-5 w-5" />,
      details:
        "Vidange complète incluant : huile moteur de qualité, filtre à huile, filtre à air, filtre à carburant. Contrôle des niveaux et points de sécurité.",
    },
    {
      id: 2,
      title: "Révision",
      description: "Révision complète selon préconisations constructeur",
      price: "À partir de 149€",
      image:
        "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800&q=80",
      icon: <Wrench className="h-5 w-5" />,
      details:
        "Révision complète avec contrôle de tous les points de sécurité, changement des filtres nécessaires, contrôle freinage, direction, suspension.",
    },
    {
      id: 3,
      title: "Freinage",
      description: "Remplacement plaquettes et disques de frein",
      price: "À partir de 199€",
      image:
        "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80",
      icon: <Disc className="h-5 w-5" />,
      details:
        "Remplacement des plaquettes et disques de frein avant ou arrière. Contrôle du circuit hydraulique et purge si nécessaire.",
    },
    {
      id: 4,
      title: "Climatisation",
      description: "Recharge et entretien climatisation",
      price: "À partir de 79€",
      image:
        "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
      icon: <Wind className="h-5 w-5" />,
      details:
        "Recharge complète du système de climatisation, contrôle d'étanchéité, désinfection et désodorisation de l'habitacle.",
    },
  ];

  const reviews = [
    {
      name: "Dominique H",
      vehicle: "",
      rating: 5,
      comment: "Super équipe bon travail merci à vous",
      date: "2023-01-01",
    },
    {
      name: "Gwénaël G",
      vehicle: "",
      rating: 5,
      comment:
        "Je fais entretenir plusieurs véhicules chez eux et ils sont très professionnels",
      date: "2021-01-01",
    },
    {
      name: "Florian K",
      vehicle: "",
      rating: 5,
      comment:
        "Vous pouvez faire confiance au garage Auto Expert pour toutes réparations ou révisions sur véhicules anciens et modernes. Le personnel est professionnel et disponible.",
      date: "2019-01-01",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <section>
          <HeroSection backgroundUrl={bgImage} logoUrl={logoNoText} />
        </section>
        <section className="py-12 px-4 bg-white from-accent to-accent-light text-accent-foreground">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
            Nos offres du moments
          </h2>
          <OffersCarousel images={[offre1, offre2, offre3]} />
        </section>

        <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-4">
          <div className="container max-w-4xl text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Identifiez votre véhicule en quelques clics
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Sélectionnez la marque, le modèle et l’année de votre voiture pour
              trouver les services adaptés.
            </p>
          </div>
          <div className="container max-w-3xl">
            <ManualSearchForm onSubmit={handleSubmitManual} />
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Nos Services
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Des prestations de qualité pour l'entretien et la réparation de
                votre véhicule
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {services.map((service) => (
                <ServiceCard key={service.id} {...service} />
              ))}
            </div>
            <div className="text-center">
              <Button size="lg" asChild>
                <Link to="/services">Voir tous nos services</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Avis Clients
              </h2>
              <div className="flex items-center justify-center space-x-2 mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-xl font-semibold">4.9/5</span>
              </div>
              <p className="text-muted-foreground">
                Basé sur 127 avis vérifiés
              </p>
            </div>
            <Carousel className="max-w-5xl mx-auto">
              <CarouselContent>
                {reviews.map((review, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <ReviewCard {...review} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <div className="text-center mt-8">
              <Button variant="outline" size="lg" asChild>
                <Link to="/reviews">Voir tous les avis</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Pourquoi nous faire confiance ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Réseau Eurorepar</h3>
                <p className="text-muted-foreground">
                  Membre du réseau Eurorepar, gage de qualité et d'expertise
                </p>
              </div>
              <div className="text-center">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Techniciens Certifiés
                </h3>
                <p className="text-muted-foreground">
                  Une équipe de professionnels formés et expérimentés
                </p>
              </div>
              <div className="text-center">
                <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Service Rapide</h3>
                <p className="text-muted-foreground">
                  Interventions dans les meilleurs délais, véhicule de prêt
                  disponible
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-muted/40">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Contactez-nous
            </h2>
            <p className="text-center text-muted-foreground mb-10">
              Une question, un devis, ou une demande particulière ? Remplissez
              le formulaire ci-dessous, notre équipe vous répondra rapidement.
            </p>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const formData = new FormData(form);
                const name = formData.get("name");
                const email = formData.get("email");
                const subject = formData.get("subject");
                const message = formData.get("message");

                try {
                  const res = await fetch(`${import.meta.env.VITE_API_URL}`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name, email, subject, message }),
                  });

                  const data = await res.json();
                  if (!res.ok)
                    throw new Error(data.error || "Erreur lors de l'envoi");
                  toast.success("Votre message a bien été envoyé !");
                  form.reset();
                } catch (err: any) {
                  toast.error(err.message || "Impossible d'envoyer le message");
                }
              }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 rounded-2xl shadow-md"
            >
              <div className="flex flex-col space-y-2">
                <label htmlFor="name" className="font-medium">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Jean Dupont"
                  required
                  className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="email" className="font-medium">
                  Adresse e-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="votre@email.fr"
                  required
                  className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div className="md:col-span-2 flex flex-col space-y-2">
                <label htmlFor="subject" className="font-medium">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Objet de votre message"
                  required
                  className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div className="md:col-span-2 flex flex-col space-y-2">
                <label htmlFor="message" className="font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Votre message..."
                  rows={5}
                  required
                  className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                />
              </div>

              <div className="md:col-span-2 text-center">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-primary hover:bg-primary-dark text-white"
                >
                  Envoyer le message
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-2">
                  Les informations transmises sont utilisées uniquement pour
                  répondre à votre message. Elles ne sont pas stockées en base
                  de données et ne sont jamais partagées à des tiers.
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
