import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Dish } from "@/types/menu";


interface DishCardProps {
  dish: Dish;
  onClick: () => void;
}

const DishCard = ({ dish, onClick }: DishCardProps) => {
  return (
    <Card 
      className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
      onClick={onClick}
    >
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={dish.image}
          alt={dish.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <CardHeader className="space-y-2">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-xl font-bold leading-tight">
            {dish.name}
          </CardTitle>
          {dish.isSuggestion && (
            <Badge className="shrink-0 bg-primary text-primary-foreground">
              Sugerencia
            </Badge>
          )}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">
            €{dish.price.toFixed(2)}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="line-clamp-2 text-sm">
          {dish.description}
        </CardDescription>
        {dish.tagline && (
          <p className="mt-3 text-xs italic text-muted-foreground">
            {dish.tagline}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default DishCard;
