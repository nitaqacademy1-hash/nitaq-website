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
const IELTSCourseDubai = lazy(() => import('./pages/courses/IELTSCourseDubai'));
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
const SATCourseDubai = lazy(() => import('./pages/courses/SATCourseDubai'));
const SATDiagnostic = lazy(() => import('./pages/sat/SATDiagnostic'));
const QuizView = lazy(() => import('./pages/sat/QuizView'));
const MathMiniReport = lazy(() => import('./pages/sat/MathMiniReport'));
const DiagnosticResults = lazy(() => import('./pages/sat/DiagnosticResults'));
// Admin Portal
const AdminLogin = lazy(() => import('./pages/admin/AdminLogin'));
const AdminLayout = lazy(() => import('./pages/admin/AdminLayout'));
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'));
const AdminStudents = lazy(() => import('./pages/admin/AdminStudents'));
const AdminStudentDetail = lazy(() => import('./pages/admin/AdminStudentDetail'));
const AdminQuestions = lazy(() => import('./pages/admin/AdminQuestions'));
const GMATCourse = lazy(() => import('./pages/courses/GMATCourse'));
const GRECourse = lazy(() => import('./pages/courses/GRECourse'));
const AcademicExcellenceCourse = lazy(() => import('./pages/courses/AcademicExcellenceCourse'));
const MathsTuitionSharjah = lazy(() => import('./pages/seo/MathsTuitionSharjah'));
const ScienceTuitionSharjah = lazy(() => import('./pages/seo/ScienceTuitionSharjah'));
const PhysicsTuitionSharjah = lazy(() => import('./pages/seo/PhysicsTuitionSharjah'));
const ChemistryTuitionSharjah = lazy(() => import('./pages/seo/ChemistryTuitionSharjah'));
const BiologyTuitionSharjah = lazy(() => import('./pages/seo/BiologyTuitionSharjah'));
const BusinessStudiesTuitionSharjah = lazy(() => import('./pages/seo/BusinessStudiesTuitionSharjah'));
const AccountancyTuitionSharjah = lazy(() => import('./pages/seo/AccountancyTuitionSharjah'));
const EconomicsTuitionSharjah = lazy(() => import('./pages/seo/EconomicsTuitionSharjah'));
const EnglishTuitionSharjah = lazy(() => import('./pages/seo/EnglishTuitionSharjah'));
const SocialScienceTuitionSharjah = lazy(() => import('./pages/seo/SocialScienceTuitionSharjah'));
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
const WhyHiringDigitalMarketingAgency = lazy(() => import('./pages/article/WhyHiringDigitalMarketingAgency'));
const BestTuitionClassesUaeGuide = lazy(() => import('./pages/article/BestTuitionClassesUaeGuide'));
const AcademicExcellenceTuitionGuide = lazy(() => import('./pages/article/AcademicExcellenceTuitionGuide'));
const DigitalSatPreparationGuide = lazy(() => import('./pages/article/DigitalSatPreparationGuide'));
const BestTuitionClassesSharjahDubai = lazy(() => import('./pages/article/BestTuitionClassesSharjahDubai'));
const BestTuitionClassesNearMeSharjah = lazy(() => import('./pages/article/BestTuitionClassesNearMeSharjah'));
const ComprehensiveSubjectTuitionGuide = lazy(() => import('./pages/article/ComprehensiveSubjectTuitionGuide'));

const TermsAndConditions = lazy(() => import('./pages/legal/TermsAndConditions'));
const PrivacyPolicy = lazy(() => import('./pages/legal/PrivacyPolicy'));


import FloatingWhatsApp from './components/FloatingWhatsApp';
const ResumeGuide = lazy(() => import('./pages/ig/2026-03-29/ResumeGuide'));
const AIWebinar = lazy(() => import('./pages/webinar/AIWebinar'));
const AIWebinarThankYou = lazy(() => import('./pages/webinar/AIWebinarThankYou'));
const CounselorsOrientation = lazy(() => import('./pages/webinar/CounselorsOrientation'));
const CounselorsOrientationThankYou = lazy(() => import('./pages/webinar/CounselorsOrientationThankYou'));

