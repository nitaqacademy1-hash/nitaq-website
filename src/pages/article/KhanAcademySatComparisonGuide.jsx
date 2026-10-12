import React, { useState } from 'react';
import { Link } from '../../i18n/Link';
import SEO from '../../components/SEO';
import { 
  BookOpen, CheckCircle2, AlertCircle, Clock, ShieldCheck, 
  HelpCircle, ArrowRight, Award, Zap, Users, Sparkles, Scale
} from 'lucide-react';

const KhanAcademySatComparisonGuide = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  const comparisonPoints = [
    {
      feature: 'Cost & Accessibility',
      khan: '100% Free worldwide. Accessible 24/7 on any browser.',
      nitaq: 'Tuition-based structured courses with flexible batch schedules.',
      verdict: 'Khan Academy is unmatched for free baseline access.'
    },
    {
      feature: 'Content Authenticity',
      khan: 'Directly partnered with College Board. Official questions.',
      nitaq: 'Official College Board items supplemented with customized UAE diagnostic drills.',
      verdict: 'Both offer authentic College Board question alignment.'
    },
    {
      feature: 'Teaching Delivery & Accountability',
      khan: 'Self-paced asynchronous video explanations and written articles.',
      nitaq: 'Live mentor-led classes (in-person in Al Majaz 3, Sharjah & live online) with weekly homework accountability.',
      verdict: 'Coaching provides the consistency students often struggle to maintain alone.'
    },
    {
      feature: 'Desmos Shortcut Training',
      khan: 'Basic conceptual calculator usage within practice modules.',
      nitaq: 'Dedicated Desmos masterclasses: regression hacks, sliders, and speed tricks for Module 2.',
      verdict: 'Structured coaching focuses heavily on speed tricks to finish modules with banked time.'
    },
    {
      feature: '1-on-1 Feedback on Recurring Mistakes',
      khan: 'Automated automated hint system without personalized discussion.',
      nitaq: 'Tutors analyze your individual diagnostic scorecards to fix root mental habits.',
      verdict: 'Coaching excels at identifying why a student repeatedly picks specific distractor choices.'
    }
  ];

  return (
    <div className="article-page bg-white text-slate-800">
      <SEO />

      {/* Hero Header */}
      <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-700">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs tracking-wider uppercase mb-3">
            <Scale size={14} />
            <span>Preparation Pathway Analysis • UAE Guide (2026–2027)</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Khan Academy SAT vs Structured SAT Coaching: Which Approach Fits You?
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
            An objective, practical guide exploring the strengths of Khan Academy’s official free platform and when UAE students benefit from structured, teacher-led coaching.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400 border-t border-slate-700/80 pt-4">
            <span className="flex items-center gap-1.5"><Clock size={14} className="text-emerald-400" /> 8-Minute Read</span>
            <span className="flex items-center gap-1.5"><Zap size={14} className="text-emerald-400" /> Ecosystem Trend (+20%)</span>
            <span className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-emerald-400" /> Objective Decision Framework</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Core Perspective Box */}
        <div className="bg-emerald-50/80 border-l-4 border-emerald-500 p-5 rounded-r-xl mb-10 shadow-sm">
          <div className="flex items-start gap-3">
            <Sparkles size={22} className="text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-emerald-950 text-sm sm:text-base">The Right Mindset: Complementary, Not Competitive</h3>
              <p className="text-emerald-900 text-xs sm:text-sm mt-1 leading-relaxed">
                At Nitaq Academy, we actively encourage our students to practice on Khan Academy. It is an extraordinary, official resource for drilling core concepts. However, self-study platforms require high self-discipline, and many students hit a score plateau around 1200–1300 where they need personalized diagnostic feedback to reach the 1450+ tier.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Comparison Table */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 flex items-center gap-2">
            <Scale className="text-emerald-600" size={28} />
            Side-by-Side Comparison: Self-Study vs. Structured Coaching
          </h2>

          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mb-6">
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="bg-slate-50 text-slate-900 font-bold border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4">Evaluation Criteria</th>
                  <th className="py-3 px-4">Khan Academy (Self-Study)</th>
                  <th className="py-3 px-4">Nitaq Academy (Coaching)</th>
                  <th className="py-3 px-4">Strategic Verdict</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonPoints.map((p, idx) => (
                  <tr key={idx}>
                    <td className="py-3.5 px-4 font-semibold text-slate-900">{p.feature}</td>
                    <td className="py-3.5 px-4 text-xs sm:text-sm text-slate-600">{p.khan}</td>
                    <td className="py-3.5 px-4 text-xs sm:text-sm text-slate-600">{p.nitaq}</td>
                    <td className="py-3.5 px-4 text-xs font-medium text-emerald-800 bg-emerald-50/30">{p.verdict}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Who Should Choose Which? */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 flex items-center gap-2">
            <Users className="text-emerald-600" size={28} />
            How to Decide Which Option Fits Your Profile
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-slate-900 text-lg mb-3 flex items-center gap-2">
                <CheckCircle2 size={18} className="text-emerald-600" /> Start with Khan Academy If:
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>You have 6+ months before your exam date and high independent study discipline.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Your current score is below 1100 and you need to review foundational Grade 8–10 math formulas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>You are comfortable reading written explanations and debugging your own errors without a teacher.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-200">
              <h3 className="font-bold text-slate-900 text-lg mb-3 flex items-center gap-2">
                <Sparkles size={18} className="text-emerald-600" /> Choose Structured Coaching If:
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Your score is plateaued between 1200 and 1350 and self-study is no longer moving the needle.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>You have an urgent university deadline (AUS, Khalifa University, or US/UK regular decision).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>You need personalized Desmos shortcuts and pacing discipline under timed adaptive pressure.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Diagnostic Assessment CTA Card */}
        <div className="bg-gradient-to-r from-emerald-900 via-slate-900 to-emerald-950 text-white rounded-2xl p-8 mb-14 shadow-lg text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">
              <Award size={14} /> Diagnostic Baseline
            </div>
            <h3 className="text-2xl font-black text-white tracking-tight mb-2">See Where You Stand Before Deciding</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Take Nitaq's free 24-question diagnostic quiz. Our academic advisors will review your report with you and help you choose whether self-study or a coaching batch is best for your goals.
            </p>
          </div>
          <Link
            to="/sat/diagnostic"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm rounded-xl transition-all shadow-md"
          >
            Take Free Diagnostic <ArrowRight size={16} />
          </Link>
        </div>

        {/* FAQ Section */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 flex items-center gap-2">
            <HelpCircle className="text-emerald-600" size={28} />
            Frequently Asked Questions: Khan Academy vs Coaching
          </h2>
          <div className="space-y-3">
            {[
              {
                q: 'Can a student score 1500+ using only Khan Academy?',
                a: 'Yes, it is possible for highly self-motivated students with strong foundational academic backgrounds. However, many students find that self-study lacks test-day pacing simulation and strategic shortcut training (like advanced Desmos hacks), which often makes a coach-led track faster and more reliable.'
              },
              {
                q: 'Does Khan Academy test questions differ from the real exam?',
                a: 'Khan Academy uses official College Board material, so the question style is authentic. However, their practice modules are often untimed, whereas the actual Digital SAT places students under intense adaptive time constraints.'
              },
              {
                q: 'How does Nitaq Academy incorporate Khan Academy into its coaching?',
                a: 'We frequently assign specific Khan Academy skill-drill links as targeted homework between our weekly live sessions. We combine Khan Academy’s vast practice pool with our mentor-led live breakdown of tricky questions and exam-day pacing routines.'
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
          <Link to="/article/sat-math-practice-questions-traps-guide" className="text-emerald-600 hover:underline font-semibold flex items-center gap-1">
            ← SAT Math Practice Questions & Traps
          </Link>
          <Link to="/article/sat-prep-options-uae-academy-comparison" className="text-emerald-600 hover:underline font-semibold flex items-center gap-1">
            Next: SAT Prep Options in the UAE: What to Compare →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default KhanAcademySatComparisonGuide;
