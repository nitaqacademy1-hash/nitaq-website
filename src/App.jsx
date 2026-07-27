import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { LanguageProvider } from './i18n/LanguageContext';
import { useLanguage } from './i18n/context';
import { stripLangPrefix } from './i18n/config';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
const About = lazy(() => import('./pages/About'));
const Enquiry = lazy(() => import('./pages/Enquiry'));
const Contact = lazy(() => import('./pages/Contact'));
import ScrollToTop from './components/ScrollToTop';
import ScrollToHashElement from './components/ScrollToHashElement';

const TestPreparations = lazy(() => import('./pages/TestPreparations'));
const LanguageTrainings = lazy(() => import('./pages/LanguageTrainings'));
const ProfessionalCertifications = lazy(() => import('./pages/ProfessionalCertifications'));

const CorporateTrainings = lazy(() => import('./pages/CorporateTrainings'));
const ACCACourse = lazy(() => import('./pages/courses/ACCACourse'));
const CMACourse = lazy(() => import('./pages/courses/CMACourse'));
const CPACourse = lazy(() => import('./pages/courses/CPACourse'));
const IELTSCourse = lazy(() => import('./pages/courses/IELTSCourse'));
const SpokenArabic = lazy(() => import('./pages/courses/SpokenArabic'));
const UAEVATCourse = lazy(() => import('./pages/courses/UAEVATCourse'));
const UAECorporateTaxCourse = lazy(() => import('./pages/courses/UAECorporateTaxCourse'));
const FinanceCourses = lazy(() => import('./pages/courses/FinanceCourses'));
const AICourse = lazy(() => import('./pages/courses/AICourse'));
const PowerBIExcelCourse = lazy(() => import('./pages/courses/PowerBIExcelCourse'));
const CHRMCourse = lazy(() => import('./pages/courses/CHRMCourse'));
const HRMCourse = lazy(() => import('./pages/courses/HRMCourse'));
const SalesNegotiationsCourse = lazy(() => import('./pages/courses/SalesNegotiationsCourse'));
const ProfessionalMarketingCourse = lazy(() => import('./pages/courses/ProfessionalMarketingCourse'));
const ProfessionalDigitalMarketingCourse = lazy(() => import('./pages/courses/ProfessionalDigitalMarketingCourse'));
const SoftwareEngineeringCourse = lazy(() => import('./pages/courses/SoftwareEngineeringCourse'));
const CPCDCourse = lazy(() => import('./pages/courses/CPCDCourse'));
const DataManagementCourse = lazy(() => import('./pages/courses/DataManagementCourse'));
const SoftSkillsTraining = lazy(() => import('./pages/courses/SoftSkillsTraining'));
const SpokenEnglish = lazy(() => import('./pages/courses/SpokenEnglish'));
const FrenchCourse = lazy(() => import('./pages/courses/FrenchCourse'));
const GermanCourse = lazy(() => import('./pages/courses/GermanCourse'));
const SpanishCourse = lazy(() => import('./pages/courses/SpanishCourse'));
const PTECourse = lazy(() => import('./pages/courses/PTECourse'));
const TOEFLCourse = lazy(() => import('./pages/courses/TOEFLCourse'));
const SATCourse = lazy(() => import('./pages/courses/SATCourse'));
const IELTSCourseDubai = lazy(() => import('./pages/courses/IELTSCourseDubai'));
const SATCourseDubai = lazy(() => import('./pages/courses/SATCourseDubai'));
const GMATCourse = lazy(() => import('./pages/courses/GMATCourse'));
const GRECourse = lazy(() => import('./pages/courses/GRECourse'));
const AcademicExcellenceCourse = lazy(() => import('./pages/courses/AcademicExcellenceCourse'));
const FoundationJEECourse = lazy(() => import('./pages/courses/FoundationJEECourse'));
const AIRoboticsKids = lazy(() => import('./pages/courses/AIRoboticsKids'));
const CybersecurityCourse = lazy(() => import('./pages/courses/CybersecurityCourse'));
const Courses = lazy(() => import('./pages/Courses'));
import NotFound from './pages/NotFound';
const Articles = lazy(() => import('./pages/Articles'));
const SatCoachingSharjah = lazy(() => import('./pages/article/SatCoachingSharjah'));
const SatScore1300Guide = lazy(() => import('./pages/article/SatScore1300Guide'));
const SatVsIeltsGuide = lazy(() => import('./pages/article/SatVsIeltsGuide'));
const CommonSatMistakes = lazy(() => import('./pages/article/CommonSatMistakes'));
const IeltsDubaiGuide = lazy(() => import('./pages/article/IeltsDubaiGuide'));
const IeltsBandScoreTips = lazy(() => import('./pages/article/IeltsBandScoreTips'));
const ProfessionalCoursesSharjah = lazy(() => import('./pages/article/ProfessionalCoursesSharjah'));
const AccaCoachingUae = lazy(() => import('./pages/article/AccaCoachingUae'));
const AiCoursesSharjah = lazy(() => import('./pages/article/AiCoursesSharjah'));
const BestTrainingInstituteSharjah = lazy(() => import('./pages/article/BestTrainingInstituteSharjah'));
const ChooseRightCourseUae = lazy(() => import('./pages/article/ChooseRightCourseUae'));
const TopSkillsUae2026 = lazy(() => import('./pages/article/TopSkillsUae2026'));
const BestAiCoursesDubai = lazy(() => import('./pages/article/BestAiCoursesDubai'));
const WhyNotHiredUae = lazy(() => import('./pages/article/WhyNotHiredUae'));
const BestCertificationsGrowth = lazy(() => import('./pages/article/BestCertificationsGrowth'));
const DigitalMarketingSalary = lazy(() => import('./pages/article/DigitalMarketingSalary'));
const AiSkillsForStudents = lazy(() => import('./pages/article/AiSkillsForStudents'));
const ImproveEnglishBetterJobs = lazy(() => import('./pages/article/ImproveEnglishBetterJobs'));
const DigitalMarketingSeoGuide = lazy(() => import('./pages/article/DigitalMarketingSeoGuide'));
const BestDigitalMarketingCourse = lazy(() => import('./pages/article/BestDigitalMarketingCourse'));
const ProfessionalDigitalMarketingCourseArticle = lazy(() => import('./pages/article/ProfessionalDigitalMarketingCourseArticle'));
const HowToChooseBestDigitalMarketingInstitute = lazy(() => import('./pages/article/HowToChooseBestDigitalMarketingInstitute'));


