import { useLocation } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';
import { useLanguage } from '../i18n/context';

const Enquiry = () => {
    const { lang } = useLanguage();
    const isAr = lang === 'ar';
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const purpose = searchParams.get('purpose');
    const course = (searchParams.get('course') || '').toLowerCase();
    const isAssessment = purpose === 'assessment' || course.includes('sat') || course.includes('diagnostic') || course.includes('tuition');

    const getHeading = () => {
        if (course.includes('sat')) {
            return isAr 
                ? <>حجز تقييم تشخيصي <span className="text-gradient">لاختبار SAT</span></>
                : <>Book Digital SAT <span className="text-gradient">Diagnostic</span></>;
        }
        if (isAssessment) {
            return isAr
                ? <>طلب تقييم دراسي <span className="text-gradient">لطفلك</span></>
                : <>Request a Student <span className="text-gradient">Assessment</span></>;
        }
        return isAr
            ? <>سجّل <span className="text-gradient">اهتمامك الآن</span></>
            : <>Enquire <span className="text-gradient">Now</span></>;
    };

    const getSubtitle = () => {
        if (course.includes('sat')) {
            return isAr
                ? 'حدد درجتك المستهدفة وموعد الاختبار المفضل. سنقوم بتحليل مستواك عبر تطبيق Bluebook وآلة Desmos وتحديد المسار الأنسب.'
                : 'Share your score goal and target test date. Our academic team will map out your personalized preparation roadmap.';
        }
        if (isAssessment) {
            return isAr
                ? 'أدخل بيانات الطالب والصف والمنهج الدراسي. سيحدد المشرف الأكاديمي موعد التقييم التشخيصي الحضوري في الشارقة أو عبر الإنترنت.'
                : 'Share your child’s grade and school curriculum. Our team will schedule an academic diagnostic assessment.';
        }
        return isAr
            ? 'أدخل بياناتك وسيتواصل معك مستشارنا الأكاديمي في فرع الشارقة أو دبي خلال وقت قصير'
            : "Fill in your details and our academic admissions team will get back to you shortly";
    };

    return (
        <main style={{ background: 'var(--bg-light)', minHeight: '80vh', display: 'flex', alignItems: 'center', padding: '80px 0' }}>
            <SEO />
            <div className="container">
                <div style={{ maxWidth: '640px', margin: '0 auto', background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                    <h1 style={{ textAlign: 'center', marginBottom: '10px', fontSize: '2.4rem' }}>
                        {getHeading()}
                    </h1>
                    <p style={{ textAlign: 'center', color: 'var(--text-gray)', marginBottom: '30px', fontSize: '1rem', lineHeight: '1.6' }}>
                        {getSubtitle()}
                    </p>

                    <ContactForm mode={isAssessment ? 'assessment' : 'enquiry'} />
                </div>
            </div>
        </main>
    );
};

export default Enquiry;
