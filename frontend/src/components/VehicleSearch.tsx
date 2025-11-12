import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Car } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const VehicleSearch = () => {
  const [plate, setPlate] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (plate.trim()) {
      toast.success("Véhicule identifié !");
      navigate("/services", { state: { plate } });
    }
  };

  return (
    <section className="bg-gradient-to-br from-primary to-primary-dark text-primary-foreground py-16 px-4">
      <div className="container max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Trouvez les services pour votre véhicule
          </h1>
          <p className="text-lg opacity-90">
            Identifiez votre véhicule en quelques secondes
          </p>
        </div>

        <form onSubmit={handleSearch} className="bg-white rounded-xl shadow-medium p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="plate-input" className="sr-only">
                Numéro d'immatriculation
              </label>
              <div className="relative">
                <Car className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  id="plate-input"
                  type="text"
                  placeholder="Ex: AB-123-CD"
                  value={plate}
                  onChange={(e) => setPlate(e.target.value.toUpperCase())}
                  className="pl-10 h-12 text-lg"
                  maxLength={20}
                  aria-label="Saisissez votre plaque d'immatriculation"
                />
              </div>
            </div>
            <Button 
              type="submit" 
              size="lg" 
              className="h-12 px-8 bg-accent hover:bg-accent-light"
              aria-label="Rechercher votre véhicule"
            >
              <Search className="h-5 w-5 mr-2" />
              Rechercher
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4 text-center">
            Ou recherchez par marque, modèle et année
          </p>
        </form>
      </div>
    </section>
  );
};

export default VehicleSearch;
