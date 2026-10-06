import React from 'react';
import SEO from '../../components/SEO';
import { useLanguage } from '../../i18n/context';

const PrivacyPolicy = () => {
    const { lang } = useLanguage();
    const isAr = lang === 'ar';

    const enSections = [
        {
            title: "1. Definitions",
            content: (
                <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
                    <li><strong>Personal Data:</strong> Any information that identifies you directly or indirectly</li>
                    <li><strong>User:</strong> Any individual accessing our services</li>
                    <li><strong>Student:</strong> Any individual enrolled in our courses</li>
                    <li><strong>Guardian/Parent:</strong> Legal representative of a minor</li>
                    <li><strong>Services:</strong> Courses, training, website access, and related offerings</li>
                </ul>
            )
        },
        {
            title: "2. Scope of Policy",
            content: (
                <>
                    <p>This Privacy Policy applies to:</p>
                    <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
                        <li>Website usage</li>
                        <li>Offline and online enrollment</li>
                        <li>Communication channels (email, phone, WhatsApp, social media)</li>
                        <li>Third-party integrations used by NITAQ ACADEMY</li>
                    </ul>
                </>
            )
        },
        {
            title: "3. Information We Collect",
            content: (
                <>
                    <h4 style={{ margin: '15px 0' }}>3.1 Personal Identification Information</h4>
                    <p>We may collect: Full name, Date of birth, Gender (optional), Email address, Phone number, Residential address, Emirates ID / Passport details (if required for certification or compliance).</p>
                    
                    <h4 style={{ margin: '15px 0' }}>3.2 Academic & Student Information</h4>
                    <p>Grade/class level, School/college name, Academic performance data, Course progress and assessments, Attendance records.</p>
                    
                    <h4 style={{ margin: '15px 0' }}>3.3 Payment & Financial Information</h4>
                    <p>Billing address, Transaction details, Payment method (processed securely via third-party providers).</p>
                    <p style={{ fontStyle: 'italic', color: '#dc2626' }}>⚠️ We do not store full card details.</p>
                    
                    <h4 style={{ margin: '15px 0' }}>3.4 Technical & Usage Data</h4>
                    <p>IP address, Device type and operating system, Browser type, Website usage behavior, Login data and timestamps.</p>
                    
                    <h4 style={{ margin: '15px 0' }}>3.5 Communication Data</h4>
                    <p>Emails, messages, and call records, Customer support interactions, Feedback and survey responses.</p>
                </>
            )
        },
        {
            title: "4. How We Collect Information",
            content: (
                <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
                    <li><strong>Direct Collection:</strong> Registration forms, admission processes, phone calls and in-person consultations.</li>
                    <li><strong>Automated Collection:</strong> Essential cookies and secure website analytics.</li>
                    <li><strong>Third-Party Sources:</strong> Accredited testing bodies, payment gateways, and institutional partners.</li>
                </ul>
            )
        },
        {
            title: "5. Legal Basis for Processing",
            content: (
                <p>We process your data based on your explicit consent, contractual necessity for delivering educational programs, statutory compliance with UAE education authorities (SPEA), and legitimate institutional interests.</p>
            )
        },
        {
            title: "6. Data Protection & Confidentiality",
            content: (
                <p>We implement enterprise-grade SSL encryption, restricted role-based database access, and strict non-disclosure agreements with all faculty and staff. We never sell, rent, or trade your personal data to third parties.</p>
            )
        },
        {
            title: "7. Contact & Data Access Requests",
            content: (
                <div style={{ background: '#f9fafb', padding: '20px', borderRadius: '12px' }}>
                    <strong>NITAQ ACADEMY (Nitaq Supportive Education Services LLC)</strong><br />
                    Abu Khamseen Tower - Office : F103, Floor F1 - Al Majaz 3 - Al Majaz - Sharjah - United Arab Emirates<br />
                    📧 info@nitaqacademy.com | 📞 +971 52 756 9908
                </div>
            )
        }
    ];

    const arSections = [
        {
            title: "1. التعريفات والمصطلحات",
            content: (
                <ul style={{ paddingRight: '20px', lineHeight: '1.8' }}>
                    <li><strong>البيانات الشخصية:</strong> أي معلومات تحدد هويتك بشكل مباشر أو غير مباشر.</li>
                    <li><strong>المستخدم:</strong> أي فرد يقوم بتصفح موقعنا الإلكتروني أو استخدام منصاتنا.</li>
                    <li><strong>المتدرب / الطالب:</strong> أي فرد مسجل في دوراتنا وبرامجنا التدريبية.</li>
                    <li><strong>ولي الأمر / الوصي:</strong> الممثل القانوني للمتدرب القاصر دون سن 18 عاماً.</li>
                    <li><strong>الخدمات:</strong> الدورات الأكاديمية والمهنية، والتقييمات، وشهادات التدريب المعتمدة.</li>
                </ul>
            )
        },
        {
            title: "2. نطاق سريان السياسة",
            content: (
                <>
                    <p>تسري سياسة الخصوصية هذه على كافة التعاملات عبر:</p>
                    <ul style={{ paddingRight: '20px', lineHeight: '1.8' }}>
                        <li>استخدام الموقع الإلكتروني لأكاديمية نطاق.</li>
                        <li>التسجيل الحضوري أو عبر الإنترنت في برامجنا التدريبية.</li>
                        <li>قنوات التواصل الرسمية (البريد الإلكتروني، الهاتف، واتساب، وسائل التواصل).</li>
                        <li>الأنظمة والمنصات التعليمية المعتمدة التابعة للأكاديمية.</li>
                    </ul>
                </>
            )
        },
        {
            title: "3. البيانات التي نجمعها",
            content: (
                <>
                    <h4 style={{ margin: '15px 0' }}>3.1 بيانات الهوية والاتصال الشخصية</h4>
                    <p>تشمل: الاسم الكامل، تاريخ الميلاد، البريد الإلكتروني، رقم الهاتف، العنوان السكني، وصورة الهوية الإماراتية أو جواز السفر (للأغراض التوثيقية واعتماد الشهادات الرسمية لدى الهيئات المختصة).</p>
                    
                    <h4 style={{ margin: '15px 0' }}>3.2 البيانات الأكاديمية والدراسية</h4>
                    <p>الصف أو المرحلة الدراسية، اسم المدرسة أو الجامعة، نتائج التقييمات التشخيصية، ومعدلات الحضور والإنجاز في الدورات.</p>
                    
                    <h4 style={{ margin: '15px 0' }}>3.3 البيانات المالية والمدفوعات</h4>
                    <p>سجلات المعاملات المالية، والفواتير الضريبية. علماً بأن بيانات البطاقات الائتمانية تتم معالجتها بأعلى معايير التشفير عبر بوابات دفع بنكية معتمدة ولا نقوم بتخزين تفاصيل البطاقات إطلاقاً.</p>
                    
                    <h4 style={{ margin: '15px 0' }}>3.4 البيانات التقنية وسجلات النظام</h4>
                    <p>عنوان بروتوكول الإنترنت (IP)، ونوع المتصفح ونظام التشغيل، وسجلات توقيت الدخول لأغراض حماية أمان الموقع الإلكتروني.</p>
                </>
            )
        },
        {
            title: "4. طرق جمع البيانات",
            content: (
                <ul style={{ paddingRight: '20px', lineHeight: '1.8' }}>
                    <li><strong>الجمع المباشر:</strong> استمارات التسجيل، طلبات الالتحاق، والاستشارات الأكاديمية الحضورية أو الهاتفية.</li>
                    <li><strong>الجمع التلقائي:</strong> ملفات تعريف الارتباط الأساسية (Cookies) وأدوات الإحصاء التحليلي لتحسين تجربة التصفح.</li>
                    <li><strong>الجهات الشريكة:</strong> الهيئات التعليمية الدولية المانحة للامتحانات (مثل معهد كامبريدج، ومجلس الكلية College Board).</li>
                </ul>
            )
        },
        {
            title: "5. الأساس القانوني لمعالجة البيانات",
            content: (
                <p>تتم معالجة بياناتك استناداً إلى: موافقتك الصريحة، والوفاء بالالتزامات التعاقدية لتقديم البرامج التعليمية، والامتثال للقوانين واللوائح الصادرة عن هيئة الشارقة للتعليم الخاص والجهات الرقابية في دولة الإمارات.</p>
            )
        },
        {
            title: "6. حماية البيانات وسريتها",
            content: (
                <p>نطبق أعلى بروتوكولات الأمان الإلكتروني وتشفير SSL، مع تقييد الوصول للبيانات وحصره على الكادر المخول فقط بموجب اتفاقيات سرية صارمة. ونؤكد أننا لا نقوم ببيع أو تأجير أو مشاركة بياناتك الشخصية مع أي أطراف ثالثة لأغراض تسويقية.</p>
            )
        },
        {
            title: "7. حقوق المتدرب والاتصال بنا",
            content: (
                <div style={{ background: '#f9fafb', padding: '20px', borderRadius: '12px' }}>
                    <strong>أكاديمية نطاق (خدمات نطاق للتعليم المساند ذ.م.م)</strong><br />
                    مكتب F103، الطابق F1، برج أبو خمسين، المجاز 3، الشارقة، الإمارات العربية المتحدة<br />
                    📧 info@nitaqacademy.com | 📞 +971 52 756 9908 | 💬 واتساب: +971 52 756 9908
                </div>
            )
        }
    ];

    const sections = isAr ? arSections : enSections;

    return (
        <main className="legal-page section-padding">
            <SEO 
                title={isAr ? "سياسة الخصوصية | أكاديمية نطاق" : "Privacy Policy | Nitaq Academy"}
                description={isAr ? "سياسة الخصوصية وحماية البيانات الشخصية المعتمدة في أكاديمية نطاق، الشارقة، الإمارات." : "Privacy policy and personal data protection principles at Nitaq Academy, Sharjah, UAE."}
            />
            <div className="container">
                <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: isAr ? 'right' : 'left' }}>
                    <h1 style={{ color: '#2e7d32', marginBottom: '20px' }}>
                        {isAr ? 'سياسة الخصوصية وحماية البيانات – أكاديمية نطاق' : 'Privacy Policy – NITAQ ACADEMY'}
                    </h1>
                    <p style={{ color: '#6b7280', marginBottom: '40px' }}>
                        {isAr ? 'تاريخ السريان: 26 مارس 2026' : 'Effective Date: March 26, 2026'}
                    </p>

                    <p style={{ marginBottom: '30px', lineHeight: '1.8' }}>
                        {isAr
                            ? 'تحترم أكاديمية نطاق ("الأكاديمية" أو "نحن") خصوصيتك وتلتزم التزاماً كاملاً بحماية بياناتك الشخصية وحقوقك الرقمية وفق القوانين والأنظمة المعمول بها في دولة الإمارات العربية المتحدة. توضح هذه السياسة كيفية جمع بياناتك واستخدامها وحمايتها عند تصفح موقعنا أو التسجيل في برامجنا التدريبية.'
                            : 'NITAQ ACADEMY (“Company”, “we”, “our”, or “us”) respects your privacy and is committed to protecting your personal data. This Privacy Policy explains in detail how we collect, use, store, disclose, and safeguard your information when you visit our website, enroll in our programs, or interact with us.'}
                    </p>
                    <p style={{ marginBottom: '40px', lineHeight: '1.8', fontWeight: 500 }}>
                        {isAr
                            ? 'تنطبق هذه السياسة على كافة المستخدمين والطلاب وأولياء الأمور وزوار الموقع والخدمات الأكاديمية.'
                            : 'This policy applies to all users, students, parents/guardians, and visitors of our services.'}
                    </p>

                    {sections.map((section, idx) => (
                        <section key={idx} style={{ marginBottom: '40px' }}>
                            <h2 style={{ fontSize: '1.5rem', color: '#111827', marginBottom: '20px', borderBottom: '1px solid #f3f4f6', paddingBottom: '10px' }}>
                                {section.title}
                            </h2>
                            <div style={{ color: '#4b5563', lineHeight: '1.8' }}>
                                {section.content}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default PrivacyPolicy;
