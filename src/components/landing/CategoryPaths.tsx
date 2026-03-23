import { ScrollReveal } from "./ScrollReveal";

const categories = [
  {
    symbol: "✦",
    title: "Numerology",
    description: "Life path numbers, cycles, compatibility codes, home energy, and meaning through numbers.",
    href: "https://mysticaldigits.com/category/numerology/",
    posts: [
      { title: "Life Path Deep Dive", href: "https://mysticaldigits.com/life-path-deep-dive/" },
      { title: "Numerology Chart Guide", href: "https://mysticaldigits.com/how-do-i-figure-out-my-numerology-chart/" },
      { title: "Name Numerology", href: "https://mysticaldigits.com/how-does-numerology-work-with-names/" },
    ],
  },
  {
    symbol: "☾",
    title: "Astrology",
    description: "Birth chart symbolism, zodiac insight, moon sign energy, and emotional pattern interpretation.",
    href: "https://mysticaldigits.com/category/astrology/",
    posts: [
      { title: "Moon Sign Compatibility", href: "https://mysticaldigits.com/moon-sign-compatibility/" },
      { title: "Astrology & Self Discovery", href: "https://mysticaldigits.com/astrology-and-self-discovery/" },
      { title: "Relationship Advice", href: "https://mysticaldigits.com/astrology-and-relationships-advice/" },
    ],
  },
  {
    symbol: "∞",
    title: "Angel Numbers",
    description: "Recurring number signs, synchronicity patterns, spiritual timing, and divine guidance.",
    href: "https://mysticaldigits.com/angel-number-333-meaning-in-career-and-money/",
    posts: [
      { title: "Angel Number 333", href: "https://mysticaldigits.com/angel-number-333-meaning-in-career-and-money/" },
      { title: "Number Synchronicities", href: "https://mysticaldigits.com/number-synchronicities-significance-guide/" },
      { title: "Angel Numbers in Numerology", href: "https://mysticaldigits.com/exploring-the-meaning-of-angel-numbers-in-numerology/" },
    ],
  },
  {
    symbol: "♡",
    title: "Relationships & Growth",
    description: "Compatibility, relationship energy, attraction, and emotionally intelligent spiritual guidance.",
    href: "https://mysticaldigits.com/category/numerology-in-relationships/",
    posts: [
      { title: "Parent-Child Compatibility", href: "https://mysticaldigits.com/numerology-parent-child-relationships-compatibility-guide/" },
      { title: "Life Path 6 Compatibility", href: "https://mysticaldigits.com/life-path-number-6-traits-compatibility-and-more/" },
      { title: "Number Nine Meaning", href: "https://mysticaldigits.com/embrace-your-life-number-exploring-number-nine/" },
    ],
  },
];

const CategoryPaths = () => {
  return (
    <section className="bg-sage/50 px-5 py-16 sm:px-6 sm:py-24 md:px-16 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="font-body text-xs uppercase tracking-[0.2em] text-gold sm:text-sm">
            Explore by Topic
          </p>
          <h2 className="mt-2 font-display text-2xl font-medium leading-[1.15] tracking-tight text-foreground sm:mt-3 sm:text-3xl md:text-4xl">
            Four paths into the mystical world
          </h2>
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-16 sm:gap-6 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <ScrollReveal key={cat.title} delay={i * 0.08}>
              <div className="flex h-full flex-col border border-border bg-background p-4 transition-shadow hover:shadow-md sm:p-6">
                <span className="text-xl sm:text-2xl">{cat.symbol}</span>
                <h3 className="mt-2.5 font-display text-base font-medium text-foreground sm:mt-4 sm:text-xl">
                  {cat.title}
                </h3>
                <p className="mt-1.5 flex-1 font-body text-xs leading-relaxed text-muted-foreground sm:mt-2 sm:text-sm">
                  {cat.description}
                </p>
                <div className="mt-3 flex flex-col gap-1.5 border-t border-border pt-3 sm:mt-5 sm:gap-2 sm:pt-4">
                  {cat.posts.map((post) => (
                    <a
                      key={post.href}
                      href={post.href}
                      className="font-body text-xs text-foreground underline decoration-gold/40 underline-offset-2 transition-colors hover:text-gold hover:decoration-gold sm:text-sm"
                    >
                      {post.title}
                    </a>
                  ))}
                </div>
                <a
                  href={cat.href}
                  className="mt-3 inline-block font-body text-xs font-medium text-gold transition-opacity hover:opacity-80 sm:mt-4 sm:text-sm"
                >
                  Browse all →
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryPaths;
