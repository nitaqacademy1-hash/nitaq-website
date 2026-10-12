import React, { useState } from 'react';
import { Link } from '../../i18n/Link';
import SEO from '../../components/SEO';
import { 
  Building2, CheckCircle2, AlertCircle, Clock, ShieldCheck, 
  HelpCircle, ArrowRight, Award, Zap, Users, Check, Search
} from 'lucide-react';

const SatPrepOptionsUaeComparisonGuide = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  const evaluationCriteria = [
    {
      criterion: '1. Official Licensing & Accreditation',
      why: 'Educational institutes in Sharjah must be licensed by the Sharjah Private Education Authority (SPEA), and in Dubai by the Knowledge and Human Development Authority (KHDA).',
      tip: 'Always ask for the center’s educational permit number to ensure faculty and curricula are officially authorized.'
    },
    {
      criterion: '2. Batch Size vs. Individual Attention',
      why: 'Large lecture halls (25–40 students) make it difficult for teachers to identify individual math or grammar blind spots. Micro-batches (8–12 students) provide tailored attention.',
      tip: 'Ask whether the institute offers 1-on-1 diagnostic debriefs alongside group classroom sessions.'
    },
    {
      criterion: '3. Full Digital SAT Simulation on Bluebook',
      why: 'Paper mock exams are obsolete. An effective training provider must administer full-length adaptive tests on actual computer testing software.',
      tip: 'Verify whether the mock exams mimic the College Board\'s multistage adaptive routing (Module 1 performance determining Module 2 difficulty).'
    },
    {
      criterion: '4. Dedicated Desmos Graphing Calculator Training',
      why: 'Since Desmos is available across all 44 Math questions, top UAE prep institutes teach high-speed regression tricks and slider hacks.',
      tip: 'Avoid academies that treat the calculator as an afterthought or rely exclusively on traditional paper algebra.'
    },
    {
      criterion: '5. Transparency in Student Results & Reviews',
      why: 'Reputable academies document starting baseline scores alongside official test outcomes, rather than advertising vague score promises.',
      tip: 'Check verified Google reviews and authentic parent testimonials from local schools in Sharjah and Dubai.'
    }
  ];

  return (
    <div className="article-page bg-white text-slate-800">
      <SEO />

      {/* Hero Header */}
      <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-700">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs tracking-wider uppercase mb-3">
            <Building2 size={14} />
            <span>UAE Academy Evaluation Guide (2026–2027)</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            SAT Prep Options in the UAE: What to Compare Before Choosing an Academy
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
            A parent and student guide to evaluating SAT coaching options across Sharjah, Dubai, and Northern Emirates. Compare licensing, batch sizes, adaptive mock software, and mentorship models objectively.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400 border-t border-slate-700/80 pt-4">
            <span className="flex items-center gap-1.5"><Clock size={14} className="text-emerald-400" /> 9-Minute Read</span>
            <span className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-emerald-400" /> Objective Parent Checklist</span>
            <span className="flex items-center gap-1.5"><Zap size={14} className="text-emerald-400" /> Trending Search (+3,950%)</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Objective Checklist Intro */}
        <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-6 mb-12">
          <h2 className="text-lg font-bold text-emerald-950 mb-2 flex items-center gap-2">
            <Search className="text-emerald-600" size={20} /> Navigating the UAE SAT Prep Market
          </h2>
          <p className="text-sm text-emerald-900 leading-relaxed">
            With rising searches for preparation providers such as <em>Bedrock SAT</em>, <em>One Prep SAT</em>, and local coaching centers across Dubai and Sharjah, families are faced with diverse prep formats—from self-study app platforms to boutique in-person coaching institutes. This guide outlines 5 transparent criteria to help you choose the right learning environment for your child's specific score target.
          </p>
        </div>

        {/* 5 Evaluation Criteria */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 flex items-center gap-2">
            <CheckCircle2 className="text-emerald-600" size={28} />
            5 Critical Questions to Ask Before Enrolling
          </h2>

          <div className="space-y-4">
            {evaluationCriteria.map((c, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-emerald-300 transition-colors shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">{c.criterion}</h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-3 leading-relaxed">{c.why}</p>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs sm:text-sm text-slate-700 flex items-center gap-2">
                  <Check size={15} className="text-emerald-600 shrink-0" />
                  <span><strong>What to ask the admissions advisor:</strong> {c.tip}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* The Nitaq Academy Framework */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 flex items-center gap-2">
            <Building2 className="text-emerald-600" size={28} />
            How Nitaq Academy Structures Digital SAT Preparation
          </h2>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-emerald-100 text-emerald-800 mb-2 inline-block">Micro-Batches</span>
              <h4 className="font-bold text-slate-900 mb-1">8 to 12 Students</h4>
              <p className="text-xs text-slate-600">
                Small group sizes ensure every student receives interactive feedback, question troubleshooting, and individualized homework reviews.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-emerald-100 text-emerald-800 mb-2 inline-block">Desmos Integration</span>
              <h4 className="font-bold text-slate-900 mb-1">Visual Speed Drills</h4>
              <p className="text-xs text-slate-600">
                Weekly masterclasses on the College Board's built-in Desmos graphing calculator, teaching regression hacks, sliders, and root identification.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-emerald-100 text-emerald-800 mb-2 inline-block">Adaptive Mocks</span>
              <h4 className="font-bold text-slate-900 mb-1">Timed Diagnostic Analytics</h4>
              <p className="text-xs text-slate-600">
                Computer-delivered full-length adaptive tests that simulate the real Bluebook test-day experience and provide domain-by-domain diagnostic scorecards.
              </p>
            </div>
          </div>
        </section>

        {/* Diagnostic Assessment CTA Card */}
        <div className="bg-gradient-to-r from-emerald-900 via-slate-900 to-emerald-950 text-white rounded-2xl p-8 mb-14 shadow-lg text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">
              <Award size={14} /> Objective Assessment First
            </div>
            <h3 className="text-2xl font-black text-white tracking-tight mb-2">Book a Free SAT Diagnostic Consultation</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Before committing to any course package, complete our 24-question adaptive screening. Receive an objective diagnostic score report and speak with an academic mentor.
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
            Frequently Asked Questions: Choosing an SAT Academy in UAE
          </h2>
          <div className="space-y-3">
            {[
              {
                q: 'What are typical SAT preparation course fees in Sharjah and Dubai?',
                a: 'Course fees across authorized UAE institutes typically range from AED 1,800 to AED 4,500 depending on the total instructional hours (4-week intensive crash courses vs. 10-week comprehensive tracks), batch size, and whether group or 1-on-1 private mentoring is selected.'
              },
              {
                q: 'Is in-person coaching better than online SAT tutoring for UAE students?',
                a: 'In-person coaching at our Al Majaz 3 centre in Sharjah offers structured focus and direct classroom peer motivation. However, for students residing in Dubai or across the Northern Emirates, live interactive online sessions offer identical curriculum coverage with zero highway commuting time.'
              },
              {
                q: 'When should high school students begin preparation?',
                a: 'The recommended window is the summer after Grade 10 or the first term of Grade 11. Starting in Grade 11 allows students to complete their official test attempts before Grade 12 board exams and university application deadlines.'
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
          <Link to="/article/khan-academy-sat-vs-structured-coaching" className="text-emerald-600 hover:underline font-semibold flex items-center gap-1">
            ← Khan Academy vs Structured Coaching
          </Link>
          <Link to="/article/sat-requirements-uae-top-universities-harvard" className="text-emerald-600 hover:underline font-semibold flex items-center gap-1">
            Next: SAT Requirements for UAE & Top Universities (Harvard, AUS) →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SatPrepOptionsUaeComparisonGuide;
