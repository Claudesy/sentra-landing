// Architected and built by Claudesy.
// [APPROVED]
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectSlider from "@/components/ProjectSlider";
import Clients from "@/components/Clients";
import SentraSim from "@/components/SentraSim";
import Showcase from "@/components/Showcase";
import Services from "@/components/Services";
import Audrey from "@/components/Audrey";
import About from "@/components/About";
import News from "@/components/News";
import ScrollGallery from "@/components/ScrollGallery";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <Hero />
      <ProjectSlider />
      <About />
      <Clients />
      <SentraSim />
      <Showcase />
      <Services />
      <Audrey />
      <News />
      <ScrollGallery />
      <CTA />
      <Footer />
    </main>
  );
}
