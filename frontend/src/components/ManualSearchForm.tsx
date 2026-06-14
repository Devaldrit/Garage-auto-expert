import { useEffect, useState } from "react";
import { useCartStore } from "@/store/useCartStore";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Car, CheckCircle2, Pencil } from "lucide-react";
import { toast } from "sonner";

const VehicleForm = () => {
  const {
    selectedVehicle,
    selectedPlate,
    setVehicle,
    setPlate,
    clearVehicle,
    clearPlate,
  } = useCartStore();

  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [plate, setPlateInput] = useState("");

  // Permet de repasser au formulaire
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (selectedVehicle) {
      setBrand(selectedVehicle.brand);
      setModel(selectedVehicle.model);
      setYear(selectedVehicle.year);
    }

    if (selectedPlate) {
      setPlateInput(selectedPlate);
    }
  }, [selectedVehicle, selectedPlate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!brand || !model || !year || !plate) {
      toast.error("Veuillez remplir tous les champs.");
      return;
    }

    const formattedPlate = plate.trim().toUpperCase();

    setVehicle({
      brand,
      model,
      year,
    });

    setPlate(formattedPlate);

    setIsEditing(false);

    toast.success("Véhicule enregistré.");
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const carBrands = [
    "Abarth",
    "Acura",
    "Aiways",
    "Alfa Romeo",
    "Alpine",
    "Aston Martin",
    "Audi",
    "Bentley",
    "BMW",
    "Bugatti",
    "BYD",
    "Cadillac",
    "Chevrolet",
    "Chrysler",
    "Citroën",
    "Cupra",
    "Dacia",
    "Daewoo",
    "Daihatsu",
    "Dodge",
    "DS Automobiles",
    "Ferrari",
    "Fiat",
    "Ford",
    "Genesis",
    "GMC",
    "Honda",
    "Hummer",
    "Hyundai",
    "Infiniti",
    "Isuzu",
    "Iveco",
    "Jaguar",
    "Jeep",
    "Kia",
    "Lada",
    "Lamborghini",
    "Lancia",
    "Land Rover",
    "Lexus",
    "Lotus",
    "Lucid",
    "Maserati",
    "Mazda",
    "McLaren",
    "Mercedes-Benz",
    "MG",
    "Mini",
    "Mitsubishi",
    "Nissan",
    "Opel",
    "Peugeot",
    "Polestar",
    "Porsche",
    "Renault",
    "Rolls-Royce",
    "Saab",
    "Seat",
    "Skoda",
    "Smart",
    "SsangYong",
    "Subaru",
    "Suzuki",
    "Tesla",
    "Toyota",
    "Volkswagen",
    "Volvo",
  ];

  const hasVehicle = selectedVehicle !== null && selectedPlate !== null;

  const showSummary = hasVehicle && !isEditing;

  return (
    <section>
      <div className="container max-w-3xl mx-auto">
        {showSummary ? (
          <Card className="shadow-xl border-0 rounded-3xl">
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-8 w-8 text-green-600" />
                </div>

                <h2 className="text-2xl font-bold">Véhicule sélectionné</h2>

                <p className="text-muted-foreground mt-2">
                  Vos informations ont été enregistrées.
                </p>

                <div className="w-full mt-8 space-y-4">
                  <div className="rounded-xl border p-4">
                    <p className="text-sm text-muted-foreground">Véhicule</p>

                    <p className="font-semibold text-lg">
                      {selectedVehicle.brand} {selectedVehicle.model}
                    </p>

                    <p className="text-muted-foreground">
                      {selectedVehicle.year}
                    </p>
                  </div>

                  <div className="rounded-xl border p-4">
                    <p className="text-sm text-muted-foreground">
                      Plaque d'immatriculation
                    </p>

                    <p className="font-semibold text-lg tracking-widest">
                      {selectedPlate}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 mt-8">
                  <Button variant="outline" onClick={handleEdit}>
                    <Pencil className="mr-2 h-4 w-4" />
                    Modifier
                  </Button>
                </div>
                <p className="text-muted-foreground mt-6">
                  Votre véhicule est désormais configuré.{" "}
                  <Link
                    to="/services"
                    className="font-medium text-primary hover:underline"
                  >
                    Consultez nos services
                  </Link>{" "}
                  pour établir votre devis personnalisé.
                </p>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="shadow-xl border-0 rounded-3xl bg-white">
            <CardHeader className="text-center space-y-4">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Car className="h-8 w-8 text-primary" />
              </div>

              <CardTitle className="text-3xl text-black">
                Sélectionnez votre véhicule
              </CardTitle>

              <CardDescription className="max-w-xl mx-auto text-base">
                Renseignez les informations de votre véhicule afin d'adapter
                précisément votre devis et les services proposés.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Marque */}
                <div className="space-y-2">
                  <Label htmlFor="brand">Marque</Label>

                  <Select value={brand} onValueChange={setBrand}>
                    <SelectTrigger id="brand" className="h-12">
                      <SelectValue placeholder="Sélectionnez une marque" />
                    </SelectTrigger>

                    <SelectContent>
                      {carBrands
                        .sort((a, b) => a.localeCompare(b))
                        .map((brand) => (
                          <SelectItem key={brand} value={brand}>
                            {brand}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Modèle */}
                <div className="space-y-2">
                  <Label htmlFor="model">Modèle</Label>

                  <Input
                    id="model"
                    className="h-12"
                    placeholder="Ex : 208, Clio, Golf..."
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                  />
                </div>

                {/* Année */}
                <div className="space-y-2">
                  <Label htmlFor="year">Année</Label>

                  <Select value={year} onValueChange={setYear}>
                    <SelectTrigger id="year" className="h-12">
                      <SelectValue placeholder="Sélectionnez une année" />
                    </SelectTrigger>

                    <SelectContent>
                      {Array.from(
                        { length: 30 },
                        (_, i) => new Date().getFullYear() - i,
                      ).map((y) => (
                        <SelectItem key={y} value={y.toString()}>
                          {y}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Plaque */}
                <div className="space-y-2">
                  <Label htmlFor="plate">Plaque d'immatriculation</Label>

                  <Input
                    id="plate"
                    className="h-12 uppercase tracking-widest"
                    placeholder="Ex : AB-123-CD"
                    value={plate}
                    onChange={(e) =>
                      setPlateInput(e.target.value.toUpperCase())
                    }
                    maxLength={20}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-12 text-base"
                >
                  {hasVehicle
                    ? "Mettre à jour le véhicule"
                    : "Valider le véhicule"}
                </Button>
              </form>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export default VehicleForm;
