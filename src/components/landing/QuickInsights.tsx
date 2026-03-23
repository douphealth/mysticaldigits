import { ScrollReveal } from "./ScrollReveal";

const insights = [
  {
    number: "9",
    label: "Core Life Path Numbers",
    detail: "Plus 3 master numbers (11, 22, 33) that unlock higher potential.",
  },
  {
    number: "26",
    label: "Letters in the Alphabet",
    detail: "Each letter carries a numerical vibration used in name numerology.",
  },
  {
    number: "12",
    label: "Zodiac Signs",
    detail: "Paired with moon signs for deeper emotional compatibility insight.",
  },
  {
    number: "∞",
    label: "Angel Number Sequences",
    detail: "Repeating patterns carry messages from the universe to guide your path.",
  },
];

const QuickInsights = () => (
  <section className="border-y border-border px-6 py-16 md:px-16 lg:px-24">
    <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {insights.map((item, i) => (
        <ScrollReveal key={i} delay={i * 0.08}>
          <div className="text-center">
            <p className="font-display text-4xl font-medium text-gold md:text-5xl">{item.number}</p>
            <p className="mt-2 font-body text-sm font-medium uppercase tracking-wider text-foreground">
              {item.label}
            </p>
            <p className="mt-1.5 font-body text-sm leading-relaxed text-muted-foreground">
              {item.detail}
            </p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  </section>
);

export default QuickInsights;
