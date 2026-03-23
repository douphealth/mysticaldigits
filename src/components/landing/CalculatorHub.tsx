import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";

/* ── Numerology reduction helpers ── */
const reduceToSingle = (num: number): number => {
  if (num === 11 || num === 22 || num === 33) return num; // master numbers
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

/* ── Tab data ── */
type CalcTab = "lifepath" | "name" | "house";

const tabs: { id: CalcTab; label: string; symbol: string }[] = [
  { id: "lifepath", label: "Life Path Number", symbol: "✦" },
  { id: "name", label: "Name Number", symbol: "𝓝" },
  { id: "house", label: "House Number", symbol: "⌂" },
];

/* ── Sub-components ── */

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
    initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    className="mt-8 border border-gold/30 bg-background p-6 text-center md:p-8"
  >
    <p className="font-body text-xs uppercase tracking-[0.2em] text-gold">Your Number</p>
    <p className="mt-2 font-display text-5xl font-medium text-foreground md:text-6xl">{number}</p>
    <p className="mt-1 font-display text-lg text-gold">{keyword}</p>
    <p className="mx-auto mt-4 max-w-md font-body text-base leading-relaxed text-muted-foreground text-pretty">
      {brief}
    </p>
    <a
      href={guideHref}
      className="mt-6 inline-block border border-foreground bg-foreground px-6 py-3 font-body text-sm font-medium tracking-wide text-primary-foreground transition-all hover:bg-transparent hover:text-foreground active:scale-[0.97]"
    >
      {guideLabel} →
    </a>
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
        <div>
          <label className="mb-1.5 block font-body text-xs uppercase tracking-wider text-muted-foreground">Month</label>
          <input
            type="number"
            min={1}
            max={12}
            placeholder="MM"
            value={month}
            onChange={(e) => { setMonth(e.target.value); setResult(null); }}
            className="w-full border border-border bg-background px-3 py-3 font-body text-center text-base text-foreground outline-none transition-colors focus:border-gold"
          />
        </div>
        <div>
          <label className="mb-1.5 block font-body text-xs uppercase tracking-wider text-muted-foreground">Day</label>
          <input
            type="number"
            min={1}
            max={31}
            placeholder="DD"
            value={day}
            onChange={(e) => { setDay(e.target.value); setResult(null); }}
            className="w-full border border-border bg-background px-3 py-3 font-body text-center text-base text-foreground outline-none transition-colors focus:border-gold"
          />
        </div>
        <div>
          <label className="mb-1.5 block font-body text-xs uppercase tracking-wider text-muted-foreground">Year</label>
          <input
            type="number"
            min={1900}
            max={2099}
            placeholder="YYYY"
            value={year}
            onChange={(e) => { setYear(e.target.value); setResult(null); }}
            className="w-full border border-border bg-background px-3 py-3 font-body text-center text-base text-foreground outline-none transition-colors focus:border-gold"
          />
        </div>
      </div>
      <button
        onClick={calculate}
        disabled={!month || !day || !year || year.length < 4}
        className="mt-5 w-full border border-gold bg-gold px-6 py-3.5 font-body text-sm font-medium tracking-wide text-foreground transition-all hover:bg-transparent hover:text-gold active:scale-[0.97] disabled:opacity-40 disabled:hover:bg-gold disabled:hover:text-foreground"
      >
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
    const total = name
      .split("")
      .reduce((sum, c) => sum + letterValue(c), 0);
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
          className="w-full border border-border bg-background px-4 py-3 font-body text-base text-foreground outline-none transition-colors focus:border-gold"
        />
      </div>
      <button
        onClick={calculate}
        disabled={!name.trim()}
        className="mt-5 w-full border border-gold bg-gold px-6 py-3.5 font-body text-sm font-medium tracking-wide text-foreground transition-all hover:bg-transparent hover:text-gold active:scale-[0.97] disabled:opacity-40 disabled:hover:bg-gold disabled:hover:text-foreground"
      >
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
          className="w-full border border-border bg-background px-4 py-3 font-body text-base text-foreground outline-none transition-colors focus:border-gold"
        />
      </div>
      <button
        onClick={calculate}
        disabled={!address.trim() || !/\d/.test(address)}
        className="mt-5 w-full border border-gold bg-gold px-6 py-3.5 font-body text-sm font-medium tracking-wide text-foreground transition-all hover:bg-transparent hover:text-gold active:scale-[0.97] disabled:opacity-40 disabled:hover:bg-gold disabled:hover:text-foreground"
      >
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
    <section className="bg-sage/30 px-6 py-24 md:px-16 lg:px-24">
      <div className="mx-auto max-w-2xl">
        <ScrollReveal>
          <p className="text-center font-body text-sm uppercase tracking-[0.2em] text-gold">
            Interactive Tools
          </p>
          <h2 className="mt-3 text-center font-display text-3xl font-medium leading-[1.15] tracking-tight text-foreground md:text-4xl">
            Discover your numbers — instantly
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-center font-body text-base leading-relaxed text-muted-foreground text-pretty">
            Use our free calculators to uncover your Life Path, Expression Number, or House Energy. Then dive into the guide that matches your result.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          {/* Tabs */}
          <div className="mt-12 flex border-b border-border">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-3 font-body text-sm font-medium tracking-wide transition-colors ${
                  activeTab === tab.id
                    ? "border-b-2 border-gold text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className="mr-1.5">{tab.symbol}</span>
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.label.split(" ")[0]}</span>
              </button>
            ))}
          </div>

          {/* Calculator body */}
          <div className="mt-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                {activeTab === "lifepath" && <LifePathCalc />}
                {activeTab === "name" && <NameCalc />}
                {activeTab === "house" && <HouseCalc />}
              </motion.div>
            </AnimatePresence>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CalculatorHub;
