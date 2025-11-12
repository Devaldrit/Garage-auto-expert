import { useLocation, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Lock, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { useCartStore } from "@/store/useCartStore";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { vehicle, date, timeSlot } = location.state || {};

  const items = useCartStore((state) => state.items);
  const total = useCartStore.getState().total;

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();

    toast.success("Votre demande de devis a bien été enregistrée.", {
      duration: 2500,
    });

    setTimeout(() => {
      navigate("/success"); 
    }, 2500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-16 px-4 bg-muted/30">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Demande de devis
            </h1>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Lock className="h-5 w-5" />
              <span>Vos données sont protégées et cryptées</span>
            </div>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {/* 🧾 Formulaire client */}
            <div className="md:col-span-3">
              <Card>
                <CardContent>
                  <form onSubmit={handlePayment} className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold">Coordonnées</h3>

                      <div>
                        <Label htmlFor="name">Nom</Label>
                        <Input
                          id="name"
                          placeholder="John"
                          className="mt-2"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="firstname">Prénom</Label>
                        <Input
                          id="firstname"
                          placeholder="Doe"
                          className="mt-2"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="votreemail@exemple.fr"
                          className="mt-2"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone">Téléphone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="06 12 34 56 78"
                          className="mt-2"
                          required
                        />
                      </div>
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      <CheckCircle2 className="mr-2 h-5 w-5" />
                      Confirmer la demande de devis
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* 🧮 Récapitulatif */}
            <div className="md:col-span-2">
              <Card className="sticky top-20">
                <CardHeader>
                  <CardTitle>Récapitulatif</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Véhicule */}
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-1">
                      Véhicule
                    </h4>
                    <p className="text-sm">{vehicle || "Non spécifié"}</p>
                  </div>

                  <Separator />

                  {/* Services sélectionnés */}
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                      Services
                    </h4>

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
                            <span>
                              {(item.price * item.quantity).toFixed(2)}€
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <Separator />

                  {/* Total */}
                  <div className="flex justify-between items-center font-bold text-lg pt-2">
                    <span>Total TTC</span>
                    <span className="text-primary">{total().toFixed(2)}€</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Payment;
