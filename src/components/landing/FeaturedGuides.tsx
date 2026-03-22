import { ScrollReveal } from "./ScrollReveal";

const guides = [
  {
    category: "Numerology",
    title: "How to Get Your Numerology Number — The Definitive Guide",
    description:
      "Begin with the essential structure of numerology and learn how your core numbers shape meaning, personality, and purpose.",
    href: "https://mysticaldigits.com/how-to-get-your-numerology-number-the-definitive-guide/",
    image:
      "https://mysticaldigits.com/wp-content/uploads/2025/03/realistic-photo-showing-calculate-your-numerology-number-relating-to-how-to-get-your-numerology-number-the-definitive-guide-detailed-photography-no-text-67ddbac79496e.jpg",
  },
  {
    category: "Astrology",
    title: "Moon Sign Compatibility — Unlock Your Love Code",
    description:
      "Understand emotional chemistry, relational patterns, and deeper connection through moon sign analysis.",
    href: "https://mysticaldigits.com/moon-sign-compatibility/",
    image:
      "https://mysticaldigits.com/wp-content/uploads/2025/03/realistic-photo-showing-find-your-moon-sign-now-relating-to-unlock-your-love-code-a-simple-guide-to-moon-sign-compatibility-detailed-photography-no-text-67ddbacb28263.jpg",
  },
  {
    category: "Numerology",
    title: "House Numerology — Decode Your Home's Energy",
    description:
      "Discover the energetic signature of the spaces where you live and grow using house number interpretation.",
    href: "https://mysticaldigits.com/how-to-calculate-house-numerology-full-guide/",
    image:
      "https://mysticaldigits.com/wp-content/uploads/2025/03/realistic-photo-showing-key-takeaways-relating-to-how-to-get-your-numerology-number-the-definitive-guide-detailed-photography-no-text-67ddbac04801c.jpg",
  },
  {
    category: "Angel Numbers",
    title: "Angel Number 333 — Career, Money & Meaning",
    description:
      "Practical guide to recurring number signs, spiritual synchronicity, purpose, and financial timing.",
    href: "https://mysticaldigits.com/angel-number-333-meaning-in-career-and-money/",
    image:
      "https://mysticaldigits.com/wp-content/uploads/2025/09/astrological-birth-chart-wheel-2025.jpg",
  },
];

const FeaturedGuides = () => {
  return (
    <section className="px-6 py-24 md:px-16 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="font-body text-sm uppercase tracking-[0.2em] text-gold">
            Featured Insights
          </p>
          <h2 className="mt-3 font-display text-3xl font-medium leading-[1.15] tracking-tight text-foreground md:text-4xl">
            Start with the guides that matter most
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {guides.map((guide, i) => (
            <ScrollReveal key={guide.href} delay={i * 0.1}>
              <a
                href={guide.href}
                className="group block overflow-hidden border-t-2 border-gold bg-background transition-shadow hover:shadow-lg"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <span className="font-body text-xs uppercase tracking-[0.15em] text-gold">
                    {guide.category}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-medium leading-snug text-foreground md:text-2xl">
                    {guide.title}
                  </h3>
                  <p className="mt-3 font-body text-base leading-relaxed text-muted-foreground text-pretty">
                    {guide.description}
                  </p>
                  <span className="mt-4 inline-block font-body text-sm font-medium text-foreground transition-colors group-hover:text-gold">
                    Read the guide →
                  </span>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGuides;
