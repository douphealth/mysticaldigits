import { ScrollReveal } from "./ScrollReveal";

const reads = [
  {
    number: "01",
    title: "The Definitive Numerology Number Guide",
    category: "Numerology",
    href: "https://mysticaldigits.com/how-to-get-your-numerology-number-the-definitive-guide/",
  },
  {
    number: "02",
    title: "Moon Sign Compatibility — Unlock Your Love Code",
    category: "Astrology",
    href: "https://mysticaldigits.com/moon-sign-compatibility/",
  },
  {
    number: "03",
    title: "House Numerology — Full Calculation Guide",
    category: "Numerology",
    href: "https://mysticaldigits.com/how-to-calculate-house-numerology-full-guide/",
  },
  {
    number: "04",
    title: "Life Path Deep Dive — Your Core Number",
    category: "Start Here",
    href: "https://mysticaldigits.com/life-path-deep-dive/",
  },
  {
    number: "05",
    title: "Angel Number 333 — Career & Money Meaning",
    category: "Angel Numbers",
    href: "https://mysticaldigits.com/angel-number-333-meaning-in-career-and-money/",
  },
  {
    number: "06",
    title: "Number Synchronicities — Significance Guide",
    category: "Angel Numbers",
    href: "https://mysticaldigits.com/number-synchronicities-significance-guide/",
  },
  {
    number: "07",
    title: "Parent-Child Numerology Compatibility",
    category: "Relationships",
    href: "https://mysticaldigits.com/numerology-parent-child-relationships-compatibility-guide/",
  },
  {
    number: "08",
    title: "How Numerology Works with Names",
    category: "Numerology",
    href: "https://mysticaldigits.com/how-does-numerology-work-with-names/",
  },
];

const PopularReads = () => {
  return (
    <section className="px-6 py-24 md:px-16 lg:px-24">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <p className="font-body text-sm uppercase tracking-[0.2em] text-gold">
            Most Read
          </p>
          <h2 className="mt-3 font-display text-3xl font-medium leading-[1.15] tracking-tight text-foreground md:text-4xl">
            Guides readers return to
          </h2>
        </ScrollReveal>

        <div className="mt-12">
          {reads.map((read, i) => (
            <ScrollReveal key={read.href} delay={i * 0.05}>
              <a
                href={read.href}
                className="group flex items-baseline gap-4 border-b border-border py-5 transition-colors hover:border-gold md:gap-6"
              >
                <span className="font-body text-xs tabular-nums text-gold/60">
                  {read.number}
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-medium text-foreground transition-colors group-hover:text-gold md:text-xl">
                    {read.title}
                  </h3>
                </div>
                <span className="hidden font-body text-xs uppercase tracking-[0.12em] text-muted-foreground sm:block">
                  {read.category}
                </span>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularReads;
