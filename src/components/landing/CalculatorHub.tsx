import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";

/* ── Numerology reduction helpers ── */
const reduceToSingle = (num: number): number => {
  if (num === 11 || num === 22 || num === 33) return num;
  while (num > 9) {
    num = String(num)
      .split("")
      .reduce((s, d) => s + Number(d), 0);
    if (num === 11 || num === 22 || num === 33) return num;
  }
  return num;
};

const letterValue = (c: string): number => {
  const v = c.toUpperCase().charCodeAt(0) - 64;
  return v >= 1 && v <= 26 ? v : 0;
};

/* ── Life Path descriptions ── */
const lifePathMeta: Record<number, { keyword: string; brief: string }> = {
  1: { keyword: "The Leader", brief: "Independence, ambition, originality. You're here to pioneer and innovate." },
  2: { keyword: "The Diplomat", brief: "Cooperation, sensitivity, harmony. You thrive in partnerships and peace-making." },
  3: { keyword: "The Communicator", brief: "Creativity, expression, joy. You're a natural artist and storyteller." },
  4: { keyword: "The Builder", brief: "Stability, discipline, structure. You create lasting foundations." },
  5: { keyword: "The Adventurer", brief: "Freedom, change, curiosity. You need variety and sensory experience." },
  6: { keyword: "The Nurturer", brief: "Responsibility, love, family. You're the healer and protector." },
  7: { keyword: "The Seeker", brief: "Introspection, wisdom, analysis. You pursue deep spiritual truth." },
  8: { keyword: "The Powerhouse", brief: "Authority, abundance, mastery. You're built for material and spiritual success." },
  9: { keyword: "The Humanitarian", brief: "Compassion, idealism, service. You see the bigger picture for humanity." },
  11: { keyword: "Master Intuitive", brief: "Heightened intuition, spiritual insight, and visionary leadership." },
  22: { keyword: "Master Builder", brief: "The ability to turn extraordinary dreams into tangible, world-changing realities." },
  33: { keyword: "Master Teacher", brief: "Selfless service, cosmic love, and the highest expression of spiritual guidance." },
};

const houseDescriptions: Record<number, string> = {
  1: "A home of independence, new beginnings, and personal leadership.",
  2: "A nurturing space for partnerships, peace, and emotional connection.",
  3: "A creative, social, and expressive household full of joy.",
  4: "A stable, grounded home built on discipline and security.",
  5: "A dynamic home of change, freedom, and exciting experiences.",
  6: "A loving family home radiating warmth, care, and responsibility.",
  7: "A contemplative sanctuary for solitude, study, and spiritual growth.",
  8: "A power home attracting abundance, ambition, and material success.",
  9: "A compassionate home of service, wisdom, and humanitarian ideals.",
  11: "A spiritually charged home with heightened intuition and inspiration.",
  22: "A visionary home where grand plans become tangible reality.",
  33: "A home of selfless love, healing, and spiritual teaching.",
};

/* ── Tab data ── */
type CalcTab = "lifepath" | "name" | "house";

const tabs: { id: CalcTab; label: string; mobileLabel: string; symbol: string; desc: string; color: string }[] = [
  { id: "lifepath", label: "Life Path Number", mobileLabel: "Life Path", symbol: "✦", desc: "From your birthdate", color: "from-gold/20 to-gold/5" },
  { id: "name", label: "Name Number", mobileLabel: "Name", symbol: "𝓝", desc: "From your full name", color: "from-sage-deep/30 to-sage/20" },
  { id: "house", label: "House Number", mobileLabel: "House", symbol: "⌂", desc: "From your address", color: "from-gold-light/20 to-gold/5" },
];

/* ── Shared styles ── */
const inputClass =
  "w-full border border-border bg-parchment px-4 py-3.5 font-body text-center text-base text-foreground outline-none transition-all duration-200 focus:border-gold focus:shadow-[0_0_0_3px_hsl(var(--gold)/0.15)] focus:bg-background";

