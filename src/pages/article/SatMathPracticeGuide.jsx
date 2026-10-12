import React, { useState } from 'react';
import { Link } from '../../i18n/Link';
import SEO from '../../components/SEO';
import { 
  Calculator, CheckCircle2, AlertCircle, Clock, ShieldCheck, 
  HelpCircle, ArrowRight, Award, Zap, Code, Target, Crosshair
} from 'lucide-react';

const SatMathPracticeGuide = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  const traps = [
    {
      title: '1. The Discriminant & Unknown Quadratic Constant',
      trap: 'College Board asks for the value of "k" such that ax^2 + bx + k = 0 has "no real solutions" or "exactly one solution".',
      example: 'Equation: 3x^2 - 12x + k = 0 has exactly one real solution. Find k.\nTrap: Students forget that "one solution" means the discriminant b^2 - 4ac = 0.\nSolution: (-12)^2 - 4(3)(k) = 0 => 144 - 12k = 0 => k = 12.\nDesmos Check: Type y = 3x^2 - 12x + 12. Notice the vertex touches the x-axis at x = 2 exactly once.',
      takeaway: 'One real solution: b^2 - 4ac = 0. Two solutions: b^2 - 4ac > 0. No real solutions: b^2 - 4ac < 0.'
    },
    {
      title: '2. Extraneous Solutions in Rational Equations',
      trap: 'Solving rational equations where one derived solution makes the denominator zero.',
      example: 'Solve: (x^2 - 9) / (x - 3) = 6\nTrap: Factoring gives (x - 3)(x + 3)/(x - 3) = 6 => x + 3 = 6 => x = 3.\nHowever, plugging x = 3 back into the original equation makes the denominator (3 - 3) = 0 (undefined).\nSolution: No real solution exists for this equation.',
      takeaway: 'Always plug solutions back into original denominators to verify they do not produce division by zero.'
    },
    {
      title: '3. Function Translations: f(x + c) vs f(x) + c',
      trap: 'Horizontal shifts move in the OPPOSITE direction of the sign inside the parentheses.',
      example: 'Given the graph of f(x), what is the vertex of g(x) = f(x - 4) + 3 if f(x) has a vertex at (1, 2)?\nTrap: Moving left 4 units instead of right.\nSolution: x-coordinate moves RIGHT by 4 (1 + 4 = 5). y-coordinate moves UP by 3 (2 + 3 = 5). New vertex = (5, 5).',
      takeaway: 'Inside parentheses = horizontal shift (opposite sign). Outside parentheses = vertical shift (same sign).'
    },
    {
      title: '4. Exponential Growth Base (1 + r) vs Growth Rate',
      trap: 'Confusing the annual multiplier with the percentage increase.',
      example: 'A population increases by 7.5% every year. Which function models the population after t years?\nA) P(t) = P0(0.075)^t   B) P(t) = P0(1.075)^t\nTrap: Picking (0.075)^t, which represents losing 92.5% of population each year!\nSolution: B is correct because growth multiplier = (1 + 0.075) = 1.075.',
      takeaway: 'Growth multiplier = 1 + r. Decay multiplier = 1 - r.'
    },
    {
      title: '5. Complementary Angle Trigonometry',
      trap: 'For any acute angle x in a right triangle, sin(x) = cos(90° - x).',
      example: 'If sin(3a - 15°) = cos(2a + 25°), find the value of a.\nTrap: Trying to compute inverse sine or radians.\nSolution: Because sin(A) = cos(B), A + B = 90°.\n(3a - 15) + (2a + 25) = 90 => 5a + 10 = 90 => 5a = 80 => a = 16.',
      takeaway: 'Whenever you see sin(angle1) = cos(angle2) on the SAT, immediately set: angle1 + angle2 = 90°.'
    }
  ];

  return (
    <div className="article-page bg-white text-slate-800">
      <SEO />

      {/* Hero Header */}
      <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-700">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs tracking-wider uppercase mb-3">
            <Crosshair size={14} />
            <span>Digital SAT Math Trap Analysis • Practice Guide (2026–2027)</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            SAT Math Practice: Questions, Strategy & Common Traps
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
            Master the trickiest question types on the Digital SAT Math section. Learn the algebraic traps College Board sets in Module 2 and how to verify answers using Desmos in seconds.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400 border-t border-slate-700/80 pt-4">
            <span className="flex items-center gap-1.5"><Clock size={14} className="text-emerald-400" /> 10-Minute Deep Dive</span>
            <span className="flex items-center gap-1.5"><Zap size={14} className="text-emerald-400" /> High-Yield Demand (+40%)</span>
            <span className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-emerald-400" /> 800-Level Hard Questions</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Intro Card */}
        <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-6 mb-12">
          <h2 className="text-lg font-bold text-emerald-950 mb-2 flex items-center gap-2">
            <Target className="text-emerald-600" size={20} /> Why 700+ Scorers Still Lose Marks
          </h2>
          <p className="text-sm text-emerald-900 leading-relaxed">
            Most students who score 650–720 on SAT Math understand the formulas. Where they lose marks is not lack of math knowledge, but falling for <strong>deliberately engineered traps</strong>: deceptive answer choices designed around common careless mistakes (such as solving for <em>x</em> instead of <em>2x + 1</em>, or missing negative signs).
          </p>
        </div>

        {/* 5 Hard Traps Breakdown */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 flex items-center gap-2">
            <Crosshair className="text-emerald-600" size={28} />
            The 5 Most Frequent Traps in Module 2
          </h2>

          <div className="space-y-6">
            {traps.map((t, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">{t.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-3 leading-relaxed">
                  <strong>The Trap:</strong> {t.trap}
                </p>

                <div className="bg-slate-900 text-emerald-400 p-4 rounded-xl font-mono text-xs sm:text-sm leading-relaxed mb-3 whitespace-pre-wrap">
                  {t.example}
                </div>

                <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200 text-xs sm:text-sm text-emerald-950 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                  <span><strong>Golden Rule:</strong> {t.takeaway}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Diagnostic Assessment CTA Card */}
        <div className="bg-gradient-to-r from-emerald-900 via-slate-900 to-emerald-950 text-white rounded-2xl p-8 mb-14 shadow-lg text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">
              <Award size={14} /> Diagnostic Practice Test
            </div>
            <h3 className="text-2xl font-black text-white tracking-tight mb-2">Test Your Skills Under Adaptive Conditions</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Take our free 24-question Digital SAT practice test. Discover whether you are falling for trap answer choices in Module 1 or Module 2.
            </p>
          </div>
          <Link
            to="/sat/diagnostic"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm rounded-xl transition-all shadow-md"
          >
            Start Free Diagnostic <ArrowRight size={16} />
          </Link>
        </div>

        {/* FAQ Section */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 flex items-center gap-2">
            <HelpCircle className="text-emerald-600" size={28} />
            Frequently Asked Questions: SAT Math Practice
          </h2>
          <div className="space-y-3">
            {[
              {
                q: 'How many student-produced response (grid-in) questions are on the SAT Math section?',
                a: 'Approximately 25% of the Math questions (roughly 5 to 6 questions per module) are student-produced responses where there are no multiple-choice options. You enter your numerical or fractional answer directly into a digital box.'
              },
              {
                q: 'Can grid-in answers be negative on the Digital SAT?',
                a: 'Yes! Unlike the legacy paper test, the Digital SAT supports negative numbers in the student-produced response input box. Negative fractions and decimals are also fully accepted.'
              },
              {
                q: 'What should I do if a decimal answer does not truncate cleanly?',
                a: 'If your answer is a repeating decimal like 2/3 (0.6666...), enter it either as the exact fraction "2/3" or fill the entire space with decimals: "0.666" or "0.667". Never round to "0.6" or "0.7" as Bluebook will mark it incorrect.'
              },
              {
                q: 'What is the fastest way to verify an algebraic solution before submitting Module 2?',
                a: 'Graph both sides of the equation in Desmos as two separate functions (y1 = Left Hand Side, y2 = Right Hand Side) and check where they intersect. If your algebraic root matches the x-coordinate of the intersection, your answer is 100% verified.'
              }
            ].map((faq, idx) => (
              <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden transition-colors">
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-slate-900 hover:bg-slate-50"
                >
                  <span className="text-sm sm:text-base">{faq.q}</span>
                  <span className="text-emerald-600 text-lg font-bold shrink-0">{openFaq === idx ? '−' : '+'}</span>
                </button>
                {openFaq === idx && (
                  <div className="px-4 sm:px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Next Reading / Related Links */}
        <div className="border-t border-slate-200 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-600">
          <Link to="/article/how-to-ace-sat-study-plan-guide" className="text-emerald-600 hover:underline font-semibold flex items-center gap-1">
            ← How to Ace the SAT: Study Plan
          </Link>
          <Link to="/article/khan-academy-sat-vs-structured-coaching" className="text-emerald-600 hover:underline font-semibold flex items-center gap-1">
            Next: Khan Academy SAT vs. Structured Coaching →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SatMathPracticeGuide;
