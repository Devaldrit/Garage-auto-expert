import { MapPin, Phone, Clock, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href="tel:+33389000000"
                className="flex items-center space-x-2 hover:text-accent transition-colors"
                aria-label="Téléphone du garage"
              >
                <Phone className="h-4 w-4" />
                <span>03 89 00 00 00</span>
              </a>
              <a
                href="mailto:contact@garage-auto-expert.fr"
                className="flex items-center space-x-2 hover:text-accent transition-colors"
                aria-label="Email du garage"
              >
                <Mail className="h-4 w-4" />
                <span>contact@garage-auto-expert.fr</span>
              </a>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <address className="not-italic">
                  123 Route de Mulhouse
                  <br />
                  68110 Illzach
                  <br />
                  France
                </address>
              </div>
            </div>
          </div>

          {/* Horaires */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Horaires d'ouverture</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span className="font-medium">Lundi - Vendredi</span>
              </div>
              <p className="ml-6">08:00 - 12:00 / 14:00 - 18:00</p>
              <div className="flex items-center space-x-2 mt-2">
                <Clock className="h-4 w-4" />
                <span className="font-medium">Samedi</span>
              </div>
              <p className="ml-6">08:00 - 12:00</p>
              <p className="mt-2 ml-6 font-medium">Dimanche : Fermé</p>
            </div>
          </div>

          {/* Carte */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nous trouver</h3>
            <div className="rounded-lg overflow-hidden shadow-soft h-48">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2663.5!2d7.35!3d47.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDQ2JzQ4LjAiTiA3wrAyMScwMC4wIkU!5e0!3m2!1sfr!2sfr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation du Garage Auto Expert Illzach"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm">
          <p>
            &copy; 2025 Garage Auto Expert Illzach - Membre du réseau Eurorepar
          </p>
          <p className="mt-2 font-medium italic">
            "La confiance, ça s'entretient !"
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
