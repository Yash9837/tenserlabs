import Hero from "@/components/home/Hero";
import ClientMarquee from "@/components/home/ClientMarquee";
import AboutSnippet from "@/components/home/AboutSnippet";
import StatsBar from "@/components/home/StatsBar";
import ServicesSnapshot from "@/components/home/ServicesSnapshot";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Testimonials from "@/components/home/Testimonials";
import CTABanner from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientMarquee />
      <AboutSnippet />
      <StatsBar />
      <ServicesSnapshot />
      <WhyChooseUs />
      <FeaturedProjects />
      <Testimonials />
      <CTABanner />
    </>
  );
}
