import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import ManualSearchForm from "../components/ManualSearchForm.tsx";

const Vehicle = () => {
  const navigate = useNavigate();

  // Callback appelée depuis le composant enfant
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
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Vehicle;
