import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const handleReserveClick = () => {
        window.location.assign("#reservas");
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-primary/95 backdrop-blur-md shadow-lg" : "bg-primary/20 backdrop-blur-sm"
                }`}
        >
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-primary-foreground tracking-tight">
                        Sabor & Amor
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#menu" className="text-primary-foreground hover:text-accent transition-colors">
                            Menú
                        </a>
                        <a href="#locations" className="text-primary-foreground hover:text-accent transition-colors">
                            Sucursales
                        </a>
                        <a href="#about" className="text-primary-foreground hover:text-accent transition-colors">
                            Nosotros
                        </a>
                    </div>

                    <Button
                        variant="gold"
                        size="lg"
                        aria-label="Reservar ahora"
                        onClick={handleReserveClick}
                    >
                        Reservar Ahora
                    </Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
