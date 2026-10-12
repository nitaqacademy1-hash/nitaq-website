import React, { useState } from 'react';
import { Link } from '../../i18n/Link';
import SEO from '../../components/SEO';
import { 
  Laptop, CheckCircle2, AlertCircle, Clock, ShieldCheck, 
  HelpCircle, ArrowRight, Award, Zap, Bookmark, Calculator, EyeOff
} from 'lucide-react';

const BluebookSatGuide = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  const tools = [
    {
      title: 'Built-in Desmos Graphing Calculator',
      icon: <Calculator className="text-emerald-500" size={24} />,
      desc: 'Permanently accessible on the top navigation bar throughout both Math modules. Features full graphic plotting, regression tables, and sliders.'
    },
    {
      title: 'Testing Timer & Hide Timer Option',
      icon: <Clock className="text-emerald-500" size={24} />,
      desc: 'Counts down your remaining minutes per module. You can click "Hide" to reduce test anxiety, but it automatically alerts you at the 5-minute mark.'
    },
    {
      title: 'Mark for Review Flag',
      icon: <Bookmark className="text-emerald-500" size={24} />,
      desc: 'Allows you to flag uncertain questions with a single click. The question grid modal shows all flagged items before you submit the module.'
    },
    {
      title: 'Option Eliminator (Strikethrough)',
      icon: <EyeOff className="text-emerald-500" size={24} />,
      desc: 'Crosses out eliminated multiple-choice options, reducing cognitive load when evaluating the remaining choices.'
    },
    {
      title: 'Official Formula Reference Sheet',
      icon: <Zap className="text-emerald-500" size={24} />,
      desc: 'Pop-up window with 12 standard geometry formulas (circles, triangles, spheres, cylinders) accessible at any time during Math.'
    },
    {
      title: 'Text Highlighter & Note Taking',
      icon: <CheckCircle2 className="text-emerald-500" size={24} />,
      desc: 'Highlight words or phrases in Reading passages and annotate notes in the margin for fast referencing.'
    }
  ];

  return (
    <div className="article-page bg-white text-slate-800">
      <SEO />

      {/* Hero Header */}
      <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-700">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs tracking-wider uppercase mb-3">
            <Laptop size={14} />
            <span>Official Testing Software Guide (2026–2027)</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Bluebook SAT Guide: How the Digital SAT Test App Works
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
            Master the official College Board testing application. Explore built-in test tools, adaptive module routing, approved device requirements, and exam-day offline protocols for UAE students.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400 border-t border-slate-700/80 pt-4">
            <span className="flex items-center gap-1.5"><Clock size={14} className="text-emerald-400" /> 10-Minute Read</span>
            <span className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-emerald-400" /> College Board Bluebook Verified</span>
            <span className="flex items-center gap-1.5"><Zap size={14} className="text-emerald-400" /> Trending Search (+1,600%)</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Summary Card */}
        <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-6 mb-12">
          <h2 className="text-lg font-bold text-emerald-950 mb-2 flex items-center gap-2">
            <ShieldCheck className="text-emerald-600" size={20} /> What is the Bluebook App?
          </h2>
          <p className="text-sm text-emerald-900 leading-relaxed">
            <strong>Bluebook™</strong> is the custom testing app developed by the College Board to administer the Digital SAT, PSAT, and AP exams. You download Bluebook onto your personal laptop or iPad, complete your exam check-in 1–5 days prior, and use it at authorized UAE test centers. The app locks down your computer to prevent browsing, runs offline if Wi-Fi fluctuates, and submits encrypted answer files upon completion.
          </p>
        </div>

        {/* Built-in Testing Tools */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 flex items-center gap-2">
            <Zap className="text-emerald-600" size={28} />
            The 6 In-App Bluebook Tools You Must Master
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {tools.map((t, i) => (
              <div key={i} className="p-5 rounded-xl border border-slate-200 bg-white hover:border-emerald-300 transition-colors shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  {t.icon}
                  <h3 className="font-bold text-slate-900 text-base">{t.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Adaptive Routing Explanation */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 flex items-center gap-2">
            <Laptop className="text-emerald-600" size={28} />
            How Bluebook's Multistage Adaptive Scoring Works
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
            <p>
              The Digital SAT is divided into two sections: <strong>Reading & Writing</strong> (64 minutes, 54 questions) and <strong>Math</strong> (70 minutes, 44 questions). Each section consists of two timed modules.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 my-6">
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="inline-block px-2.5 py-1 text-xs font-bold rounded-md bg-blue-100 text-blue-800 mb-2">Module 1 (Routing)</span>
                <h4 className="font-bold text-slate-900 mb-1">Standard Mixture</h4>
                <p className="text-xs text-slate-600">
                  Contains an even mix of easy, medium, and hard questions. Your accuracy on Module 1 determines whether Bluebook routes you to the harder or easier Module 2.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="inline-block px-2.5 py-1 text-xs font-bold rounded-md bg-emerald-100 text-emerald-800 mb-2">Module 2 (Scored Range)</span>
                <h4 className="font-bold text-slate-900 mb-1">Adaptive Branch</h4>
                <p className="text-xs text-slate-600">
                  Unlocking the <strong>harder Module 2</strong> is essential to achieve a score above 600 in that section. The easier Module 2 caps your maximum score even if you answer every question correctly.
                </p>
              </div>
            </div>
            <p>
              <strong>Important Rule:</strong> Within a single module, you can move forward and backward freely, change answers, and review flagged questions. However, once you submit Module 1, you can never return to it.
            </p>
          </div>
        </section>

        {/* Device Requirements & Checklist */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 flex items-center gap-2">
            <ShieldCheck className="text-emerald-600" size={28} />
            Approved Device Specifications for UAE Test Centers
          </h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mb-6">
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="bg-slate-50 text-slate-900 font-bold border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4">Device Type</th>
                  <th className="py-3 px-4">Operating System</th>
                  <th className="py-3 px-4">Minimum Battery</th>
                  <th className="py-3 px-4">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-900">Windows Laptop</td>
                  <td className="py-3 px-4">Windows 10 or 11 (64-bit)</td>
                  <td className="py-3 px-4">3+ Hours charge</td>
                  <td className="py-3 px-4 text-xs text-slate-500">Must not be in S Mode. Plug-in power not guaranteed at all school desks.</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-900">Apple Mac Laptop</td>
                  <td className="py-3 px-4">macOS 11.4 (Big Sur) or later</td>
                  <td className="py-3 px-4">3+ Hours charge</td>
                  <td className="py-3 px-4 text-xs text-slate-500">MacBook Air or Pro. External mice are permitted.</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-900">Apple iPad</td>
                  <td className="py-3 px-4">iPadOS 14 or later</td>
                  <td className="py-3 px-4">3+ Hours charge</td>
                  <td className="py-3 px-4 text-xs text-slate-500">Requires a separate physical external keyboard. Stylus/Apple Pencil permitted.</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-slate-900">School Chromebook</td>
                  <td className="py-3 px-4">ChromeOS 102 or later</td>
                  <td className="py-3 px-4">3+ Hours charge</td>
                  <td className="py-3 px-4 text-xs text-slate-500">Must be managed by your school with kiosk app permissions.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 text-xs sm:text-sm text-amber-900">
            <strong>Mandatory Exam Check-In:</strong> Open Bluebook 1 to 5 days before your exam date to complete your test setup and download your exam ticket. Test centers will NOT admit students whose test has not been downloaded in advance.
          </div>
        </section>

        {/* Diagnostic Assessment CTA Card */}
        <div className="bg-gradient-to-r from-emerald-900 via-slate-900 to-emerald-950 text-white rounded-2xl p-8 mb-14 shadow-lg text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">
              <Award size={14} /> Practice on True Adaptive Software
            </div>
            <h3 className="text-2xl font-black text-white tracking-tight mb-2">Test Your Skills on Nitaq's Diagnostic Tool</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Experience the pressure of adaptive question delivery. Evaluate your baseline speed on Reading & Writing and Math before running official Bluebook mock tests.
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
            Frequently Asked Questions: Bluebook SAT App
          </h2>
          <div className="space-y-3">
            {[
              {
                q: 'What happens if my laptop loses internet connection during the test?',
                a: 'Do not panic. Bluebook is built to operate completely offline once the exam begins. If Wi-Fi drops, your answers continue saving locally. You will only need internet access again when the proctor instructs you to submit your final score file at the end.'
              },
              {
                q: 'Can I bring an external mouse or mouse pad to the test center?',
                a: 'Yes. An external wired or Bluetooth mouse is permitted on laptops and iPads. Top-scoring students frequently use a mouse because it speeds up Desmos slider manipulations.'
              },
              {
                q: 'How many official full-length practice tests are available on Bluebook?',
                a: 'As of 2026, the College Board provides 6 official full-length adaptive SAT practice tests directly inside Bluebook. Tests 1 through 4 are standard diagnostics, while Tests 5 and 6 feature recent digital item formats.'
              },
              {
                q: 'Can I use copy/paste or split-screen during the Bluebook test?',
                a: 'No. Bluebook operates in a secure lockdown mode. It disables screen recording, secondary monitors, copy-paste shortcuts, and background notifications until you exit the exam.'
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
          <Link to="/article/sat-dates-uae-2026-2027-test-dates" className="text-emerald-600 hover:underline font-semibold flex items-center gap-1">
            ← Check UAE SAT Dates & Deadlines
          </Link>
          <Link to="/article/desmos-sat-guide-math-calculator-strategies" className="text-emerald-600 hover:underline font-semibold flex items-center gap-1">
            Next: Top Desmos Calculator Hacks for 800 Math →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BluebookSatGuide;
