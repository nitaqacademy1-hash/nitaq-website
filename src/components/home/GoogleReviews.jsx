import { useState, useRef, useMemo } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Award, TrendingUp, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../i18n/context';
import '../../styles/reviews.css';

const GOOGLE_PROFILE_URL = 'https://g.page/r/CVwmfMU8WAHsEAI';
const GOOGLE_WRITE_REVIEW_URL = 'https://g.page/r/CVwmfMU8WAHsEAI/review';

const REVIEWS_DATA = [
  {
    id: 'maryam',
    name: 'Maryam Al Ali',
    badge: '2 reviews',
    avatarColor: '#00875a',
    initial: 'M',
    time: '3 months ago',
    timestamp: 90,
    rating: 5,
    tags: ['supportive team', 'maths'],
    text: 'Many thanks to all in the institute, experts and experienced teachers and supportive staff, my daughter got good grades and she enjoyed the teaching time with the teachers without being bored this facility is providing reasonable teaching fees with professional teachers for all subjects. Good luck 🍀 and many thanks 🙏',
  },
  {
    id: 'khaled',
    name: 'Khaled Shehadeh',
    badge: '2 reviews',
    avatarColor: '#1565c0',
    initial: 'K',
    time: 'a month ago',
    timestamp: 30,
    rating: 5,
    tags: ['maths'],
    text: 'I was struggling with my A-level maths and I thought all hope was really gone after trying multiple times. But you really changed the tide for the best!! Best math tutor',
  },
  {
    id: 'sameer',
    name: 'MOHAMMED SAMEER',
    badge: '3 reviews',
    avatarColor: '#00838f',
    initial: 'M',
    time: '5 months ago',
    timestamp: 150,
    rating: 5,
    tags: ['practical course', 'supportive team'],
    text: 'I did corporate tax, cash flow, budget forecasting, and how to use AI in my work. No boring lectures, just real stuff you can use. The instructors were good, they kept it practical. Very friendly & understanding staff ..',
  },
  {
    id: 'souda',
    name: 'Souda Farheen',
    badge: '2 reviews',
    avatarColor: '#6554c0',
    initial: 'S',
    time: '5 months ago',
    timestamp: 150,
    rating: 5,
    tags: ['maths'],
    text: 'My brother took their SAT classes he went from AVG to very good in just 2 months, got good ranking and alhumdulilah got uni with lesser fees',
  },
  {
    id: 'musthafa',
    name: 'syed musthafa',
    badge: 'Local Guide · 19 reviews · 34 photos',
    avatarColor: '#d97706',
    initial: 'S',
    time: '5 months ago',
    timestamp: 150,
    rating: 5,
    tags: ['webinar'],
    text: 'I have attended the webinar on emotional intelligence it helped me a lot understand the importance of it.',
  },
  {
    id: 'arham',
    name: 'Arham',
    badge: '1 review · 1 photo',
    avatarColor: '#d9381e',
    initial: 'A',
    time: '5 months ago',
    timestamp: 150,
    rating: 5,
    tags: ['webinar'],
    text: 'I have attend some webinar on A.I it was really helpful and I have enrolled the course after the webinar.',
  },
  {
    id: 'suhail',
    name: 'Mohammed Suhail',
    badge: '3 reviews',
    avatarColor: '#059669',
    initial: 'M',
    time: '5 months ago',
    timestamp: 150,
    rating: 5,
    tags: ['supportive team'],
    text: 'Good environment worth every minute spent here , amazing experience 5/5',
  },
  {
    id: 'yousef',
    name: 'Yousef Salman',
    badge: '2 reviews',
    avatarColor: '#2563eb',
    initial: 'Y',
    time: '4 months ago',
    timestamp: 120,
    rating: 5,
    tags: ['practical course'],
    text: 'Great courses with experienced tutors and well-structured curriculum.',
  },
  {
    id: 'blueroses',
    name: 'Blue Roses',
    badge: 'Local Guide · 17 reviews · 1 photo',
    avatarColor: '#7c3aed',
    initial: 'B',
    time: 'a month ago',
    timestamp: 30,
    rating: 5,
    tags: ['maths'],
    text: 'I am extremely happy with our experience with Nitaq Academy in preparing my daughter for the SAT Math exam. From organizing the schedule and payment via WhatsApp with Muzammil to the lessons with Mr. Khaled, everything was seamless.',
  },
  {
    id: 'michael',
    name: 'Michael lincoln',
    badge: '2 reviews',
    avatarColor: '#0284c7',
    initial: 'M',
    time: 'a month ago',
    timestamp: 30,
    rating: 5,
    tags: ['supportive team'],
    text: 'Five stars! Thanks to Mr. Khaled Ayoub at Nitaq Academy, IGCSE Physics went from being one of my hardest subjects to one of my most manageable. Super clear explanations, great patience, and top-quality lessons. Best place for physics tutoring!',
  },
  {
    id: 'valentina',
    name: 'Valentina Stefanini',
    badge: '12 reviews',
    avatarColor: '#db2777',
    initial: 'V',
    time: 'a month ago',
    timestamp: 30,
    rating: 5,
    tags: ['supportive team'],
    text: 'Nitaq academy truly shapes your classes according to your goals and supports you every step of the way. I have started to study Arabic to be able to have conversation and express myself in the language and my teacher Shyma is the nicest and most patient teacher.',
  },
  {
    id: 'sarah',
    name: 'sarah',
    badge: '1 review',
    avatarColor: '#8b5cf6',
    initial: 'S',
    time: 'a month ago',
    timestamp: 30,
    rating: 5,
    tags: ['supportive team', 'maths'],
    text: 'Amazing tutoring, i myself am very bad at maths but i understand everything from the tutor khaled ayoub, he is very patient and simplifies the material, id definitely recommend this place.',
  },
  {
    id: 'asma',
    name: 'Asma Hussain',
    badge: '1 review',
    avatarColor: '#0d9488',
    initial: 'A',
    time: '3 months ago',
    timestamp: 90,
    rating: 5,
    tags: ['practical course'],
    text: 'I had the opportunity to complete the Digital Marketing course at NITAQ Academy, and it was an excellent learning experience. The course was well-structured, practical, and helped me develop valuable digital marketing skills that I could immediately apply.',
  },
  {
    id: 'anonymous',
    name: 'Anonymous',
    badge: '1 review',
    avatarColor: '#475569',
    initial: 'A',
    time: 'a month ago',
    timestamp: 30,
    rating: 5,
    tags: ['maths'],
    text: 'Honestly, Nitaq Academy is amazing, especially the SAT Math courses with Professor Khaled Ayoub! Since I studied math in Arabic, he was incredibly patient. He translated all the terms and explained all the problems in English without me feeling confused or lost. A huge thank you to him; I highly recommend them!',
  },
  {
    id: 'midlaj',
    name: 'Midlaj REC',
    badge: '5 reviews',
    avatarColor: '#16a34a',
    initial: 'M',
    time: '5 months ago',
    timestamp: 150,
    rating: 5,
    tags: ['supportive team', 'practical course'],
    text: 'Highly recommended educational institute in Sharjah with professional trainers and modern environment. Great guidance for high-school and test prep.',
  },
  {
    id: 'shyma',
    name: 'Shyma Ahmad',
    badge: '1 review',
    avatarColor: '#ca8a04',
    initial: 'S',
    time: 'a month ago',
    timestamp: 30,
    rating: 5,
    tags: ['supportive team'],
    text: 'Wonderful experience with Nitaq Academy. The administration and teaching team are very supportive, professional and welcoming.',
  },
  {
    id: 'rahila',
    name: 'Rahila A',
    badge: '3 reviews',
    avatarColor: '#9333ea',
    initial: 'R',
    time: 'a month ago',
    timestamp: 30,
    rating: 5,
    tags: ['supportive team'],
    text: 'Excellent educational academy with top tier tutors and very cooperative management. Highly recommended for students in Sharjah.',
  },
  {
    id: 'yazan',
    name: 'Yazan Al Jayousi',
    badge: '1 review',
    avatarColor: '#2563eb',
    initial: 'Y',
    time: '4 months ago',
    timestamp: 120,
    rating: 5,
    tags: ['practical course'],
    text: 'Top quality courses and great learning atmosphere. Truly one of the best academies in the UAE.',
  },
  {
    id: 'ashfaq',
    name: 'Ashfaq P .P',
    badge: '1 year ago',
    avatarColor: '#00875a',
    initial: 'M',
    time: '1 year ago',
    timestamp: 365,
    rating: 5,
    tags: ['practical course'],
    text: "I recently enrolled in the Corporate Tax course, and I'm truly grateful to Ms. Ronika Ma'am for her endless patience and support in helping me master corporate tax concepts and practical tax return filing.",
  },
  {
    id: 'mohankumar',
    name: 'Mohankumar subbaraj',
    badge: '1 year ago',
    avatarColor: '#00838f',
    initial: 'M',
    time: '1 year ago',
    timestamp: 365,
    rating: 5,
    tags: ['practical course'],
    text: "I'm happy with the course CORPORATE TAX joining Acamind / Nitaq Academy. It is well thought out, and trainer RONIKA provides supports that make real-world accounting clear.",
  },
  {
    id: 'suma',
    name: 'Suma Nagaraj',
    badge: '1 year ago',
    avatarColor: '#6554c0',
    initial: 'S',
    time: '1 year ago',
    timestamp: 365,
    rating: 5,
    tags: ['practical course'],
    text: "I had the privilege of understanding and learning the concepts of VAT and Corporate tax from Ms Ronica Ma'am. She is a Chartered Accountant and provides clear practical training for working professionals.",
  },
];

