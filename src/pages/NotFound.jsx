import { Helmet } from 'react-helmet-async';
import { Link } from '../i18n/Link';
import { useLanguage } from '../i18n/context';

/**
 * Bilingual 404. Replaces the old catch-all that silently rendered Home,
 * which made every typo URL an indexable duplicate of the homepage.
 * noindex keeps crawlers from indexing unknown URLs even though the SPA
 * fallback serves them with HTTP 200.
 */
const NotFound = () => {
    const { t } = useLanguage();

    return (
        <main style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '120px 20px 60px' }}>
            <Helmet>
                <title>{t('notFound.title')} | NITAQ ACADEMY</title>
                <meta name="robots" content="noindex" />
            </Helmet>
            <div style={{ textAlign: 'center', maxWidth: '480px' }}>
                <p style={{ fontSize: '5rem', fontWeight: 800, color: 'var(--primary-color)', lineHeight: 1, marginBottom: '10px' }}>404</p>
                <h1 style={{ fontSize: '1.6rem', marginBottom: '12px' }}>{t('notFound.heading')}</h1>
                <p style={{ color: 'var(--text-gray)', marginBottom: '30px' }}>{t('notFound.body')}</p>
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link to="/" className="btn btn-primary">{t('notFound.goHome')}</Link>
                    <Link to="/courses" className="btn btn-secondary">{t('notFound.browseCourses')}</Link>
                </div>
            </div>
        </main>
    );
};

export default NotFound;
