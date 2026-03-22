import { ScrollReveal } from "./ScrollReveal";

const categories = [
  {
    symbol: "✦",
    title: "Numerology",
    description:
      "Life path numbers, cycles, compatibility codes, home energy, and meaning through numbers.",
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
    description:
      "Birth chart symbolism, zodiac insight, moon sign energy, and emotional pattern interpretation.",
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
    description:
      "Recurring number signs, synchronicity patterns, spiritual timing, and divine guidance.",
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
    description:
      "Compatibility, relationship energy, attraction, and emotionally intelligent spiritual guidance.",
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
    <section className="bg-sage/50 px-6 py-24 md:px-16 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="font-body text-sm uppercase tracking-[0.2em] text-gold">
            Explore by Topic
          </p>
          <h2 className="mt-3 font-display text-3xl font-medium leading-[1.15] tracking-tight text-foreground md:text-4xl">
            Four paths into the mystical world
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <ScrollReveal key={cat.title} delay={i * 0.08}>
              <div className="flex h-full flex-col border border-border bg-background p-6 transition-shadow hover:shadow-md">
                <span className="text-2xl">{cat.symbol}</span>
                <h3 className="mt-4 font-display text-xl font-medium text-foreground">
                  {cat.title}
                </h3>
                <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-muted-foreground">
                  {cat.description}
                </p>
                <div className="mt-5 flex flex-col gap-2 border-t border-border pt-4">
                  {cat.posts.map((post) => (
                    <a
                      key={post.href}
                      href={post.href}
                      className="font-body text-sm text-foreground underline decoration-gold/40 underline-offset-2 transition-colors hover:text-gold hover:decoration-gold"
                    >
                      {post.title}
                    </a>
                  ))}
                </div>
                <a
                  href={cat.href}
                  className="mt-4 inline-block font-body text-sm font-medium text-gold transition-opacity hover:opacity-80"
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
