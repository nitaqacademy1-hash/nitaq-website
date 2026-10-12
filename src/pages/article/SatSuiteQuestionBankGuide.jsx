import React, { useState } from 'react';
import { Link } from '../../i18n/Link';
import SEO from '../../components/SEO';
import { 
  BookOpen, CheckCircle2, AlertCircle, Clock, ShieldCheck, 
  HelpCircle, ArrowRight, Award, Zap, Filter, ListFilter, Target
} from 'lucide-react';

const SatSuiteQuestionBankGuide = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  const steps = [
    {
      num: '01',
      title: 'Filter by Specific Content Domain',
      desc: 'Instead of doing random question sets, target one specific domain per study block—such as Advanced Math (Nonlinear equations) or Standard English Conventions (Boundaries).'
    },
    {
      num: '02',
      title: 'Check "Exclude Active Practice Test Items"',
      desc: 'CRITICAL: The Question Bank contains items from official Bluebook Practice Tests 1–6. If you practice them early, you will spoil your official practice test scores. Always filter them out.'
    },
    {
      num: '03',
      title: 'Group by Difficulty Tier (Easy -> Medium -> Hard)',
      desc: 'Work through Medium items first to solidify consistency, then drill Hard questions to unlock the adaptive Module 2 upper scoring bracket.'
    },
    {
      num: '04',
      title: 'Maintain a 3-Category Error Log',
      desc: 'For every incorrect item, record the root cause: Content Gap (didn\'t know formula), Misread Trap (missed negative sign or key condition), or Pacing Rush (ran out of time).'
    }
  ];

  return (
    <div className="article-page bg-white text-slate-800">
      <SEO />

      {/* Hero Header */}
      <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-700">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs tracking-wider uppercase mb-3">
            <BookOpen size={14} />
            <span>Official Practice Resources • Question Bank Strategy (2026–2027)</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            SAT Suite Question Bank: How to Practice Effectively in UAE
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
            Access thousands of official College Board practice questions. Learn how to filter by skill, avoid spoiling official Bluebook practice tests, and build an error-tracking system for maximum score growth.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400 border-t border-slate-700/80 pt-4">
            <span className="flex items-center gap-1.5"><Clock size={14} className="text-emerald-400" /> 9-Minute Read</span>
            <span className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-emerald-400" /> Official College Board Suite</span>
            <span className="flex items-center gap-1.5"><Zap size={14} className="text-emerald-400" /> Breakout Query (+2,000%)</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Core Warning Box */}
        <div className="bg-rose-50 border-l-4 border-rose-500 p-5 rounded-r-xl mb-10 shadow-sm">
          <div className="flex items-start gap-3">
            <AlertCircle size={22} className="text-rose-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-rose-950 text-sm sm:text-base">Warning: Do Not "Burn" Official Bluebook Test Questions</h3>
              <p className="text-rose-900 text-xs sm:text-sm mt-1 leading-relaxed">
                The College Board's SAT Suite Question Bank includes identical questions from official Bluebook Practice Tests 1 through 6. If you practice questions without filtering, you will encounter familiar questions during your full mock tests, artificially inflating your diagnostic score and masking real weaknesses.
              </p>
            </div>
          </div>
        </div>

        {/* Step by Step Strategy */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 flex items-center gap-2">
            <ListFilter className="text-emerald-600" size={28} />
            The 4-Step Practice Routine for UAE Students
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {steps.map((st, i) => (
              <div key={i} className="p-5 rounded-xl border border-slate-200 bg-white hover:border-emerald-300 transition-colors shadow-sm">
                <span className="text-2xl font-black text-emerald-500 mb-1 block">{st.num}</span>
                <h3 className="font-bold text-slate-900 text-base mb-2">{st.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Breakdown of Available Domains */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 flex items-center gap-2">
            <Filter className="text-emerald-600" size={28} />
            What Content is in the SAT Suite Question Bank?
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-slate-900 text-lg mb-3 flex items-center gap-2">
                <Target size={18} className="text-emerald-600" /> Reading & Writing (4 Domains)
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Craft & Structure:</strong> Words in Context, Text Structure & Purpose, Cross-Text Connections.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Information & Ideas:</strong> Central Ideas, Command of Evidence (Textual & Quantitative), Inferences.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Standard English Conventions:</strong> Boundaries, Form, Structure, and Sense (Grammar & Punctuation).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Expression of Ideas:</strong> Rhetorical Synthesis (Bullet Notes) and Transitions.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-slate-900 text-lg mb-3 flex items-center gap-2">
                <Target size={18} className="text-emerald-600" /> Mathematics (4 Domains)
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Algebra:</strong> Linear equations in one/two variables, linear functions, linear systems, inequalities.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Advanced Math:</strong> Equivalent expressions, nonlinear equations (quadratics, polynomials), nonlinear functions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Problem-Solving & Data:</strong> Ratios, rates, percentages, probability, unit conversions, distributions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Geometry & Trigonometry:</strong> Area and volume, angles, right triangles and trigonometry, circle theorems.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Diagnostic Assessment CTA Card */}
        <div className="bg-gradient-to-r from-emerald-900 via-slate-900 to-emerald-950 text-white rounded-2xl p-8 mb-14 shadow-lg text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">
              <Award size={14} /> Measure Your Question-Solving Speed
            </div>
            <h3 className="text-2xl font-black text-white tracking-tight mb-2">Take Nitaq's Free Adaptive Diagnostic</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Before jumping into hundreds of uncurated question bank items, establish which of the 8 College Board domains need immediate reinforcement. Get your instant report today.
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
            Frequently Asked Questions: SAT Suite Question Bank
          </h2>
          <div className="space-y-3">
            {[
              {
                q: 'Is the SAT Suite Question Bank completely free to use?',
                a: 'Yes. The SAT Suite Question Bank is an official, free public web tool provided by the College Board for educators and students. You do not need a paid subscription or special credentials to access the items.'
              },
              {
                q: 'Does the Question Bank provide answer explanations for every question?',
                a: 'Yes. Each question includes the correct answer, the skill domain, question ID, and an official explanation breaking down why the correct choice is right and why the distractors are wrong.'
              },
              {
                q: 'How many total questions are currently available?',
                a: 'As of 2026, the question bank contains over 3,000 official questions across Reading & Writing and Math from recent Digital SAT, PSAT/NMSQT, and PSAT 10 testing pools.'
              },
              {
                q: 'Can I export question sets into a printable PDF?',
                a: 'Yes. The platform allows you to select question checkboxes and click "Export to PDF" with or without the answer key, which is great for offline weekend study sessions.'
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
          <Link to="/article/desmos-sat-guide-math-calculator-strategies" className="text-emerald-600 hover:underline font-semibold flex items-center gap-1">
            ← Desmos SAT Math Calculator Strategies
          </Link>
          <Link to="/article/how-to-ace-sat-study-plan-guide" className="text-emerald-600 hover:underline font-semibold flex items-center gap-1">
            Next: How to Ace the SAT: 30/60/90-Day Study Plan →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SatSuiteQuestionBankGuide;
