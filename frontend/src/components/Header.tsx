import { Link, useLocation } from "react-router-dom";
import { MapPin, Phone, ShoppingCart } from "lucide-react";
import logo from "../assets/images/logo/logoLightText.png";

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="w-full bg-white shadow-sm z-50">
      {/* TOP BAR */}
      <div className="w-full border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4">
          {/* LOGO */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Auto Expert Logo" className="w-40 md:w-48" />
          </div>

          {/* Contact info + Panier */}
          <div className="flex items-center gap-6">
            {/* Contact info */}
            <div className="hidden md:flex flex-col text-gray-800 text-right">
              <div className="flex items-center text-sm">
                <MapPin className="h-4 w-4 mr-2 text-gray-600" />
                <span>37 Avenue de Belgique, 68110 Illzach</span>
              </div>
              <div className="flex items-center text-sm mt-1">
                <Phone className="h-4 w-4 mr-2 text-gray-600" />
                <span>+33 9 86 25 61 89</span>
              </div>
            </div>

            {/* PANIER BUTTON */}
            <Link
              to="/vehicle"
              className="
                flex items-center gap-2 
                bg-[#d98c2b] hover:bg-[#c07823]
                text-white px-4 py-2 rounded-md 
                transition font-medium shadow-md
              "
            >
              <ShoppingCart className="h-5 w-5" />
              Panier
            </Link>
          </div>
        </div>
      </div>

      {/* ORANGE LINE */}
      <div className="w-full h-[3px] bg-[#d98c2b]" />

      {/* NAVIGATION */}
      <nav className="w-full bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-center space-x-10 py-3 text-gray-900 font-medium">
          <Link
            to="/"
            className={`hover:text-[#d98c2b] transition ${
              isActive("/") ? "text-[#d98c2b]" : ""
            }`}
          >
            ACCUEIL
          </Link>

          <Link
            to="/services"
            className={`hover:text-[#d98c2b] transition ${
              isActive("/services") ? "text-[#d98c2b]" : ""
            }`}
          >
            SERVICES
          </Link>

          <Link
            to="/reviews"
            className={`hover:text-[#d98c2b] transition ${
              isActive("/reviews") ? "text-[#d98c2b]" : ""
            }`}
          >
            AVIS CLIENTS
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