const TAG_FILTERS = [
  { key: 'all', label: { en: 'All', ar: 'الكل' }, count: null },
  { key: 'practical course', label: { en: 'practical course', ar: 'دورات عملية' }, count: 2 },
  { key: 'supportive team', label: { en: 'supportive team', ar: 'فريق متعاون' }, count: 2 },
  { key: 'webinar', label: { en: 'webinar', ar: 'ندوات تدريبية' }, count: 2 },
  { key: 'maths', label: { en: 'maths', ar: 'الرياضيات' }, count: 4 },
];

const EXTRA_TAGS = [
  { key: 'sat prep', label: { en: 'sat prep', ar: 'تحضير SAT' }, count: 3 },
  { key: 'corporate tax', label: { en: 'corporate tax', ar: 'ضريبة الشركات' }, count: 3 },
  { key: 'physics', label: { en: 'physics', ar: 'الفيزياء' }, count: 1 },
  { key: 'arabic', label: { en: 'arabic language', ar: 'اللغة العربية' }, count: 1 },
  { key: 'digital marketing', label: { en: 'digital marketing', ar: 'التسويق الرقمي' }, count: 1 },
  { key: 'tutors', label: { en: 'supportive tutors', ar: 'معلمون متميزون' }, count: 4 },
];

export default function GoogleReviews() {
  const { lang } = useLanguage();
  const isAr = lang === 'ar';
  const [activeTag, setActiveTag] = useState('all');
  const [showExtraTags, setShowExtraTags] = useState(false);
  const [sortBy, setSortBy] = useState('relevant');
  const scrollContainerRef = useRef(null);

  const filteredReviews = useMemo(() => {
    let list = [...REVIEWS_DATA];

    if (activeTag !== 'all') {
      list = list.filter((r) => {
        if (activeTag === 'sat prep') {
          return r.text.toLowerCase().includes('sat') || r.tags.includes('maths');
        }
        if (activeTag === 'corporate tax') {
          return r.text.toLowerCase().includes('tax') || r.tags.includes('practical course');
        }
        if (activeTag === 'physics') {
          return r.text.toLowerCase().includes('physics');
        }
        if (activeTag === 'arabic') {
          return r.text.toLowerCase().includes('arabic');
        }
        if (activeTag === 'digital marketing') {
          return r.text.toLowerCase().includes('digital marketing');
        }
        if (activeTag === 'tutors') {
          return (
            r.tags.includes('supportive team') ||
            r.text.toLowerCase().includes('tutor') ||
            r.text.toLowerCase().includes('teacher')
          );
        }
        return r.tags.includes(activeTag);
      });
    }

    if (sortBy === 'newest') {
      list.sort((a, b) => a.timestamp - b.timestamp);
    } else if (sortBy === 'highest') {
      list.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'lowest') {
      list.sort((a, b) => a.rating - b.rating);
    } else {
      list.sort((a, b) => b.text.length - a.text.length);
    }

    return list;
  }, [activeTag, sortBy]);

  const handleScroll = (direction) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollAmount = direction === 'left' ? -380 : 380;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section className="nh-section nh-reviews-section" id="reviews" aria-label="Student and Parent Reviews">
      <div className="nh-container">
        {/* Header with verified rating & link to real Google Business profile */}
        <div className="nh-reviews-header nh-reveal">
          <a
            href={GOOGLE_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="nh-reviews-rating-badge"
            title="View verified rating on Google Maps"
          >
            <span className="nh-rating-score">4.9</span>
            <div className="nh-reviews-stars" role="img" aria-label="4.9 out of 5 stars">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="nh-star-icon" viewBox="0 0 24 24" fill="#FBBC04" width="22" height="22">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <span className="nh-rating-source-link">
              <span>{isAr ? 'تقييم Google المعتمد (50+ تقييم)' : '50+ Verified Google Reviews'}</span>
              <ExternalLink size={13} aria-hidden="true" />
            </span>
          </a>

          <h2 className="nh-reviews-title">
            {isAr ? 'تجارب طلابنا وأولياء الأمور' : 'EXCELLENT RATINGS'}
          </h2>
          <p className="nh-reviews-subtitle">
            {isAr
              ? 'تجارب حقيقية لطلاب التحضير لاختبارات SAT والدروس المدرسية والدورات المهنية في مقرنا بالشارقة.'
              : 'Genuine feedback from SAT test-takers, school tutoring students, and career learners at our Sharjah campus.'}
          </p>

          <div className="nh-google-logo-wrap">
            <span className="nh-google-logo">
              <span style={{ color: '#4285F4' }}>G</span>
              <span style={{ color: '#EA4335' }}>o</span>
              <span style={{ color: '#FBBC05' }}>o</span>
              <span style={{ color: '#4285F4' }}>g</span>
              <span style={{ color: '#34A853' }}>l</span>
              <span style={{ color: '#EA4335' }}>e</span>
            </span>
          </div>
        </div>

        {/* Verified Student Achievements & Milestones Strip */}
        <div className="nh-reviews-achievements-banner nh-reveal">
          <div className="nh-achieve-item">
            <div className="nh-achieve-icon" aria-hidden="true">
              <TrendingUp size={20} />
            </div>
            <div>
              <strong>{isAr ? 'مسار أهداف SAT (1400+)' : 'SAT 1400+ Target Pathway'}</strong>
              <small>{isAr ? 'تدريب منهجي وفق التقييم التشخيصي' : 'Diagnostic-driven score milestones'}</small>
            </div>
          </div>

          <div className="nh-achieve-item">
            <div className="nh-achieve-icon" aria-hidden="true">
              <Award size={20} />
            </div>
            <div>
              <strong>{isAr ? 'تفوق في مواد IGCSE و A-Level' : 'IGCSE & A-Level Progress'}</strong>
              <small>{isAr ? 'الرياضيات، الفيزياء، الكيمياء واللغات' : 'Mathematics, Physics, Chemistry & Arabic'}</small>
            </div>
          </div>

          <div className="nh-achieve-item">
            <div className="nh-achieve-icon" aria-hidden="true">
              <CheckCircle2 size={20} />
            </div>
            <div>
              <strong>{isAr ? 'جاهزية القبول الجامعي والمنح' : 'University & Career Readiness'}</strong>
              <small>{isAr ? 'تأهيل أكاديمي موثوق للجامعات والمنح' : 'Grounded preparation for top programs'}</small>
            </div>
          </div>
        </div>

        {/* Filter and Sort Toolbar */}
        <div className="nh-reviews-toolbar nh-reveal">
          <div className="nh-filter-chips" role="group" aria-label="Filter reviews by tag">
            {TAG_FILTERS.map((tag) => (
              <button
                key={tag.key}
                type="button"
                className={`nh-chip ${activeTag === tag.key ? 'active' : ''}`}
                onClick={() => setActiveTag(tag.key)}
              >
                <span>{isAr ? tag.label.ar : tag.label.en}</span>
                {tag.count !== null && <span className="nh-chip-count">{tag.count}</span>}
              </button>
            ))}

            {showExtraTags &&
              EXTRA_TAGS.map((tag) => (
                <button
                  key={tag.key}
                  type="button"
                  className={`nh-chip ${activeTag === tag.key ? 'active' : ''}`}
                  onClick={() => setActiveTag(tag.key)}
                >
                  <span>{isAr ? tag.label.ar : tag.label.en}</span>
                  {tag.count !== null && <span className="nh-chip-count">{tag.count}</span>}
                </button>
              ))}

            <button
              type="button"
              className={`nh-chip nh-chip-more ${showExtraTags ? 'active' : ''}`}
              onClick={() => setShowExtraTags(!showExtraTags)}
              aria-label={showExtraTags ? (isAr ? 'عرض أقل' : '− Less review filters') : (isAr ? '+6 تصنيفات إضافية' : '+6 more review filters')}
            >
              {showExtraTags ? (isAr ? '− أقل' : '− Less') : '+6'}
            </button>
          </div>

          <div className="nh-sort-wrapper">
            <label htmlFor="reviews-sort" className="nh-sort-label">
              {isAr ? 'ترتيب حسب' : 'Sort by'}
            </label>
            <select
              id="reviews-sort"
              className="nh-sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="relevant">{isAr ? 'الأكثر صلة' : 'Most relevant'}</option>
              <option value="newest">{isAr ? 'الأحدث' : 'Newest'}</option>
              <option value="highest">{isAr ? 'الأعلى تقييماً' : 'Highest rating'}</option>
              <option value="lowest">{isAr ? 'الأقل تقييماً' : 'Lowest rating'}</option>
            </select>
          </div>
        </div>

        {/* Reviews Carousel Slider */}
        <div className="nh-reviews-slider-wrap nh-reveal">
          <button
            type="button"
            className="nh-carousel-arrow prev"
            onClick={() => handleScroll('left')}
            aria-label="Previous reviews"
          >
            <ChevronLeft size={22} />
          </button>

          <div className="nh-reviews-track" ref={scrollContainerRef}>
            {filteredReviews.map((review) => (
              <article key={review.id} className="nh-review-card">
                <div className="nh-review-card-head">
                  <div
                    className="nh-review-avatar"
                    style={{ backgroundColor: review.avatarColor }}
                    aria-hidden="true"
                  >
                    {review.initial}
                  </div>
                  <div className="nh-review-meta">
                    <h3 className="nh-review-author">{review.name}</h3>
                    <time className="nh-review-time">{review.time}</time>
                  </div>
                  <a
                    href={GOOGLE_PROFILE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nh-google-g-badge"
                    title="Verified on Google"
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20">
                      <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.87c2.27-2.09 3.675-5.17 3.675-9.15z" />
                      <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.87-3.05c-1.08.72-2.45 1.16-4.06 1.16-3.13 0-5.78-2.11-6.73-4.96H1.27v3.15C3.26 21.36 7.36 24 12 24z" />
                      <path fill="#FBBC05" d="M5.27 14.24c-.25-.72-.38-1.49-.38-2.24s.13-1.52.38-2.24V6.61H1.27C.46 8.23 0 10.06 0 12s.46 3.77 1.27 5.39l4-3.15z" />
                      <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.36 0 3.26 2.64 1.27 6.61l4 3.15c.95-2.85 3.6-4.96 6.73-4.96z" />
                    </svg>
                  </a>
                </div>

                <div className="nh-review-rating-row">
                  <div className="nh-review-card-stars" role="img" aria-label="5 stars">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} viewBox="0 0 24 24" fill="#FBBC04" width="16" height="16">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <span className="nh-review-verified" title="Verified Customer">
                    <svg viewBox="0 0 24 24" width="15" height="15" fill="#1A73E8">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </span>
                </div>

                <div className="nh-review-body">
                  <p>{review.text}</p>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            className="nh-carousel-arrow next"
            onClick={() => handleScroll('right')}
            aria-label="Next reviews"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Dual Actions: Link directly to real Google Business Profile & Write a Review */}
        <div className="nh-reviews-cta-wrap nh-reveal">
          <a
            href={GOOGLE_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="nh-reviews-link-btn"
          >
            <span>{isAr ? 'عرض جميع التقييمات على Google' : 'Read All 50+ Google Reviews'}</span>
            <ExternalLink size={16} aria-hidden="true" />
          </a>
          <a
            href={GOOGLE_WRITE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="nh-write-review-btn"
          >
            {isAr ? 'أضف تقييمك على Google' : 'Write a Review'}
          </a>
        </div>
      </div>
    </section>
  );
}

