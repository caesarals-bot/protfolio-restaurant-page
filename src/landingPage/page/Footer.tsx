import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 tracking-tight">Saveur</h3>
            <p className="text-primary-foreground/80">
              Experiencias culinarias que perduran en el corazón
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-accent">Navegación</h4>
            <ul className="space-y-2">
              <li>
                <a href="#menu" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Menú
                </a>
              </li>
              <li>
                <a href="#locations" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Sucursales
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-accent">Horarios</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Lunes - Viernes</li>
              <li className="font-medium text-primary-foreground">12:00 - 23:00</li>
              <li className="mt-3">Sábado - Domingo</li>
              <li className="font-medium text-primary-foreground">11:00 - 00:00</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-accent">Síguenos</h4>
            <div className="flex gap-4">
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2025 Saveur. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
