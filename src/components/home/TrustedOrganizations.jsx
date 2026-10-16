import React from 'react';

const ORGANIZATIONS = [
  {
    id: 'spea',
    name: 'SPEA SHARJAH',
    role: 'Licensed Institute',
    roleAr: 'معهد مرخّص',
    logo: '/images/partner_spea_trans.webp',
    width: 65,
    height: 46,
    alt: 'Sharjah Private Education Authority logo',
  },
  {
    id: 'ielts',
    name: 'IELTS PREPARATION',
    role: 'Preparation & Registration Assistance',
    roleAr: 'مساعدة في التحضير والتسجيل',
    logo: '/images/partner_ielts_trans.webp',
    width: 80,
    height: 44,
    alt: 'IELTS logo',
  },
  {
    id: 'pearson',
    name: 'PEARSON PTE',
    role: 'Academic Preparation',
    roleAr: 'تحضير أكاديمي',
    logo: '/images/partner_pearson.webp',
    width: 159,
    height: 48,
    alt: 'Pearson PTE logo',
  },
  {
    id: 'toefl',
    name: 'ETS TOEFL',
    role: 'Exam Preparation',
    roleAr: 'تحضير للاختبار',
    logo: '/images/partner_toefl_trans.webp',
    width: 171,
    height: 47,
    alt: 'ETS TOEFL logo',
  },
  {
    id: 'acca',
    name: 'ACCA GLOBAL',
    role: 'Professional Tuition',
    roleAr: 'دروس مهنية',
    logo: '/images/partner_acca_trans.webp',
    width: 48,
    height: 48,
    alt: 'ACCA Global logo',
  },
];

export default function TrustedOrganizations({ c, lang = 'en' }) {
  return (
    <section className="nh-trusted-section" aria-labelledby="nh-trusted-title">
      <div className="nh-container">
        <div className="nh-trusted-header nh-reveal">
          <h2 id="nh-trusted-title" className="nh-trusted-title">
            {c.trustedTitle || 'TRUSTED BY LEADING ORGANIZATIONS'}
          </h2>
          <p className="nh-trusted-subtitle">
            {c.trustedSubtitle ||
              "We deliver globally recognised professional training programs, built in partnership with the world's leading international organisations and certification bodies."}
          </p>
        </div>

        <div className="nh-trusted-grid nh-reveal">
          {ORGANIZATIONS.map((org) => (
            <div key={org.id} className="nh-trusted-item">
              <div className="nh-trusted-logo-wrap">
                <img
                  src={org.logo}
                  alt={org.alt}
                  width={org.width}
                  height={org.height}
                  loading="lazy"
                  decoding="async"
                  className="nh-trusted-logo-img"
                />
              </div>
              <span className="nh-trusted-label" style={{ color: '#0f172a', fontWeight: 700 }}>{org.name}</span>
              {org.role && (
                <span className="nh-trusted-role" style={{ color: '#334155', fontSize: '11px', fontWeight: 600, display: 'block', marginTop: '2px' }}>
                  {lang === 'ar' ? org.roleAr : org.role}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
