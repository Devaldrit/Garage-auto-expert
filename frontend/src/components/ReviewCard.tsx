import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface ReviewCardProps {
  name: string;
  vehicle: string;
  rating: number;
  comment: string;
  date: string;
}

const ReviewCard = ({ name, vehicle, rating, comment, date }: ReviewCardProps) => {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h4 className="font-semibold text-lg">{name}</h4>
            <p className="text-sm text-muted-foreground">{vehicle}</p>
          </div>
          <div className="flex items-center space-x-1" aria-label={`Note: ${rating} sur 5 étoiles`}>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < rating ? "fill-accent text-accent" : "text-muted"
                }`}
              />
            ))}
          </div>
        </div>
        <p className="text-foreground leading-relaxed mb-3">{comment}</p>
        <time className="text-xs text-muted-foreground" dateTime={date}>
          {new Date(date).toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
