import React, { useState } from 'react';
import { Link } from '../../i18n/Link';
import SEO from '../../components/SEO';
import { 
  Calendar, Clock, AlertCircle, CheckCircle2, MapPin, 
  ArrowRight, ShieldCheck, HelpCircle, Laptop, Bell, DollarSign, Award
} from 'lucide-react';

const SatDatesUaeGuide = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  const testDates = [
    {
      season: 'Autumn 2026',
      testDate: 'Saturday, October 3, 2026',
      regDeadline: 'September 18, 2026',
      lateDeadline: 'September 22, 2026',
      status: 'Concluded',
      badge: 'Past Test',
      notes: 'First major sitting for Grade 12 university early decision applicants.'
    },
    {
      season: 'Autumn 2026',
      testDate: 'Saturday, November 7, 2026',
      regDeadline: 'October 23, 2026',
      lateDeadline: 'October 27, 2026',
      status: 'High Demand',
      badge: 'Breakout Demand (+3,350%)',
      notes: 'Peak test date in UAE. Sharjah & Dubai centers typically fill 3 weeks prior.'
    },
    {
      season: 'Winter 2026',
      testDate: 'Saturday, December 5, 2026',
      regDeadline: 'November 20, 2026',
      lateDeadline: 'November 24, 2026',
      status: 'Registration Open',
      badge: 'Upcoming (+1,950%)',
      notes: 'Final chance for January 2027 university regular decision admissions.'
    },
    {
      season: 'Spring 2027',
      testDate: 'Saturday, March 13, 2027',
      regDeadline: 'February 26, 2027',
      lateDeadline: 'March 2, 2027',
      status: 'Early Booking',
      badge: 'Future Cycle (+2,850%)',
      notes: 'Ideal baseline testing sitting for Grade 11 students.'
    },
    {
      season: 'Spring 2027',
      testDate: 'Saturday, May 8, 2027',
      regDeadline: 'April 23, 2027',
      lateDeadline: 'April 27, 2027',
      status: 'Scheduled',
      badge: '2027 Cycle',
      notes: 'Spring testing sitting before school final board exams.'
    },
    {
      season: 'Summer 2027',
      testDate: 'Saturday, June 5, 2027',
      regDeadline: 'May 21, 2027',
      lateDeadline: 'May 25, 2027',
      status: 'Scheduled',
      badge: '2027 Cycle',
      notes: 'Last sitting of the academic year before summer university preparation.'
    }
  ];

  const feeTable = [
    { item: 'Digital SAT International Registration Fee', costAed: '~AED 405 (USD 111)', details: 'Includes base test fee USD 68 + International Regional Fee USD 43.' },
    { item: 'Late Registration Fee', costAed: '~AED 125 (USD 34)', details: 'Applied when registering after the regular deadline up to the late deadline.' },
    { item: 'Test Center Change Fee', costAed: '~AED 92 (USD 25)', details: 'Switching schools within Sharjah or Dubai subject to seat availability.' },
    { item: 'Date Cancellation & Refund', costAed: 'Partial Refund (USD 25 retained)', details: 'Cancellations must be done at least 5 days prior via your College Board account.' }
  ];

  return (
    <div className="article-page bg-white text-slate-800">
      <SEO />

      {/* Hero Header */}
      <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-700">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs tracking-wider uppercase mb-3">
            <Calendar size={14} />
            <span>UAE Official Schedule & Deadlines (2026–2027)</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            SAT Dates UAE 2026–2027: October, November & December Test Dates
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
            Complete schedule of upcoming Digital SAT exam dates in the UAE, registration deadlines, Sharjah and Dubai center availability, registration fees in AED, and late registration rules.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400 border-t border-slate-700/80 pt-4">
            <span className="flex items-center gap-1.5"><Clock size={14} className="text-emerald-400" /> Updated October 2026</span>
            <span className="flex items-center gap-1.5"><MapPin size={14} className="text-emerald-400" /> Sharjah & Dubai Test Centers</span>
            <span className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-emerald-400" /> College Board Verified</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Urgent Alert Banner */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl mb-10 shadow-sm">
          <div className="flex items-start gap-3">
            <AlertCircle size={22} className="text-amber-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-amber-900 text-sm sm:text-base">November & December UAE Seats Fill Fast</h3>
              <p className="text-amber-800 text-xs sm:text-sm mt-1 leading-relaxed">
                Test centers in Sharjah (Wesgreen, ASCS) and Dubai (Dubai College, ASD) reach full capacity 3–4 weeks before registration closes. Book your seat early to avoid distant commuting.
              </p>
            </div>
          </div>
        </div>

        {/* Test Dates Table */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 flex items-center gap-2">
            <Calendar className="text-emerald-600" size={28} />
            Official SAT Dates Schedule for UAE Students
          </h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mb-6">
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="bg-slate-50 text-slate-900 font-bold border-b border-slate-200">
                <tr>
                  <th className="py-3.5 px-4">Test Date</th>
                  <th className="py-3.5 px-4">Registration Deadline</th>
                  <th className="py-3.5 px-4">Late Registration</th>
                  <th className="py-3.5 px-4">Status & Trend</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {testDates.map((item, idx) => (
                  <tr key={idx} className={item.status === 'High Demand' ? 'bg-emerald-50/40 font-medium' : ''}>
                    <td className="py-3.5 px-4">
                      <div className="font-semibold text-slate-900">{item.testDate}</div>
                      <div className="text-xs text-slate-500">{item.notes}</div>
                    </td>
                    <td className="py-3.5 px-4 text-slate-700">{item.regDeadline}</td>
                    <td className="py-3.5 px-4 text-slate-700">{item.lateDeadline}</td>
                    <td className="py-3.5 px-4">
                      <span className={`inline-block px-2.5 py-1 text-xs font-bold rounded-full ${
                        item.status === 'High Demand' 
                          ? 'bg-rose-100 text-rose-800' 
                          : item.status === 'Registration Open'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-slate-100 text-slate-700'
                      }`}>
                        {item.badge}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Fees in AED */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 flex items-center gap-2">
            <DollarSign className="text-emerald-600" size={28} />
            Digital SAT Registration Fees in UAE (AED & USD)
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {feeTable.map((f, i) => (
              <div key={i} className="p-5 rounded-xl border border-slate-200 bg-white hover:border-emerald-300 transition-colors shadow-sm">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">{f.item}</div>
                <div className="text-xl font-black text-emerald-600 mb-2">{f.costAed}</div>
                <p className="text-xs text-slate-600 leading-relaxed">{f.details}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Steps to Register */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 flex items-center gap-2">
            <Laptop className="text-emerald-600" size={28} />
            How UAE Students Should Plan Their Testing Timeline
          </h2>
          <div className="space-y-4">
            <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl">
              <h3 className="font-bold text-slate-900 mb-2">Grade 11 (Junior Year) Students: The 2-Test Strategy</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Take your first official SAT in <strong>March or May 2027</strong> after completing a diagnostic assessment in Autumn 2026. This allows you to evaluate your true score under test conditions and gives you the summer to target weak areas before a final Autumn 2027 sitting.
              </p>
            </div>
            <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl">
              <h3 className="font-bold text-slate-900 mb-2">Grade 12 (Senior Year) Students: University Deadlines</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                For UAE university admissions (AUS, Khalifa University) and US/UK applications, <strong>November 7 or December 5, 2026</strong> is your critical deadline. Scores are released within 13–14 days, ensuring your score report arrives before January university application cutoffs.
              </p>
            </div>
          </div>
        </section>

        {/* Diagnostic Assessment CTA Card */}
        <div className="bg-gradient-to-r from-emerald-900 via-slate-900 to-emerald-950 text-white rounded-2xl p-8 mb-14 shadow-lg text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">
              <Award size={14} /> Ready Before Your Chosen Test Date?
            </div>
            <h3 className="text-2xl font-black text-white tracking-tight mb-2">Take the Free 24-Question SAT Diagnostic</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Identify your baseline score across Reading & Writing and Math before paying the registration fee. Receive an instant domain report with personalized study recommendations.
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
            Frequently Asked Questions: SAT Dates UAE
          </h2>
          <div className="space-y-3">
            {[
              {
                q: 'When is the November SAT in the UAE for 2026?',
                a: 'The November Digital SAT takes place on Saturday, November 7, 2026. The regular registration deadline is October 23, 2026, and the late registration deadline is October 27, 2026.'
              },
              {
                q: 'What is the exact registration deadline for the December SAT in UAE?',
                a: 'For the December 5, 2026 test sitting, regular registration closes on November 20, 2026. Because December is the final testing date for regular decision university deadlines, centers fill quickly.'
              },
              {
                q: 'What happens if all Sharjah or Dubai SAT centers are fully booked?',
                a: 'If your preferred school in Sharjah (e.g., Wesgreen or ASCS) or Dubai is full, check neighboring centers in Ajman or Dubai schools with larger testing halls (such as Dubai College or GEMS). You can also sign up for the College Board waitlist if opened by the center.'
              },
              {
                q: 'How many days after the test are Digital SAT scores released in UAE?',
                a: 'Digital SAT scores are released online 13 to 14 days after exam day. For a Saturday sitting, scores are typically published on the second following Friday afternoon UAE time.'
              },
              {
                q: 'Can I change my SAT test date after booking?',
                a: 'Yes. You can change your test date through your College Board student portal, subject to a USD 25 (~AED 92) test change fee and seat availability at an authorized UAE center.'
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
          <Link to="/article/how-to-register-for-sat-exam-uae-guide" className="text-emerald-600 hover:underline font-semibold flex items-center gap-1">
            ← How to Register for SAT in UAE
          </Link>
          <Link to="/sat-preparation-sharjah" className="text-emerald-600 hover:underline font-semibold flex items-center gap-1">
            Explore Nitaq SAT Course in Sharjah →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SatDatesUaeGuide;
