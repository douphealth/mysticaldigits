import HeroSection from "@/components/landing/HeroSection";
import QuickInsights from "@/components/landing/QuickInsights";
import CalculatorHub from "@/components/landing/CalculatorHub";
import FeaturedGuides from "@/components/landing/FeaturedGuides";
import CategoryPaths from "@/components/landing/CategoryPaths";
import PopularReads from "@/components/landing/PopularReads";
import FAQSection from "@/components/landing/FAQSection";
import FooterCTA from "@/components/landing/FooterCTA";

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Mystical Digits",
  url: "https://mysticaldigits.com",
  description:
    "Curated numerology, astrology, angel numbers, and spiritual insight guides.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://mysticaldigits.com/?s={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Mystical Digits",
  url: "https://mysticaldigits.com",
  logo: "https://mysticaldigits.com/wp-content/uploads/2025/03/mystical-digits-logo.png",
  sameAs: [],
};

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([websiteSchema, orgSchema]) }}
      />
      <HeroSection />
      <QuickInsights />
      <CalculatorHub />
      <FeaturedGuides />
      <CategoryPaths />
      <PopularReads />
      <FAQSection />
      <FooterCTA />
    </main>
  );
};

export default Index;
