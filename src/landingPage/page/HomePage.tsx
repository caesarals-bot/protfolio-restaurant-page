// import { Navbar } from "@/components/navbar"
// import { HeroSection } from "@/components/hero-section"
// import { BranchesSection } from "@/components/branches-section"
// import { AboutSection } from "@/components/about-section"
// import { MenuPreviewSection } from "@/components/menu-preview-section"
// import { TestimonialsSection } from "@/components/testimonials-section"
// import { Footer } from "@/components/footer"
import Navbar from "@/auth/Navbar"
import Hero from "./Hero"
import Locations from "./Locations"
import About from "./About"
import MenuCarousel from "./MenuCarousel"
import Testimonials from "./Testimonials"
import Footer from "./Footer"

export default function Home() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <Hero />
            <Locations />
            <About />
            <MenuCarousel />
            <Testimonials />
            <Footer />
            {/*
            <BranchesSection />
            <AboutSection />
            <MenuPreviewSection />
            <TestimonialsSection />
            <Footer /> */}
        </main>
    )
}