const btnClass =
  "mt-6 w-full border-2 border-gold bg-gold px-6 py-4 font-body text-sm font-semibold uppercase tracking-[0.1em] text-foreground transition-all duration-200 hover:bg-transparent hover:text-gold active:scale-[0.97] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-gold disabled:hover:text-foreground";

/* ── Result Card ── */
const ResultCard = ({
  number,
  keyword,
  brief,
  guideHref,
  guideLabel,
}: {
  number: number;
  keyword: string;
  brief: string;
  guideHref: string;
  guideLabel: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    className="mt-8 relative overflow-hidden border border-gold/40 bg-gradient-to-b from-parchment to-background p-8 text-center md:p-10"
  >
    {/* Decorative corner marks */}
    <div className="absolute top-3 left-3 h-6 w-6 border-t border-l border-gold/30" />
    <div className="absolute top-3 right-3 h-6 w-6 border-t border-r border-gold/30" />
    <div className="absolute bottom-3 left-3 h-6 w-6 border-b border-l border-gold/30" />
    <div className="absolute bottom-3 right-3 h-6 w-6 border-b border-r border-gold/30" />

    <p className="font-body text-xs uppercase tracking-[0.25em] text-gold">Your Number</p>

    {/* Diamond number container */}
    <div className="relative mx-auto mt-5 flex h-28 w-28 items-center justify-center md:h-32 md:w-32">
      <div className="absolute inset-0 border border-gold/25" style={{ transform: "rotate(45deg)" }} />
      <div className="absolute inset-2 border border-gold/10" style={{ transform: "rotate(45deg)" }} />
      <motion.p
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="font-display text-5xl font-medium text-foreground md:text-6xl"
      >
        {number}
      </motion.p>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.35 }}
    >
      <p className="mt-5 font-display text-xl text-gold md:text-2xl">{keyword}</p>
      <p className="mx-auto mt-4 max-w-md font-body text-base leading-relaxed text-muted-foreground text-pretty">
        {brief}
      </p>
    </motion.div>

    <motion.a
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      href={guideHref}
      className="mt-8 inline-block border-2 border-foreground bg-foreground px-8 py-3.5 font-body text-sm font-semibold uppercase tracking-[0.08em] text-primary-foreground transition-all duration-200 hover:bg-transparent hover:text-foreground active:scale-[0.97]"
    >
      {guideLabel} →
    </motion.a>
  </motion.div>
);

