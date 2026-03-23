import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";

const faqs = [
  {
    q: "What is a Life Path Number and how do I calculate it?",
    a: "Your Life Path Number is derived from your full date of birth by reducing each component (month, day, year) to a single digit, then summing them. It reveals your core personality, life purpose, and the opportunities you'll encounter. Use our free calculator above or read our definitive guide.",
    href: "https://mysticaldigits.com/life-path-deep-dive/",
  },
  {
    q: "How does numerology work with names?",
    a: "Name numerology assigns a numerical value (1–9) to each letter of the alphabet. By summing the values of your full birth name and reducing to a single digit, you get your Expression Number — which reveals your natural talents, abilities, and the energy you project into the world.",
    href: "https://mysticaldigits.com/how-does-numerology-work-with-names/",
  },
  {
    q: "What are angel numbers and what does 333 mean?",
    a: "Angel numbers are repeating number sequences (111, 222, 333, etc.) that many believe carry messages from the universe or spiritual guides. The number 333 specifically relates to creativity, growth, and encouragement — especially in career and financial decisions.",
    href: "https://mysticaldigits.com/angel-number-333-meaning-in-career-and-money/",
  },
  {
    q: "What is moon sign compatibility?",
    a: "While your sun sign represents your outer personality, your moon sign governs emotions and inner needs. Moon sign compatibility analyzes how two people connect on an emotional level — often a stronger indicator of relationship harmony than sun signs alone.",
    href: "https://mysticaldigits.com/moon-sign-compatibility/",
  },
  {
    q: "How do I calculate my house numerology number?",
    a: "Take the digits of your house or apartment number, add them together, and reduce to a single digit (1–9) or master number (11, 22, 33). Each number carries a unique energetic signature that influences the atmosphere and experiences within that home.",
    href: "https://mysticaldigits.com/how-to-calculate-house-numerology-full-guide/",
  },
  {
    q: "What are master numbers in numerology (11, 22, 33)?",
    a: "Master numbers are double-digit numbers that carry amplified spiritual energy. 11 is the Master Intuitive, 22 is the Master Builder, and 33 is the Master Teacher. They are not reduced further in numerology calculations and represent higher spiritual potential.",
    href: "https://mysticaldigits.com/how-to-get-your-numerology-number-the-definitive-guide/",
  },
];

const FAQItem = ({ q, a, href, isOpen, toggle }: { q: string; a: string; href: string; isOpen: boolean; toggle: () => void }) => (
  <div className="border-b border-border">
    <button
      onClick={toggle}
      className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-gold"
      aria-expanded={isOpen}
    >
      <span className="pr-4 font-display text-lg font-medium leading-snug text-foreground md:text-xl">
        {q}
      </span>
      <span className={`shrink-0 font-body text-xl text-gold transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
        +
      </span>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden"
        >
          <div className="pb-6">
            <p className="font-body text-base leading-relaxed text-muted-foreground text-pretty">
              {a}
            </p>
            <a
              href={href}
              className="mt-3 inline-block font-body text-sm font-medium text-gold transition-opacity hover:opacity-80"
            >
              Read the full guide →
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // JSON-LD structured data for SEO / AI visibility
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <section className="px-6 py-24 md:px-16 lg:px-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <p className="text-center font-body text-sm uppercase tracking-[0.2em] text-gold">
            Common Questions
          </p>
          <h2 className="mt-3 text-center font-display text-3xl font-medium leading-[1.15] tracking-tight text-foreground md:text-4xl">
            Everything you want to know
          </h2>
        </ScrollReveal>

        <div className="mt-12">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <FAQItem
                q={faq.q}
                a={faq.a}
                href={faq.href}
                isOpen={openIndex === i}
                toggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
