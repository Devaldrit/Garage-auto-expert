import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import ManualSearchForm from "../components/ManualSearchForm.tsx";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/useCartStore";

const Vehicle = () => {
  const navigate = useNavigate();
  const selectedVehicle = useCartStore((state) => state.selectedVehicle);

  const handleSubmitManual = (vehicle: {
    brand: string;
    model: string;
    year: string;
  }) => {
    toast.success("Véhicule identifié !");
    navigate("/booking");
  };

  const goToBooking = () => {
    if (!selectedVehicle) {
      toast.error("Veuillez sélectionner un véhicule avant de continuer.");
      return;
    }
    navigate("/booking");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-16 px-4">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Identifiez votre véhicule
            </h1>
          </div>

          <ManualSearchForm onSubmit={handleSubmitManual} />

          <div className="mt-8 flex justify-center">
            <Button
              size="lg"
              className="w-full md:w-1/2"
              onClick={goToBooking}
              disabled={!selectedVehicle}
            >
              Aller au récapitulatif
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Vehicle;
