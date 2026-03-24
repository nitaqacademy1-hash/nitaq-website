import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, path = '' }) => {
  const siteUrl = 'https://www.nitaqacademy.com';
  const fullUrl = `${siteUrl}${path}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph Tags for Social Sharing */}
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};

export default SEO;
