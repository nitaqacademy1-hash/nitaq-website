import { Link } from '../../i18n/Link';
import { useLanguage } from '../../i18n/context';

const facts = {
  en: [
    ['Sharjah campus in Al Majaz 3', '/contact'],
    ['Free Digital SAT diagnostic', '/sat/diagnostic'],
    ['Real classrooms and learning spaces', '/about']
  ],
  ar: [
    ['مقر في المجاز 3، الشارقة', '/contact'],
    ['تقييم SAT الرقمي المجاني', '/sat/diagnostic'],
    ['قاعات دراسية حقيقية', '/about']
  ]
};

export default function TrustBar() {
  const { lang } = useLanguage();
  return <section className="nh-facts" aria-label={lang === 'ar' ? 'معلومات عن الأكاديمية' : 'About the academy'}>
    <div className="nh-container nh-facts-grid">
      {facts[lang].map(([label, path]) => <Link key={path} to={path}>{label}<span aria-hidden="true">↗</span></Link>)}
    </div>
  </section>;
}
