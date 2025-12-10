import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReviewCard from "@/components/ReviewCard";
import { Star } from "lucide-react";

const Reviews = () => {
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
    {
      name: "Karin G",
      vehicle: "",
      rating: 5,
      comment: "Je recommande vivement ce garage",
      date: "2019-01-01",
    },
  ];

  const averageRating = (
    reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length
  ).toFixed(1);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary-dark text-primary-foreground py-16 px-4">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Avis de nos clients
            </h1>
            <div className="flex items-center justify-center space-x-3 mb-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-8 w-8 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-3xl font-bold">{averageRating}/5</span>
            </div>
            <p className="text-lg opacity-90">
              Basé sur {reviews.length} avis vérifiés
            </p>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-16 px-4">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review, index) => (
                <ReviewCard key={index} {...review} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-muted">
          <div className="container text-center max-w-3xl">
            <h2 className="text-3xl font-bold mb-4">
              Vous aussi, faites-nous confiance !
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Rejoignez nos clients satisfaits et profitez d'un service de
              qualité pour l'entretien de votre véhicule.
            </p>
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-primary-foreground font-medium hover:bg-primary-dark transition-colors"
            >
              Prendre rendez-vous
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Reviews;
