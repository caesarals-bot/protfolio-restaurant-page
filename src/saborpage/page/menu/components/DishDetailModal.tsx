import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import type { Dish } from "@/types/menu";

interface DishDetailModalProps {
  dish: Dish | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DishDetailModal = ({ dish, open, onOpenChange }: DishDetailModalProps) => {
  if (!dish) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted mb-4">
          <img
            src={dish.image}
            alt={dish.name}
            className="h-full w-full object-cover"
          />
        </div>
        <DialogHeader>
          <div className="flex items-start justify-between gap-4">
            <DialogTitle className="text-3xl font-bold">
              {dish.name}
            </DialogTitle>
            {dish.isSuggestion && (
              <Badge className="shrink-0 bg-primary text-primary-foreground">
                Sugerencia del Día
              </Badge>
            )}
          </div>
          <div className="flex items-center gap-2 pt-2">
            <span className="text-3xl font-bold text-primary">
              €{dish.price.toFixed(2)}
            </span>
          </div>
        </DialogHeader>
        <DialogDescription className="text-base leading-relaxed text-foreground pt-4">
          {dish.fullDescription}
        </DialogDescription>
        {dish.tagline && (
          <p className="text-sm italic text-muted-foreground border-l-4 border-primary pl-4 mt-4">
            {dish.tagline}
          </p>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DishDetailModal;
