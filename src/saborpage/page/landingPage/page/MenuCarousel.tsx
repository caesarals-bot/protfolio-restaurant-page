import { useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";
import dish4 from "@/assets/dish-4.jpg";

const dishes = [
  { id: 1, name: "Filete Premium", image: dish1 },
  { id: 2, name: "Pasta de Mar", image: dish2 },
  { id: 3, name: "Postre Exquisito", image: dish3 },
  { id: 4, name: "Sushi Selection", image: dish4 },
];

const MenuCarousel = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleMediaChange = (event: MediaQueryListEvent) => {
      setIsDesktop(event.matches);
    };

    setIsDesktop(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleMediaChange);

    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  useEffect(() => {
    if (!carouselApi || isDesktop) {
      return;
    }

    const autoplay = () => {
      if (!carouselApi) {
        return;
      }

      if (carouselApi.canScrollNext()) {
        carouselApi.scrollNext();
        return;
      }

      carouselApi.scrollTo(0);
    };

    const intervalId = window.setInterval(autoplay, 4500);

    return () => window.clearInterval(intervalId);
  }, [carouselApi, isDesktop]);

  return (
    <section id="menu" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Descubre Nuestros Sabores
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Una selección de nuestros platos más emblemáticos
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
          setApi={setCarouselApi}
        >
          <CarouselContent>
            {dishes.map((dish) => (
              <CarouselItem key={dish.id} className="md:basis-1/2 lg:basis-1/3">
                <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <h3 className="text-primary-foreground text-2xl font-bold">{dish.name}</h3>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex md:left-4 md:top-1/2 md:-translate-y-1/2 md:bg-background/90 md:text-foreground" />
          <CarouselNext className="hidden md:flex md:right-4 md:top-1/2 md:-translate-y-1/2 md:bg-background/90 md:text-foreground" />
        </Carousel>

        <div className="text-center mt-12">
          <Button asChild variant="gold" size="lg">
            <Link to="/menu">Ver Menú Completo</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuCarousel;
