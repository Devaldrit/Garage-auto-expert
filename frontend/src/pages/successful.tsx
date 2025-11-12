import { FC, useEffect } from "react";
import { Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCartStore } from "@/store/useCartStore";
import { useNavigate } from "react-router-dom";

const OrderConfirmation: FC = () => {
  const clearCart = useCartStore((state) => state.clearCart);
  const navigate = useNavigate();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="block justify-center bg-gray-100">
      <Header />
      <div className="bg-white rounded-2xl shadow-lg p-20 w-full text-center">
        {/* Cercle */}
        <div className="relative inline-flex items-center justify-center w-20 h-20 mb-6">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr bg-primary"></div>
          <Check className="relative text-white w-10 h-10" strokeWidth={3} />
        </div>

        {/* Texte */}
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Merci pour votre confiance!
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          Nous vous enverrons votre devis par e-mail dans les plus brefs délais.
        </p>

        {/* Boutons */}
        <div className="justify-center">
          <button
            className="px-5 py-2 rounded-md text-white bg-primary hover:bg-primary-dark transition"
            onClick={() => navigate("/services")}
          >
            Consulter d'autres services
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderConfirmation;