/* ── Life Path Calculator ── */
const LifePathCalc = () => {
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculate = useCallback(() => {
    const m = parseInt(month, 10);
    const d = parseInt(day, 10);
    const y = parseInt(year, 10);
    if (!m || !d || !y || year.length < 4) return;
    const sum = reduceToSingle(m) + reduceToSingle(d) + reduceToSingle(y);
    setResult(reduceToSingle(sum));
  }, [month, day, year]);

  return (
    <div>
      <p className="font-body text-base leading-relaxed text-muted-foreground text-pretty">
        Enter your date of birth to discover your Life Path Number — the most important number in your numerology chart.
      </p>
      <div className="mt-6 grid grid-cols-3 gap-3">
        {[
          { label: "Month", value: month, set: setMonth, ph: "MM", min: 1, max: 12 },
          { label: "Day", value: day, set: setDay, ph: "DD", min: 1, max: 31 },
          { label: "Year", value: year, set: setYear, ph: "YYYY", min: 1900, max: 2099 },
        ].map((f) => (
          <div key={f.label}>
            <label className="mb-1.5 block font-body text-xs uppercase tracking-wider text-muted-foreground">{f.label}</label>
            <input
              type="number"
              min={f.min}
              max={f.max}
              placeholder={f.ph}
              value={f.value}
              onChange={(e) => { f.set(e.target.value); setResult(null); }}
              className={inputClass}
            />
          </div>
        ))}
      </div>
      <button onClick={calculate} disabled={!month || !day || !year || year.length < 4} className={btnClass}>
        Calculate My Life Path
      </button>
      <AnimatePresence>
        {result !== null && lifePathMeta[result] && (
          <ResultCard
            number={result}
            keyword={lifePathMeta[result].keyword}
            brief={lifePathMeta[result].brief}
            guideHref="https://mysticaldigits.com/life-path-deep-dive/"
            guideLabel="Read Your Full Life Path Guide"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

/* ── Name Number Calculator ── */
const NameCalc = () => {
  const [name, setName] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculate = useCallback(() => {
    if (!name.trim()) return;
    const total = name.split("").reduce((sum, c) => sum + letterValue(c), 0);
    setResult(reduceToSingle(total));
  }, [name]);

  return (
    <div>
      <p className="font-body text-base leading-relaxed text-muted-foreground text-pretty">
        Enter your full birth name to reveal your Expression Number — the number that describes your natural talents and abilities.
      </p>
      <div className="mt-6">
        <label className="mb-1.5 block font-body text-xs uppercase tracking-wider text-muted-foreground">Full Birth Name</label>
        <input
          type="text"
          placeholder="e.g. Sophia Marie Laurent"
          value={name}
          onChange={(e) => { setName(e.target.value); setResult(null); }}
          className={inputClass + " !text-left"}
        />
      </div>
      <button onClick={calculate} disabled={!name.trim()} className={btnClass}>
        Calculate My Name Number
      </button>
      <AnimatePresence>
        {result !== null && lifePathMeta[result] && (
          <ResultCard
            number={result}
            keyword={lifePathMeta[result].keyword}
            brief={`As an Expression Number ${result}, this energy shapes how you present yourself to the world and the talents you carry.`}
            guideHref="https://mysticaldigits.com/how-does-numerology-work-with-names/"
            guideLabel="Explore Name Numerology In-Depth"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

/* ── House Number Calculator ── */
const HouseCalc = () => {
  const [address, setAddress] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculate = useCallback(() => {
    if (!address.trim()) return;
    const digits = address.replace(/\D/g, "");
    if (!digits) return;
    const total = digits.split("").reduce((sum, d) => sum + Number(d), 0);
    setResult(reduceToSingle(total));
  }, [address]);

  return (
    <div>
      <p className="font-body text-base leading-relaxed text-muted-foreground text-pretty">
        Enter your house or apartment number to discover the energetic signature of your living space.
      </p>
      <div className="mt-6">
        <label className="mb-1.5 block font-body text-xs uppercase tracking-wider text-muted-foreground">House / Apartment Number</label>
        <input
          type="text"
          placeholder="e.g. 1247 or 42B"
          value={address}
          onChange={(e) => { setAddress(e.target.value); setResult(null); }}
          className={inputClass + " !text-left"}
        />
      </div>
      <button onClick={calculate} disabled={!address.trim() || !/\d/.test(address)} className={btnClass}>
        Calculate My House Number
      </button>
      <AnimatePresence>
        {result !== null && houseDescriptions[result] && (
          <ResultCard
            number={result}
            keyword={`House Number ${result}`}
            brief={houseDescriptions[result]}
            guideHref="https://mysticaldigits.com/how-to-calculate-house-numerology-full-guide/"
            guideLabel="Read the Full House Numerology Guide"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

/* ── Main CalculatorHub ── */
const CalculatorHub = () => {
  const [activeTab, setActiveTab] = useState<CalcTab>("lifepath");

  return (
    <section className="relative overflow-hidden px-6 py-28 md:px-16 lg:px-24 md:py-36">
      {/* Rich layered background */}
      <div className="absolute inset-0 bg-gradient-to-b from-sage/40 via-parchment to-sage/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,hsl(var(--gold)/0.08),transparent)]" />
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* Subtle geometric decorations */}
      <div className="absolute top-12 left-12 h-32 w-32 border border-gold/[0.07] rotate-45 hidden lg:block" />
      <div className="absolute bottom-12 right-12 h-24 w-24 border border-gold/[0.07] rotate-45 hidden lg:block" />
      <div className="absolute top-1/2 left-8 -translate-y-1/2 h-48 w-px bg-gradient-to-b from-transparent via-gold/15 to-transparent hidden lg:block" />
      <div className="absolute top-1/2 right-8 -translate-y-1/2 h-48 w-px bg-gradient-to-b from-transparent via-gold/15 to-transparent hidden lg:block" />

      <div className="relative mx-auto max-w-3xl">
        <ScrollReveal>
          <div className="text-center">
            <span className="inline-flex items-center gap-2.5 border border-gold/30 bg-gold/10 px-5 py-2 font-body text-xs font-medium uppercase tracking-[0.2em] text-gold">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
              </span>
              Free Interactive Tools
            </span>
            <h2 className="mt-6 font-display text-4xl font-medium leading-[1.08] tracking-tight text-foreground md:text-5xl lg:text-[3.25rem]">
              Discover your numbers
            </h2>
            <p className="mt-2 font-display text-2xl text-gold md:text-3xl">
              — calculated instantly
            </p>
            <p className="mx-auto mt-5 max-w-xl font-body text-base leading-relaxed text-muted-foreground text-pretty md:text-lg">
              Use our free numerology calculators to uncover your Life Path, Expression Number, or House Energy. Then dive into the guide that matches your result.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
          {/* Tab selectors */}
          <div className="mt-14 grid grid-cols-3 gap-4">
            {tabs.map((tab, i) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative flex flex-col items-center p-5 text-center transition-all duration-300 md:p-6 ${
                  activeTab === tab.id
                    ? "border border-gold bg-gradient-to-b from-background to-parchment shadow-[0_8px_32px_-8px_hsl(var(--gold)/0.2),0_2px_8px_-2px_hsl(var(--gold)/0.1)]"
                    : "border border-border bg-background/80 hover:border-gold/40 hover:bg-background hover:shadow-[0_4px_16px_-4px_hsl(var(--gold)/0.08)]"
                }`}
              >
                {/* Glow on active */}
                {activeTab === tab.id && (
                  <div className={`absolute inset-0 bg-gradient-to-b ${tab.color} opacity-60`} />
                )}

                <span className={`relative font-display text-3xl md:text-4xl transition-all duration-300 ${
                  activeTab === tab.id ? "text-gold scale-110" : "text-muted-foreground group-hover:text-gold"
                }`}>
                  {tab.symbol}
                </span>
                <span className={`relative mt-3 font-body text-xs font-semibold uppercase tracking-wider md:text-sm transition-colors duration-200 ${
                  activeTab === tab.id ? "text-foreground" : "text-muted-foreground"
                }`}>
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.mobileLabel}</span>
                </span>
                <span className="relative mt-1 hidden font-body text-[11px] text-muted-foreground sm:block">{tab.desc}</span>

                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute -bottom-px left-4 right-4 h-0.5 bg-gold"
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Calculator body */}
          <div className="mt-8 border border-border bg-background p-7 shadow-[0_4px_24px_-4px_hsl(var(--foreground)/0.04)] md:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                {activeTab === "lifepath" && <LifePathCalc />}
                {activeTab === "name" && <NameCalc />}
                {activeTab === "house" && <HouseCalc />}
              </motion.div>
            </AnimatePresence>
          </div>
        </ScrollReveal>

        {/* Trust strip */}
        <ScrollReveal delay={0.25}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-body text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="text-gold">✦</span> 100% Free
            </span>
            <span className="hidden h-3 w-px bg-border sm:block" />
            <span className="flex items-center gap-1.5">
              <span className="text-gold">✦</span> No Sign-Up Required
            </span>
            <span className="hidden h-3 w-px bg-border sm:block" />
            <span className="flex items-center gap-1.5">
              <span className="text-gold">✦</span> Instant Results
            </span>
            <span className="hidden h-3 w-px bg-border sm:block" />
            <span className="flex items-center gap-1.5">
              <span className="text-gold">✦</span> Master Numbers Included
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CalculatorHub;
