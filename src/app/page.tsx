import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import TracksSection from '@/components/sections/TracksSection';
import PricingSection from '@/components/sections/PricingSection';
import InstructorsSection from '@/components/sections/InstructorsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FaqSection from '@/components/sections/FaqSection';
import CtaSection from '@/components/sections/CtaSection';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <FeaturesSection />
      <TracksSection />
      <PricingSection />
      <InstructorsSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </main>
  );
}