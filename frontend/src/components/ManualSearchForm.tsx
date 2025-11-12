import { useState } from "react";
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

interface ManualSearchFormProps {
  onSubmit: (vehicle: { brand: string; model: string; year: string }) => void;
}

const ManualSearchForm = ({ onSubmit }: ManualSearchFormProps) => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!brand || !model || !year) return;
    onSubmit({ brand, model, year });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Saisie manuelle</CardTitle>
        <CardDescription>
          Renseignez les caractéristiques de votre véhicule
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Marque */}
          <div>
            <Label htmlFor="brand">Marque</Label>
            <Select value={brand} onValueChange={setBrand} required>
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

          {/* Modèle */}
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

          {/* Année */}
          <div>
            <Label htmlFor="year">Année</Label>
            <Select value={year} onValueChange={setYear} required>
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

          {/* Bouton de recherche */}
          <Button type="submit" className="w-full" size="lg">
            <Search className="mr-2 h-5 w-5" />
            Rechercher
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ManualSearchForm;
