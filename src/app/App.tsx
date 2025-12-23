import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ContactForm } from './components/ContactForm';
import { StatsSection } from './components/StatsSection';
import { BenefitsSection } from './components/BenefitsSection';
import { ProcessSection } from './components/ProcessSection';
import { PricingSection } from './components/PricingSection';
import { TrustSection } from './components/TrustSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ContactForm />
        </div>
      </section>
      
      <StatsSection />
      <BenefitsSection />
      <ProcessSection />
      <PricingSection />
      <TrustSection />
      <TestimonialsSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}
