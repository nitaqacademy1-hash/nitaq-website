import React, { useState } from 'react';
import { Link } from '../../i18n/Link';
import SEO from '../../components/SEO';
import { 
  Target, CheckCircle2, AlertCircle, Clock, ShieldCheck, 
  HelpCircle, ArrowRight, Award, Zap, Calendar, BookOpen, TrendingUp
} from 'lucide-react';

const HowToAceSatGuide = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  const [activePlan, setActivePlan] = useState('60day');

  const plans = {
    '30day': {
      title: '30-Day Intensive Crash Plan (15–20 Hours/Week)',
      audience: 'Best for Grade 12 students with an upcoming test date (November/December) who need an immediate 80–150 point jump.',
      schedule: [
        { week: 'Week 1', focus: 'Diagnostic & P0 Grammar Rules', tasks: 'Take Bluebook Practice Test 1. Master the 8 Standard English Conventions (commas, semicolons, dashes, transitions).' },
        { week: 'Week 2', focus: 'Desmos Masterclass & Math Module 1', tasks: 'Drill system of equations, regressions, and vertex shortcuts. Eliminate careless arithmetic errors in Math Module 1.' },
        { week: 'Week 3', focus: 'Adaptive Module 2 Hard Questions & Pacing', tasks: 'Target Advanced Math (quadratics, circle theorems) and Reading Craft & Structure. Take Bluebook Test 2 under strict timing.' },
        { week: 'Week 4', focus: 'Mock Exam Calibration & Weakness Review', tasks: 'Take Bluebook Test 3 on Saturday morning at 8:00 AM. Review error log. Light review 48 hours prior to test day.' }
      ]
    },
    '60day': {
      title: '60-Day Structured Roadmap (8–12 Hours/Week) — Recommended',
      audience: 'The optimal balanced timeline for UAE school students balancing CBSE, IGCSE, IB, or American school exams.',
      schedule: [
        { week: 'Weeks 1–2', focus: 'Foundation Assessment & Diagnostic Baseline', tasks: 'Complete Nitaq diagnostic assessment. Identify which of the 8 domains need foundational conceptual review.' },
        { week: 'Weeks 3–4', focus: 'Reading & Writing Systematic Deep-Dive', tasks: 'Master Rhetorical Synthesis bullet scanning, Words in Context, and Textual Evidence questions. Complete 150 Question Bank items.' },
        { week: 'Weeks 5–6', focus: 'Mathematics Mastery & Desmos Shortcuts', tasks: 'Cover Algebra and Advanced Math. Learn regression notation and slider hacks. Full-length Bluebook Practice Test 2.' },
        { week: 'Weeks 7–8', focus: 'Full Adaptive Mocks & Exam Simulation', tasks: 'Complete Bluebook Tests 3 & 4. Simulate test day conditions with Emirates ID, personal laptop, and snack breaks.' }
      ]
    },
    '90day': {
      title: '90-Day Mastery Roadmap (5–8 Hours/Week)',
      audience: 'Ideal for Grade 10 and 11 students targeting 1500+ for competitive international admissions (Ivy League, AUS merit scholarships).',
      schedule: [
        { week: 'Month 1', focus: 'Conceptual Core & Vocabulary Architecture', tasks: 'Rebuild core mathematical theory (functions, circle geometry, exponents). Develop academic vocabulary in context reading habits.' },
        { week: 'Month 2', focus: 'Speed, Desmos Mastery & Skill Isolation', tasks: 'Complete timed sets of 15 questions per domain. Train to finish Math Module 1 in under 22 minutes to bank time for verification.' },
        { week: 'Month 3', focus: 'Full-Length Adaptive Conditioning', tasks: 'Take Bluebook Practice Tests 1 through 6 bi-weekly. Track error patterns in an active spreadsheet. Fine-tune pacing strategy.' }
      ]
    }
  };

  return (
    <div className="article-page bg-white text-slate-800">
      <SEO />

      {/* Hero Header */}
      <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-700">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs tracking-wider uppercase mb-3">
            <Target size={14} />
            <span>UAE High Scorer Roadmap (2026–2027)</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            How to Ace the SAT: A 30/60/90-Day Preparation Plan
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
            A comprehensive, step-by-step preparation blueprint tailored for UAE students. Master pacing strategies, score target benchmarks (1400–1550+), and school curriculum balance.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400 border-t border-slate-700/80 pt-4">
            <span className="flex items-center gap-1.5"><Clock size={14} className="text-emerald-400" /> 11-Minute Read</span>
            <span className="flex items-center gap-1.5"><TrendingUp size={14} className="text-emerald-400" /> Surging Query (+900%)</span>
            <span className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-emerald-400" /> SPEA-Aligned Guidance</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Score Benchmark Table */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 flex items-center gap-2">
            <Award className="text-emerald-600" size={28} />
            What Does It Take to "Ace" the Digital SAT?
          </h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mb-6">
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="bg-slate-50 text-slate-900 font-bold border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4">Score Range</th>
                  <th className="py-3 px-4">Percentile</th>
                  <th className="py-3 px-4">University Target</th>
                  <th className="py-3 px-4">Preparation Focus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">1500 – 1600</td>
                  <td className="py-3 px-4 text-emerald-700 font-bold">Top 1% (99th)</td>
                  <td className="py-3 px-4 text-xs">Ivy League, Stanford, MIT, NYU Abu Dhabi (Full Merit)</td>
                  <td className="py-3 px-4 text-xs text-slate-500">Zero tolerance for careless errors on Module 1; hard Module 2 speed mastery.</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">1400 – 1490</td>
                  <td className="py-3 px-4 text-emerald-700 font-bold">Top 5% (94th–98th)</td>
                  <td className="py-3 px-4 text-xs">AUS Engineering/Business, Khalifa University, Top UK/Canada</td>
                  <td className="py-3 px-4 text-xs text-slate-500">Master Desmos hacks; eliminate grammar punctuation mistakes entirely.</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">1250 – 1390</td>
                  <td className="py-3 px-4 text-slate-700 font-medium">Top 20% (80th–93rd)</td>
                  <td className="py-3 px-4 text-xs">Competitive UAE private universities, AUD, Heriot-Watt Dubai</td>
                  <td className="py-3 px-4 text-xs text-slate-500">Solidify foundational algebra; master standard conventions and transitions.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Study Plan Tabs */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 flex items-center gap-2">
            <Calendar className="text-emerald-600" size={28} />
            Choose Your Preparation Runway
          </h2>

          <div className="flex flex-wrap gap-2 mb-6">
            <button
              onClick={() => setActivePlan('60day')}
              className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activePlan === '60day'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              60-Day Standard Plan (Recommended)
            </button>
            <button
              onClick={() => setActivePlan('30day')}
              className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activePlan === '30day'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              30-Day Intensive Crash Plan
            </button>
            <button
              onClick={() => setActivePlan('90day')}
              className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activePlan === '90day'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              90-Day Mastery Plan (Top 1%)
            </button>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-2">{plans[activePlan].title}</h3>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">{plans[activePlan].audience}</p>

            <div className="space-y-4">
              {plans[activePlan].schedule.map((slot, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <span className="font-bold text-slate-900 text-sm">{slot.week}</span>
                    <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-emerald-100 text-emerald-800">{slot.focus}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{slot.tasks}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Diagnostic Assessment CTA Card */}
        <div className="bg-gradient-to-r from-emerald-900 via-slate-900 to-emerald-950 text-white rounded-2xl p-8 mb-14 shadow-lg text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">
              <Award size={14} /> Step 1 in Every Successful Plan
            </div>
            <h3 className="text-2xl font-black text-white tracking-tight mb-2">Start with Nitaq's Free Diagnostic</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Before setting your study calendar, discover your exact baseline score across all 8 College Board domains. Receive an instant score prediction and targeted study roadmap.
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
            Frequently Asked Questions: Acing the SAT
          </h2>
          <div className="space-y-3">
            {[
              {
                q: 'How many total hours should I study to increase my score by 200 points?',
                a: 'On average, students who achieve a 150–200 point improvement invest between 60 and 80 hours of focused preparation, comprising 40% conceptual theory/grammar, 30% Desmos and pacing drills, and 30% full-length timed adaptive mock analysis.'
              },
              {
                q: 'How do I balance CBSE or IGCSE board exam prep with SAT prep in UAE?',
                a: 'The key is curriculum synergy: The Digital SAT Math syllabus overlaps heavily with Grade 10 and 11 algebra and trigonometry in CBSE and IGCSE. Focus on SAT-specific techniques (Desmos and Reading & Writing conventions) during weekends and holidays, reserving weekdays for school board homework.'
              },
              {
                q: 'Is it bad to take the SAT more than twice?',
                a: 'No. The College Board allows you to take the test as many times as you wish, and most UAE and international universities accept "Score Choice" or "Super Scoring"—taking your highest Math score from one date and your highest Reading & Writing score from another.'
              },
              {
                q: 'What is the biggest pacing mistake students make on the Digital SAT?',
                a: 'Spending more than 2 minutes on a single hard question in Module 1. Remember: all questions carry equal weight. If a question is difficult, flag it, pick your best educated guess, and return to it during the final 5 minutes.'
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
          <Link to="/article/sat-suite-question-bank-practice-guide" className="text-emerald-600 hover:underline font-semibold flex items-center gap-1">
            ← SAT Suite Question Bank Practice Guide
          </Link>
          <Link to="/article/sat-math-practice-questions-traps-guide" className="text-emerald-600 hover:underline font-semibold flex items-center gap-1">
            Next: SAT Math Practice Questions & Traps Guide →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowToAceSatGuide;
