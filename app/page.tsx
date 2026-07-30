import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
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
      <Philosophy />
      <Services />
      <Productions />
      <LiveSection />
      <Clients />
      <SuccessCases />
      <Experience />
      <Team />
      <Coverage />
      <CommercialCTA />
      <Contact />
      <Footer />
    </main>
  );
}
