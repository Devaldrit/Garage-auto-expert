import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { Search } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";

interface ManualSearchFormProps {
  onSubmit?: (vehicle: { brand: string; model: string; year: string }) => void;
}

const ManualSearchForm = ({ onSubmit }: ManualSearchFormProps) => {
  const selectedVehicle = useCartStore((state) => state.selectedVehicle);
  const setVehicle = useCartStore((state) => state.setVehicle);
  const clearVehicle = useCartStore((state) => state.clearVehicle);

  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    if (selectedVehicle) {
      setBrand(selectedVehicle.brand);
      setModel(selectedVehicle.model);
      setYear(selectedVehicle.year);
    }
  }, [selectedVehicle]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!brand || !model || !year) return;

    const vehicleData = { brand, model, year };

    setVehicle(vehicleData);

    if (onSubmit) onSubmit(vehicleData);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Saisie manuelle</CardTitle>
        <CardDescription>
          Renseignez les caractéristiques de votre véhicule
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {selectedVehicle ? (
          <div className="p-5 rounded-xl border bg-gradient-to-br from-gray-50 to-gray-100 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center h-14 w-14 rounded-full bg-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-primary"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 13l2-5h14l2 5" />
                  <path d="M5 13v6" />
                  <path d="M19 13v6" />
                  <circle cx="7.5" cy="18.5" r="2.5" />
                  <circle cx="16.5" cy="18.5" r="2.5" />
                </svg>
              </div>

              <div className="flex-1">
                <p className="font-semibold text-lg">
                  {selectedVehicle.brand.toUpperCase()} {selectedVehicle.model}
                </p>
                <p className="text-muted-foreground text-sm">
                  Année : {selectedVehicle.year}
                </p>
              </div>
            </div>

            <Button
              variant="outline"
              size="sm"
              className="mt-4 w-full"
              onClick={() => {
                clearVehicle();
                setBrand("");
                setModel("");
                setYear("");
              }}
            >
              Modifier le véhicule
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="brand">Marque</Label>
              <Select value={brand} onValueChange={setBrand}>
                <SelectTrigger id="brand" className="mt-2">
                  <SelectValue placeholder="Sélectionnez une marque" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="peugeot">Peugeot</SelectItem>
                  <SelectItem value="renault">Renault</SelectItem>
                  <SelectItem value="citroen">Citroën</SelectItem>
                  <SelectItem value="volkswagen">Volkswagen</SelectItem>
                  <SelectItem value="audi">Audi</SelectItem>
                  <SelectItem value="bmw">BMW</SelectItem>
                  <SelectItem value="mercedes">Mercedes</SelectItem>
                  <SelectItem value="opel">Opel</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="model">Modèle</Label>
              <Input
                id="model"
                type="text"
                placeholder="Ex: 308, Clio, C3..."
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="mt-2"
                required
              />
            </div>

            <div>
              <Label htmlFor="year">Année</Label>
              <Select value={year} onValueChange={setYear}>
                <SelectTrigger id="year" className="mt-2">
                  <SelectValue placeholder="Sélectionnez une année" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 25 }, (_, i) => 2025 - i).map((y) => (
                    <SelectItem key={y} value={y.toString()}>
                      {y}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" className="w-full" size="lg">
              <Search className="mr-2 h-5 w-5" />
              Valider le véhicule
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
};

export default ManualSearchForm;
