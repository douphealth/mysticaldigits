import { useEffect, useRef, useState } from "react";
import { ScrollReveal } from "./ScrollReveal";

const articles = [
  { title: "Life Path Number Deep Dive: Your Complete Guide", category: "Numerology", href: "https://mysticaldigits.com/life-path-deep-dive/", date: "Mar 2026" },
  { title: "Moon Sign Compatibility: Find Your Perfect Match", category: "Astrology", href: "https://mysticaldigits.com/moon-sign-compatibility/", date: "Mar 2026" },
  { title: "How to Calculate House Numerology — Full Guide", category: "Numerology", href: "https://mysticaldigits.com/how-to-calculate-house-numerology-full-guide/", date: "Mar 2026" },
  { title: "Angel Number 1111: Why You Keep Seeing It", category: "Angel Numbers", href: "https://mysticaldigits.com/angel-number-1111/", date: "Feb 2026" },
  { title: "How Does Numerology Work with Names?", category: "Numerology", href: "https://mysticaldigits.com/how-does-numerology-work-with-names/", date: "Feb 2026" },
  { title: "Zodiac Signs and Their Hidden Numerology Connections", category: "Astrology", href: "https://mysticaldigits.com/category/astrology/", date: "Feb 2026" },
  { title: "Master Numbers 11, 22 & 33 Explained", category: "Numerology", href: "https://mysticaldigits.com/category/numerology/", date: "Jan 2026" },
  { title: "Numerology in Relationships: The Ultimate Compatibility Guide", category: "Relationships", href: "https://mysticaldigits.com/category/numerology-in-relationships/", date: "Jan 2026" },
  { title: "Personal Year Number: What This Year Holds for You", category: "Numerology", href: "https://mysticaldigits.com/category/numerology/", date: "Jan 2026" },
  { title: "Angel Number 444: Meaning & Spiritual Guidance", category: "Angel Numbers", href: "https://mysticaldigits.com/category/numerology/", date: "Dec 2025" },
];

const categoryColors: Record<string, string> = {
  Numerology: "bg-gold/15 text-gold",
  Astrology: "bg-accent/15 text-accent-foreground",
  "Angel Numbers": "bg-sage-deep/30 text-foreground",
  Relationships: "bg-gold-light/20 text-foreground",
};

const ArticleCard = ({ title, category, href, date }: (typeof articles)[0]) => (
  <a
    href={href}
    className="group flex w-[260px] shrink-0 flex-col border border-border bg-background p-4 transition-all duration-300 hover:border-gold/50 hover:shadow-[0_4px_24px_-4px_hsl(var(--gold)/0.12)] active:scale-[0.97] sm:w-[320px] sm:p-5 md:w-[360px]"
  >
    <div className="flex items-center justify-between">
      <span
        className={`inline-block rounded-sm px-2 py-0.5 font-body text-[10px] font-medium uppercase tracking-[0.12em] sm:px-2.5 sm:text-[11px] ${
          categoryColors[category] || "bg-muted text-muted-foreground"
        }`}
      >
        {category}
      </span>
      <span className="font-body text-[10px] text-muted-foreground sm:text-[11px]">{date}</span>
    </div>
    <p className="mt-2.5 font-display text-sm font-medium leading-snug text-foreground transition-colors group-hover:text-gold sm:mt-3 sm:text-base md:text-lg">
      {title}
    </p>
    <span className="mt-auto pt-3 font-body text-[10px] font-medium tracking-wide text-gold opacity-0 transition-opacity duration-200 group-hover:opacity-100 sm:pt-4 sm:text-xs">
      Read Article →
    </span>
  </a>
);

const TrendingCarousel = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const animRef = useRef<number>(0);
  const posRef = useRef(0);

  const items = [...articles, ...articles];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const speed = 0.5;
    const singleSetWidth = track.scrollWidth / 2;

    const tick = () => {
      if (!isPaused) {
        posRef.current -= speed;
        if (Math.abs(posRef.current) >= singleSetWidth) {
          posRef.current = 0;
        }
        track.style.transform = `translateX(${posRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(tick);
    };

    animRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animRef.current);
  }, [isPaused]);

  return (
    <section className="overflow-hidden border-y border-border bg-background py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-16 lg:px-24">
        <ScrollReveal>
          <div className="flex items-end justify-between">
            <div>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60" />
                  <span className="relative inline-flex h-full w-full rounded-full bg-gold" />
                </span>
                <p className="font-body text-xs uppercase tracking-[0.2em] text-gold sm:text-sm">
                  Trending Now
                </p>
              </div>
              <h2 className="mt-2 font-display text-xl font-medium tracking-tight text-foreground sm:mt-3 sm:text-2xl md:text-3xl">
                Latest from the reading room
              </h2>
            </div>
            <a
              href="https://mysticaldigits.com"
              className="hidden font-body text-sm font-medium text-muted-foreground transition-colors hover:text-foreground md:block"
            >
              View all articles →
            </a>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.15}>
        <div
          className="mt-6 cursor-grab sm:mt-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div ref={trackRef} className="flex gap-3 will-change-transform sm:gap-4">
            {items.map((article, i) => (
              <ArticleCard key={`${article.title}-${i}`} {...article} />
            ))}
          </div>
        </div>
      </ScrollReveal>

      <div className="mx-auto mt-6 max-w-7xl px-5 sm:px-6 md:hidden md:px-16 lg:px-24">
        <a
          href="https://mysticaldigits.com"
          className="font-body text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          View all articles →
        </a>
      </div>
    </section>
  );
};

export default TrendingCarousel;
