import Hero from "../components/Hero";
import Services from "../components/Services";
import Industries from "../components/Industries";
import Features from "../components/Features";
import About from "../components/About";
import Locations from "../components/Locations";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Industries />
      <Features />
      <About />
      <Locations />
      <CTA />
    </main>
  );
}
