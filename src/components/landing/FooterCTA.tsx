import { ScrollReveal } from "./ScrollReveal";

const FooterCTA = () => {
  return (
    <section className="bg-foreground px-6 py-24 md:px-16 lg:px-24">
      <div className="mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <p className="font-body text-sm uppercase tracking-[0.2em] text-gold-light">
            Begin Your Journey
          </p>
          <h2 className="mt-4 font-display text-3xl font-medium leading-[1.15] text-primary-foreground md:text-5xl">
            Every number holds a message.
            <br />
            Start listening.
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-body text-base leading-relaxed text-primary-foreground/70 text-pretty">
            Whether you're drawn to numerology, astrology, or angel numbers —
            your path starts with a single guide. Choose one and go deeper.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://mysticaldigits.com/life-path-deep-dive/"
              className="inline-block border border-gold bg-gold px-8 py-3.5 font-body text-sm font-medium tracking-wide text-foreground transition-all hover:bg-transparent hover:text-gold active:scale-[0.97]"
            >
              Start with Life Path
            </a>
            <a
              href="https://mysticaldigits.com/moon-sign-compatibility/"
              className="inline-block border border-primary-foreground/30 px-8 py-3.5 font-body text-sm font-medium tracking-wide text-primary-foreground transition-all hover:border-gold hover:text-gold active:scale-[0.97]"
            >
              Try Moon Sign Compatibility
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Footer links */}
      <div className="mx-auto mt-24 max-w-4xl border-t border-primary-foreground/10 pt-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <a
            href="https://mysticaldigits.com"
            className="font-display text-lg font-medium text-primary-foreground"
          >
            Mystical Digits
          </a>
          <div className="flex flex-wrap items-center justify-center gap-6 font-body text-sm text-primary-foreground/50">
            <a href="https://mysticaldigits.com/about-us/" className="transition-colors hover:text-gold">
              About
            </a>
            <a href="https://mysticaldigits.com/contact-us/" className="transition-colors hover:text-gold">
              Contact
            </a>
            <a href="https://mysticaldigits.com/terms-and-conditions/" className="transition-colors hover:text-gold">
              Terms
            </a>
            <a href="https://mysticaldigits.com/cookie-policy/" className="transition-colors hover:text-gold">
              Cookie Policy
            </a>
          </div>
        </div>
        <p className="mt-6 text-center font-body text-xs text-primary-foreground/30">
          © {new Date().getFullYear()} Mystical Digits. Premium spiritual guidance.
        </p>
      </div>
    </section>
  );
};

export default FooterCTA;
