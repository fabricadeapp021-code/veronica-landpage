import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AITeam from "@/components/AITeam";
import Features from "@/components/Features";
import Connectors from "@/components/Connectors";
import HowItWorks from "@/components/HowItWorks";
import UseCases from "@/components/UseCases";
import Vision from "@/components/Vision";
import Testimonials from "@/components/Testimonials";
import Deployment from "@/components/Deployment";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import VeronicaChatBubble from "@/components/VeronicaChatBubble";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <AITeam />
      <Features />
      <Connectors />
      <HowItWorks />
      <UseCases />
      <Vision />
      <Testimonials />
      <Deployment />
      <Pricing />
      <CTA />
      <Footer />
      <VeronicaChatBubble />
    </main>
  );
}