const TermsAndConditions = lazy(() => import('./pages/legal/TermsAndConditions'));
const PrivacyPolicy = lazy(() => import('./pages/legal/PrivacyPolicy'));


import FloatingWhatsApp from './components/FloatingWhatsApp';
import DynamicPopup from './components/DynamicPopup';
const ResumeGuide = lazy(() => import('./pages/ig/2026-03-29/ResumeGuide'));
const AIWebinar = lazy(() => import('./pages/webinar/AIWebinar'));
const AIWebinarThankYou = lazy(() => import('./pages/webinar/AIWebinarThankYou'));
const CounselorsOrientation = lazy(() => import('./pages/webinar/CounselorsOrientation'));
const CounselorsOrientationThankYou = lazy(() => import('./pages/webinar/CounselorsOrientationThankYou'));

function AppContent() {
  return (
    <LanguageProvider>
      <ScrollToTop />
      <ScrollToHashElement />
      <Header />

      {/* Every page is reachable in both languages: English at /x and Arabic
          at /ar/x. Both branches mount the same tree, so pages stay in sync.
          Pages are code-split (React.lazy); the Suspense fallback reserves
          viewport height so the footer doesn't jump while a chunk loads. */}
      <Suspense fallback={<div style={{ minHeight: '70vh' }} aria-busy="true" />}>
        <Routes>
          <Route path="/ar/*" element={<LocalizedRoutes />} />
          <Route path="/*" element={<LocalizedRoutes />} />
        </Routes>
      </Suspense>
      <FloatingWhatsAppCondition />
      <DynamicPopupCondition />
      <Footer />
    </LanguageProvider>
  );
}