function AppContent() {
  return (
    <LanguageProvider>
      <Suspense fallback={<div style={{ minHeight: '100vh' }} aria-busy="true" />}>
        <Routes>
          {/* ── Admin Portal (no site header/footer) ──────────────────── */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="students" element={<AdminStudents />} />
            <Route path="students/:sessionId" element={<AdminStudentDetail />} />
            <Route path="questions" element={<AdminQuestions />} />
            <Route path="sat/students" element={<AdminStudents />} />
            <Route path="sat/students/:sessionId" element={<AdminStudentDetail />} />
            <Route path="sat/questions" element={<AdminQuestions />} />
          </Route>

          {/* ── SAT Diagnostic Quiz (no site header/footer) ───────────── */}
          <Route path="/sat/diagnostic/quiz" element={<QuizView />} />
          <Route path="/sat/diagnostic/math-report" element={<MathMiniReport />} />
          <Route path="/sat/diagnostic/results" element={<DiagnosticResults />} />

          {/* ── Main Site (with header/footer) ────────────────────────── */}
          <Route path="/ar/*" element={<SiteLayout><LocalizedRoutes /></SiteLayout>} />
          <Route path="/*" element={<SiteLayout><LocalizedRoutes /></SiteLayout>} />
        </Routes>
      </Suspense>
    </LanguageProvider>
  );
}

function SiteLayout({ children }) {
  return (
    <>
      <ScrollToTop />
      <ScrollToHashElement />
      <Header />
      <Suspense fallback={<div style={{ minHeight: '70vh' }} aria-busy="true" />}>
        {children}
      </Suspense>
      <FloatingWhatsAppCondition />
      <Footer />
    </>
  );
}

const EnrolmentRedirect = () => {
  if (typeof window !== 'undefined') {
    window.location.replace('/enrolment.html');
  }
  return null;
};

/**
 * The full page tree, mounted under a language prefix. Paths are relative so
 * the same definitions serve `/about` and `/ar/about`.
 */
function LocalizedRoutes() {
  return (
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="enrolment" element={<EnrolmentRedirect />} />
        <Route path="enrolment.html" element={<EnrolmentRedirect />} />
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
        <Route path="sat/diagnostic" element={<SATDiagnostic />} />
        <Route path="sat-diagnostic" element={<LocalizedNavigate to="/sat/diagnostic" />} />
        <Route path="ielts-coaching-dubai" element={<IELTSCourseDubai />} />
        <Route path="sat-preparation" element={<LocalizedNavigate to="/sat-preparation-sharjah" />} />
        <Route path="gmat-preparation" element={<GMATCourse />} />
        <Route path="gre-preparation" element={<GRECourse />} />
        <Route path="academic-excellence" element={<AcademicExcellenceCourse />} />
        <Route path="maths-tuition-sharjah" element={<MathsTuitionSharjah />} />
        <Route path="science-tuition-sharjah" element={<ScienceTuitionSharjah />} />
        <Route path="physics-tuition-sharjah" element={<PhysicsTuitionSharjah />} />
        <Route path="chemistry-tuition-sharjah" element={<ChemistryTuitionSharjah />} />
        <Route path="biology-tuition-sharjah" element={<BiologyTuitionSharjah />} />
        <Route path="business-studies-tuition-sharjah" element={<BusinessStudiesTuitionSharjah />} />
        <Route path="accountancy-tuition-sharjah" element={<AccountancyTuitionSharjah />} />
        <Route path="economics-tuition-sharjah" element={<EconomicsTuitionSharjah />} />
        <Route path="english-tuition-sharjah" element={<EnglishTuitionSharjah />} />
        <Route path="social-science-tuition-sharjah" element={<SocialScienceTuitionSharjah />} />
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
        <Route path="article/why-hiring-digital-marketing-agency-transform-business" element={<WhyHiringDigitalMarketingAgency />} />
        <Route path="article/complete-guide-best-tuition-classes-dubai-sharjah-uae" element={<BestTuitionClassesUaeGuide />} />
        <Route path="article/academic-excellence-tuition-dubai-sharjah-uae" element={<AcademicExcellenceTuitionGuide />} />
        <Route path="article/best-tuition-classes-sharjah-dubai-guide" element={<BestTuitionClassesSharjahDubai />} />
        <Route path="article/comprehensive-subject-tuition-guide-sharjah-dubai-uae" element={<ComprehensiveSubjectTuitionGuide />} />
        <Route path="article/digital-sat-preparation-guide-sharjah-dubai-uae" element={<DigitalSatPreparationGuide />} />
        <Route path="article/best-tuition-classes-near-me-sharjah" element={<BestTuitionClassesNearMeSharjah />} />

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
  const path = stripLangPrefix(location.pathname);
  const isIgPage = path.startsWith('/ig/');
  const isWebinarPage = path.startsWith('/webinar/');
  const isAdmin = path.startsWith('/admin');
  const isQuiz = path.startsWith('/sat/diagnostic/quiz') || path.startsWith('/sat/diagnostic/results') || path.startsWith('/sat/diagnostic/math-report');
  return (!isIgPage && !isWebinarPage && !isAdmin && !isQuiz) ? <FloatingWhatsApp /> : null;
};

export default App;
