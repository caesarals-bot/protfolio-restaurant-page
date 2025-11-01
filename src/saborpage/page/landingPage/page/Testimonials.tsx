import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "María González",
    comment: "Una experiencia gastronómica excepcional. Cada plato es una obra de arte que deleita el paladar. El servicio es impecable y el ambiente simplemente mágico.",
  },
  {
    id: 2,
    name: "Carlos Ruiz",
    comment: "Sin duda el mejor restaurante de la ciudad. La atención al detalle es extraordinaria y los sabores son inolvidables. Perfecto para ocasiones especiales.",
  },
  {
    id: 3,
    name: "Ana Martínez",
    comment: "Cada visita supera nuestras expectativas. El chef crea platos innovadores sin perder la esencia de la buena cocina. Altamente recomendado.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Lo Que Dicen Nuestros Clientes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-8">
                <Quote aria-hidden="true" className="mb-4 text-amber-400" size={32} />
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {testimonial.comment}
                </p>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      aria-hidden="true"
                      className="fill-amber-400 text-amber-400"
                      size={18}
                    />
                  ))}
                </div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
