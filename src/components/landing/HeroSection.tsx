import { motion } from "framer-motion";
import heroImage from "@/assets/hero-celestial.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Nav bar */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-6 md:px-16 lg:px-24">
        <a
          href="https://mysticaldigits.com"
          className="font-display text-xl font-semibold tracking-tight text-foreground"
        >
          Mystical Digits
        </a>
        <div className="hidden items-center gap-8 font-body text-sm tracking-wide text-muted-foreground md:flex">
          <a href="https://mysticaldigits.com/category/numerology/" className="transition-colors hover:text-foreground">
            Numerology
          </a>
          <a href="https://mysticaldigits.com/category/astrology/" className="transition-colors hover:text-foreground">
            Astrology
          </a>
          <a href="https://mysticaldigits.com/category/numerology-in-relationships/" className="transition-colors hover:text-foreground">
            Relationships
          </a>
          <a href="https://mysticaldigits.com/about-us/" className="transition-colors hover:text-foreground">
            About
          </a>
        </div>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 pb-8 pt-16 text-center md:px-16 md:pt-24 lg:pt-32">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 font-body text-sm uppercase tracking-[0.2em] text-gold"
        >
          Your Spiritual Reading Room
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="font-display text-4xl font-medium leading-[1.1] tracking-tight text-foreground text-balance md:text-6xl lg:text-7xl"
        >
          The guides you actually
          <br className="hidden md:block" />
          <em className="not-italic text-gold"> need to read</em>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mx-auto mt-4 flex flex-wrap items-center justify-center gap-3 font-body text-sm text-muted-foreground"
        >
          <span className="rounded-sm border border-border px-3 py-1">✦ Life Path Calculator</span>
          <span className="rounded-sm border border-border px-3 py-1">𝓝 Name Numerology</span>
          <span className="rounded-sm border border-border px-3 py-1">⌂ House Number</span>
          <span className="rounded-sm border border-border px-3 py-1">☾ Moon Signs</span>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl"
        >
          Curated numerology, astrology, and spiritual insight — organized by
          what matters most. No noise, just clarity.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="https://mysticaldigits.com/life-path-deep-dive/"
            className="inline-block border border-foreground bg-foreground px-8 py-3.5 font-body text-sm font-medium tracking-wide text-primary-foreground transition-all hover:bg-transparent hover:text-foreground active:scale-[0.97]"
          >
            Find Your Life Path
          </a>
          <a
            href="https://mysticaldigits.com/category/numerology/"
            className="inline-block border border-gold px-8 py-3.5 font-body text-sm font-medium tracking-wide text-foreground transition-all hover:bg-gold hover:text-primary-foreground active:scale-[0.97]"
          >
            Explore All Guides
          </a>
        </motion.div>
      </div>

      {/* Hero image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="mx-6 mt-12 overflow-hidden md:mx-16 lg:mx-24"
      >
        <img
          src={heroImage}
          alt="Celestial constellation artwork representing numerology and astrology"
          className="h-64 w-full object-cover md:h-80 lg:h-96"
          loading="eager"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
