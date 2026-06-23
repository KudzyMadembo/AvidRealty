export const SITE_URL = 'https://kudzymadembo.github.io/AvidRealty';

export const defaultSeo = {
  title: 'Avid Realty Partners | Multifamily Real Estate Investment',
  description:
    'Avid Realty Partners is a multifamily real estate investment platform with a 32% average gross IRR, zero realized losses, $330M+ acquired, and institutional analytics across sunbelt growth markets.',
  keywords:
    'multifamily real estate, real estate investment, Avid Realty Partners, passive income, sunbelt multifamily, commercial real estate, accredited investors',
  image: `${SITE_URL}/logo.png`,
};

export const pageSeo = {
  '/': {
    title: 'Avid Realty Partners | Multifamily Real Estate Investment Platform',
    description:
      'Invest in sunbelt multifamily with Avid Realty Partners. Zero realized losses, 32% gross IRR, $330M+ assets acquired, and $500M–$1B deployment target.',
    keywords: 'multifamily investment platform, real estate syndication, Avid Realty Partners, passive real estate income',
  },
  '/about': {
    title: 'About Avid Realty Partners | Founder & Overview',
    description:
      'Founded by Craig Berger, CPA/CFA, in 2015, Avid Realty Partners has acquired 2,500+ multifamily units totaling $330M+ with zero realized losses across seven full-cycle exits.',
  },
  '/why-avid': {
    title: 'Why Avid Realty Partners | Competitive Advantages',
    description:
      'World-class analytics, sunbelt multifamily expertise, and institutional sophistication from a multi-award-winning Wall Street equities analyst.',
  },
  '/investment-approach': {
    title: 'Investment Approach | Value-Add Multifamily Strategy',
    description:
      'Acquire below replacement cost in sunbelt and Midwest markets. Core-plus and value-add multifamily with conservative leverage and agency debt.',
  },
  '/track-record': {
    title: 'Track Record | 32% Weighted Gross IRR',
    description:
      'Avid Realty Partners track record: 7 full-cycle exits, 32% weighted gross IRR, 2,500 units acquired, zero realized losses.',
  },
  '/team': {
    title: 'Meet the Avid Team | Leadership & Professionals',
    description:
      'Meet Craig Berger and the Avid Realty Partners leadership team with decades of real estate, Wall Street, and institutional experience.',
  },
  '/investment-opportunities': {
    title: 'Investment Opportunities | Multifamily LP & 1031 Options',
    description:
      'Current and pipeline multifamily opportunities including direct LP deals, promissory notes, 1031 exchanges, and the Resolute Multifamily Fund I.',
  },
  '/portfolio': {
    title: 'Portfolio | Current & Exited Multifamily Properties',
    description:
      'Explore Avid Realty Partners portfolio across Houston, Dallas, Baton Rouge, St. Louis, and other sunbelt markets.',
  },
  '/careers': {
    title: 'Careers | Join the Avid Team',
    description:
      'Join Avid Realty Partners — a culture built on Radical Integrity, top-flight property execution, and long-term investor partnerships.',
  },
  '/blog': {
    title: 'Blog | Multifamily & Economic Insights',
    description:
      'Market outlooks, multifamily investing insights, and economic analysis from Avid Realty Partners leadership.',
  },
  '/events': {
    title: 'Events | Avid Realty Partners',
    description: 'Upcoming conferences and events featuring Avid Realty Partners.',
  },
  '/news': {
    title: 'News | Avid Realty Partners Press & Announcements',
    description: 'Latest news and acquisition announcements from Avid Realty Partners.',
  },
  '/videos': {
    title: 'Videos & Webinars | Multifamily Market Analysis',
    description: 'Watch Avid Realty Partners webinars on inflation, multifamily trends, and investment strategy.',
  },
  '/research': {
    title: 'Research | Market Intelligence & Analysis',
    description: 'Proprietary multifamily and economic research from Avid Realty Partners.',
  },
  '/contact': {
    title: 'Contact Us | Avid Realty Partners',
    description: 'Contact Avid Realty Partners in New York, NY. Call 212-540-4540 or send a message to our team.',
  },
  '/invest': {
    title: 'Invest With Us | Become an Investor-Partner',
    description:
      'Start investing with Avid Realty Partners. Accredited investor opportunities in sunbelt multifamily with proven track record.',
  },
  '/think-big': {
    title: 'Think Big Savvy Investors | Free Real Estate eBook',
    description: 'Download the free eBook on navigating US real estate market opportunities and risks.',
  },
  '/report': {
    title: '2023 Mid-Market Outlook | Free Multifamily Report',
    description: 'Download Avid Realty Partners 2023 Mid-Market Outlook on economy, recession risk, and multifamily fundamentals.',
  },
  '/webinar-replay': {
    title: 'Webinar Replay | Multifamily Investment Education',
    description: 'Watch Avid Realty Partners webinar replays on accounting, underwriting, and multifamily investing.',
  },
  '/privacy': {
    title: 'Privacy Policy | Avid Realty Partners',
    description: 'Avid Realty Partners privacy policy for website visitors and investors.',
  },
  '/terms': {
    title: 'Terms & Conditions | Avid Realty Partners',
    description: 'Terms and conditions for using the Avid Realty Partners website.',
  },
};

export const sitemapPaths = Object.keys(pageSeo);

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Avid Realty Partners',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/logo.png`,
  telephone: '+1-212-540-4540',
  email: 'info@AvidRealtyPartners.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '14 East 33rd Street, Suite 7s',
    addressLocality: 'New York',
    addressRegion: 'NY',
    postalCode: '10016',
    addressCountry: 'US',
  },
  sameAs: [
    'https://www.linkedin.com/company/avidrealtypartners',
    'https://www.facebook.com/AvidRealtyPartners',
    'https://www.instagram.com/avidrealty/',
    'https://www.youtube.com/@_avidrealtypartners',
    'https://twitter.com/AvidRealty',
  ],
  description: defaultSeo.description,
};
