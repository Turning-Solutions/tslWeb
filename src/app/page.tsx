import { Hero } from "@/components/home/hero";
import { Skills } from "@/components/home/skills";
import { TechMarquee } from "@/components/home/tech-marquee";
import { ServicesOverview } from "@/components/home/services-overview";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { CallToAction } from "@/components/home/cta-section";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/20">
      <main className="flex-1 overflow-x-hidden">
        <Hero />
        <Skills />
        <TechMarquee />
        <ServicesOverview />
        <FeaturedProjects />
        <WhyChooseUs />
        <CallToAction />
      </main>
    </div>
  );
}
