import { useLanguage } from '../../i18n/context';
import { MapPin, Users, Sparkles, Building2, ArrowUpRight } from 'lucide-react';
import '../../styles/campus.css';

export default function CampusGallery({ c }) {
  const { lang } = useLanguage();
  const isAr = lang === 'ar';
  const facilities = c.campusFacilities || [];

  return (
    <section className="nh-section nh-campus-section" id="campus" aria-label={c.campusEyebrow}>
      <div className="nh-container">
        {/* Section Header */}
        <div className="nh-campus-header nh-reveal">
          <div className="nh-campus-header-main">
            <p className="nh-eyebrow">
              <span className="nh-dot" aria-hidden="true" />
              {c.campusEyebrow}
            </p>
            <h2>{c.campusTitle}</h2>
            <p className="nh-section-copy">{c.campusIntro}</p>
          </div>

          <div className="nh-campus-location-badge">
            <div className="nh-campus-badge-icon" aria-hidden="true">
              <Building2 size={24} />
            </div>
            <div>
              <span className="nh-campus-tower-name">
                {isAr ? 'برج أبو خمسين' : 'Abu Khamseen Tower'}
              </span>
              <span className="nh-campus-tower-loc">
                <MapPin size={13} aria-hidden="true" />
                {isAr ? 'الطابق F1، المجاز 3، الشارقة' : 'Floor F1, Al Majaz 3, Sharjah'}
              </span>
            </div>
          </div>
        </div>

        {/* 4 Photos Grid */}
        <div className="nh-campus-grid">
          {facilities.map((item, idx) => (
            <article key={item.title || idx} className="nh-campus-card nh-reveal">
              <div className="nh-campus-image-wrap">
                <img
                  src={item.image}
                  alt={item.title}
                  width="600"
                  height="380"
                  loading="lazy"
                  decoding="async"
                  className="nh-campus-img"
                />
                <span className="nh-campus-card-tag">{item.tag}</span>
              </div>
              <div className="nh-campus-card-body">
                <h3 className="nh-campus-card-title">{item.title}</h3>
                <p className="nh-campus-card-desc">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Campus Features Strip */}
        <div className="nh-campus-features-strip nh-reveal">
          <div className="nh-campus-feature-item">
            <Users size={20} className="nh-cf-icon" aria-hidden="true" />
            <div>
              <strong>{isAr ? 'فصول مصغرة (5–8 طلاب)' : 'Micro-Batch Format (5–8)'}</strong>
              <small>{isAr ? 'تركيز فردي وتفاعل كامل مع المعلم' : 'Personal focus with zero crowding'}</small>
            </div>
          </div>

          <div className="nh-campus-feature-item">
            <Sparkles size={20} className="nh-cf-icon" aria-hidden="true" />
            <div>
              <strong>{isAr ? 'إضاءة طبيعية وتجهيز مريح' : 'Natural Daylight & Ergonomics'}</strong>
              <small>{isAr ? 'بيئة دراسية هادئة تعزز الانتباه' : 'Floor-to-ceiling daylight windows'}</small>
            </div>
          </div>

          <div className="nh-campus-feature-item">
            <Building2 size={20} className="nh-cf-icon" aria-hidden="true" />
            <div>
              <strong>{isAr ? 'موقع متميز وسهولة الوصول' : 'Prime Al Majaz 3 Location'}</strong>
              <small>{isAr ? 'مواقف متوفرة ومصاعد مريحة' : 'Ample parking & direct elevator access'}</small>
            </div>
          </div>

          <div className="nh-campus-cta-col">
            <a
              href={`https://wa.me/971527569908?text=${encodeURIComponent(
                isAr
                  ? 'مرحباً أكاديمية نطاق، أود ترتيب زيارة لمقركم في برج أبو خمسين بالمجاز 3.'
                  : 'Hello Nitaq Academy, I would like to schedule a visit to your Sharjah campus.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="nh-button nh-button-green"
            >
              <span>{c.campusCta || (isAr ? 'زيارة المقر' : 'Visit Campus')}</span>
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
