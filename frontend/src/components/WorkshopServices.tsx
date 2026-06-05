import WorkshopServiceCard, {
  type WorkshopServiceCardProps,
} from "./WorkshopServiceCard";
import { Link } from "react-router-dom";
import batterieImage from "../assets/images/servicesLogo/picto_menu_service_batterie.png";
import carrosserieImage from "../assets/images/servicesLogo/carrosserie.png";
import climatisationImage from "../assets/images/servicesLogo/picto_menu_service_climatisation.png";
import controleTechniqueImage from "../assets/images/servicesLogo/picto_menu_service_controle_technique.png";
import distributionImage from "../assets/images/servicesLogo/picto_menu_service_distribution.png";
import echappementImage from "../assets/images/servicesLogo/picto_menu_service_echapement.png";
import freinageImage from "../assets/images/servicesLogo/picto_menu_service_freinage.png";
import mecaniqueImage from "../assets/images/servicesLogo/picto_menu_service_mecanique.png";
import pneumatiquesImage from "../assets/images/servicesLogo/picto_menu_service_pneumatique.png";
import revisionImage from "../assets/images/servicesLogo/picto_menu_service_revision.png";
import suspensionImage from "../assets/images/servicesLogo/picto_menu_service_suspension.png";
import vidangeImage from "../assets/images/servicesLogo/picto_menu_service_vidange.png";
import visibiliteImage from "../assets/images/servicesLogo/picto_menu_service_visibilite.png";
import autoradioImage from "../assets/images/servicesLogo/reparation_autoradio(1).png";
import vitrageImage from "../assets/images/servicesLogo/vitrage.png";

const services: WorkshopServiceCardProps[] = [
  {
    title: "Vidange",
    description: "Vidange complète avec huile haute qualité.",
    image: vidangeImage,
  },
  {
    title: "Batterie",
    description: "Contrôle, remplacement et charge de batterie.",
    image: batterieImage,
  },
  {
    title: "Freinage",
    description: "Plaquettes, disques et liquide de frein.",
    image: freinageImage,
  },
  {
    title: "Climatisation",
    description: "Recharge et entretien de votre climatisation.",
    image: climatisationImage,
  },
  {
    title: "Révision",
    description: "Révision constructeur selon le carnet d’entretien.",
    image: revisionImage,
  },
  {
    title: "Distribution",
    description: "Courroie de distribution et kit complet.",
    image: distributionImage,
  },
  {
    title: "Pneumatiques",
    description: "Montage, équilibrage et réparation de pneus.",
    image: pneumatiquesImage,
  },
  {
    title: "Suspension",
    description: "Amortisseurs, suspensions et tenue de route.",
    image: suspensionImage,
  },
  {
    title: "Mécanique",
    description: "Réparation mécanique toutes marques.",
    image: mecaniqueImage,
  },
  {
    title: "Échappement",
    description: "Contrôle, réparation et remplacement.",
    image: echappementImage,
  },
  {
    title: "Carrosserie",
    description: "Réparation carrosserie et remise en état.",
    image: carrosserieImage,
  },
  {
    title: "Vitrage",
    description: "Remplacement et réparation de pare-brise.",
    image: vitrageImage,
  },
  {
    title: "Autoradio",
    description: "Installation et dépannage de systèmes audio.",
    image: autoradioImage,
  },
  {
    title: "Contrôle Technique",
    description: "Préparation et passage du contrôle technique.",
    image: controleTechniqueImage,
  },
  {
    title: "Visibilité",
    description: "Éclairage, essuie-glaces et équipements de visibilité.",
    image: visibiliteImage,
  },
];

const advantages = [
  {
    marker: "1",
    title: "Experts qualifiés",
    description: "Techniciens diplômés et expérimentés.",
  },
  {
    marker: "2",
    title: "Pièces de qualité",
    description: "Pièces d'origine ou équivalentes.",
  },
  {
    marker: "3",
    title: "Garantie constructeur",
    description: "Préserve votre garantie constructeur.",
  },
  {
    marker: "4",
    title: "Tarifs transparents",
    description: "Devis clairs et sans surprise.",
  },
];

const WorkshopServices = () => {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <div className="mb-4 flex items-center justify-center gap-4">
            <span className="h-0.5 w-10 bg-orange-500" />
            <span className="text-sm font-bold uppercase text-orange-500">
              NOS SERVICES ATELIER
            </span>
            <span className="h-0.5 w-10 bg-orange-500" />
          </div>
          <h2 className="mb-5 text-4xl font-extrabold text-black">
            Tous les services pour votre véhicule
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-7 text-gray-600">
            Entretien, réparation et diagnostic réalisés par des techniciens
            qualifiés pour toutes marques de véhicules.
          </p>
          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-orange-500" />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map((service) => (
            <WorkshopServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>

        <div className="mt-10 rounded-3xl bg-black px-6 py-8 text-white shadow-2xl sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((advantage) => (
              <div
                key={advantage.title}
                className="flex items-start gap-4 text-left sm:items-center"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-orange-500 text-base font-bold text-orange-500">
                  {advantage.marker}
                </span>

                <div>
                  <h3 className="mb-1 font-bold text-orange-500">
                    {advantage.title}
                  </h3>

                  <p className="text-sm leading-6 text-gray-200">
                    {advantage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bouton */}
          <div className="mt-8 flex justify-center">
            <Link
              to="/services"
              className="
        rounded-xl
        bg-orange-500
        px-8
        py-3
        font-semibold
        text-white
        transition-all
        duration-300
        hover:bg-orange-600
        hover:scale-105
      "
            >
              Voir tous nos services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopServices;
