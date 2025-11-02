import { Link } from "react-router";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import useNavbar from "@/saborpage/hooks/useNavbar";

const Navbar = () => {
    const {
        isScrolled,
        isMobileMenuOpen,
        isHome,
        handleReserveClick,
        handleSectionNavigate,
        handleMobileSectionNavigate,
        handleToggleMobileMenu,
        closeMobileMenu,
    } = useNavbar();

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
                            <Link
                                to="/sugerencias"
                                className="text-primary-foreground hover:text-accent transition-colors"
                            >
                                Sugerencias
                            </Link>
                        </div>
                    )}

                    <div className="hidden md:block">
                        <Button
                            variant="gold"
                            size="lg"
                            aria-label="Reservar ahora"
                            onClick={handleReserveClick}
                        >
                            Reservar Ahora
                        </Button>
                    </div>

                    <div className="flex items-center gap-3 md:hidden">
                        <Button
                            variant="gold"
                            size="sm"
                            aria-label="Reservar ahora"
                            onClick={() => {
                                handleReserveClick();
                                closeMobileMenu();
                            }}
                        >
                            Reservar
                        </Button>
                        <button
                            type="button"
                            onClick={handleToggleMobileMenu}
                            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
                            aria-expanded={isMobileMenuOpen}
                            aria-controls="mobile-navigation"
                            className="p-2 rounded-md text-primary-foreground hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                        >
                            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div
                    id="mobile-navigation"
                    className="md:hidden bg-primary/95 backdrop-blur-md border-t border-primary/30"
                >
                    <div className="container mx-auto px-4 py-6 space-y-4 text-primary-foreground">
                        {isHome ? (
                            <div className="flex flex-col space-y-3">
                                <button
                                    type="button"
                                    className="text-left text-lg hover:text-accent transition-colors"
                                    onClick={() => handleMobileSectionNavigate("#menu")}
                                >
                                    Nuestros Sabores
                                </button>
                                <button
                                    type="button"
                                    className="text-left text-lg hover:text-accent transition-colors"
                                    onClick={() => handleMobileSectionNavigate("#locations")}
                                >
                                    Sucursales
                                </button>
                                <button
                                    type="button"
                                    className="text-left text-lg hover:text-accent transition-colors"
                                    onClick={() => handleMobileSectionNavigate("#about")}
                                >
                                    Nosotros
                                </button>
                                <Link
                                    to="/menu"
                                    className="text-lg hover:text-accent transition-colors"
                                    onClick={closeMobileMenu}
                                >
                                    Menú
                                </Link>
                            </div>
                        ) : (
                            <div className="flex flex-col space-y-3">
                                <Link
                                    to="/"
                                    className="text-lg hover:text-accent transition-colors"
                                    onClick={closeMobileMenu}
                                >
                                    Home
                                </Link>
                                <Link
                                    to="/menu"
                                    className="text-lg hover:text-accent transition-colors"
                                    onClick={closeMobileMenu}
                                >
                                    Menú
                                </Link>
                                <Link
                                    to="/sugerencias"
                                    className="text-lg hover:text-accent transition-colors"
                                    onClick={closeMobileMenu}
                                >
                                    Sugerencias
                                </Link>
                            </div>
                        )}

                        <Button
                            variant="gold"
                            size="lg"
                            className="w-full"
                            aria-label="Reservar ahora"
                            onClick={() => {
                                handleReserveClick();
                                closeMobileMenu();
                            }}
                        >
                            Reservar Ahora
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
