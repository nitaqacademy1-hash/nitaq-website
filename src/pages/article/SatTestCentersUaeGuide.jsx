import React, { useState } from 'react';
import { Link } from '../../i18n/Link';
import SEO from '../../components/SEO';
import { 
  Calendar, Clock, ChevronRight, CheckCircle2, Award, Target, 
  HelpCircle, BookOpen, AlertCircle, Laptop, ShieldCheck, ArrowRight,
  FileText, CheckSquare, Sparkles, MapPin, PhoneCall, Layers, Bookmark,
  Car, Compass, Check, AlertTriangle, Building
} from 'lucide-react';

const SatTestCentersUaeGuide = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const [activeTab, setActiveTab] = useState('sharjah'); // 'sharjah' | 'dubai' | 'comparison'

  const sharjahCenters = [
    {
      name: 'Wesgreen International School',
      location: 'Muweilah School Zone, Sharjah',
      notes: 'One of the largest authorized test centers in Sharjah. Excellent hall capacity and parking facilities for morning drop-offs.',
      curriculum: 'British Curriculum Campus'
    },
    {
      name: 'American School of Creative Science (ASCS)',
      location: 'Maliha Road, Sharjah',
      notes: 'State-of-the-art technology labs and very stable Wi-Fi network. Familiar environment for American curriculum students.',
      curriculum: 'US Curriculum Campus'
    },
    {
      name: 'International School of Choueifat - Sharjah',
      location: 'Industrial Area 6, Sharjah',
      notes: 'Longstanding College Board test center with experienced proctoring teams and disciplined exam hall environments.',
      curriculum: 'SABIS Educational System'
    },
    {
      name: 'Victoria International School of Sharjah (VISS)',
      location: 'Al Taawun / Waterfront Area, Sharjah',
      notes: 'Convenient waterfront access for students residing in Al Majaz, Al Qasba, and border areas of Dubai/Sharjah.',
      curriculum: 'Australian / IB Continuum'
    },
    {
      name: 'GEMS Millennium School',
      location: 'Sharjah School Zone, Muweilah',
      notes: 'Spacious exam halls with strict adherence to College Board digital readiness and device compliance guidelines.',
      curriculum: 'CBSE / International'
    },
    {
      name: 'Sharjah American International School (SAIS)',
      location: 'Al Ramaqiya, Sharjah',
      notes: 'Established venue for US high school diploma students with easy access from Sheikh Mohammed Bin Zayed Road (E311).',
      curriculum: 'US Curriculum Campus'
    }
  ];

  const dubaiCenters = [
    {
      name: 'Dubai College',
      location: 'Al Sufouh 2, Dubai',
      notes: 'Premier testing venue near Knowledge Park and Media City. Seats fill up within 48 hours of registration opening.',
      curriculum: 'British Curriculum'
    },
    {
      name: 'American School of Dubai (ASD)',
      location: 'Al Barsha 1, Dubai',
      notes: 'Top choice for American curriculum students. Premium auditorium and classroom testing facilities with dedicated charging ports.',
      curriculum: 'US Curriculum'
    },
    {
      name: 'Dubai International Academy (DIA)',
      location: 'Emirates Hills, Dubai',
      notes: 'Highly organized testing proctors with excellent drop-off access from Sheikh Zayed Road and Meadows/Springs.',
      curriculum: 'IB World School'
    },
    {
      name: 'GEMS Wellington International School',
      location: 'Al Sufouh 1, Sheikh Zayed Road, Dubai',
      notes: 'Central location right off SZR. Very popular across Dubai Marina, Jumeirah, and Downtown Dubai test takers.',
      curriculum: 'British / IB'
    },
    {
      name: 'GEMS Modern Academy',
      location: 'Nad Al Sheba 3, Dubai',
      notes: 'Large testing capacity serving students across Silicon Oasis, Meydan, Mirdif, and Academic City.',
      curriculum: 'CISCE / IB'
    },
    {
      name: 'Kings\' School Al Barsha',
      location: 'Al Barsha South, Dubai',
      notes: 'Modern air-conditioned testing facilities with quiet test rooms and structured check-in queues.',
      curriculum: 'British Curriculum'
    }
  ];

  const faqs = [
    {
      question: 'Which test center is better: Sharjah or Dubai?',
      answer: 'The exam experience is identical because all authorized centers follow strict College Board Bluebook guidelines. However, if you live in Sharjah, Ajman, or Northern Emirates, booking a Sharjah school (like Wesgreen or ASCS) saves you 45+ minutes of early morning Saturday highway driving and avoids potential border traffic.'
    },
    {
      question: 'Can a student residing in Sharjah take the SAT at a Dubai school (or vice versa)?',
      answer: 'Yes, absolutely. The College Board allows any registered student to book any authorized test center with open capacity, regardless of where they attend school or reside in the UAE.'
    },
    {
      question: 'What exact identification is accepted at UAE SAT test centers in 2026?',
      answer: 'You MUST present either your original physical Emirates ID or your original physical Passport. Digital scans, photographs on your mobile phone, expired IDs, or student school IDs are strictly REJECTED at the door with no exceptions.'
    },
    {
      question: 'What time must I arrive at the UAE test center on exam day?',
      answer: 'Test center doors open between 7:30 AM and 7:45 AM. Doors close strictly at 8:00 AM. Students arriving after 8:00 AM are barred from entry and forfeit their exam fee. We recommend arriving at the school gates by 7:15 AM.'
    },
    {
      question: 'What happens if my laptop battery dies during the exam at the center?',
      answer: 'While test centers are encouraged to provide access to wall sockets, power cords are not guaranteed for every single desk. Your device MUST be 100% fully charged to hold at least 3 to 4 hours of battery life. Bring your charging brick and an extension cable just in case.'
    }
  ];

  return (
    <main>
      <SEO 
        title="SAT Test Centers in UAE: Sharjah vs Dubai Schools (2026 Guide)"
        description="Complete list of authorized College Board SAT test centers in Sharjah and Dubai. Compare traffic, seat availability, test-day rules, and school venues."
        canonicalUrl="https://nitaqacademy.com/article/sat-test-centers-uae-sharjah-dubai-guide"
      />

      {/* Breadcrumb Bar with Clearance */}
      <div className="breadcrumb-wrapper" style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0', padding: '118px 0 16px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: '#64748b' }}>
          <Link to="/" style={{ color: '#1a5c2e', textDecoration: 'none', fontWeight: 500 }}>Home</Link>
          <ChevronRight size={14} />
          <Link to="/articles" style={{ color: '#1a5c2e', textDecoration: 'none', fontWeight: 500 }}>Articles</Link>
          <ChevronRight size={14} />
          <span style={{ color: '#0f172a', fontWeight: 600 }}>UAE SAT Test Centers: Sharjah vs Dubai</span>
        </div>
      </div>

      <article className="article-container" style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px 80px' }}>
        
        {/* Safe Header */}
        <div className="article-header" style={{ marginBottom: '32px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#ecfdf5', color: '#047857', padding: '6px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '16px' }}>
            <MapPin size={14} />
            <span>UAE Test Venues • College Board Authorized</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, color: '#0f172a', lineHeight: 1.25, marginBottom: '16px' }}>
            SAT Test Centers in UAE: Sharjah vs. Dubai School List &amp; Selection Guide
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap', color: '#64748b', fontSize: '0.9rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Calendar size={16} />
              <span>Updated October 2026</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Clock size={16} />
              <span>8 Min Read • Verified School Listings</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ShieldCheck size={16} />
              <span>Official College Board Centers</span>
            </div>
          </div>
        </div>

        {/* Executive Summary Box */}
        <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', marginBottom: '36px' }}>
          <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', margin: '0 0 10px 0' }}>
            How to Choose the Right SAT Center in the UAE
          </h2>
          <p style={{ color: '#475569', margin: 0, fontSize: '0.95rem', lineHeight: 1.6 }}>
            Selecting the best SAT test center in the UAE is not just about choosing a familiar school—it is about <strong>minimizing test-day morning stress</strong>. Digital SAT testing doors shut strictly at <strong>8:00 AM</strong>. Knowing Saturday morning traffic flows across Sheikh Mohammed Bin Zayed Road (E311), parking availability, and hall air conditioning can protect your focus when it matters most.
          </p>
        </div>

        {/* Tab Controls */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '32px', flexWrap: 'wrap' }}>
          <button
            onClick={() => setActiveTab('sharjah')}
            style={{
              padding: '12px 20px',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '0.95rem',
              cursor: 'pointer',
              border: activeTab === 'sharjah' ? '2px solid #1a5c2e' : '1px solid #e2e8f0',
              background: activeTab === 'sharjah' ? '#1a5c2e' : '#ffffff',
              color: activeTab === 'sharjah' ? '#ffffff' : '#475569',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.2s ease'
            }}
          >
            <Building size={18} />
            Sharjah Test Centers (6)
          </button>

          <button
            onClick={() => setActiveTab('dubai')}
            style={{
              padding: '12px 20px',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '0.95rem',
              cursor: 'pointer',
              border: activeTab === 'dubai' ? '2px solid #1a5c2e' : '1px solid #e2e8f0',
              background: activeTab === 'dubai' ? '#1a5c2e' : '#ffffff',
              color: activeTab === 'dubai' ? '#ffffff' : '#475569',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.2s ease'
            }}
          >
            <Building size={18} />
            Dubai Test Centers (6)
          </button>

          <button
            onClick={() => setActiveTab('comparison')}
            style={{
              padding: '12px 20px',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '0.95rem',
              cursor: 'pointer',
              border: activeTab === 'comparison' ? '2px solid #1a5c2e' : '1px solid #e2e8f0',
              background: activeTab === 'comparison' ? '#1a5c2e' : '#ffffff',
              color: activeTab === 'comparison' ? '#ffffff' : '#475569',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.2s ease'
            }}
          >
            <Car size={18} />
            Sharjah vs Dubai Comparison &amp; Rules
          </button>
        </div>

        {/* TAB 1: SHARJAH TEST CENTERS */}
        {activeTab === 'sharjah' && (
          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.45rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
              Authorized SAT Test Centers in Sharjah
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '24px' }}>
              These verified school venues regularly host College Board administrations for students across Sharjah, Ajman, and Umm Al Quwain.
            </p>

            <div style={{ display: 'grid', gap: '16px' }}>
              {sharjahCenters.map((center, idx) => (
                <div key={idx} style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '6px' }}>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', margin: 0 }}>
                      {center.name}
                    </h3>
                    <span style={{ background: '#f0fdf4', color: '#166534', padding: '3px 8px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 600 }}>
                      {center.curriculum}
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748b', fontSize: '0.88rem', marginBottom: '10px' }}>
                    <MapPin size={14} color="#1a5c2e" />
                    <span>{center.location}</span>
                  </div>
                  <p style={{ color: '#475569', fontSize: '0.92rem', margin: 0, lineHeight: 1.5 }}>
                    {center.notes}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* TAB 2: DUBAI TEST CENTERS */}
        {activeTab === 'dubai' && (
          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.45rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
              Authorized SAT Test Centers in Dubai
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '24px' }}>
              Leading College Board venues in Dubai. Note: Dubai test center seats tend to fill up within the first week of registration opening.
            </p>

            <div style={{ display: 'grid', gap: '16px' }}>
              {dubaiCenters.map((center, idx) => (
                <div key={idx} style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '6px' }}>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', margin: 0 }}>
                      {center.name}
                    </h3>
                    <span style={{ background: '#eff6ff', color: '#1e40af', padding: '3px 8px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 600 }}>
                      {center.curriculum}
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748b', fontSize: '0.88rem', marginBottom: '10px' }}>
                    <MapPin size={14} color="#2563eb" />
                    <span>{center.location}</span>
                  </div>
                  <p style={{ color: '#475569', fontSize: '0.92rem', margin: 0, lineHeight: 1.5 }}>
                    {center.notes}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* TAB 3: COMPARISON & RULES */}
        {activeTab === 'comparison' && (
          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.45rem', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>
              Sharjah vs. Dubai: Key Factors to Weigh
            </h2>

            <div style={{ display: 'grid', gap: '16px', marginBottom: '32px' }}>
              <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '18px' }}>
                <h4 style={{ margin: '0 0 6px 0', color: '#0f172a', fontSize: '1rem', fontWeight: 700 }}>
                  1. Saturday Morning Commute &amp; Highway Traffic
                </h4>
                <p style={{ margin: 0, color: '#475569', fontSize: '0.92rem', lineHeight: 1.6 }}>
                  If you live in Sharjah and book a Dubai center, you must depart by 6:45 AM at the latest. Although Saturday traffic is lighter than weekdays, slow points around Al Nahda, Al Ittihad Road, and Beirut Street can cause unexpected delays. Choosing a center in Muweilah or Maliha Road ensures a stress-free 15-minute commute.
                </p>
              </div>

              <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '18px' }}>
                <h4 style={{ margin: '0 0 6px 0', color: '#0f172a', fontSize: '1rem', fontWeight: 700 }}>
                  2. Seat Availability &amp; Registration Speed
                </h4>
                <p style={{ margin: 0, color: '#475569', fontSize: '0.92rem', lineHeight: 1.6 }}>
                  Dubai centers like Dubai College and American School of Dubai sell out rapidly. Sharjah centers (Wesgreen, ASCS, SAIS) often maintain seat capacity for an extra 2–3 weeks, making them a lifesaver for students registering close to the deadline.
                </p>
              </div>

              <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '18px' }}>
                <h4 style={{ margin: '0 0 6px 0', color: '#0f172a', fontSize: '1rem', fontWeight: 700 }}>
                  3. Bluebook Device Wi-Fi Environment
                </h4>
                <p style={{ margin: 0, color: '#475569', fontSize: '0.92rem', lineHeight: 1.6 }}>
                  All authorized centers in both emirates undergo College Board technical checks. Bluebook downloads your exam package 1–5 days prior, so the test runs completely offline once started. The venue Wi-Fi is only needed for 2 minutes to check in and submit your final score package.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* ESSENTIAL TEST DAY CHECKLIST */}
        <section style={{ marginBottom: '48px', background: '#fefce8', border: '1px solid #fef08a', borderRadius: '12px', padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <CheckSquare size={20} color="#ca8a04" />
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#854d0e', margin: 0 }}>
              The UAE SAT Test-Day Packing Checklist
            </h3>
          </div>
          <p style={{ color: '#713f12', fontSize: '0.92rem', marginBottom: '16px' }}>
            Double-check these 6 mandatory items on Friday night before your exam:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '12px' }}>
            <div style={{ background: 'white', padding: '12px 14px', borderRadius: '8px', border: '1px solid #fde047', fontSize: '0.9rem', color: '#1e293b' }}>
              <strong>1. Original Emirates ID or Passport:</strong> No copies, no phone photos allowed.
            </div>
            <div style={{ background: 'white', padding: '12px 14px', borderRadius: '8px', border: '1px solid #fde047', fontSize: '0.9rem', color: '#1e293b' }}>
              <strong>2. Printed Admission Ticket:</strong> Generated in Bluebook after completing Exam Setup.
            </div>
            <div style={{ background: 'white', padding: '12px 14px', borderRadius: '8px', border: '1px solid #fde047', fontSize: '0.9rem', color: '#1e293b' }}>
              <strong>3. Fully Charged Laptop or iPad:</strong> Tested with latest Bluebook app update.
            </div>
            <div style={{ background: 'white', padding: '12px 14px', borderRadius: '8px', border: '1px solid #fde047', fontSize: '0.9rem', color: '#1e293b' }}>
              <strong>4. Device Charger &amp; Adapter:</strong> UK 3-pin plug suitable for UAE school sockets.
            </div>
            <div style={{ background: 'white', padding: '12px 14px', borderRadius: '8px', border: '1px solid #fde047', fontSize: '0.9rem', color: '#1e293b' }}>
              <strong>5. Backup Calculator:</strong> Approved scientific/graphing device (TI-84 or Casio).
            </div>
            <div style={{ background: 'white', padding: '12px 14px', borderRadius: '8px', border: '1px solid #fde047', fontSize: '0.9rem', color: '#1e293b' }}>
              <strong>6. Water &amp; Light Snack:</strong> Clear bottle without labels for the 10-minute break.
            </div>
          </div>
        </section>

        {/* NITAQ SAT PREPARATION CTA */}
        <div style={{ background: 'linear-gradient(135deg, #1a5c2e 0%, #11401f 100%)', borderRadius: '16px', padding: '36px 30px', color: 'white', marginBottom: '48px', boxShadow: '0 8px 24px rgba(26,92,46,0.18)' }}>
          <div style={{ maxWidth: '680px' }}>
            <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.2)', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '12px' }}>
              Sharjah &amp; Dubai In-Person Coaching
            </span>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, margin: '0 0 12px 0', lineHeight: 1.3 }}>
              Ready for the SAT? Get Coached by Top 1% Scorers at Nitaq Academy
            </h3>
            <p style={{ fontSize: '1rem', opacity: 0.9, lineHeight: 1.6, marginBottom: '24px' }}>
              Located centrally at Abu Khamseen Tower in Al Majaz 3, Sharjah, Nitaq Academy provides full-length proctored Bluebook mock tests, score-guaranteed coaching, and direct admissions support for AUS, UoS, Khalifa, and US universities.
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link 
                to="/sat/diagnostic" 
                style={{ background: '#ffffff', color: '#1a5c2e', padding: '12px 24px', borderRadius: '8px', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem' }}
              >
                Free SAT Diagnostic Test <ArrowRight size={16} />
              </Link>
              <Link 
                to="/sat-preparation-sharjah" 
                style={{ background: 'rgba(255,255,255,0.15)', color: '#ffffff', border: '1px solid rgba(255,255,255,0.3)', padding: '12px 20px', borderRadius: '8px', fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem' }}
              >
                Explore Sharjah Course
              </Link>
            </div>
          </div>
        </div>

        {/* SECTION: INTERNAL LINKING */}
        <section style={{ marginBottom: '48px', padding: '24px', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>
            More SAT Strategy Guides for UAE Students
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '12px' }}>
            <Link to="/article/how-to-register-for-sat-complete-guide" style={{ padding: '12px 16px', background: 'white', borderRadius: '8px', border: '1px solid #cbd5e1', textDecoration: 'none', color: '#0f172a', fontSize: '0.9rem', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>How to Register for SAT (UAE Guide)</span>
              <ChevronRight size={14} color="#1a5c2e" />
            </Link>
            <Link to="/article/sat-grammar-rules-digital-reading-writing-guide" style={{ padding: '12px 16px', background: 'white', borderRadius: '8px', border: '1px solid #cbd5e1', textDecoration: 'none', color: '#0f172a', fontSize: '0.9rem', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>SAT Grammar Rules Guide</span>
              <ChevronRight size={14} color="#1a5c2e" />
            </Link>
            <Link to="/article/sat-math-formula-sheet-desmos-calculator-guide" style={{ padding: '12px 16px', background: 'white', borderRadius: '8px', border: '1px solid #cbd5e1', textDecoration: 'none', color: '#0f172a', fontSize: '0.9rem', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>Desmos Shortcuts &amp; Formula Sheet</span>
              <ChevronRight size={14} color="#1a5c2e" />
            </Link>
            <Link to="/sat-preparation-dubai" style={{ padding: '12px 16px', background: 'white', borderRadius: '8px', border: '1px solid #cbd5e1', textDecoration: 'none', color: '#0f172a', fontSize: '0.9rem', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>SAT Preparation Dubai</span>
              <ChevronRight size={14} color="#1a5c2e" />
            </Link>
          </div>
        </section>

        {/* FAQ ACCORDION */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '20px' }}>
            Frequently Asked Questions: UAE SAT Test Centers
          </h2>

          <div style={{ display: 'grid', gap: '12px' }}>
            {faqs.map((faq, idx) => (
              <div key={idx} style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', overflow: 'hidden' }}>
                <button
                  onClick={() => toggleFaq(idx)}
                  style={{ width: '100%', padding: '18px 22px', textAlign: 'left', background: 'none', border: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', fontWeight: 600, fontSize: '1.02rem', color: '#0f172a' }}
                >
                  <span>{faq.question}</span>
                  <ChevronRight 
                    size={18} 
                    style={{ transform: openFaq === idx ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s ease', color: '#1a5c2e', flexShrink: 0 }} 
                  />
                </button>
                {openFaq === idx && (
                  <div style={{ padding: '0 22px 18px', color: '#475569', lineHeight: 1.7, fontSize: '0.95rem', borderTop: '1px solid #f1f5f9', paddingTop: '14px' }}>
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
            Speak With Our SAT Advisors in Sharjah
          </h3>
          <p style={{ color: '#64748b', maxWidth: '600px', margin: '0 auto 20px', fontSize: '0.95rem' }}>
            Need help selecting an exam date, preparing your device, or choosing between test centers? Our academic counseling team is here to guide you.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <a 
              href="https://wa.me/971527569908" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ background: '#1a5c2e', color: 'white', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <PhoneCall size={16} /> WhatsApp Admissions: +971 52 756 9908
            </a>
            <Link 
              to="/contact" 
              style={{ background: 'white', color: '#0f172a', border: '1px solid #cbd5e1', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600 }}
            >
              Visit Academy: Al Majaz 3, Sharjah
            </Link>
          </div>
        </div>

      </article>
    </main>
  );
};

export default SatTestCentersUaeGuide;
