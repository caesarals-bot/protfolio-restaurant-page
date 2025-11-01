import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router";

const useNavbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === "/";

    const scrollToSection = useCallback((hash: string) => {
        if (!hash) return;

        const section = document.querySelector(hash);
        if (!section) return;

        section.scrollIntoView({ behavior: "smooth", block: "start" });
    }, []);

    const handleReserveClick = useCallback(() => {
        scrollToSection("#reservas");
    }, [scrollToSection]);

    const handleSectionNavigate = useCallback(
        (hash: string) => {
            scrollToSection(hash);
        },
        [scrollToSection]
    );

    const handleMobileSectionNavigate = useCallback(
        (hash: string) => {
            scrollToSection(hash);
            setIsMobileMenuOpen(false);
        },
        [scrollToSection]
    );

    const handleToggleMobileMenu = useCallback(() => {
        setIsMobileMenuOpen((prev) => !prev);
    }, []);

    const closeMobileMenu = useCallback(() => {
        setIsMobileMenuOpen(false);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (location.hash) {
            scrollToSection(location.hash);
        }
    }, [location.hash, scrollToSection]);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    return {
        isScrolled,
        isMobileMenuOpen,
        isHome,
        handleReserveClick,
        handleSectionNavigate,
        handleMobileSectionNavigate,
        handleToggleMobileMenu,
        closeMobileMenu,
    };
};

export default useNavbar;
