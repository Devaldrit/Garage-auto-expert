import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Info, Plus } from "lucide-react";
import { toast } from "sonner";
import { useCartStore } from "@/store/useCartStore";

interface ServiceCardProps {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  details?: string;
  icon: React.ReactNode;
}

const ServiceCard = ({
  id,
  title,
  description,
  price,
  image,
  details,
  icon,
}: ServiceCardProps) => {
  const [showDetails, setShowDetails] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    // Conversion du prix "49.99€" → 49.99
    const numericPrice = parseFloat(price.replace(/[^\d.]/g, ""));

    addItem({
      id,
      title,
      price: numericPrice,
      quantity: 1,
    });

    toast.success(`${title} ajouté au panier`);
  };

  return (
    <>
      <Card className="group overflow-hidden transition-all hover:shadow-medium hover:-translate-y-1 duration-300">
        <div className="relative h-48 overflow-hidden bg-muted">
          <img
            src={image}
            alt={`Service ${title}`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute top-3 right-3 bg-primary text-primary-foreground p-2 rounded-full">
            {icon}
          </div>
        </div>
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-semibold">{title}</h3>
            {details && (
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0"
                onClick={() => setShowDetails(true)}
                aria-label={`Plus d'informations sur ${title}`}
              >
                <Info className="h-4 w-4" />
              </Button>
            )}
          </div>
          <p className="text-muted-foreground mb-4 text-sm">{description}</p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-primary">{price}</span>
            <Button onClick={handleAddToCart}>
              <Plus className="h-4 w-4 mr-2" />
              Ajouter
            </Button>
          </div>
        </CardContent>
      </Card>

      <Dialog open={showDetails} onOpenChange={setShowDetails}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription className="pt-4">{details}</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ServiceCard;
