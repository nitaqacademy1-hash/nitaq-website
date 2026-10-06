import React from 'react';
import SEO from '../../components/SEO';
import { useLanguage } from '../../i18n/context';

const TermsAndConditions = () => {
    const { lang } = useLanguage();
    const isAr = lang === 'ar';

    return (
        <main className="legal-page section-padding">
            <SEO 
                title={isAr ? "الشروط والأحكام | أكاديمية نطاق" : "Terms & Conditions | Nitaq Academy"}
                description={isAr ? "الشروط والأحكام الخاصة بالتسجيل والتدريب في أكاديمية نطاق، الشارقة، دولة الإمارات." : "Terms and conditions for enrollment and training services at Nitaq Academy, Sharjah, UAE."}
            />
            <div className="container">
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: isAr ? 'right' : 'left' }}>
                    <h1 style={{ color: '#2e7d32', marginBottom: '30px' }}>
                        {isAr ? 'الشروط والأحكام' : 'Terms & Conditions'}
                    </h1>
                    <p style={{ color: '#6b7280', marginBottom: '40px' }}>
                        {isAr ? 'آخر تحديث: أبريل 2026' : 'Last Updated: April 2026'}
                    </p>

                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>
                            {isAr ? '1. المقدمة' : '1. Introduction'}
                        </h2>
                        <p>
                            {isAr
                                ? 'مرحباً بكم في أكاديمية نطاق. من خلال التسجيل في دوراتنا أو الاستفادة من خدماتنا، فإنك توافق على الالتزام بالشروط والأحكام الموضحة أدناه. تُدار أكاديمية نطاق بواسطة "خدمات نطاق للتعليم المساند ذ.م.م"، وهي منشأة مسجلة ومرخصة في إمارة الشارقة، دولة الإمارات العربية المتحدة.'
                                : 'Welcome to NITAQ ACADEMY. By enrolling in our courses or using our services, you agree to the following terms and conditions. NITAQ ACADEMY is operated by Nitaq Supportive Education Services LLC, registered in Sharjah, UAE.'}
                        </p>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>
                            {isAr ? '2. التسجيل في الدورات' : '2. Course Enrollment'}
                        </h2>
                        <p>
                            {isAr
                                ? 'يخضع التسجيل في أي دورة لتوفر المقاعد وسداد الرسوم المقررة. وتحتفظ أكاديمية نطاق بالحق في قبول أو رفض أي طلب تسجيل وفق تقديرها المهني. يتحمل المتدرب أو ولي أمره مسؤولية تقديم معلومات دقيقة وصحيحة أثناء التسجيل.'
                                : 'Enrollment in any course is subject to availability and payment of the required fees. NITAQ ACADEMY reserves the right to refuse enrollment at its discretion. Students are responsible for providing accurate personal information during registration.'}
                        </p>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>
                            {isAr ? '3. سياسة السداد واسترداد الرسوم' : '3. Payment & Refund Policy'}
                        </h2>
                        <ul style={{ paddingRight: isAr ? '20px' : 0, paddingLeft: isAr ? 0 : '20px', lineHeight: '1.8' }}>
                            <li>
                                {isAr
                                    ? 'يجب سداد رسوم الدورة بالكامل أو وفق خطة الأقساط المتفق عليها كتابياً قبل بدء الحصص التدريبية.'
                                    : 'Course fees must be paid in full or as per the agreed installment plan before the commencement of classes.'}
                            </li>
                            <li>
                                {isAr
                                    ? 'تتم معالجة طلبات الاسترداد حصراً وفق سياسة الاسترجاع المعتمدة والمعلنة لدى إدارة الأكاديمية.'
                                    : 'Refunds are only processed under specific circumstances as per our institutional policy.'}
                            </li>
                            <li>
                                {isAr
                                    ? 'رسوم التسجيل والتقييم التشخيصي الأولية غير قابلة للاسترداد.'
                                    : 'Registration fees are non-refundable.'}
                            </li>
                            <li>
                                {isAr
                                    ? 'في حال إلغاء أي دورة من قِبل الأكاديمية، يتم استرداد الرسوم المتبقية للمتدرب بالكامل دون أي خصومات.'
                                    : 'In case a course is cancelled by the academy, a full refund of the remaining course fee will be provided.'}
                            </li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>
                            {isAr ? '4. السلوك والانضباط الأكاديمي' : '4. Academic Conduct'}
                        </h2>
                        <p>
                            {isAr
                                ? 'يُتوقع من المتدربين الالتزام بالسلوك المهني والاحترام المتبادل داخل القاعات الحضورية وفي الجلسات الافتراضية عبر الإنترنت. تحتفظ أكاديمية نطاق بالحق في إنهاء تسجيل أي متدرب يخل بقواعد السلوك دون استرداد للرسوم.'
                                : 'Students are expected to maintain professional conduct during online and offline sessions. NITAQ ACADEMY reserves the right to terminate enrollment for any student who violates our code of conduct without a refund.'}
                        </p>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>
                            {isAr ? '5. حدود المسؤولية' : '5. Limitation of Liability'}
                        </h2>
                        <p>
                            {isAr
                                ? 'لا تتحمل أكاديمية نطاق (خدمات نطاق للتعليم المساند ذ.م.م) أي مسؤولية عن أي أضرار غير مباشرة أو عرضية أو تبعية تنشأ عن استخدام خدماتها أو المشاركة في برامجها التدريبية خارج نطاق الالتزامات التعاقدية المباشرة.'
                                : 'NITAQ ACADEMY (Nitaq Supportive Education Services LLC) shall not be held liable for any indirect, incidental, or consequential damages resulting from the use of its services or participation in its training programs.'}
                        </p>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>
                            {isAr ? '6. القانون المعمول به والاختصاص القضائي' : '6. Governing Law'}
                        </h2>
                        <p>
                            {isAr
                                ? 'تخضع هذه الشروط والأحكام وتُفسر وفقاً للقوانين والتشريعات السارية في دولة الإمارات العربية المتحدة وإمارة الشارقة، ويكون لمحاكم الشارقة الاختصاص القضائي الحصري في أي نزاع قد ينشأ.'
                                : 'These terms are governed by and construed in accordance with the laws of the United Arab Emirates and the Emirate of Sharjah.'}
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
};

export default TermsAndConditions;