/**
 * The full page tree, mounted under a language prefix. Paths are relative so
 * the same definitions serve `/about` and `/ar/about`.
 */
function LocalizedRoutes() {
  return (
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="enquiry" element={<Enquiry />} />
        <Route path="contact" element={<Contact />} />
        <Route path="test-preparations" element={<TestPreparations />} />
        <Route path="language-trainings" element={<LanguageTrainings />} />
        <Route path="professional-certifications" element={<ProfessionalCertifications />} />
        <Route path="corporate-trainings" element={<CorporateTrainings />} />
        <Route path="finance-courses" element={<FinanceCourses />} />
        <Route path="acca-course" element={<ACCACourse />} />
        <Route path="cma-course" element={<CMACourse />} />
        <Route path="cpa-course" element={<CPACourse />} />
        <Route path="ielts-course" element={<IELTSCourse />} />
        <Route path="spoken-arabic" element={<SpokenArabic />} />
        <Route path="uae-vat" element={<UAEVATCourse />} />
        <Route path="uae-corporate-tax" element={<UAECorporateTaxCourse />} />
        <Route path="ai-course" element={<AICourse />} />
        <Route path="power-bi-excel" element={<PowerBIExcelCourse />} />
        <Route path="chrm" element={<CHRMCourse />} />
        <Route path="hrm-courses" element={<HRMCourse />} />
        <Route path="sales-negotiations" element={<SalesNegotiationsCourse />} />
        <Route path="professional-marketing-course" element={<ProfessionalMarketingCourse />} />
        <Route path="courses/professional-digital-marketing-course-sharjah-uae" element={<ProfessionalDigitalMarketingCourse />} />
        <Route path="software-engineering-diploma-sharjah" element={<SoftwareEngineeringCourse />} />
        <Route path="cpcd-courses" element={<CPCDCourse />} />
        <Route path="data-management" element={<DataManagementCourse />} />
        <Route path="soft-skills-training" element={<SoftSkillsTraining />} />
        <Route path="spoken-english" element={<SpokenEnglish />} />
        <Route path="french" element={<FrenchCourse />} />
        <Route path="german" element={<GermanCourse />} />
        <Route path="spanish" element={<SpanishCourse />} />
        <Route path="pte-course" element={<PTECourse />} />
        <Route path="toefl-course" element={<TOEFLCourse />} />
        <Route path="sat-preparation-sharjah" element={<SATCourse />} />
        <Route path="sat-preparation-dubai" element={<SATCourseDubai />} />
        <Route path="ielts-coaching-dubai" element={<IELTSCourseDubai />} />
        <Route path="sat-preparation" element={<LocalizedNavigate to="/sat-preparation-sharjah" />} />
        <Route path="gmat-preparation" element={<GMATCourse />} />
        <Route path="gre-preparation" element={<GRECourse />} />
        <Route path="academic-excellence" element={<AcademicExcellenceCourse />} />
        <Route path="foundation-jee-neet" element={<FoundationJEECourse />} />
        <Route path="ai-robotics-kids" element={<AIRoboticsKids />} />
        <Route path="cybersecurity-course-sharjah" element={<CybersecurityCourse />} />
        <Route path="courses" element={<Courses />} />
        <Route path="articles" element={<Articles />} />

        {/* Articles */}
        <Route path="article/sat-coaching-sharjah" element={<SatCoachingSharjah />} />
        <Route path="article/sat-score-1300-guide" element={<SatScore1300Guide />} />
        <Route path="article/sat-vs-ielts-guide" element={<SatVsIeltsGuide />} />
        <Route path="article/common-sat-mistakes" element={<CommonSatMistakes />} />
        <Route path="article/ielts-dubai-guide" element={<IeltsDubaiGuide />} />
        <Route path="article/improve-ielts-band-score" element={<IeltsBandScoreTips />} />
        <Route path="article/professional-courses-sharjah-growth" element={<ProfessionalCoursesSharjah />} />
        <Route path="article/acca-coaching-uae-benefits" element={<AccaCoachingUae />} />
        <Route path="article/ai-courses-sharjah-essential" element={<AiCoursesSharjah />} />
        <Route path="article/best-training-institute-sharjah" element={<BestTrainingInstituteSharjah />} />
        <Route path="article/choose-right-course-uae" element={<ChooseRightCourseUae />} />
        <Route path="article/top-skills-uae-2026" element={<TopSkillsUae2026 />} />
        <Route path="article/best-ai-courses-dubai" element={<BestAiCoursesDubai />} />
        <Route path="article/improve-english-better-jobs" element={<ImproveEnglishBetterJobs />} />
        <Route path="article/why-not-getting-hired-uae" element={<WhyNotHiredUae />} />
        <Route path="article/best-professional-certifications-uae" element={<BestCertificationsGrowth />} />
        <Route path="article/digital-marketing-salary-increase-uae" element={<DigitalMarketingSalary />} />
        <Route path="article/ai-skills-every-student-needs" element={<AiSkillsForStudents />} />
        <Route path="article/digital-marketing-seo-guide-uae" element={<DigitalMarketingSeoGuide />} />
        <Route path="article/best-digital-marketing-course-uae" element={<BestDigitalMarketingCourse />} />
        <Route path="article/professional-digital-marketing-course-overview" element={<ProfessionalDigitalMarketingCourseArticle />} />
        <Route path="article/how-to-choose-best-digital-marketing-institute-sharjah-dubai-uae" element={<HowToChooseBestDigitalMarketingInstitute />} />



        {/* IG Landing Pages */}
        <Route path="ig/2026-03-29" element={<ResumeGuide />} />

        {/* Webinar Landing Pages */}
        <Route path="webinar/ai" element={<AIWebinar />} />
        <Route path="webinar/ai/thank-you" element={<AIWebinarThankYou />} />
        {/* Alias — redirect instead of rendering a duplicate of /webinar/ai */}
        <Route path="webinar" element={<LocalizedNavigate to="/webinar/ai" />} />

        {/* Counselors Orientation Landing Pages */}
        <Route path="webinar/counselors" element={<CounselorsOrientation />} />
        <Route path="webinar/counselors/thank-you" element={<CounselorsOrientationThankYou />} />

        {/* Legal Pages */}
        <Route path="terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />

        {/* Unknown URLs get a real 404 page (noindex) instead of a
            homepage clone that Google would index as duplicate content. */}
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
}

function App() {
  return <AppContent />;
}

export { AppContent };

// Helper components to conditionally render layout elements

/** Redirect that keeps the visitor inside the language they are browsing. */
const LocalizedNavigate = ({ to }) => {
  const { localize } = useLanguage();
  return <Navigate to={localize(to)} replace />;
};

const FloatingWhatsAppCondition = () => {
  const location = useLocation();
  // Compare against the language-neutral path so /ar/ig/... matches too.
  const path = stripLangPrefix(location.pathname);
  const isIgPage = path.startsWith('/ig/');
  const isWebinarPage = path.startsWith('/webinar/');
  return (!isIgPage && !isWebinarPage) ? <FloatingWhatsApp /> : null;
};

/** Marketing popup — everywhere except landing/webinar pages, which have their
 *  own conversion flow (the component additionally excludes its action pages). */
const DynamicPopupCondition = () => {
  const location = useLocation();
  const path = stripLangPrefix(location.pathname);
  const isIgPage = path.startsWith('/ig/');
  const isWebinarPage = path.startsWith('/webinar');
  return (!isIgPage && !isWebinarPage) ? <DynamicPopup /> : null;
};

export default App;
