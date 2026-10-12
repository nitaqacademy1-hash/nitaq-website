import React, { useState } from 'react';
import { Link } from '../../i18n/Link';
import SEO from '../../components/SEO';
import { 
  BookOpen, CheckCircle2, AlertCircle, Clock, ShieldCheck, 
  HelpCircle, ArrowRight, Award, Zap, FileText, Sparkles, Target
} from 'lucide-react';

const SatEnglishReadingWritingGuide = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  const domains = [
    {
      name: '1. Craft & Structure (approx. 28% / 13–15 Questions)',
      description: 'Tests vocabulary in context, text structure, author’s point of view, and relationships between two paired texts.',
      strategy: 'Read the sentence with the blank, predict your own simple word that fits the tone, and match it against the 4 choices.'
    },
    {
      name: '2. Information & Ideas (approx. 26% / 12–14 Questions)',
      description: 'Tests central ideas, details, textual command of evidence, and quantitative command of evidence (interpreting bar graphs, scatterplots, tables).',
      strategy: 'Locate the exact thesis statement. For graph questions, eliminate choices that make true factual statements that are NOT supported by the displayed data.'
    },
    {
      name: '3. Standard English Conventions (approx. 26% / 11–15 Questions)',
      description: 'Tests grammar mechanics: sentence boundaries, semicolons, colons, subject-verb agreement, and modifier placement.',
      strategy: 'Strict mathematical rule application. Semicolons and periods both separate independent clauses. Comma splices are always wrong.'
    },
    {
      name: '4. Expression of Ideas (approx. 20% / 8–12 Questions)',
      description: 'Tests Rhetorical Synthesis (student bullet-point notes) and transitional words between sentences.',
      strategy: 'Read the PROMPT FIRST on bullet-point questions! If the prompt asks to "emphasize a difference", find the only choice with a contrast word (unlike, whereas).'
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
            <span>Digital SAT Reading & Writing Domain Guide (2026–2027)</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            SAT English & Reading & Writing: What Students Need to Practice
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
            A comprehensive breakdown of all 4 College Board verbal domains. Master short passage comprehension, graph analysis, rhetorical synthesis shortcuts, and transition logic.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400 border-t border-slate-700/80 pt-4">
            <span className="flex items-center gap-1.5"><Clock size={14} className="text-emerald-400" /> 10-Minute Read</span>
            <span className="flex items-center gap-1.5"><Target size={14} className="text-emerald-400" /> 54 Questions Total</span>
            <span className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-emerald-400" /> College Board Aligned</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Structure Overview */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-12">
          <h2 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
            <FileText className="text-emerald-600" size={20} /> How Digital SAT English Differs From Legacy Paper SAT
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            On the Digital SAT, there are <strong>no longer any long 800-word reading passages</strong> with 10 questions each. Instead, every single question features its own brief passage (typically 25 to 150 words). Questions appear in a predictable sequence: Vocabulary and Structure first, then Central Ideas and Graphs, followed by Grammar Conventions, and ending with Rhetorical Synthesis notes.
          </p>
          <div className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <strong>Module 1:</strong> 27 Questions in 32 Minutes (~71 seconds/question)
            </div>
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <strong>Module 2:</strong> 27 Questions in 32 Minutes (Adaptive Difficulty)
            </div>
          </div>
        </div>

        {/* 4 Core Domains */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 flex items-center gap-2">
            <Target className="text-emerald-600" size={28} />
            The 4 Reading & Writing Domains
          </h2>

          <div className="space-y-4">
            {domains.map((d, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-emerald-300 transition-colors shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1">{d.name}</h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-3 leading-relaxed">{d.description}</p>
                <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200 text-xs sm:text-sm text-emerald-950 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                  <span><strong>High-Scorer Strategy:</strong> {d.strategy}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* The Rhetorical Synthesis Cheat Sheet */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 flex items-center gap-2">
            <Sparkles className="text-emerald-600" size={28} />
            The 15-Second Rhetorical Synthesis Hack
          </h2>

          <div className="p-6 rounded-2xl bg-slate-900 text-white shadow-lg">
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              Rhetorical Synthesis questions present a list of 4–5 bullet points from a student's research notes. <strong>Do NOT read the bullet points first!</strong>
            </p>
            <div className="space-y-3 font-mono text-xs sm:text-sm text-emerald-400 bg-slate-950 p-4 rounded-xl border border-slate-800">
              <p>Step 1: Read the prompt sentence at the very bottom: "The student wants to [GOAL]."</p>
              <p>Step 2: Identify the operative goal word:</p>
              <p className="pl-4 text-slate-300">• Goal: "Emphasize a difference" → Pick choice with "unlike", "whereas", "while".</p>
              <p className="pl-4 text-slate-300">• Goal: "Introduce the book to a new audience" → Pick choice with author, title, and year.</p>
              <p className="pl-4 text-slate-300">• Goal: "Illustrate an example of migration" → Pick choice with specific animal and route.</p>
              <p>Step 3: Only check the bullet points to verify that the facts in your selected choice are accurate.</p>
            </div>
          </div>
        </section>

        {/* Cross Link to Grammar Guide */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-14 flex items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-emerald-950 text-sm sm:text-base">Need Detailed Punctuation Rules?</h3>
            <p className="text-xs sm:text-sm text-emerald-800 mt-0.5">
              Read our dedicated guide on commas, semicolons, dashes, and dangling modifiers.
            </p>
          </div>
          <Link
            to="/article/sat-grammar-rules-digital-reading-writing-guide"
            className="shrink-0 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-lg transition-colors"
          >
            Grammar Guide →
          </Link>
        </div>

        {/* Diagnostic Assessment CTA Card */}
        <div className="bg-gradient-to-r from-emerald-900 via-slate-900 to-emerald-950 text-white rounded-2xl p-8 mb-14 shadow-lg text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">
              <Award size={14} /> Assess Verbal Accuracy
            </div>
            <h3 className="text-2xl font-black text-white tracking-tight mb-2">Evaluate Your Reading & Writing Score</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Take our free 24-question adaptive diagnostic. Discover whether grammar mechanics or craft & structure vocabulary are your primary growth opportunity.
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
            Frequently Asked Questions: SAT English & Reading
          </h2>
          <div className="space-y-3">
            {[
              {
                q: 'How many vocabulary questions are on the Digital SAT Reading & Writing section?',
                a: 'Words in Context questions make up approximately 18% to 22% of the Reading & Writing section (around 10 to 12 questions across both modules). Questions test academic vocabulary in natural context rather than obscure dictionary words.'
              },
              {
                q: 'Are historical speeches and poetry passages included on the test?',
                a: 'Yes. The College Board includes short excerpts from 19th and 20th-century literature, classic poetry (such as Emily Dickinson or Langston Hughes), humanities essays, and scientific research abstracts.'
              },
              {
                q: 'How do transitions work on the Digital SAT?',
                a: 'Transition questions test the logical relationship between two consecutive sentences. You must classify whether the second sentence continues the thought (Furthermore), contradicts the thought (However), or shows a consequence (Therefore).'
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
          <Link to="/article/sat-requirements-uae-top-universities-harvard" className="text-emerald-600 hover:underline font-semibold flex items-center gap-1">
            ← SAT University Requirements Guide
          </Link>
          <Link to="/article/what-does-sat-stand-for-digital-sat-explained" className="text-emerald-600 hover:underline font-semibold flex items-center gap-1">
            Next: What Does SAT Stand For? Digital SAT Explained →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SatEnglishReadingWritingGuide;
