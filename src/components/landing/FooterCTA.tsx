import { ScrollReveal } from "./ScrollReveal";

const FooterCTA = () => {
  return (
    <section className="bg-foreground px-5 py-16 sm:px-6 sm:py-24 md:px-16 lg:px-24">
      <div className="mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <p className="font-body text-xs uppercase tracking-[0.2em] text-gold-light sm:text-sm">
            Begin Your Journey
          </p>
          <h2 className="mt-3 font-display text-2xl font-medium leading-[1.15] text-primary-foreground sm:mt-4 sm:text-3xl md:text-5xl">
            Every number holds a message.
            <br />
            Start listening.
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-sm leading-relaxed text-primary-foreground/70 text-pretty sm:mt-6 sm:text-base">
            Whether you're drawn to numerology, astrology, or angel numbers —
            your path starts with a single guide. Choose one and go deeper.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
            <a
              href="https://mysticaldigits.com/life-path-deep-dive/"
              className="w-full border border-gold bg-gold px-6 py-3.5 font-body text-sm font-medium tracking-wide text-foreground transition-all hover:bg-transparent hover:text-gold active:scale-[0.97] sm:w-auto sm:px-8"
            >
              Start with Life Path
            </a>
            <a
              href="https://mysticaldigits.com/moon-sign-compatibility/"
              className="w-full border border-primary-foreground/30 px-6 py-3.5 font-body text-sm font-medium tracking-wide text-primary-foreground transition-all hover:border-gold hover:text-gold active:scale-[0.97] sm:w-auto sm:px-8"
            >
              Try Moon Sign Compatibility
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Footer links */}
      <div className="mx-auto mt-16 max-w-4xl border-t border-primary-foreground/10 pt-6 sm:mt-24 sm:pt-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:gap-6 md:flex-row">
          <a
            href="https://mysticaldigits.com"
            className="font-display text-base font-medium text-primary-foreground sm:text-lg"
          >
            Mystical Digits
          </a>
          <div className="flex flex-wrap items-center justify-center gap-4 font-body text-xs text-primary-foreground/50 sm:gap-6 sm:text-sm">
            <a href="https://mysticaldigits.com/about-us/" className="transition-colors hover:text-gold">About</a>
            <a href="https://mysticaldigits.com/contact-us/" className="transition-colors hover:text-gold">Contact</a>
            <a href="https://mysticaldigits.com/terms-and-conditions/" className="transition-colors hover:text-gold">Terms</a>
            <a href="https://mysticaldigits.com/cookie-policy/" className="transition-colors hover:text-gold">Cookie Policy</a>
          </div>
        </div>
        <p className="mt-4 text-center font-body text-[10px] text-primary-foreground/30 sm:mt-6 sm:text-xs">
          © {new Date().getFullYear()} Mystical Digits. Premium spiritual guidance.
        </p>
      </div>
    </section>
  );
};

export default FooterCTA;
