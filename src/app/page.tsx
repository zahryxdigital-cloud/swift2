import HeroSlider from "@/components/hero-slider";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import WhyChooseUs from "@/components/why-choose-us";
import StatsSection from "@/components/stats-section";
import Testimonials from "@/components/testimonials";
import CTASection from "@/components/cta-section";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <ServicesSection />
      <StatsSection />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </>
  );
}
