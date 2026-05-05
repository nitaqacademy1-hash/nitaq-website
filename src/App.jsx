import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/About';
import Enquiry from './pages/Enquiry';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import ScrollToHashElement from './components/ScrollToHashElement';

import TestPreparations from './pages/TestPreparations';
import LanguageTrainings from './pages/LanguageTrainings';
import ProfessionalCertifications from './pages/ProfessionalCertifications';

import CorporateTrainings from './pages/CorporateTrainings';
import ACCACourse from './pages/courses/ACCACourse';
import CMACourse from './pages/courses/CMACourse';
import CPACourse from './pages/courses/CPACourse';
import IELTSCourse from './pages/courses/IELTSCourse';
import SpokenArabic from './pages/courses/SpokenArabic';
import UAEVATCourse from './pages/courses/UAEVATCourse';
import UAECorporateTaxCourse from './pages/courses/UAECorporateTaxCourse';
import FinanceCourses from './pages/courses/FinanceCourses';
import AICourse from './pages/courses/AICourse';
import PowerBIExcelCourse from './pages/courses/PowerBIExcelCourse';
import CHRMCourse from './pages/courses/CHRMCourse';
import HRMCourse from './pages/courses/HRMCourse';
import SalesNegotiationsCourse from './pages/courses/SalesNegotiationsCourse';
import MarketingTraining from './pages/courses/MarketingTraining';
import CPCDCourse from './pages/courses/CPCDCourse';
import DataManagementCourse from './pages/courses/DataManagementCourse';
import SoftSkillsTraining from './pages/courses/SoftSkillsTraining';
import SpokenEnglish from './pages/courses/SpokenEnglish';
import FrenchCourse from './pages/courses/FrenchCourse';
import GermanCourse from './pages/courses/GermanCourse';
import SpanishCourse from './pages/courses/SpanishCourse';
import PTECourse from './pages/courses/PTECourse';
import TOEFLCourse from './pages/courses/TOEFLCourse';
import SATCourse from './pages/courses/SATCourse';
import IELTSCourseDubai from './pages/courses/IELTSCourseDubai';
import SATCourseDubai from './pages/courses/SATCourseDubai';
import GMATCourse from './pages/courses/GMATCourse';
import GRECourse from './pages/courses/GRECourse';
import AcademicExcellenceCourse from './pages/courses/AcademicExcellenceCourse';
import FoundationJEECourse from './pages/courses/FoundationJEECourse';
import AIRoboticsKids from './pages/courses/AIRoboticsKids';
import Courses from './pages/Courses';
import Articles from './pages/Articles';
import SatCoachingSharjah from './pages/article/SatCoachingSharjah';
import SatScore1300Guide from './pages/article/SatScore1300Guide';
import SatVsIeltsGuide from './pages/article/SatVsIeltsGuide';
import CommonSatMistakes from './pages/article/CommonSatMistakes';
import IeltsDubaiGuide from './pages/article/IeltsDubaiGuide';
import IeltsBandScoreTips from './pages/article/IeltsBandScoreTips';
import ProfessionalCoursesSharjah from './pages/article/ProfessionalCoursesSharjah';
import AccaCoachingUae from './pages/article/AccaCoachingUae';
import AiCoursesSharjah from './pages/article/AiCoursesSharjah';
import BestTrainingInstituteSharjah from './pages/article/BestTrainingInstituteSharjah';
import ChooseRightCourseUae from './pages/article/ChooseRightCourseUae';

import TermsAndConditions from './pages/legal/TermsAndConditions';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';

import DynamicPopup from './components/DynamicPopup';

