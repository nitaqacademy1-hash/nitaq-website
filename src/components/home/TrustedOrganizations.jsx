import React from 'react';

const ORGANIZATIONS = [
  {
    id: 'spea',
    name: 'SPEA SHARJAH',
    role: 'Licensed Institute',
    logo: '/images/partner_spea_trans.webp',
    width: 65,
    height: 46,
    alt: 'Sharjah Private Education Authority licensed institute',
  },
  {
    id: 'ielts',
    name: 'IELTS PREPARATION',
    role: 'Preparation & Registration Assistance',
    logo: '/images/partner_ielts_trans.webp',
    width: 80,
    height: 44,
    alt: 'Official IELTS Preparation & Registration Assistance',
  },
  {
    id: 'pearson',
    name: 'PEARSON PTE',
    role: 'Academic Preparation',
    logo: '/images/partner_pearson.webp',
    width: 135,
    height: 40,
    alt: 'Pearson PTE academic testing preparation',
  },
  {
    id: 'toefl',
    name: 'ETS TOEFL',
    role: 'Exam Preparation',
    logo: '/images/partner_toefl_trans.webp',
    width: 130,
    height: 38,
    alt: 'ETS TOEFL test preparation',
  },
  {
    id: 'acca',
    name: 'ACCA GLOBAL',
    role: 'Professional Tuition',
    logo: '/images/partner_acca_trans.webp',
    width: 48,
    height: 48,
    alt: 'ACCA Global tuition provider',
  },
];

export default function TrustedOrganizations({ c }) {
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
              <span className="nh-trusted-label">{org.name}</span>
              {org.role && <span className="nh-trusted-role text-xs text-slate-400 block mt-0.5">{org.role}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
