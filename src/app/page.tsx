import { Hero } from "@/components/home/hero";
import { Skills } from "@/components/home/skills";
import { CustomerLogoSlider } from "@/components/home/tech-marquee";
import { ReadyToShipProducts } from "@/components/home/ready-to-ship-products";
import { FeaturedProducts } from "@/components/home/featured-projects";
import { WhyChooseUs } from "@/components/home/why-choose-us";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/20">
      <main className="flex-1 overflow-x-hidden">
        <Hero />
        <CustomerLogoSlider />
        <Skills />
        <ReadyToShipProducts />
        <FeaturedProducts />
        <WhyChooseUs />
      </main>
    </div>
  );
}
