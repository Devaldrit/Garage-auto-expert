import { useNavigate, useLocation } from "react-router-dom";
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
import { CheckCircle2, Plus, Minus } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";

const Booking = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const vehicle = location.state?.vehicle || "Véhicule non identifié";

  const items = useCartStore((state) => state.items);
  const total = useCartStore.getState().total;
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  const handleValidate = () => {
    navigate("/payment");
  };

  const handleIncrement = (id: number) => {
    const item = items.find((i) => i.id === id);
    if (item) updateQuantity(id, item.quantity + 1);
  };

  const handleDecrement = (id: number) => {
    const item = items.find((i) => i.id === id);
    if (item && item.quantity > 1) updateQuantity(id, item.quantity - 1);
  };

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
              Validez votre demande de devis
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-2">
            <Card className="sticky top-20">
              <CardHeader>
                <CardTitle>Récapitulatif</CardTitle>
                <CardDescription>
                  Vérifiez les informations de votre réservation
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Véhicule */}
                <div>
                  <h3 className="font-semibold mb-2">Véhicule</h3>
                  <p className="text-muted-foreground">{vehicle}</p>
                </div>

                <Separator />

                {/* Services sélectionnés */}
                <div>
                  <h3 className="font-semibold mb-2">Services sélectionnés</h3>

                  {items.length === 0 ? (
                    <p className="text-sm text-muted-foreground">
                      Aucun service sélectionné.
                    </p>
                  ) : (
                    <ul className="space-y-2 text-sm">
                      {items.map((item) => (
                        <li
                          key={item.id}
                          className="flex justify-between items-center"
                        >
                          <span>
                            {item.title} × {item.quantity}
                          </span>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">
                              {(item.price * item.quantity).toFixed(2)}€
                            </span>
                            <div className="flex items-center gap-1">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleIncrement(item.id)}
                              >
                                <Plus className="w-3 h-3" />
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleDecrement(item.id)}
                                disabled={item.quantity <= 1}
                              >
                                <Minus className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <Separator />

                {/* Total */}
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Total</span>
                  <span className="text-primary">{total().toFixed(2)}€</span>
                </div>

                {/* Boutons */}
                <div className="space-y-3 pt-4">
                  <Button
                    onClick={handleValidate}
                    className="w-full"
                    size="lg"
                    disabled={items.length === 0}
                  >
                    <CheckCircle2 className="mr-2 h-5 w-5" />
                    Valider et continuer
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => navigate("/services")}
                  >
                    Modifier mes prestations
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Booking;