import FloatingWhatsApp from './components/FloatingWhatsApp';
import ResumeGuide from './pages/ig/2026-03-29/ResumeGuide';
import AIWebinar from './pages/webinar/AIWebinar';
import AIWebinarThankYou from './pages/webinar/AIWebinarThankYou';
import CounselorsOrientation from './pages/webinar/CounselorsOrientation';
import CounselorsOrientationThankYou from './pages/webinar/CounselorsOrientationThankYou';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollToHashElement />
      <Header />
      <DynamicPopup />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/test-preparations" element={<TestPreparations />} />
        <Route path="/language-trainings" element={<LanguageTrainings />} />
        <Route path="/professional-certifications" element={<ProfessionalCertifications />} />
        <Route path="/corporate-trainings" element={<CorporateTrainings />} />
        <Route path="/finance-courses" element={<FinanceCourses />} />
        <Route path="/acca-course" element={<ACCACourse />} />
        <Route path="/cma-course" element={<CMACourse />} />
        <Route path="/cpa-course" element={<CPACourse />} />
        <Route path="/ielts-course" element={<IELTSCourse />} />
        <Route path="/spoken-arabic" element={<SpokenArabic />} />
        <Route path="/uae-vat" element={<UAEVATCourse />} />
        <Route path="/uae-corporate-tax" element={<UAECorporateTaxCourse />} />
        <Route path="/ai-course" element={<AICourse />} />
        <Route path="/power-bi-excel" element={<PowerBIExcelCourse />} />
        <Route path="/chrm" element={<CHRMCourse />} />
        <Route path="/hrm-courses" element={<HRMCourse />} />
        <Route path="/sales-negotiations" element={<SalesNegotiationsCourse />} />
        <Route path="/marketing-training" element={<MarketingTraining />} />
        <Route path="/cpcd-courses" element={<CPCDCourse />} />
        <Route path="/data-management" element={<DataManagementCourse />} />
        <Route path="/soft-skills-training" element={<SoftSkillsTraining />} />
        <Route path="/spoken-english" element={<SpokenEnglish />} />
        <Route path="/french" element={<FrenchCourse />} />
        <Route path="/german" element={<GermanCourse />} />
        <Route path="/spanish" element={<SpanishCourse />} />
        <Route path="/pte-course" element={<PTECourse />} />
        <Route path="/toefl-course" element={<TOEFLCourse />} />
        <Route path="/sat-preparation-sharjah" element={<SATCourse />} />
        <Route path="/sat-preparation-dubai" element={<SATCourseDubai />} />
        <Route path="/ielts-coaching-dubai" element={<IELTSCourseDubai />} />
        <Route path="/sat-preparation" element={<Navigate to="/sat-preparation-sharjah" replace />} />
        <Route path="/gmat-preparation" element={<GMATCourse />} />
        <Route path="/gre-preparation" element={<GRECourse />} />
        <Route path="/academic-excellence" element={<AcademicExcellenceCourse />} />
        <Route path="/foundation-jee-neet" element={<FoundationJEECourse />} />
        <Route path="/ai-robotics-kids" element={<AIRoboticsKids />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/articles" element={<Articles />} />
        
        {/* Articles */}
        <Route path="/article/sat-coaching-sharjah" element={<SatCoachingSharjah />} />
        <Route path="/article/sat-score-1300-guide" element={<SatScore1300Guide />} />
        <Route path="/article/sat-vs-ielts-guide" element={<SatVsIeltsGuide />} />
        <Route path="/article/common-sat-mistakes" element={<CommonSatMistakes />} />
        <Route path="/article/ielts-dubai-guide" element={<IeltsDubaiGuide />} />
        <Route path="/article/improve-ielts-band-score" element={<IeltsBandScoreTips />} />
        <Route path="/article/professional-courses-sharjah-growth" element={<ProfessionalCoursesSharjah />} />
        <Route path="/article/acca-coaching-uae-benefits" element={<AccaCoachingUae />} />
        <Route path="/article/ai-courses-sharjah-essential" element={<AiCoursesSharjah />} />
        <Route path="/article/best-training-institute-sharjah" element={<BestTrainingInstituteSharjah />} />
        <Route path="/article/choose-right-course-uae" element={<ChooseRightCourseUae />} />
        
        {/* IG Landing Pages */}
        <Route path="/ig/2026-03-29" element={<ResumeGuide />} />

        {/* Webinar Landing Pages */}
        <Route path="/webinar/ai" element={<AIWebinar />} />
        <Route path="/webinar/ai/thank-you" element={<AIWebinarThankYou />} />
        <Route path="/webinar" element={<AIWebinar />} />
        
        {/* Counselors Orientation Landing Pages */}
        <Route path="/webinar/counselors" element={<CounselorsOrientation />} />
        <Route path="/webinar/counselors/thank-you" element={<CounselorsOrientationThankYou />} />

        {/* Legal Pages */}
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        {/* Placeholder routes for other pages to be migrated */}
        <Route path="*" element={<Home />} />
      </Routes>
      <FloatingWhatsAppCondition />
      <Footer />
    </Router>
  );
}

// Helper components to conditionally render layout elements
const FloatingWhatsAppCondition = () => {
  const location = useLocation();
  const isIgPage = location.pathname.startsWith('/ig/');
  const isWebinarPage = location.pathname.startsWith('/webinar/');
  return (!isIgPage && !isWebinarPage) ? <FloatingWhatsApp /> : null;
};

export default App;
