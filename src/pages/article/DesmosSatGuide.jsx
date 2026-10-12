import React, { useState } from 'react';
import { Link } from '../../i18n/Link';
import SEO from '../../components/SEO';
import { 
  Calculator, CheckCircle2, AlertCircle, Clock, ShieldCheck, 
  HelpCircle, ArrowRight, Award, Zap, Code, BarChart3, Sliders
} from 'lucide-react';

const DesmosSatGuide = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  const [activeTab, setActiveTab] = useState('systems');

  const desmosStrategies = [
    {
      id: 'systems',
      title: '1. Solving Linear & Non-Linear Systems Instantly',
      badge: 'High Speed Hack',
      concept: 'Type both equations directly into Desmos. Look for the grey point(s) where the graphs intersect.',
      code: 'Line 1: 3x - 4y = 12\nLine 2: y = -2x + 7\nClick the intersection point: (3.636, -0.273) -> Exact (40/11, -3/11)',
      tip: 'Desmos allows equations in standard form (Ax + By = C). You do NOT need to isolate y first!'
    },
    {
      id: 'regressions',
      title: '2. The Quadratic & Exponential Regression Trick (~)',
      badge: 'Game Changer',
      concept: 'When given points or table values and asked to find quadratic constants (a, b, c), use the regression operator (~).',
      code: 'Enter table with coordinates (x1, y1): (1, 5), (2, 11), (3, 19)\nType in line 2: y1 ~ ax1^2 + bx1 + c\nDesmos instantly solves: a = 1, b = 3, c = 1',
      tip: 'The tilde (~) key triggers Desmos regression mode. Never do 3-variable substitution manually.'
    },
    {
      id: 'sliders',
      title: '3. Sliders for Unknown Constants (a, k, c)',
      badge: 'Visual Solution',
      concept: 'When a problem asks "For what value of k does the equation have no solution?", add a slider for k.',
      code: 'Equation: 2x^2 + 8x + k = 0\nClick "add slider: k"\nDrag k until the parabola touches the x-axis exactly once (tangent) or floats above it (no real solutions).',
      tip: 'For zero solutions, drag k so the graph never intersects the x-axis (k > 8).'
    },
    {
      id: 'zeros',
      title: '4. Finding Roots, Vertices & Maximums',
      badge: 'Zero Derivation',
      concept: 'Any quadratic, cubic, or rational equation f(x) can be graphed. Desmos highlights critical points automatically.',
      code: 'Type: y = -4.9t^2 + 24t + 1.8\nClick grey vertex point: (2.449, 31.188)\nMaximum height = 31.19 meters at time t = 2.45 seconds.',
      tip: 'Desmos places automatic grey clickable dots on all x-intercepts, y-intercepts, and local extrema.'
    },
    {
      id: 'circles',
      title: '5. Circle Equations & Tangents',
      badge: 'Geometry Hack',
      concept: 'Test circle standard form (x - h)^2 + (y - k)^2 = r^2 or general form without completing the square.',
      code: 'Type: x^2 + y^2 - 6x + 8y - 25 = 0\nDesmos graphs the complete circle instantly.\nCenter is visual at (3, -4), and radius is distance to edge (r = 50^0.5 ≈ 7.07).',
      tip: 'Need to find if a line is tangent to a circle? Graph both and see if they touch at exactly one single point.'
    }
  ];

  return (
    <div className="article-page bg-white text-slate-800">
      <SEO />

      {/* Hero Header */}
      <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-700">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs tracking-wider uppercase mb-3">
            <Calculator size={14} />
            <span>Digital SAT Math Masterclass • Desmos Guide (2026–2027)</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Desmos SAT Guide: Top Calculator Strategies for Digital SAT Math
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
            Unlock the full power of the built-in Desmos graphing calculator. Learn regression formulas, slider hacks, root-finding shortcuts, and system-solving tricks to secure an 800 Math score.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400 border-t border-slate-700/80 pt-4">
            <span className="flex items-center gap-1.5"><Clock size={14} className="text-emerald-400" /> 12-Minute Masterclass</span>
            <span className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-emerald-400" /> College Board Bluebook Compliant</span>
            <span className="flex items-center gap-1.5"><Zap size={14} className="text-emerald-400" /> Breakout Query (+2,650%)</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Important Policy Callout */}
        <div className="bg-emerald-50/80 border-l-4 border-emerald-500 p-5 rounded-r-xl mb-10 shadow-sm">
          <div className="flex items-start gap-3">
            <CheckCircle2 size={22} className="text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-emerald-950 text-sm sm:text-base">Desmos is Allowed on the Entire Digital SAT Math Section</h3>
              <p className="text-emerald-900 text-xs sm:text-sm mt-1 leading-relaxed">
                Unlike the legacy paper SAT, there is <strong>no longer any "No-Calculator" section</strong>. Desmos is integrated directly into Bluebook for all 44 Math questions. High-scoring UAE students use Desmos to solve 50% to 65% of test items in under 30 seconds each.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Strategy Selector */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 flex items-center gap-2">
            <Sliders className="text-emerald-600" size={28} />
            The 5 Essential Desmos Hacks for UAE SAT Takers
          </h2>

          <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-200 pb-3">
            {desmosStrategies.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveTab(s.id)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                  activeTab === s.id
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {s.title.split('.')[1] || s.title}
              </button>
            ))}
          </div>

          {/* Active Strategy Card */}
          {desmosStrategies.filter(s => s.id === activeTab).map((item) => (
            <div key={item.id} className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <span className="px-2.5 py-1 text-xs font-bold rounded-full bg-emerald-100 text-emerald-800">{item.badge}</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">{item.concept}</p>
              
              <div className="bg-slate-900 text-emerald-400 p-4 rounded-xl font-mono text-xs sm:text-sm leading-relaxed mb-4 overflow-x-auto whitespace-pre-wrap">
                {item.code}
              </div>

              <div className="p-3.5 bg-amber-50 rounded-lg border border-amber-200 text-xs sm:text-sm text-amber-900 flex items-start gap-2">
                <AlertCircle size={16} className="text-amber-600 shrink-0 mt-0.5" />
                <span><strong>Pro-Tip:</strong> {item.tip}</span>
              </div>
            </div>
          ))}
        </section>

        {/* When to use Desmos vs Algebra */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 flex items-center gap-2">
            <BarChart3 className="text-emerald-600" size={28} />
            When Desmos is Faster vs. When Algebra is Better
          </h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mb-6">
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="bg-slate-50 text-slate-900 font-bold border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4">Question Type</th>
                  <th className="py-3 px-4">Best Approach</th>
                  <th className="py-3 px-4">Why</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-900">Systems of linear / non-linear equations</td>
                  <td className="py-3 px-4"><span className="text-emerald-700 font-bold">Desmos</span> (Graph intersection)</td>
                  <td className="py-3 px-4 text-xs text-slate-500">Takes 10 seconds. Eliminates substitution and sign errors.</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-900">Find the maximum or minimum of a quadratic</td>
                  <td className="py-3 px-4"><span className="text-emerald-700 font-bold">Desmos</span> (Click grey vertex)</td>
                  <td className="py-3 px-4 text-xs text-slate-500">No need to complete the square or use -b/(2a).</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-900">Abstract constant problems with no numbers</td>
                  <td className="py-3 px-4"><span className="text-blue-700 font-bold">Algebraic Theory</span></td>
                  <td className="py-3 px-4 text-xs text-slate-500">When equations contain multiple variables (a, b, c, x), Desmos cannot isolate constants without assumptions.</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-900">Circle equations and radii</td>
                  <td className="py-3 px-4"><span className="text-emerald-700 font-bold">Desmos</span> (Graph direct form)</td>
                  <td className="py-3 px-4 text-xs text-slate-500">Instantly displays diameter and tangent points.</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-900">Simple one-step algebraic manipulations</td>
                  <td className="py-3 px-4"><span className="text-blue-700 font-bold">Mental Math / Handheld Calc</span></td>
                  <td className="py-3 px-4 text-xs text-slate-500">Typing a 4-variable fraction into Desmos takes longer than solving by hand.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Diagnostic Assessment CTA Card */}
        <div className="bg-gradient-to-r from-emerald-900 via-slate-900 to-emerald-950 text-white rounded-2xl p-8 mb-14 shadow-lg text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">
              <Award size={14} /> Assess Your Math Baseline
            </div>
            <h3 className="text-2xl font-black text-white tracking-tight mb-2">Take Nitaq's Free SAT Math Diagnostic</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Test your speed on algebra, advanced math, and geometry questions. See whether calculator shortcuts or conceptual gaps are holding back your score.
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
            Frequently Asked Questions: Desmos on SAT Math
          </h2>
          <div className="space-y-3">
            {[
              {
                q: 'What is the "James Lu SAT Desmos" method students talk about?',
                a: 'Popularized by SAT prep educators, this refers to using regression notation (~), table points, and variable sliders in Desmos to solve complex quadratic and polynomial problems without doing pencil-and-paper algebra. At Nitaq Academy, we incorporate these visual techniques into our weekly math drills.'
              },
              {
                q: 'Can I bring my handheld TI-84 or Casio calculator in addition to Desmos?',
                a: 'Yes! College Board rules allow you to bring an approved handheld graphing or scientific calculator to your UAE test center alongside the in-app Desmos calculator. Many students use their handheld for rapid arithmetic and Desmos for graphing intersections.'
              },
              {
                q: 'How do I convert a decimal answer to a fraction in Desmos?',
                a: 'Whenever an output is a non-integer, a small circle with a fraction icon [a/b] appears on the left side of the answer box. Click it, and Desmos immediately converts the decimal to a simplified fraction.'
              },
              {
                q: 'Does Desmos have degree and radian modes for trigonometry?',
                a: 'Yes. Click the "Wrench" icon (graph settings) in the top-right corner of the Desmos window. At the bottom, switch between "Radians" and "Degrees". For Digital SAT questions involving triangles, make sure your calculator is set to Degrees.'
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
          <Link to="/article/bluebook-sat-guide-digital-exam-app" className="text-emerald-600 hover:underline font-semibold flex items-center gap-1">
            ← Bluebook App Testing Software Guide
          </Link>
          <Link to="/article/sat-suite-question-bank-practice-guide" className="text-emerald-600 hover:underline font-semibold flex items-center gap-1">
            Next: SAT Suite Question Bank Practice Guide →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DesmosSatGuide;
