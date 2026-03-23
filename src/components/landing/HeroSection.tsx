import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroImage from "@/assets/hero-celestial.jpg";

const navLinks = [
  { label: "Numerology", href: "https://mysticaldigits.com/category/numerology/" },
  { label: "Astrology", href: "https://mysticaldigits.com/category/astrology/" },
  { label: "Relationships", href: "https://mysticaldigits.com/category/numerology-in-relationships/" },
  { label: "About", href: "https://mysticaldigits.com/about-us/" },
];

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative overflow-hidden">
      {/* Nav bar */}
      <nav className="relative z-20 flex items-center justify-between px-5 py-5 sm:px-6 sm:py-6 md:px-16 lg:px-24">
        <a
          href="https://mysticaldigits.com"
          className="font-display text-lg font-semibold tracking-tight text-foreground sm:text-xl"
        >
          Mystical Digits
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 font-body text-sm tracking-wide text-muted-foreground md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-foreground">
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center md:hidden"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <span className={`block h-px w-6 bg-foreground transition-all duration-300 ${menuOpen ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`block h-px w-6 bg-foreground transition-all duration-300 ${menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-20 overflow-hidden border-b border-border bg-background md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 pb-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-sm px-3 py-3 font-body text-base text-foreground transition-colors hover:bg-sage/50 hover:text-gold"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero content */}
      <div className="relative z-10 mx-auto max-w-5xl px-5 pb-6 pt-10 text-center sm:px-6 sm:pb-8 sm:pt-16 md:px-16 md:pt-24 lg:pt-32">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 font-body text-xs uppercase tracking-[0.2em] text-gold sm:mb-6 sm:text-sm"
        >
          Your Spiritual Reading Room
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="font-display text-3xl font-medium leading-[1.12] tracking-tight text-foreground text-balance sm:text-4xl md:text-6xl lg:text-7xl"
        >
          The guides you actually
          <br className="hidden md:block" />
          <em className="not-italic text-gold"> need to read</em>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mx-auto mt-4 flex flex-wrap items-center justify-center gap-2 font-body text-xs text-muted-foreground sm:gap-3 sm:text-sm"
        >
          <span className="rounded-sm border border-border px-2.5 py-1 sm:px-3">✦ Life Path</span>
          <span className="rounded-sm border border-border px-2.5 py-1 sm:px-3">𝓝 Name</span>
          <span className="rounded-sm border border-border px-2.5 py-1 sm:px-3">⌂ House</span>
          <span className="rounded-sm border border-border px-2.5 py-1 sm:px-3">☾ Moon</span>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="mx-auto mt-5 max-w-2xl font-body text-base leading-relaxed text-muted-foreground text-pretty sm:mt-6 sm:text-lg md:text-xl"
        >
          Curated numerology, astrology, and spiritual insight — organized by
          what matters most. No noise, just clarity.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4"
        >
          <a
            href="https://mysticaldigits.com/life-path-deep-dive/"
            className="w-full border border-foreground bg-foreground px-6 py-3.5 text-center font-body text-sm font-medium tracking-wide text-primary-foreground transition-all hover:bg-transparent hover:text-foreground active:scale-[0.97] sm:w-auto sm:px-8"
          >
            Find Your Life Path
          </a>
          <a
            href="https://mysticaldigits.com/category/numerology/"
            className="w-full border border-gold px-6 py-3.5 text-center font-body text-sm font-medium tracking-wide text-foreground transition-all hover:bg-gold hover:text-primary-foreground active:scale-[0.97] sm:w-auto sm:px-8"
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
        className="mx-5 mt-8 overflow-hidden sm:mx-6 sm:mt-12 md:mx-16 lg:mx-24"
      >
        <img
          src={heroImage}
          alt="Celestial constellation artwork representing numerology and astrology"
          className="h-48 w-full object-cover sm:h-64 md:h-80 lg:h-96"
          loading="eager"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
