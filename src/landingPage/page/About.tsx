import { Button } from "@/components/ui/button";
import aboutImg from "@/assets/about.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img
              src={aboutImg}
              alt="Nuestro chef"
              className="w-full h-[600px] object-cover rounded-lg shadow-2xl"
            />
          </div>

          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Sobre Nosotros
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Desde 1995, hemos dedicado nuestra pasión a crear experiencias gastronómicas únicas. 
              Nuestro equipo de chefs expertos combina técnicas tradicionales con innovación 
              contemporánea para ofrecerte platos que deleitan todos los sentidos.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Cada ingrediente es cuidadosamente seleccionado, cada plato es una obra de arte, 
              y cada visita es una celebración de los mejores sabores de nuestra cocina.
            </p>
            <Button variant="link" className="text-accent p-0 text-lg">
              Conoce nuestra historia →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
