import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReviewCard from "@/components/ReviewCard";
import { Star } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      name: "Marie Dubois",
      vehicle: "Peugeot 208",
      rating: 5,
      comment: "Service impeccable, équipe très professionnelle. Ma voiture est comme neuve après la révision ! Je recommande vivement ce garage.",
      date: "2025-01-15"
    },
    {
      name: "Jean Martin",
      vehicle: "Renault Clio",
      rating: 5,
      comment: "Excellent rapport qualité-prix. Travail soigné et dans les délais annoncés. L'équipe a pris le temps de m'expliquer toutes les interventions.",
      date: "2025-01-10"
    },
    {
      name: "Sophie Lefebvre",
      vehicle: "Citroën C3",
      rating: 4,
      comment: "Très bon accueil, explications claires. Je recommande ce garage ! Seul petit bémol, j'ai dû attendre 10 minutes de plus que prévu.",
      date: "2025-01-05"
    },
    {
      name: "Pierre Dubois",
      vehicle: "Volkswagen Golf",
      rating: 5,
      comment: "Garage de confiance, j'y vais depuis 5 ans. Jamais déçu, les prix sont corrects et le travail est toujours impeccable.",
      date: "2024-12-28"
    },
    {
      name: "Isabelle Rousseau",
      vehicle: "Audi A3",
      rating: 5,
      comment: "Très satisfaite de la prise en charge. Le diagnostic était précis et les réparations ont été effectuées rapidement. Merci !",
      date: "2024-12-20"
    },
    {
      name: "Thomas Moreau",
      vehicle: "BMW Série 3",
      rating: 4,
      comment: "Bon garage avec des techniciens compétents. Les tarifs sont transparents et raisonnables pour la qualité du service.",
      date: "2024-12-15"
    },
    {
      name: "Catherine Lambert",
      vehicle: "Renault Captur",
      rating: 5,
      comment: "Je suis venue pour un problème de freinage. L'équipe a été très réactive et professionnelle. Problème résolu rapidement !",
      date: "2024-12-10"
    },
    {
      name: "Laurent Petit",
      vehicle: "Peugeot 3008",
      rating: 5,
      comment: "Excellent garage ! Accueil chaleureux, explications détaillées et travail de qualité. Je ne changerai pour rien au monde.",
      date: "2024-12-05"
    },
    {
      name: "Nathalie Simon",
      vehicle: "Citroën C4",
      rating: 4,
      comment: "Très bon service. La vidange a été faite rapidement et proprement. Bon rapport qualité-prix.",
      date: "2024-11-28"
    },
  ];

  const averageRating = (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
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
              Rejoignez nos clients satisfaits et profitez d'un service de qualité pour l'entretien de votre véhicule.
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
