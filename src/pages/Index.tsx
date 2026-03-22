import HeroSection from "@/components/landing/HeroSection";
import FeaturedGuides from "@/components/landing/FeaturedGuides";
import CategoryPaths from "@/components/landing/CategoryPaths";
import PopularReads from "@/components/landing/PopularReads";
import FooterCTA from "@/components/landing/FooterCTA";

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <HeroSection />
      <FeaturedGuides />
      <CategoryPaths />
      <PopularReads />
      <FooterCTA />
    </main>
  );
};

export default Index;
