import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import ServicesSnapshot from "@/components/home/ServicesSnapshot";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import ClientMarquee from "@/components/home/ClientMarquee";
import Testimonials from "@/components/home/Testimonials";
import CTABanner from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesSnapshot />
      <FeaturedProjects />
      <ClientMarquee />
      <Testimonials />
      <CTABanner />
    </>
  );
}
