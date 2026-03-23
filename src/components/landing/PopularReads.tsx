import { ScrollReveal } from "./ScrollReveal";

const reads = [
  { number: "01", title: "The Definitive Numerology Number Guide", category: "Numerology", href: "https://mysticaldigits.com/how-to-get-your-numerology-number-the-definitive-guide/" },
  { number: "02", title: "Moon Sign Compatibility — Unlock Your Love Code", category: "Astrology", href: "https://mysticaldigits.com/moon-sign-compatibility/" },
  { number: "03", title: "House Numerology — Full Calculation Guide", category: "Numerology", href: "https://mysticaldigits.com/how-to-calculate-house-numerology-full-guide/" },
  { number: "04", title: "Life Path Deep Dive — Your Core Number", category: "Start Here", href: "https://mysticaldigits.com/life-path-deep-dive/" },
  { number: "05", title: "Angel Number 333 — Career & Money Meaning", category: "Angel Numbers", href: "https://mysticaldigits.com/angel-number-333-meaning-in-career-and-money/" },
  { number: "06", title: "Number Synchronicities — Significance Guide", category: "Angel Numbers", href: "https://mysticaldigits.com/number-synchronicities-significance-guide/" },
  { number: "07", title: "Parent-Child Numerology Compatibility", category: "Relationships", href: "https://mysticaldigits.com/numerology-parent-child-relationships-compatibility-guide/" },
  { number: "08", title: "How Numerology Works with Names", category: "Numerology", href: "https://mysticaldigits.com/how-does-numerology-work-with-names/" },
];

const PopularReads = () => {
  return (
    <section className="px-5 py-16 sm:px-6 sm:py-24 md:px-16 lg:px-24">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <p className="font-body text-xs uppercase tracking-[0.2em] text-gold sm:text-sm">
            Most Read
          </p>
          <h2 className="mt-2 font-display text-2xl font-medium leading-[1.15] tracking-tight text-foreground sm:mt-3 sm:text-3xl md:text-4xl">
            Guides readers return to
          </h2>
        </ScrollReveal>

        <div className="mt-8 sm:mt-12">
          {reads.map((read, i) => (
            <ScrollReveal key={read.href} delay={i * 0.05}>
              <a
                href={read.href}
                className="group flex items-start gap-3 border-b border-border py-4 transition-colors hover:border-gold sm:items-baseline sm:gap-4 sm:py-5 md:gap-6"
              >
                <span className="font-body text-[10px] tabular-nums text-gold/60 sm:text-xs">
                  {read.number}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-base font-medium leading-snug text-foreground transition-colors group-hover:text-gold sm:text-lg md:text-xl">
                    {read.title}
                  </h3>
                  <span className="mt-1 block font-body text-[10px] uppercase tracking-[0.12em] text-muted-foreground sm:hidden">
                    {read.category}
                  </span>
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
