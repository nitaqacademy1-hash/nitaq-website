import { Link } from '../i18n/Link';
import { useLanguage } from '../i18n/context';
import { trackEvent, ANALYTICS_EVENTS } from '../utils/analytics';
import { Youtube, Instagram, Facebook, Linkedin, MessageCircle } from 'lucide-react';
import { primaryNavigation, navigationLabel } from '../data/siteNavigation';

const labels = {
  en: {
    tagline: 'Focused preparation, language learning and subject support in Al Majaz 3, Sharjah.',
    sat: 'SAT Preparation',
    languages: 'Language Training',
    tuition: 'Subject Tuition',
    other: 'Other Courses',
    academy: 'Academy',
    contact: 'Contact',
    diagnostic: 'Free SAT diagnostic',
    all: 'All courses',
    rights: 'All rights reserved.',
    operator: 'Operated by Nitaq Supportive Education Services LLC',
    digitalSat: 'Digital SAT',
    satGuide: 'SAT guide',
    english: 'English',
    arabic: 'Arabic',
    french: 'French',
    ielts: 'IELTS',
    maths: 'Mathematics',
    science: 'Science',
    englishTuition: 'English Tuition',
    professional: 'Professional Courses',
    corporate: 'Corporate Training',
    otherExam: 'Other exam preparation',
    about: 'About Nitaq',
    resources: 'Resources & Insights',
    privacy: 'Privacy policy',
    terms: 'Terms & conditions',
    address: 'Abu Khamseen Tower - Office : F103, Floor F1 - Al Majaz 3 - Al Majaz - Sharjah - United Arab Emirates'
  },
  ar: {
    tagline: 'تحضير مركّز وتعلم لغات ودعم أكاديمي في المجاز 3، الشارقة.',
    sat: 'التحضير لاختبار SAT',
    languages: 'تدريب اللغات',
    tuition: 'الدروس الأكاديمية',
    other: 'دورات أخرى',
    academy: 'الأكاديمية',
    contact: 'تواصل معنا',
    diagnostic: 'تقييم SAT المجاني',
    all: 'جميع الدورات',
    rights: 'جميع الحقوق محفوظة.',
    operator: 'تُدار بواسطة شركة نطاق لخدمات الدعم التعليمي ذ.م.م',
    digitalSat: 'SAT الرقمي',
    satGuide: 'دليل اختبار SAT',
    english: 'الإنجليزية المحادثة',
    arabic: 'العربية المحادثة',
    french: 'اللغة الفرنسية',
    ielts: 'التحضير لاختبار IELTS',
    maths: 'دروس الرياضيات',
    science: 'دروس العلوم',
    englishTuition: 'دروس اللغة الإنجليزية',
    professional: 'الدورات والشهادات المهنية',
    corporate: 'التدريب المؤسسي للشركات',
    otherExam: 'اختبارات القبول الأخرى',
    about: 'عن أكاديمية نطاق',
    resources: 'المقالات والمصادر',
    privacy: 'سياسة الخصوصية',
    terms: 'الشروط والأحكام',
    address: 'برج أبو خمسين - مكتب F103، الطابق F1 - المجاز 3 - المجاز - الشارقة - الإمارات العربية المتحدة'
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
              <a href="https://wa.me/971527569908" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" style={{ color: '#22c55e', background: 'rgba(34, 197, 94, 0.15)', padding: '8px', borderRadius: '50%', display: 'inline-flex' }}>
                <MessageCircle size={17} />
              </a>
            </div>
          </div>
          <div className="footer-nav priority-footer">
            <div>
              <h3>{c.sat}</h3>
              <Link to="/sat-preparation-sharjah">{c.digitalSat}</Link>
              <Link to="/sat/diagnostic">{c.diagnostic}</Link>
              {lang === 'ar' ? (
                <a href="/article/digital-sat-preparation-guide-sharjah-dubai-uae" lang="en">{c.satGuide} (English)</a>
              ) : (
                <Link to="/article/digital-sat-preparation-guide-sharjah-dubai-uae">{c.satGuide}</Link>
              )}
            </div>
            <div>
              <h3>{c.languages}</h3>
              <Link to="/language-trainings">{c.languages}</Link>
              <Link to="/spoken-english">{c.english}</Link>
              <Link to="/spoken-arabic">{c.arabic}</Link>
              <Link to="/french">{c.french}</Link>
              <Link to="/ielts-course">{c.ielts}</Link>
            </div>
            <div>
              <h3>{c.tuition}</h3>
              <Link to="/academic-excellence">{c.tuition}</Link>
              <Link to="/maths-tuition-sharjah">{c.maths}</Link>
              <Link to="/science-tuition-sharjah">{c.science}</Link>
              <Link to="/english-tuition-sharjah">{c.englishTuition}</Link>
            </div>
            <div>
              <h3>{c.other}</h3>
              <Link to="/courses">{c.all}</Link>
              <Link to="/professional-certifications">{c.professional}</Link>
              <Link to="/corporate-trainings">{c.corporate}</Link>
              <Link to="/test-preparations">{c.otherExam}</Link>
            </div>
            <div>
              <h3>{c.academy}</h3>
              <Link to="/about">{c.about}</Link>
              <Link to="/contact">{c.contact}</Link>
              <Link to="/articles">{c.resources}</Link>
              <Link to="/privacy-policy">{c.privacy}</Link>
              <Link to="/terms-and-conditions">{c.terms}</Link>
            </div>
            <div>
              <h3>{c.contact}</h3>
              <p style={{ whiteSpace: 'pre-line' }}>{c.address}</p>
              <a href="tel:+971527569908" onClick={() => trackEvent(ANALYTICS_EVENTS.CALL, 'footer_mobile')}>
                +971 52 756 9908
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
            <a href="https://wa.me/971527569908" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp +971 52 756 9908" title="WhatsApp: +971 52 756 9908">
              <MessageCircle size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
