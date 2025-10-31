import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import location1 from "@/assets/location-1.jpg";
import location2 from "@/assets/location-2.jpg";
import location3 from "@/assets/location-3.jpg";

const locations = [
  {
    id: 1,
    name: "Centro",
    address: "Av. Principal 123, Centro Histórico",
    image: location1,
  },
  {
    id: 2,
    name: "Terraza",
    address: "Rooftop Plaza del Sol, Piso 12",
    image: location2,
  },
  {
    id: 3,
    name: "Clásica",
    address: "Calle de las Delicias 456",
    image: location3,
  },
];

const Locations = () => {
  return (
    <section id="locations" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Nuestras Sucursales
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Encuentra tu espacio perfecto para disfrutar
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((location) => (
            <Card
              key={location.id}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-border/20 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <CardHeader className="p-0">
                <img
                  src={location.image}
                  alt={location.name}
                  className="h-48 w-full object-cover sm:h-56"
                />
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-3 p-5 md:p-6">
                <h3 className="text-xl font-semibold text-foreground md:text-2xl">{location.name}</h3>
                <div className="flex items-start text-sm text-muted-foreground md:text-base">
                  <MapPin className="mr-2 mt-1 flex-shrink-0" size={16} aria-hidden="true" />
                  <p>{location.address}</p>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-3 p-5 pt-0 md:flex-row md:p-6">
                <Button variant="gold" size="sm" className="w-full rounded-lg md:flex-1">
                  Reservar aquí
                </Button>
                <Button variant="outline" size="sm" className="w-full rounded-lg md:flex-1">
                  Ver Menú
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
