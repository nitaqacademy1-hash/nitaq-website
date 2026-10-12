import React, { useState } from 'react';
import { Link } from '../../i18n/Link';
import SEO from '../../components/SEO';
import { 
  HelpCircle, CheckCircle2, AlertCircle, Clock, ShieldCheck, 
  ArrowRight, Award, Zap, Laptop, BookOpen, GraduationCap
} from 'lucide-react';

const WhatDoesSatStandForGuide = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  return (
    <div className="article-page bg-white text-slate-800">
      <SEO />

      {/* Hero Header */}
      <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-700">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs tracking-wider uppercase mb-3">
            <HelpCircle size={14} />
            <span>Beginner Explainer • Digital SAT Guide for UAE Families (2026–2027)</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            What Does SAT Stand For? Digital SAT Explained for UAE Students
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
            Everything parents and high school students need to know about the Digital SAT: what the acronym means, exam structure, 400–1600 scoring scale, test timing, and why it is critical for UAE university admissions.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400 border-t border-slate-700/80 pt-4">
            <span className="flex items-center gap-1.5"><Clock size={14} className="text-emerald-400" /> 8-Minute Read</span>
            <span className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-emerald-400" /> Official College Board Format</span>
            <span className="flex items-center gap-1.5"><Zap size={14} className="text-emerald-400" /> High-Growth Search (+1,400%)</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* The Name Origin Card */}
        <section className="mb-14">
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200">
            <h2 className="text-2xl font-black text-slate-900 mb-3">
              The Meaning & History of "SAT"
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
              Originally created in 1926, <strong>SAT</strong> stood for <strong>Scholastic Aptitude Test</strong>. In 1993, the College Board changed the name to <strong>Scholastic Assessment Test</strong> to emphasize that it assesses acquired academic skills rather than innate aptitude.
            </p>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Today, the College Board treats <strong>SAT</strong> as an independent trademarked acronym. It is the premier globally standardized exam assessing high school students' college readiness in <strong>Reading & Writing</strong> and <strong>Mathematics</strong>.
            </p>
          </div>
        </section>

        {/* Digital SAT Structure At A Glance */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 flex items-center gap-2">
            <Laptop className="text-emerald-600" size={28} />
            The Digital SAT Structure at a Glance (2026)
          </h2>

          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <span className="px-3 py-1 text-xs font-bold rounded-full bg-blue-100 text-blue-800 mb-3 inline-block">Section 1</span>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Reading & Writing</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                <li>• <strong>Duration:</strong> 64 minutes total</li>
                <li>• <strong>Format:</strong> Two 32-minute modules</li>
                <li>• <strong>Questions:</strong> 54 questions (27 per module)</li>
                <li>• <strong>Passage Length:</strong> Short 25–150 word excerpts</li>
                <li>• <strong>Score Range:</strong> 200 – 800 points</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <span className="px-3 py-1 text-xs font-bold rounded-full bg-emerald-100 text-emerald-800 mb-3 inline-block">Section 2</span>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Mathematics</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                <li>• <strong>Duration:</strong> 70 minutes total</li>
                <li>• <strong>Format:</strong> Two 35-minute modules</li>
                <li>• <strong>Questions:</strong> 44 questions (22 per module)</li>
                <li>• <strong>Calculator:</strong> Desmos graphing calculator allowed throughout</li>
                <li>• <strong>Score Range:</strong> 200 – 800 points</li>
              </ul>
            </div>
          </div>

          <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-xs sm:text-sm text-emerald-950 flex items-center gap-3">
            <Clock size={20} className="text-emerald-600 shrink-0" />
            <span><strong>Total Exam Length:</strong> 2 hours and 14 minutes (plus a 10-minute break between sections). Taken on personal laptop or tablet via the College Board Bluebook app.</span>
          </div>
        </section>

        {/* The 400 to 1600 Scoring Scale */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 flex items-center gap-2">
            <Award className="text-emerald-600" size={28} />
            Understanding the 400 to 1600 Scoring Scale
          </h2>
          <div className="space-y-3 text-sm text-slate-700 leading-relaxed mb-6">
            <p>
              Your total SAT score is the sum of your two section scores: Reading & Writing (200–800) + Math (200–800), giving a minimum possible score of <strong>400</strong> and a maximum possible score of <strong>1600</strong>.
            </p>
            <p>
              <strong>No Guessing Penalty:</strong> You earn points for every correct answer, and you are <em>never penalized</em> for incorrect answers. If you are unsure on any question, you should always make your best guess.
            </p>
          </div>
        </section>

        {/* Why UAE Students Take It */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 flex items-center gap-2">
            <GraduationCap className="text-emerald-600" size={28} />
            Why Do High School Students in the UAE Take the SAT?
          </h2>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2">1. UAE MoE Equivalency</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                American curriculum students in Sharjah, Dubai, and Abu Dhabi must take SAT Math to obtain official Ministry of Education high school graduation equivalency.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2">2. Local Universities</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Top UAE universities (American University of Sharjah, Khalifa University, NYU Abu Dhabi) evaluate SAT scores for direct admission and generous merit scholarships.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2">3. Global Study Abroad</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Accepted by thousands of universities worldwide in the US, Canada, UK, Europe, Singapore, and Australia for undergraduate admissions.
              </p>
            </div>
          </div>
        </section>

        {/* Diagnostic Assessment CTA Card */}
        <div className="bg-gradient-to-r from-emerald-900 via-slate-900 to-emerald-950 text-white rounded-2xl p-8 mb-14 shadow-lg text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">
              <Award size={14} /> Ready to Experience the Format?
            </div>
            <h3 className="text-2xl font-black text-white tracking-tight mb-2">Take Nitaq's Free 24-Question Diagnostic</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Experience the Digital SAT interface firsthand with adaptive question routing. Find out your baseline score in under 25 minutes.
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
            Frequently Asked Questions: Digital SAT Basics
          </h2>
          <div className="space-y-3">
            {[
              {
                q: 'What is a good SAT score for a high school student in UAE?',
                a: 'A score of 1050 is average globally (50th percentile). Scores of 1200–1350 are competitive for private UAE universities like AUS and AUD. Scores of 1450 to 1550+ place you in the top 1% to 3% worldwide and qualify for top international universities and substantial merit scholarships.'
              },
              {
                q: 'What age or grade should I take the SAT?',
                a: 'Most students take the SAT during Grade 11 (Junior Year) in the spring (March or May), and optionally repeat it in the autumn of Grade 12 (October, November, or December) to improve their score before university application deadlines.'
              },
              {
                q: 'Can I take the Digital SAT from home?',
                a: 'No. While the test is taken on a laptop or tablet, it must be taken in person at an officially authorized College Board test center (authorized schools in Sharjah, Dubai, or Abu Dhabi) under strict proctor supervision.'
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
          <Link to="/article/digital-sat-preparation-guide-sharjah-dubai-uae" className="text-emerald-600 hover:underline font-semibold flex items-center gap-1">
            ← Digital SAT Preparation Guide (Sharjah & Dubai)
          </Link>
          <Link to="/sat-preparation-sharjah" className="text-emerald-600 hover:underline font-semibold flex items-center gap-1">
            Explore Nitaq SAT Course in Sharjah →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhatDoesSatStandForGuide;
