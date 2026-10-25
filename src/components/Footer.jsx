import { Link } from '../i18n/Link';
import { useLanguage } from '../i18n/context';
import { trackEvent, ANALYTICS_EVENTS } from '../utils/analytics';
import { Youtube, Instagram, Facebook, Linkedin, MessageCircle } from 'lucide-react';
import { primaryNavigation, navigationLabel } from '../data/siteNavigation';

const labels = {
  en: {
    tagline: 'Focused preparation, language learning and subject support in Al Majaz 3, Sharjah.',
    sat: 'SAT & Test Prep',
    languages: 'Language Training',
    tuition: 'Subject Tuition',
    professionalTitle: 'Professional & Tech',
    academy: 'Academy',
    contact: 'Sharjah Campus',
    diagnostic: 'Free SAT diagnostic',
    all: 'All courses',
    rights: 'All rights reserved.',
    operator: 'Operated by Nitaq Supportive Education Services LLC',
    digitalSat: 'Digital SAT (Sharjah)',
    satDubai: 'SAT Prep Dubai',
    satGuide: 'SAT guide',
    gmat: 'GMAT Preparation',
    gre: 'GRE Preparation',
    jeeNeet: 'JEE / NEET Foundation',
    testPrepHub: 'All test preparation',
    english: 'Spoken English',
    arabic: 'Spoken Arabic',
    french: 'French Language',
    spanish: 'Spanish Language',
    german: 'German Language',
    ielts: 'IELTS Academic & General',
    toefl: 'TOEFL iBT',
    pte: 'PTE Academic',
    languagesHub: 'All language courses',
    allTuition: 'All school tuition (IGCSE/IB/CBSE)',
    maths: 'Mathematics Tuition',
    physics: 'Physics Tuition',
    chemistry: 'Chemistry Tuition',
    biology: 'Biology Tuition',
    science: 'Science Tuition',
    accountancy: 'Accountancy Tuition',
    businessStudies: 'Business Studies Tuition',
    economics: 'Economics Tuition',
    englishTuition: 'English Tuition',
    socialScience: 'Social Science Tuition',
    professional: 'Professional Certifications',
    acca: 'ACCA Qualification',
    cma: 'US CMA',
    cpa: 'US CPA',
    corporateTax: 'UAE Corporate Tax',
    vat: 'UAE VAT Practitioner',
    digitalMarketing: 'Digital Marketing Course',
    powerBi: 'Power BI & Excel',
    dataManagement: 'AI & Data Management',
    aiRobotics: 'AI & Robotics for Kids',
    corporate: 'Corporate Training',
    about: 'About Nitaq',
    resources: 'Resources & Insights',
    privacy: 'Privacy policy',
    terms: 'Terms & conditions',
    address: 'Abu Khamseen Tower - Office : F103, Floor F1 - Al Majaz 3 - Al Majaz - Sharjah - United Arab Emirates',
    landline: 'Tel: +971 6 579 8313',
    mobile: 'Mob: +971 52 756 9908'
  },
  ar: {
    tagline: 'تحضير مركّز وتعلم لغات ودعم أكاديمي في المجاز 3، الشارقة.',
    sat: 'التحضير لاختبار SAT والاختبارات',
    languages: 'تدريب اللغات',
    tuition: 'الدروس الأكاديمية والتقوية',
    professionalTitle: 'الدورات المهنية والتقنية',
    academy: 'الأكاديمية',
    contact: 'مقر الشارقة',
    diagnostic: 'تقييم SAT المجاني',
    all: 'جميع الدورات',
    rights: 'جميع الحقوق محفوظة.',
    operator: 'تُدار بواسطة شركة نطاق لخدمات الدعم التعليمي ذ.م.م',
    digitalSat: 'SAT الرقمي (الشارقة)',
    satDubai: 'التحضير لـ SAT في دبي',
    satGuide: 'دليل اختبار SAT',
    gmat: 'التحضير لاختبار GMAT',
    gre: 'التحضير لاختبار GRE',
    jeeNeet: 'التأسيس لاختبارات JEE / NEET',
    testPrepHub: 'جميع اختبارات القبول',
    english: 'الإنجليزية المحادثة',
    arabic: 'العربية المحادثة',
    french: 'اللغة الفرنسية',
    spanish: 'اللغة الإسبانية',
    german: 'اللغة الألمانية',
    ielts: 'التحضير لاختبار IELTS',
    toefl: 'التحضير لاختبار TOEFL',
    pte: 'التحضير لاختبار PTE Academic',
    languagesHub: 'جميع دورات اللغات',
    allTuition: 'جميع الدروس المدرسية (IGCSE / IB / CBSE)',
    maths: 'دروس الرياضيات',
    physics: 'دروس الفيزياء',
    chemistry: 'دروس الكيمياء',
    biology: 'دروس الأحياء',
    science: 'دروس العلوم العامة',
    accountancy: 'دروس المحاسبة',
    businessStudies: 'دروس دراسات الأعمال',
    economics: 'دروس الاقتصاد',
    englishTuition: 'دروس اللغة الإنجليزية',
    socialScience: 'دروس العلوم الاجتماعية',
    professional: 'الدورات والشهادات المهنية',
    acca: 'شهادة ACCA البريطانية',
    cma: 'شهادة CMA الأمريكية',
    cpa: 'شهادة CPA الأمريكية',
    corporateTax: 'ضريبة الشركات في الإمارات',
    vat: 'شهادة خبير ضريبة القيمة المضافة',
    digitalMarketing: 'دورة التسويق الرقمي المتقدم',
    powerBi: 'Power BI وتحليل البيانات مع Excel',
    dataManagement: 'الذكاء الاصطناعي وإدارة البيانات',
    aiRobotics: 'الذكاء الاصطناعي والروبوت للأطفال',
    corporate: 'التدريب المؤسسي للشركات',
    about: 'عن أكاديمية نطاق',
    resources: 'المقالات والمصادر',
    privacy: 'سياسة الخصوصية',
    terms: 'الشروط والأحكام',
    address: 'برج أبو خمسين - مكتب F103، الطابق F1 - المجاز 3 - المجاز - الشارقة - الإمارات العربية المتحدة',
    landline: 'هاتف: 8313 579 6 971+',
    mobile: 'متحرك: 9908 756 52 971+'
  }
};

const Footer = () => {
  const { lang, switchLanguage } = useLanguage();
  const c = labels[lang] || labels.en;

  return (
    <footer className="footer-minimal" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container">
        <nav className="footer-primary-navigation" aria-label={lang === 'ar' ? 'روابط الموقع' : 'Site links'}>
          {primaryNavigation.map(entry => <Link key={entry.id} to={entry.path}>{navigationLabel(entry, lang)}</Link>)}
          <button type="button" onClick={() => switchLanguage(lang === 'en' ? 'ar' : 'en')}>
            {lang === 'en' ? 'العربية' : 'English'}
          </button>
        </nav>
        <div className="footer-content">
          <div className="footer-brand">
            <img src="/images/logo1.webp" alt="Nitaq Academy" title="Nitaq Academy" width="150" height="56" loading="lazy" />
            <p>{c.tagline}</p>
            <div style={{ display: 'flex', gap: '10px', marginTop: '18px' }} aria-label="Social media channels">
              <a href="https://www.youtube.com/@NitaqAcademy" target="_blank" rel="noopener noreferrer" aria-label="YouTube @NitaqAcademy" style={{ color: '#ef4444', background: 'rgba(239, 68, 68, 0.15)', padding: '8px', borderRadius: '50%', display: 'inline-flex' }}>
                <Youtube size={17} />
              </a>
              <a href="https://www.instagram.com/nitaqtraining" target="_blank" rel="noopener noreferrer" aria-label="Instagram @nitaqtraining" style={{ color: '#ec4899', background: 'rgba(236, 72, 153, 0.15)', padding: '8px', borderRadius: '50%', display: 'inline-flex' }}>
                <Instagram size={17} />
              </a>
              <a href="https://www.facebook.com/nitaqtraining" target="_blank" rel="noopener noreferrer" aria-label="Facebook @nitaqtraining" style={{ color: '#3b82f6', background: 'rgba(59, 130, 246, 0.15)', padding: '8px', borderRadius: '50%', display: 'inline-flex' }}>
                <Facebook size={17} />
              </a>
              <a href="https://www.linkedin.com/company/nitaqtraining" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn @nitaqtraining" style={{ color: '#38bdf8', background: 'rgba(56, 189, 248, 0.15)', padding: '8px', borderRadius: '50%', display: 'inline-flex' }}>
                <Linkedin size={17} />
              </a>
              <a
                href="https://wa.me/971527569908"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP, 'footer_social')}
                style={{ color: '#22c55e', background: 'rgba(34, 197, 94, 0.15)', padding: '8px', borderRadius: '50%', display: 'inline-flex' }}
              >
                <MessageCircle size={17} />
              </a>
            </div>
          </div>
          <div className="footer-nav priority-footer">
            <div>
              <h3>{c.sat}</h3>
              <Link to="/sat-preparation-sharjah">{c.digitalSat}</Link>
              <Link to="/sat-preparation-dubai">{c.satDubai}</Link>
              <Link to="/sat/diagnostic">{c.diagnostic}</Link>
              <Link to="/gmat-preparation">{c.gmat}</Link>
              <Link to="/gre-preparation">{c.gre}</Link>
              <Link to="/foundation-jee-neet">{c.jeeNeet}</Link>
              <Link to="/test-preparations">{c.testPrepHub}</Link>
              <Link to="/article/digital-sat-preparation-guide-sharjah-dubai-uae">{c.satGuide}</Link>
            </div>
            <div>
              <h3>{c.languages}</h3>
              <Link to="/language-trainings">{c.languagesHub}</Link>
              <Link to="/spoken-english">{c.english}</Link>
              <Link to="/spoken-arabic">{c.arabic}</Link>
              <Link to="/french">{c.french}</Link>
              <Link to="/spanish">{c.spanish}</Link>
              <Link to="/german">{c.german}</Link>
              <Link to="/ielts-course">{c.ielts}</Link>
              <Link to="/toefl-course">{c.toefl}</Link>
              <Link to="/pte-course">{c.pte}</Link>
            </div>
            <div>
              <h3>{c.tuition}</h3>
              <Link to="/academic-excellence">{c.allTuition}</Link>
              <Link to="/maths-tuition-sharjah">{c.maths}</Link>
              <Link to="/physics-tuition-sharjah">{c.physics}</Link>
              <Link to="/chemistry-tuition-sharjah">{c.chemistry}</Link>
              <Link to="/biology-tuition-sharjah">{c.biology}</Link>
              <Link to="/science-tuition-sharjah">{c.science}</Link>
              <Link to="/accountancy-tuition-sharjah">{c.accountancy}</Link>
              <Link to="/business-studies-tuition-sharjah">{c.businessStudies}</Link>
              <Link to="/economics-tuition-sharjah">{c.economics}</Link>
              <Link to="/english-tuition-sharjah">{c.englishTuition}</Link>
              <Link to="/social-science-tuition-sharjah">{c.socialScience}</Link>
            </div>
            <div>
              <h3>{c.professionalTitle}</h3>
              <Link to="/professional-certifications">{c.professional}</Link>
              <Link to="/acca-course">{c.acca}</Link>
              <Link to="/cma-course">{c.cma}</Link>
              <Link to="/cpa-course">{c.cpa}</Link>
              <Link to="/uae-corporate-tax">{c.corporateTax}</Link>
              <Link to="/uae-vat">{c.vat}</Link>
              <Link to="/courses/professional-digital-marketing-course-sharjah-uae">{c.digitalMarketing}</Link>
              <Link to="/power-bi-excel">{c.powerBi}</Link>
              <Link to="/data-management">{c.dataManagement}</Link>
              <Link to="/ai-robotics-kids">{c.aiRobotics}</Link>
              <Link to="/corporate-trainings">{c.corporate}</Link>
            </div>
            <div>
              <h3>{c.academy}</h3>
              <Link to="/about">{c.about}</Link>
              <Link to="/courses">{c.all}</Link>
              <Link to="/articles">{c.resources}</Link>
              <Link to="/contact">{c.contact}</Link>
              <Link to="/privacy-policy">{c.privacy}</Link>
              <Link to="/terms-and-conditions">{c.terms}</Link>
            </div>
            <div>
              <h3>{c.contact}</h3>
              <p style={{ whiteSpace: 'pre-line' }}>{c.address}</p>
              <a href="tel:+97165798313" onClick={() => trackEvent(ANALYTICS_EVENTS.CALL, 'footer_landline')}>
                {c.landline}
              </a>
              <a href="tel:+971527569908" onClick={() => trackEvent(ANALYTICS_EVENTS.CALL, 'footer_mobile')}>
                {c.mobile}
              </a>
              <a href="mailto:info@nitaqacademy.com">info@nitaqacademy.com</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div>
            <p>© {new Date().getFullYear()} Nitaq Academy. {c.rights}</p>
            <p className="legal-operator">{c.operator}</p>
          </div>
          <div className="social-links" aria-label="Social media links">
            <a href="https://www.youtube.com/@NitaqAcademy" target="_blank" rel="noopener noreferrer" aria-label="YouTube Channel @NitaqAcademy" title="YouTube: @NitaqAcademy">
              <Youtube size={18} />
            </a>
            <a href="https://www.instagram.com/nitaqtraining" target="_blank" rel="noopener noreferrer" aria-label="Instagram @nitaqtraining" title="Instagram: @nitaqtraining">
              <Instagram size={18} />
            </a>
            <a href="https://www.facebook.com/nitaqtraining" target="_blank" rel="noopener noreferrer" aria-label="Facebook @nitaqtraining" title="Facebook: @nitaqtraining">
              <Facebook size={18} />
            </a>
            <a href="https://www.linkedin.com/company/nitaqtraining" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Nitaq Academy" title="LinkedIn: Nitaq Academy">
              <Linkedin size={18} />
            </a>
            <a
              href="https://wa.me/971527569908"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp +971 52 756 9908"
              title="WhatsApp: +971 52 756 9908"
              onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP, 'footer_social')}
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
