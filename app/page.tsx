import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoBar from "@/components/LogoBar";
import VeronicaDemo from "@/components/VeronicaDemo";
import AITeam from "@/components/AITeam";
import Features from "@/components/Features";
import Connectors from "@/components/Connectors";
import HowItWorks from "@/components/HowItWorks";
import UseCases from "@/components/UseCases";
import Vision from "@/components/Vision";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <LogoBar />
      <VeronicaDemo />
      <AITeam />
      <Features />
      <Connectors />
      <HowItWorks />
      <UseCases />
      <Vision />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
