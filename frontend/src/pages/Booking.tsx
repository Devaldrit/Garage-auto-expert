import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, Trash2 } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";

const Booking = () => {
  const navigate = useNavigate();

  const vehicle = useCartStore((state) => state.selectedVehicle);
  const items = useCartStore((state) => state.items);
  const total = useCartStore.getState().total;
  const removeItem = useCartStore((state) => state.removeItem);

  const handleValidate = () => navigate("/confirm");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-16 px-4">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Récapitulatif de votre devis
            </h1>
            <p className="text-lg text-muted-foreground">
              Vérifiez votre sélection avant de continuer
            </p>
          </div>

          <Card className="sticky top-20">
            <CardHeader>
              <CardTitle>Récapitulatif</CardTitle>
              <CardDescription>Voici les services sélectionnés</CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Véhicule</h3>
                <p className="text-muted-foreground">
                  {vehicle
                    ? `${vehicle.brand.toUpperCase()} ${vehicle.model} (${
                        vehicle.year
                      })`
                    : "Aucun véhicule sélectionné"}
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold mb-2">Prestations</h3>
                {items.length === 0 ? (
                  <p className="text-sm text-muted-foreground">
                    Aucun service sélectionné.
                  </p>
                ) : (
                  <ul className="space-y-3 text-sm">
                    {items.map((item) => (
                      <li
                        key={item.id}
                        className="flex justify-between items-center"
                      >
                        <div className="flex flex-col">
                          <span className="font-medium">{item.title}</span>
                          <span className="text-muted-foreground text-xs">
                            {item.price.toFixed(2)}€
                          </span>
                        </div>

                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <Separator />

              <div className="flex justify-between items-center text-lg font-bold">
                <span>Total</span>
                <span className="text-primary">{total().toFixed(2)}€</span>
              </div>

              <div className="space-y-3 pt-4">
                <Button
                  onClick={handleValidate}
                  className="w-full"
                  size="lg"
                  disabled={items.length === 0}
                >
                  <CheckCircle2 className="mr-2 h-5 w-5" />
                  Continuer
                </Button>

                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => navigate("/")}
                >
                  Modifier le véhicule
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Booking;
