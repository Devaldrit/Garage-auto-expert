import { useLocation, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Lock, CheckCircle2, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useCartStore } from "@/store/useCartStore";

const Confirm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { vehicle } = location.state || {};

  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const total = useCartStore.getState().total;

  const handleConfirm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    const name = data.get("name") as string;
    const firstname = data.get("firstname") as string;
    const email = data.get("email") as string;
    const phone = data.get("phone") as string;

    if (!name || !firstname || !email || !phone) {
      toast.error("Veuillez remplir tous les champs.");
      return;
    }

    const message = `
Demande de devis :
Nom : ${name}
Prénom : ${firstname}
Email : ${email}
Téléphone : ${phone}
Véhicule : ${vehicle || "Non spécifié"}
Services : ${items.map((i) => i.title).join(", ")}
Total : ${total().toFixed(2)}€
    `;

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${name} ${firstname}`,
          email,
          subject: "Demande de devis",
          message,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Erreur lors de l'envoi");
      }

      toast.success("Votre demande de devis a bien été envoyée.");
      form.reset();

      setTimeout(() => navigate("/success"), 1500);
    } catch (err: any) {
      toast.error(err.message || "Erreur lors de l'envoi");
    }
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
              <span>Vos données sont protégées</span>
            </div>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-3">
              {/* Formulaire */}
              <Card>
                <CardContent>
                  <form onSubmit={handleConfirm} className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold">Coordonnées</h3>

                      <div>
                        <Label htmlFor="name">Nom</Label>
                        <Input id="name" name="name" required />
                      </div>

                      <div>
                        <Label htmlFor="firstname">Prénom</Label>
                        <Input id="firstname" name="firstname" required />
                      </div>

                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" type="email" required />
                      </div>

                      <div>
                        <Label htmlFor="phone">Téléphone</Label>
                        <Input id="phone" name="phone" type="tel" required />
                      </div>
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      <CheckCircle2 className="mr-2 h-5 w-5" />
                      Envoyer la demande
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Récap */}
            <div className="md:col-span-2">
              <Card className="sticky top-20">
                <CardHeader>
                  <CardTitle>Récapitulatif</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-1">
                      Véhicule
                    </h4>
                    <p className="text-sm">{vehicle || "Non spécifié"}</p>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                      Services sélectionnés
                    </h4>

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
                            <span>{item.title}</span>

                            <div className="flex items-center gap-2">
                              <span>{item.price.toFixed(2)}€</span>

                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => removeItem(item.id)}
                                className="text-red-500 hover:text-red-700"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <Separator />

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

export default Confirm;
