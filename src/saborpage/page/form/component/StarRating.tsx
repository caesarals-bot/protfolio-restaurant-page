import { Star } from "lucide-react";
import { useState } from "react";

interface StarRatingProps {
  value: number;
  onChange: (value: number) => void;
}

export const StarRating = ({ value, onChange }: StarRatingProps) => {
  const [hover, setHover] = useState(0);

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onChange(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          className="transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
        >
          <Star
            className={`w-7 h-7 transition-colors ${
              star <= (hover || value)
                ? "fill-yellow-400 text-yellow-500"
                : "fill-transparent text-stone-300"
            }`}
          />
        </button>
      ))}
    </div>
  );
};
