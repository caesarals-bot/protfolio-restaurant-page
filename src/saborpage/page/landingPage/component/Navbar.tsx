import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { useCallback } from "react";

import { Button } from "@/components/ui/button";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === "/";

    const handleReserveClick = () => {
        const section = document.querySelector("#reservas");
        section?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const handleSectionNavigate = useCallback((hash: string) => {
        if (!hash) return;
        const section = document.querySelector(hash);
        section?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (location.hash) {
            handleSectionNavigate(location.hash);
        }
    }, [location, handleSectionNavigate]);

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

                    {isHome ? (
                        <div className="hidden md:flex items-center space-x-8">
                            <Link
                                to="/#menu"
                                className="text-primary-foreground hover:text-accent transition-colors"
                                onClick={() => handleSectionNavigate("#menu")}
                            >
                                Nuestros Sabores
                            </Link>
                            <Link
                                to="/#locations"
                                className="text-primary-foreground hover:text-accent transition-colors"
                                onClick={() => handleSectionNavigate("#locations")}
                            >
                                Sucursales
                            </Link>
                            <Link
                                to="/#about"
                                className="text-primary-foreground hover:text-accent transition-colors"
                                onClick={() => handleSectionNavigate("#about")}
                            >
                                Nosotros
                            </Link>
                            <Link
                                to="/menu"
                                className="text-primary-foreground hover:text-accent transition-colors"
                            >
                                Menú
                            </Link>
                        </div>
                    ) : (
                        <div className="hidden md:flex items-center space-x-8">
                            <Link
                                to="/"
                                className="text-primary-foreground hover:text-accent transition-colors"
                            >
                                Home
                            </Link>
                            <Link
                                to="/menu"
                                className="text-primary-foreground hover:text-accent transition-colors"
                            >
                                Menú
                            </Link>
                        </div>
                    )}

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
