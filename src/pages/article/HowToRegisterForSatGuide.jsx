import React, { useState } from 'react';
import { Link } from '../../i18n/Link';
import SEO from '../../components/SEO';
import { 
  Calendar, Clock, ChevronRight, CheckCircle2, Award, Target, 
  HelpCircle, BookOpen, AlertCircle, Laptop, ShieldCheck, ArrowRight,
  ExternalLink, FileText, CheckSquare, Sparkles, MapPin, PhoneCall,
  DollarSign, UserCheck, Layers, Info
} from 'lucide-react';

const HowToRegisterForSatGuide = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Interactive Checklist State
  const [checklist, setChecklist] = useState({
    collegeBoardAccount: false,
    passportMatch: false,
    photoReady: false,
    testCenterChosen: false,
    feePaymentReady: false,
    bluebookDownloaded: false,
    diagnosticTaken: false,
  });

  const toggleChecklistItem = (key) => {
    setChecklist(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const completedCount = Object.values(checklist).filter(Boolean).length;
  const totalCount = Object.keys(checklist).length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  const faqs = [
    {
      question: "How do I register for the Digital SAT in the UAE?",
      answer: "To register for the Digital SAT in the UAE, visit the official College Board website (satsuite.collegeboard.org), sign in or create an account, fill in your student and high school profile, select your preferred test date and UAE test center (in Sharjah, Dubai, or Abu Dhabi), upload a passport-compliant photo, and pay the registration fee via credit card."
    },
    {
      question: "How much does the SAT exam cost in the UAE?",
      answer: "The official College Board SAT registration fee for international students in the UAE is $68 (standard registration) plus a $43 international region fee, totaling $111 USD (approximately AED 408 to AED 410). If you register during the late registration window, an additional late fee of $34 applies."
    },
    {
      question: "What identification (ID) is required for SAT test day in UAE?",
      answer: "Students testing in the UAE must present a valid, government-issued photo ID. An original valid Passport or an original UAE Federal Emirates ID card is mandatory. The first and last names on your ID must exactly match the name on your official SAT Admission Ticket."
    },
    {
      question: "Can I take the Digital SAT on my own laptop or tablet?",
      answer: "Yes. The Digital SAT is administered via the official Bluebook application, which can be installed on personal Windows laptops, Apple MacBooks, iPads, or school-managed Chromebooks. The Bluebook app must be downloaded and exam setup completed 1 to 5 days before test day."
    },
    {
      question: "When should UAE high school students register for the SAT?",
      answer: "We strongly recommend registering at least 5 to 8 weeks before your desired test date. Test centers in Sharjah (Al Majaz, Muwaileh) and Dubai fill up quickly for high-demand sessions like October, November, and March. Booking early ensures you secure your closest neighborhood test center."
    },
    {
      question: "What is the difference between registration deadlines and late registration?",
      answer: "The regular registration deadline is typically 3 to 4 weeks prior to the test date. Late registration remains open for another 10 to 14 days, but incurs an extra $34 fee. After the late registration deadline passes, no further registrations or waitlists are permitted."
    },
    {
      question: "How can I change my SAT test center or test date after registering?",
      answer: "You can change your test center or reschedule your test date by logging into your College Board account and selecting 'Change Registration'. Note that College Board charges a $29 change fee, and seat availability at your new chosen center is not guaranteed."
    },
    {
      question: "What should I do immediately after completing SAT registration?",
      answer: "Immediately after registering, establish your baseline score by taking a free diagnostic assessment. At Nitaq Academy in Sharjah, we provide a 24-question adaptive Digital SAT diagnostic assessment that breaks down your strengths across Algebra, Advanced Math, and Reading & Writing to build a targeted preparation plan."
    },
    {
      question: "Are calculators provided at UAE test centers, or can I use Desmos?",
      answer: "The Digital SAT exam software (Bluebook) comes with a built-in full-featured Desmos graphing calculator directly on your testing screen for all Math questions. You may also bring an approved handheld graphing or scientific calculator as a backup."
    },
    {
      question: "How long are SAT scores valid for university admissions in the UAE?",
      answer: "Official SAT scores are valid for 5 years. UAE universities such as American University of Sharjah (AUS), Khalifa University, University of Sharjah, and NYU Abu Dhabi accept scores from tests taken within their respective admission guidelines."
    }
  ];

  return (
    <main className="article-details-page">
      <SEO />

      {/* Breadcrumb Navigation */}
      <div className="breadcrumb-wrapper">
        <div className="container">
          <nav className="article-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <Link to="/articles">Articles</Link>
            <ChevronRight size={14} />
            <span>How to Register for the SAT</span>
          </nav>
        </div>
      </div>

      <article className="article-container section-padding">
        <div className="container">
          
          {/* Article Header */}
          <div className="article-header" style={{ maxWidth: '900px', margin: '0 auto 40px' }}>
            <span className="article-category" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Sparkles size={14} /> Official UAE Admissions &amp; Registration Guide
            </span>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.85rem)', lineHeight: 1.25, marginTop: '12px', marginBottom: '16px' }}>
              How to Register for the Digital SAT in UAE: Official Step-by-Step Guide (2026–2027)
            </h1>
            <p className="lead-text" style={{ fontSize: '1.15rem', color: '#475569', lineHeight: 1.7 }}>
              Everything UAE students and parents need to know about registering for the Digital SAT: creating your College Board account, choosing test centers in Sharjah and Dubai, Bluebook requirements, registration fees, and avoiding common test-day pitfalls.
            </p>

            <div className="article-meta" style={{ display: 'flex', flexWrap: 'wrap', gap: '18px', marginTop: '24px', alignItems: 'center' }}>
              <div className="meta-item">
                <div className="author-avatar" style={{ background: '#1a5c2e', color: 'white', fontWeight: 'bold' }}>NA</div>
                <div className="meta-text">
                  <span className="meta-label">Author</span>
                  <span className="meta-value">NITAQ ACADEMY Academic Editorial</span>
                </div>
              </div>
              <div className="meta-divider"></div>
              <div className="meta-item">
                <Calendar size={18} className="meta-icon" />
                <div className="meta-text">
                  <span className="meta-label">Published</span>
                  <span className="meta-value">October 2026 Edition</span>
                </div>
              </div>
              <div className="meta-divider"></div>
              <div className="meta-item">
                <Clock size={18} className="meta-icon" />
                <div className="meta-text">
                  <span className="meta-label">Reading Time</span>
                  <span className="meta-value">9 min read</span>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="article-featured-img" style={{ maxWidth: '900px', margin: '0 auto 50px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
            <img 
              src="/images/sat_v2.webp" 
              alt="How to Register for the Digital SAT in UAE - Official Step-by-Step Guide" 
              style={{ width: '100%', height: 'auto', display: 'block' }} 
            />
          </div>

          <div className="article-content" style={{ maxWidth: '900px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.8, color: '#334155' }}>
            
            {/* Quick Facts Card */}
            <section className="registration-quick-facts" style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '30px', marginBottom: '45px' }}>
              <h2 style={{ fontSize: '1.35rem', color: '#0f172a', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Info size={22} color="#1a5c2e" /> Quick Summary: SAT Registration at a Glance
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                <div style={{ background: 'white', padding: '16px', borderRadius: '12px', border: '1px solid #edf2f7' }}>
                  <div style={{ fontSize: '0.85rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Official Portal</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', marginTop: '4px' }}>College Board (collegeboard.org)</div>
                </div>
                <div style={{ background: 'white', padding: '16px', borderRadius: '12px', border: '1px solid #edf2f7' }}>
                  <div style={{ fontSize: '0.85rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Total Exam Cost (UAE)</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1a5c2e', marginTop: '4px' }}>$111 USD (~AED 408)</div>
                </div>
                <div style={{ background: 'white', padding: '16px', borderRadius: '12px', border: '1px solid #edf2f7' }}>
                  <div style={{ fontSize: '0.85rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Exam Delivery</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', marginTop: '4px' }}>Digital via Bluebook App</div>
                </div>
                <div style={{ background: 'white', padding: '16px', borderRadius: '12px', border: '1px solid #edf2f7' }}>
                  <div style={{ fontSize: '0.85rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Required Identification</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', marginTop: '4px' }}>Original Passport / Emirates ID</div>
                </div>
              </div>
            </section>

            {/* Introduction */}
            <p>
              Preparing to take the Digital SAT is one of the most critical milestones for high school students in the United Arab Emirates planning for admissions to top local universities—such as the <strong>American University of Sharjah (AUS)</strong>, <strong>Khalifa University</strong>, and <strong>NYU Abu Dhabi</strong>—as well as competitive programs in the United States, Canada, the UK, and Europe.
            </p>
            <p>
              However, navigating the registration process can often feel overwhelming. From creating an account on College Board to selecting authorized testing centers in Sharjah and Dubai, ensuring passport name conformity, and configuring the official Bluebook testing software, even minor errors can lead to registration delays or test-day denial.
            </p>
            <p>
              In this comprehensive, step-by-step tutorial prepared by the academic advisors at <Link to="/sat-preparation-sharjah"><strong>Nitaq Academy Sharjah</strong></Link>, we walk you through the entire SAT registration process, explain the fee breakdown, and show you what to do immediately after securing your test seat.
            </p>

            <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #e2e8f0' }} />

            {/* Step-by-Step Registration Section */}
            <section id="step-by-step-registration">
              <h2 style={{ fontSize: '1.8rem', color: '#0f172a', marginBottom: '24px' }}>
                7 Real Steps to Register for the SAT in the UAE
              </h2>

              {/* Step 1 */}
              <div className="registration-step-card" style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '28px', marginBottom: '24px', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <span style={{ background: '#1a5c2e', color: 'white', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>1</span>
                  <h3 style={{ fontSize: '1.3rem', color: '#0f172a', margin: 0 }}>Create or Sign In to Your Official College Board Account</h3>
                </div>
                <p>
                  Visit the official registration portal at <a href="https://satsuite.collegeboard.org/sat/registration" target="_blank" rel="noopener noreferrer" style={{ color: '#1a5c2e', fontWeight: 600 }}>satsuite.collegeboard.org</a>. If you do not have an account, click <strong>"Create Account"</strong> and select <strong>"Student"</strong>.
                </p>
                <div style={{ background: '#fffbeb', borderLeft: '4px solid #f59e0b', padding: '14px 18px', borderRadius: '8px', marginTop: '12px' }}>
                  <strong style={{ color: '#b45309' }}>CRITICAL RULE:</strong> Your legal first name and last name must <em>exactly</em> match the name on your original Passport or Emirates ID card. If your passport says "Muhammad Ali Khan" and your College Board profile says "M. Ali Khan", test center proctors in the UAE will turn you away on test morning.
                </div>
              </div>

              {/* Step 2 */}
              <div className="registration-step-card" style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '28px', marginBottom: '24px', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <span style={{ background: '#1a5c2e', color: 'white', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>2</span>
                  <h3 style={{ fontSize: '1.3rem', color: '#0f172a', margin: 0 }}>Complete Your Student Profile &amp; High School Information</h3>
                </div>
                <p>
                  Once logged in, click <strong>"Register for the SAT"</strong>. The system will ask for demographic details, your expected graduation year, and your high school name.
                </p>
                <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                  <li>Search for your UAE high school using the school code or institution name.</li>
                  <li>If your school does not appear (or you are homeschooled), select <em>"My school is not listed"</em> or <em>"Homeschooled"</em>.</li>
                  <li>You will also encounter optional surveys regarding your GPA, intended college major, and Student Search Service. You can complete these or click <strong>"Update Later"</strong> to proceed faster.</li>
                </ul>
              </div>

              {/* Step 3 */}
              <div className="registration-step-card" style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '28px', marginBottom: '24px', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <span style={{ background: '#1a5c2e', color: 'white', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>3</span>
                  <h3 style={{ fontSize: '1.3rem', color: '#0f172a', margin: 0 }}>Select Your Test Date and Preferred UAE Test Center</h3>
                </div>
                <p>
                  Select the SAT administration date you are targeting (e.g., October, November, December, March, May, or June).
                </p>
                <p>
                  Next, select <strong>"United Arab Emirates"</strong> in the country dropdown. The portal will show all available test centers with open seats across <strong>Sharjah</strong>, <strong>Dubai</strong>, <strong>Abu Dhabi</strong>, and <strong>Ajman</strong>.
                </p>
                <div style={{ background: '#f0fdf4', borderLeft: '4px solid #16a34a', padding: '14px 18px', borderRadius: '8px', marginTop: '12px' }}>
                  <strong style={{ color: '#15803d' }}>PRO TIP:</strong> Test centers in popular school hubs such as <em>Muwaileh &amp; Al Majaz (Sharjah)</em> or <em>Al Barsha &amp; Academic City (Dubai)</em> reach full capacity 4 to 6 weeks before registration deadlines. Always register as soon as test dates open to avoid having to travel to another emirate.
                </div>
              </div>

              {/* Step 4 */}
              <div className="registration-step-card" style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '28px', marginBottom: '24px', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <span style={{ background: '#1a5c2e', color: 'white', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>4</span>
                  <h3 style={{ fontSize: '1.3rem', color: '#0f172a', margin: 0 }}>Upload an Official Passport-Compliant Photo</h3>
                </div>
                <p>
                  College Board requires a clear digital photograph that will be printed on your Admission Ticket and shown to test administrators:
                </p>
                <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                  <li><strong>Head and shoulders only:</strong> Facing directly towards the camera.</li>
                  <li><strong>Lighting &amp; Background:</strong> Neutral, plain white or light off-white background with no dark shadows.</li>
                  <li><strong>Appearance:</strong> No sunglasses, hats, or digital photo filters. Religious headwear is permitted provided your full face is visible from forehead to chin.</li>
                </ul>
              </div>

              {/* Step 5 */}
              <div className="registration-step-card" style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '28px', marginBottom: '24px', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <span style={{ background: '#1a5c2e', color: 'white', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>5</span>
                  <h3 style={{ fontSize: '1.3rem', color: '#0f172a', margin: 0 }}>Review Testing Device Requirements (Bluebook App)</h3>
                </div>
                <p>
                  Because the SAT is now 100% digital, you must bring an approved testing device to your examination center:
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', margin: '14px 0' }}>
                  <div style={{ padding: '12px', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                    <strong>Windows Laptops:</strong> Windows 10 or 11 (minimum 1.0 GHz processor, 250MB free storage).
                  </div>
                  <div style={{ padding: '12px', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                    <strong>Apple MacBooks:</strong> macOS 11.4 Big Sur or later.
                  </div>
                  <div style={{ padding: '12px', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                    <strong>iPads:</strong> iPadOS 14 or higher (external keyboard recommended).
                  </div>
                  <div style={{ padding: '12px', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                    <strong>School Chromebooks:</strong> ChromeOS managed device with Bluebook installed.
                  </div>
                </div>
              </div>

              {/* Step 6 */}
              <div className="registration-step-card" style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '28px', marginBottom: '24px', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <span style={{ background: '#1a5c2e', color: 'white', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>6</span>
                  <h3 style={{ fontSize: '1.3rem', color: '#0f172a', margin: 0 }}>Pay the Official SAT Registration Fee</h3>
                </div>
                <p>
                  Checkout securely on the College Board portal. Accepted payment methods include major credit/debit cards (Visa, MasterCard, American Express, Discover) or PayPal.
                </p>
                <div style={{ background: '#f1f5f9', padding: '16px', borderRadius: '10px', marginTop: '10px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span>Standard SAT Registration Fee:</span>
                    <strong>$68.00 USD</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span>International Region Fee (UAE / Middle East):</span>
                    <strong>$43.00 USD</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #cbd5e1', paddingTop: '8px', fontWeight: 700, color: '#1a5c2e' }}>
                    <span>Total Registration Cost (Standard):</span>
                    <span>$111.00 USD (~AED 408)</span>
                  </div>
                </div>
              </div>

              {/* Step 7 */}
              <div className="registration-step-card" style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '28px', marginBottom: '35px', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <span style={{ background: '#1a5c2e', color: 'white', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>7</span>
                  <h3 style={{ fontSize: '1.3rem', color: '#0f172a', margin: 0 }}>Complete Exam Setup in Bluebook &amp; Print Admission Ticket</h3>
                </div>
                <p>
                  Between 1 and 5 days before your scheduled test date, open the official <strong>Bluebook application</strong> on the exact laptop or iPad you will carry to the test center.
                </p>
                <p>
                  Sign in with your College Board credentials and click <strong>"Complete Exam Setup"</strong>. The software will verify your system, download your encrypted test packet, and generate your <strong>Official Admission Ticket</strong>. You must save and print a physical paper copy or retain a digital copy on your phone to present at the test center doors.
                </p>
              </div>
            </section>

            {/* UPCOMING TEST DATES TABLE */}
            <section id="sat-dates-schedule" style={{ marginBottom: '50px' }}>
              <h2 style={{ fontSize: '1.8rem', color: '#0f172a', marginBottom: '20px' }}>
                Upcoming Digital SAT Test Dates in the UAE (2026–2027)
              </h2>
              <p>
                Plan your preparation timeline according to the official College Board international testing schedule. We recommend registering at least 6 weeks in advance:
              </p>
              <div style={{ overflowX: 'auto', borderRadius: '12px', border: '1px solid #e2e8f0', marginTop: '16px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                  <thead>
                    <tr style={{ background: '#f8fafc', borderBottom: '2px solid #cbd5e1' }}>
                      <th style={{ padding: '14px 18px', fontWeight: 700, color: '#0f172a' }}>Test Date</th>
                      <th style={{ padding: '14px 18px', fontWeight: 700, color: '#0f172a' }}>Regular Registration Deadline</th>
                      <th style={{ padding: '14px 18px', fontWeight: 700, color: '#0f172a' }}>Late Registration Deadline</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '14px 18px', fontWeight: 600 }}>November 7, 2026</td>
                      <td style={{ padding: '14px 18px' }}>October 23, 2026</td>
                      <td style={{ padding: '14px 18px', color: '#b45309' }}>October 27, 2026</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '14px 18px', fontWeight: 600 }}>December 5, 2026</td>
                      <td style={{ padding: '14px 18px' }}>November 20, 2026</td>
                      <td style={{ padding: '14px 18px', color: '#b45309' }}>November 24, 2026</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '14px 18px', fontWeight: 600 }}>March 13, 2027</td>
                      <td style={{ padding: '14px 18px' }}>February 26, 2027</td>
                      <td style={{ padding: '14px 18px', color: '#b45309' }}>March 2, 2027</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '14px 18px', fontWeight: 600 }}>May 8, 2027</td>
                      <td style={{ padding: '14px 18px' }}>April 23, 2027</td>
                      <td style={{ padding: '14px 18px', color: '#b45309' }}>April 27, 2027</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '14px 18px', fontWeight: 600 }}>June 5, 2027</td>
                      <td style={{ padding: '14px 18px' }}>May 21, 2027</td>
                      <td style={{ padding: '14px 18px', color: '#b45309' }}>May 25, 2027</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* INTERACTIVE REGISTRATION CHECKLIST */}
            <section style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '30px', marginBottom: '50px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '20px' }}>
                <h3 style={{ fontSize: '1.4rem', color: '#0f172a', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckSquare size={22} color="#1a5c2e" /> Interactive Registration Checklist
                </h3>
                <span style={{ background: '#e2e8f0', color: '#0f172a', padding: '4px 12px', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 700 }}>
                  {progressPercent}% Complete ({completedCount}/{totalCount})
                </span>
              </div>
              <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '18px' }}>
                Check off each item to ensure you are 100% prepared for a successful registration and smooth test day:
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { key: 'collegeBoardAccount', text: 'Created official student account at collegeboard.org' },
                  { key: 'passportMatch', text: 'Verified legal First & Last name exactly matches original Passport / Emirates ID' },
                  { key: 'photoReady', text: 'Prepared passport-style digital photo with plain light background' },
                  { key: 'testCenterChosen', text: 'Selected closest test center in Sharjah (Al Majaz / Muwaileh) or Dubai' },
                  { key: 'feePaymentReady', text: 'Paid official $111 USD registration fee and downloaded receipt' },
                  { key: 'bluebookDownloaded', text: 'Installed Bluebook app on testing laptop/iPad and completed device check' },
                  { key: 'diagnosticTaken', text: 'Taken a baseline diagnostic assessment to identify math & verbal weaknesses' }
                ].map(({ key, text }) => (
                  <label key={key} style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'white', padding: '14px 18px', borderRadius: '10px', border: '1px solid #e2e8f0', cursor: 'pointer', transition: 'all 0.2s ease' }}>
                    <input 
                      type="checkbox" 
                      checked={checklist[key]} 
                      onChange={() => toggleChecklistItem(key)}
                      style={{ width: '18px', height: '18px', accentColor: '#1a5c2e', cursor: 'pointer' }}
                    />
                    <span style={{ fontSize: '0.98rem', color: checklist[key] ? '#1a5c2e' : '#1e293b', fontWeight: checklist[key] ? 600 : 400, textDecoration: checklist[key] ? 'line-through' : 'none' }}>
                      {text}
                    </span>
                  </label>
                ))}
              </div>
            </section>

            {/* WHAT TO DO AFTER REGISTERING: PROMINENT INTERNAL CTA */}
            <section style={{ background: 'linear-gradient(135deg, #0d3b1e 0%, #1a5c2e 100%)', borderRadius: '20px', padding: '40px 30px', color: 'white', marginBottom: '50px', boxShadow: '0 12px 30px rgba(26,92,46,0.25)' }}>
              <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
                <span style={{ background: 'rgba(255,255,255,0.15)', color: '#86efac', padding: '6px 16px', borderRadius: '30px', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Next Step After Registering
                </span>
                <h2 style={{ fontSize: 'clamp(1.7rem, 3vw, 2.3rem)', color: 'white', marginTop: '16px', marginBottom: '14px' }}>
                  Registered for the SAT? Now Establish Your Baseline Score
                </h2>
                <p style={{ color: '#e2e8f0', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '28px' }}>
                  Don’t walk into test day guessing where you stand. Take Nitaq Academy's <strong>Free Digital SAT Diagnostic Assessment</strong>. It takes just 25 minutes, tests all 8 College Board domains, and provides an instant predicted score between 400 and 1600.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
                  <Link 
                    to="/sat/diagnostic" 
                    className="btn btn-primary"
                    style={{ background: '#22c55e', color: '#052e16', fontWeight: 700, padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                  >
                    Take Free Diagnostic Test <ArrowRight size={18} />
                  </Link>
                  <Link 
                    to="/sat-preparation-sharjah" 
                    className="btn btn-secondary"
                    style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.3)', color: 'white', fontWeight: 600, padding: '14px 28px', borderRadius: '10px', textDecoration: 'none' }}
                  >
                    Explore SAT Coaching in Sharjah
                  </Link>
                </div>
              </div>
            </section>

            {/* POPULAR TEST CENTERS IN SHARJAH & DUBAI */}
            <section style={{ marginBottom: '50px' }}>
              <h2 style={{ fontSize: '1.8rem', color: '#0f172a', marginBottom: '20px' }}>
                Popular SAT Test Centers in Sharjah &amp; Dubai
              </h2>
              <p>
                When registering on College Board, you will see a list of accredited private international schools authorized to host the Digital SAT in the UAE. Common centers include:
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '20px' }}>
                <div style={{ background: '#f8fafc', padding: '24px', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
                  <h3 style={{ fontSize: '1.2rem', color: '#1a5c2e', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <MapPin size={18} /> Sharjah Test Centers
                  </h3>
                  <ul style={{ paddingLeft: '20px', color: '#475569', fontSize: '0.95rem' }}>
                    <li>American School of Creative Science (Maliha Road)</li>
                    <li>International School of Choueifat (Sharjah)</li>
                    <li>Wesgreen International School (Muwaileh)</li>
                    <li>GEMS Millennium School (Sharjah)</li>
                    <li>Sharjah American International School</li>
                  </ul>
                </div>
                <div style={{ background: '#f8fafc', padding: '24px', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
                  <h3 style={{ fontSize: '1.2rem', color: '#1a5c2e', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <MapPin size={18} /> Dubai Test Centers
                  </h3>
                  <ul style={{ paddingLeft: '20px', color: '#475569', fontSize: '0.95rem' }}>
                    <li>Dubai American Academy (Al Barsha)</li>
                    <li>American School of Dubai (Al Barsha)</li>
                    <li>GEMS Dubai American Academy</li>
                    <li>Universal American School (Al Badia)</li>
                    <li>Collegiate International School (Umm Suqeim)</li>
                  </ul>
                </div>
              </div>
              <p style={{ marginTop: '16px', fontSize: '0.95rem', color: '#64748b', fontStyle: 'italic' }}>
                *Note: Center availability varies by testing date. If all Sharjah test centers are booked, check Dubai or Ajman centers which are easily reachable within a 20 to 30-minute commute.
              </p>
            </section>

            {/* PREPARATION HUB BACKLINK CLUSTER */}
            <section style={{ background: '#f1f5f9', borderRadius: '16px', padding: '30px', marginBottom: '50px' }}>
              <h3 style={{ fontSize: '1.35rem', color: '#0f172a', marginBottom: '14px' }}>
                Related Digital SAT Guides &amp; Resources
              </h3>
              <p style={{ color: '#475569', marginBottom: '20px' }}>
                Continue your preparation journey with our specialized Digital SAT strategy guides:
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px' }}>
                <Link to="/article/digital-sat-preparation-guide-sharjah-dubai-uae" style={{ background: 'white', padding: '16px', borderRadius: '10px', textDecoration: 'none', color: '#0f172a', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontWeight: 600 }}>Digital SAT 1500+ Prep Roadmap</span>
                  <ArrowRight size={16} color="#1a5c2e" />
                </Link>
                <Link to="/article/sat-score-1300-guide" style={{ background: 'white', padding: '16px', borderRadius: '10px', textDecoration: 'none', color: '#0f172a', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontWeight: 600 }}>How to Score 1300+ for UAE Universities</span>
                  <ArrowRight size={16} color="#1a5c2e" />
                </Link>
                <Link to="/article/sat-vs-ielts-guide" style={{ background: 'white', padding: '16px', borderRadius: '10px', textDecoration: 'none', color: '#0f172a', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontWeight: 600 }}>SAT vs. IELTS: Which Do You Need?</span>
                  <ArrowRight size={16} color="#1a5c2e" />
                </Link>
                <Link to="/article/common-sat-mistakes" style={{ background: 'white', padding: '16px', borderRadius: '10px', textDecoration: 'none', color: '#0f172a', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontWeight: 600 }}>10 Critical SAT Mistakes to Avoid</span>
                  <ArrowRight size={16} color="#1a5c2e" />
                </Link>
              </div>
            </section>

            {/* FREQUENTLY ASKED QUESTIONS ACCORDION */}
            <section id="faqs" style={{ marginBottom: '50px' }}>
              <h2 style={{ fontSize: '1.8rem', color: '#0f172a', marginBottom: '24px' }}>
                Frequently Asked Questions: SAT Registration in UAE
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {faqs.map((faq, idx) => (
                  <div 
                    key={idx} 
                    style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', overflow: 'hidden', transition: 'all 0.2s ease' }}
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      style={{ width: '100%', padding: '18px 22px', textAlign: 'left', background: 'none', border: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', fontWeight: 600, fontSize: '1.05rem', color: '#0f172a' }}
                    >
                      <span>{faq.question}</span>
                      <ChevronRight 
                        size={18} 
                        style={{ transform: openFaq === idx ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s ease', color: '#1a5c2e', flexShrink: 0 }} 
                      />
                    </button>
                    {openFaq === idx && (
                      <div style={{ padding: '0 22px 18px', color: '#475569', lineHeight: 1.7, fontSize: '0.98rem', borderTop: '1px solid #f1f5f9', paddingTop: '14px' }}>
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* ADMISSIONS CONTACT FOOTER CARD */}
            <div className="article-contact-footer" style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '30px', textAlign: 'center', marginTop: '40px' }}>
              <h3 style={{ fontSize: '1.3rem', color: '#0f172a', marginBottom: '8px' }}>
                Need Help with SAT Registration or Score Improvement?
              </h3>
              <p style={{ color: '#64748b', maxWidth: '600px', margin: '0 auto 20px', fontSize: '0.95rem' }}>
                Our academic advisors in Sharjah assist students with test registration, official diagnostic baseline scoring, and personalized score boosting programs.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
                <a 
                  href="https://wa.me/971527569908" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ background: '#1a5c2e', color: 'white', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  <PhoneCall size={16} /> WhatsApp: +971 52 756 9908
                </a>
                <Link 
                  to="/contact" 
                  style={{ background: 'white', color: '#0f172a', border: '1px solid #cbd5e1', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600 }}
                >
                  Visit Office: Al Majaz 3, Sharjah
                </Link>
              </div>
            </div>

          </div>
        </div>
      </article>
    </main>
  );
};

export default HowToRegisterForSatGuide;
