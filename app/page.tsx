import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import LiveExperienceSection from "@/components/LiveExperienceSection";
import Philosophy from "@/components/Philosophy";
import Services from "@/components/Services";
import Productions from "@/components/Productions";
import LiveSection from "@/components/LiveSection";
import Clients from "@/components/Clients";
import SuccessCases from "@/components/SuccessCases";
import Experience from "@/components/Experience";
import Team from "@/components/Team";
import Coverage from "@/components/Coverage";
import CommercialCTA from "@/components/CommercialCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <LiveExperienceSection />
      <Philosophy />
      <Services />
      <Productions />
      <LiveSection />
      <Experience />
      <Team />
      <Coverage />
      <Clients />
      <SuccessCases />
      <CommercialCTA />
      <Contact />
      <Footer />
    </main>
  );
}