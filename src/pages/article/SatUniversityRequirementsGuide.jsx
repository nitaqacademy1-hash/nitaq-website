import React, { useState } from 'react';
import { Link } from '../../i18n/Link';
import SEO from '../../components/SEO';
import { 
  GraduationCap, CheckCircle2, AlertCircle, Clock, ShieldCheck, 
  HelpCircle, ArrowRight, Award, Zap, Building2, Globe2, Sparkles
} from 'lucide-react';

const SatUniversityRequirementsGuide = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  const uaeUniversities = [
    {
      institution: 'American University of Sharjah (AUS)',
      location: 'Sharjah (University City)',
      minScore: '1100 – 1150',
      competitiveScore: '1250 – 1400',
      notes: 'Engineering and Computer Science programs require 600+ Math. 1350+ qualifies for Chancellor’s Merit Scholarship tiers (up to 50% tuition reduction).'
    },
    {
      institution: 'Khalifa University',
      location: 'Abu Dhabi',
      minScore: '1200 (Math 650+)',
      competitiveScore: '1350 – 1480',
      notes: 'Premier STEM university. High Math scores combined with high school GPA unlock fully funded government scholarship packages.'
    },
    {
      institution: 'NYU Abu Dhabi (NYUAD)',
      location: 'Saadiyat Island, Abu Dhabi',
      minScore: '1350',
      competitiveScore: '1480 – 1560',
      notes: 'Global liberal arts campus. Middle 50% SAT scores match NYU New York and Ivy League standards. Need-blind global financial aid.'
    },
    {
      institution: 'American University in Dubai (AUD)',
      location: 'Dubai Media City',
      minScore: '1050 – 1100',
      competitiveScore: '1200 – 1300',
      notes: 'Accepts SAT Math for math placement exam exemptions across engineering and architecture majors.'
    },
    {
      institution: 'University of Birmingham Dubai / Heriot-Watt',
      location: 'Dubai International Academic City',
      minScore: '1150 – 1200',
      competitiveScore: '1300 – 1420',
      notes: 'UK branch campuses accept SAT for American curriculum high school diploma holders in place of AP or A-Levels.'
    }
  ];

  return (
    <div className="article-page bg-white text-slate-800">
      <SEO />

      {/* Hero Header */}
      <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-700">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs tracking-wider uppercase mb-3">
            <GraduationCap size={14} />
            <span>Admissions & Scholarship Benchmark Guide (2026–2027)</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            SAT Requirements for UAE & Top International Universities (2026–2027)
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
            Compare minimum cutoffs and competitive score bands for American University of Sharjah, Khalifa University, NYU Abu Dhabi, and Ivy League benchmarks like Harvard.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400 border-t border-slate-700/80 pt-4">
            <span className="flex items-center gap-1.5"><Clock size={14} className="text-emerald-400" /> 11-Minute Read</span>
            <span className="flex items-center gap-1.5"><Globe2 size={14} className="text-emerald-400" /> UAE & Global Higher Education</span>
            <span className="flex items-center gap-1.5"><Zap size={14} className="text-emerald-400" /> Breakout Query (+1,250%)</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Harvard & Ivy League Focus Section */}
        <section className="mb-14">
          <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-lg">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider mb-2">
              <Sparkles size={16} /> Global Ivy League Benchmark
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
              What SAT Score Does Harvard University Require in 2026?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
              Harvard reinstated required standardized testing for all undergraduate applicants. For UAE and international students applying to Harvard and peer Ivy League institutions (Columbia, Yale, Princeton, MIT), standardized scores are a central factor in holistic evaluations.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 border-t border-slate-700 pt-4">
              <div>
                <span className="text-xs text-slate-400 block mb-0.5">Middle 50% Composite</span>
                <strong className="text-2xl font-black text-emerald-400">1500 – 1580</strong>
              </div>
              <div>
                <span className="text-xs text-slate-400 block mb-0.5">Middle 50% Math</span>
                <strong className="text-2xl font-black text-emerald-400">760 – 800</strong>
              </div>
              <div>
                <span className="text-xs text-slate-400 block mb-0.5">Middle 50% Reading & Writing</span>
                <strong className="text-2xl font-black text-emerald-400">740 – 780</strong>
              </div>
            </div>
          </div>
        </section>

        {/* UAE Universities Comparison Table */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 flex items-center gap-2">
            <Building2 className="text-emerald-600" size={28} />
            SAT Score Cutoffs for UAE Universities
          </h2>

          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mb-6">
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="bg-slate-50 text-slate-900 font-bold border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4">University & Campus</th>
                  <th className="py-3 px-4">Minimum Eligibility</th>
                  <th className="py-3 px-4">Competitive Band</th>
                  <th className="py-3 px-4">Special Notes & Scholarships</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {uaeUniversities.map((u, idx) => (
                  <tr key={idx}>
                    <td className="py-3.5 px-4 font-semibold text-slate-900">
                      <div>{u.institution}</div>
                      <div className="text-xs text-slate-500 font-normal">{u.location}</div>
                    </td>
                    <td className="py-3.5 px-4 text-xs sm:text-sm text-slate-700">{u.minScore}</td>
                    <td className="py-3.5 px-4 text-xs sm:text-sm font-bold text-emerald-700 bg-emerald-50/20">{u.competitiveScore}</td>
                    <td className="py-3.5 px-4 text-xs text-slate-600 max-w-xs">{u.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Scholarship Tiers */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 flex items-center gap-2">
            <Award className="text-emerald-600" size={28} />
            How SAT Scores Unlock Merit Scholarships in the UAE
          </h2>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm">
              <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-slate-100 text-slate-800 mb-2 inline-block">Score: 1250 – 1340</span>
              <h3 className="font-bold text-slate-900 mb-1">Standard Entry Tier</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Satisfies basic admissions criteria for engineering and business across UAE universities. Grants English and math placement exam exemptions.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-emerald-300 bg-emerald-50/30 shadow-sm">
              <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-emerald-100 text-emerald-800 mb-2 inline-block">Score: 1350 – 1440</span>
              <h3 className="font-bold text-slate-900 mb-1">Merit Scholarship Tier</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Unlocks 20% to 50% tuition reduction scholarships at private UAE institutions (such as AUS, Heriot-Watt, and AUD) when paired with a strong high school GPA.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-purple-300 bg-purple-50/30 shadow-sm">
              <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-purple-100 text-purple-800 mb-2 inline-block">Score: 1450 – 1550+</span>
              <h3 className="font-bold text-slate-900 mb-1">Elite Fellowship Tier</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Makes applicants highly competitive for full tuition and presidential scholarships at Khalifa University and NYU Abu Dhabi, plus direct admission to Ivy League universities.
              </p>
            </div>
          </div>
        </section>

        {/* Diagnostic Assessment CTA Card */}
        <div className="bg-gradient-to-r from-emerald-900 via-slate-900 to-emerald-950 text-white rounded-2xl p-8 mb-14 shadow-lg text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">
              <Award size={14} /> University Readiness Check
            </div>
            <h3 className="text-2xl font-black text-white tracking-tight mb-2">Does Your Score Match Your Dream University?</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Take our free 24-question adaptive diagnostic assessment. See where your current baseline sits compared to cutoffs at AUS, Khalifa University, and international benchmarks.
            </p>
          </div>
          <Link
            to="/sat/diagnostic"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm rounded-xl transition-all shadow-md"
          >
            Check My Score Band <ArrowRight size={16} />
          </Link>
        </div>

        {/* FAQ Section */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 flex items-center gap-2">
            <HelpCircle className="text-emerald-600" size={28} />
            Frequently Asked Questions: University SAT Requirements
          </h2>
          <div className="space-y-3">
            {[
              {
                q: 'Do UAE universities require the SAT for Ministry of Education (MoE) equivalency?',
                a: 'For students completing an American Curriculum High School Diploma in the UAE, the Ministry of Education requires standardized test scores (either SAT Math minimum 450–500, or equivalent national exams) to grant official high school equivalency for university matriculation.'
              },
              {
                q: 'What is "Super Scoring" and do UAE universities allow it?',
                a: 'Super Scoring means combining your highest Reading & Writing score from one test date with your highest Math score from another test date. Most UAE universities (including AUS) and international universities support Super Scoring through the College Board Score Choice system.'
              },
              {
                q: 'Can a high SAT score waive IELTS or TOEFL requirements in UAE?',
                a: 'At many UAE universities, scoring 550 to 600+ on the SAT Reading & Writing section automatically exempts you from taking IELTS or TOEFL for English proficiency admission requirements.'
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
          <Link to="/article/sat-prep-options-uae-academy-comparison" className="text-emerald-600 hover:underline font-semibold flex items-center gap-1">
            ← SAT Prep Options in UAE Comparison
          </Link>
          <Link to="/article/sat-english-reading-writing-practice-guide" className="text-emerald-600 hover:underline font-semibold flex items-center gap-1">
            Next: SAT English & Reading & Writing Practice Guide →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SatUniversityRequirementsGuide;
