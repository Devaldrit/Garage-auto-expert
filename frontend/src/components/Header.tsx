import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex flex-col">
            <span className="text-xl font-bold text-primary">Auto Expert</span>
            <span className="text-xs text-muted-foreground">
              Illzach - Eurorepar
            </span>
          </div>
        </Link>

        <nav
          className="hidden md:flex items-center space-x-6"
          aria-label="Navigation principale"
        >
          <Link
            to="/"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/") ? "text-primary" : "text-foreground"
            }`}
          >
            Accueil
          </Link>
          <Link
            to="/services"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/services") ? "text-primary" : "text-foreground"
            }`}
          >
            Nos Services
          </Link>
          <Link
            to="/reviews"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/reviews") ? "text-primary" : "text-foreground"
            }`}
          >
            Avis Clients
          </Link>
        </nav>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" className="hidden sm:flex" asChild>
            <a href="tel:+33389000000" aria-label="Appeler le garage">
              <Phone className="h-4 w-4 mr-2" />
              03 89 00 00 00
            </a>
          </Button>
          <Button size="sm" asChild>
            <Link to="/vehicle" aria-label="Prendre rendez-vous">
              <Calendar className="h-4 w-4 mr-2" />
              Panier
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
