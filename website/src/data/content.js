import { asset, brandAssets, propertyAssets, pageAssets, teamAssets, webinarAssets } from './assets.js';
import { blogPostsFromAssets } from './blogPosts.js';

function cleanBlogContent(content) {
  const markers = [
    '\nSEO KEYWORDS:',
    '\nSEO Keywords:',
    '\nSEO Meta Description:',
    '\nMeta Description',
    '\n—\n\nFocus Keyword',
    '\nFocus Keyword:',
    '\nWordPress Category:',
    '\nLinkedIn Post Copy:',
    '\nMeta Post Copy:',
  ];
  let cleaned = content;
  for (const marker of markers) {
    const idx = cleaned.indexOf(marker);
    if (idx > 200) cleaned = cleaned.slice(0, idx);
  }
  return cleaned.trim();
}

const blogDates = {
  '2024-economic-and-multifamily-outlook': 'December 27, 2023',
  '2024-mid-year-economic-and-multifamily-outlook': 'July 15, 2024',
  'green-living-sustainable-multifamily-property-developments': 'November 1, 2023',
  'why-millennials-are-rushing-to-invest-in-multifamily-properties-secrets-revealed': 'October 7, 2023',
  'inflation-surges-beyond-fed-s-expectations-a-deeper-dive-into-interest-rates-and': 'September 29, 2023',
};

export const blogPosts = blogPostsFromAssets
  .map((post) => {
    const content = cleanBlogContent(post.content);
    const excerpt =
      post.excerpt === post.title || post.excerpt.length < 40
        ? `${content.slice(0, 240).trim()}…`
        : post.excerpt;
    return {
      ...post,
      date: blogDates[post.slug] ?? post.date,
      image: propertyAssets.pearl,
      excerpt,
      content,
    };
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date));

export const site = {
  name: 'Avid Realty Partners',
  tagline: 'Multifamily Real Estate Investment',
  phone: '212-540-4540',
  email: 'info@AvidRealtyPartners.com',
  address: '14 East 33rd Street, Suite 7s',
  city: 'New York, NY 10016',
  investorPortal: 'https://investors.appfolioim.com/avidrealtypartners/investor',
  social: {
    linkedin: 'https://www.linkedin.com/company/avidrealtypartners',
    facebook: 'https://www.facebook.com/AvidRealtyPartners',
    instagram: 'https://www.instagram.com/avidrealty/',
    youtube: 'https://www.youtube.com/@_avidrealtypartners',
    x: 'https://twitter.com/AvidRealty',
  },
  offices: ['Salt Lake City, UT', 'Montreal, CAN', 'Mexico City, MEX', 'Columbus, OH', 'Boston, MA', 'Houston, TX'],
};

export const images = {
  about: pageAssets.about,
  whyAvid: pageAssets.whyAvid,
  investmentApproach: pageAssets.investmentApproach,
  trackRecord: pageAssets.trackRecord,
  team: pageAssets.team,
  investmentOpportunities: pageAssets.investmentOpportunities,
  portfolio: pageAssets.portfolio,
  careers: pageAssets.careers,
  thinkBig: pageAssets.thinkBig,
  report: pageAssets.report,
  webinar: pageAssets.webinar,
  blog: pageAssets.blog,
  events: pageAssets.events,
  news: pageAssets.news,
  videos: pageAssets.videos,
  contact: pageAssets.contact,
  research: pageAssets.research,
  homePlatform: pageAssets.homePlatform,
  hero: pageAssets.homeHero1,
  heroAlt: pageAssets.homeHero2,
  pool: propertyAssets.auxo,
  building: pageAssets.homePlatform,
  interior: propertyAssets.pearl,
  analytics: pageAssets.homeHero3,
  skyline: pageAssets.about,
};

export const stats = [
  { value: '$275M', label: 'Real Estate Assets Acquired' },
  { value: '1,900+', label: 'Multifamily Units Acquired' },
  { value: '$100M', label: 'Cumulative Sponsor Capital' },
  { value: '$79.5M', label: 'Sale Price — Full Cycle Deals' },
];

export const heroSlides = [
  {
    title: 'Zero Realized Losses',
    subtitle: '33% Average IRR across six exited deals',
    cta: 'View Track Record',
    link: '/track-record',
    image: pageAssets.homeHero1,
  },
  {
    title: '$100M of Cumulative Capital Raised',
    subtitle: 'New offerings available for qualified investors',
    cta: 'Investment Opportunities',
    link: '/investment-opportunities',
    image: propertyAssets.pearl,
  },
  {
    title: 'Institutional Analytics',
    subtitle: 'Wall Street-grade underwriting across sunbelt multifamily markets',
    cta: 'Our Approach',
    link: '/investment-approach',
    image: pageAssets.homeHero3,
  },
];

export const advantages = [
  {
    title: 'World-Class Analytics',
    description:
      'Founded by a multi award-winning Wall Street equities analyst. We bring high-powered analytics, risk management, and institutional sophistication to commercial real estate investing.',
    icon: 'chart',
  },
  {
    title: 'Ethics & Integrity',
    description:
      'We embed Radical Integrity into everything we do. We develop long-term relationships with Investor-Partners and maintain outstanding service levels.',
    icon: 'shield',
  },
  {
    title: 'Risk Management',
    description:
      'We strive to mitigate and manage risk with a hands-on approach to multifamily properties and staff, actively engaged to maximize overall success.',
    icon: 'target',
  },
  {
    title: 'Sunbelt Multifamily Experts',
    description:
      'We focus on multifamily in growth markets — Houston, Dallas, Denver, Atlanta, Phoenix — where cap rates are higher and population growth is faster.',
    icon: 'map',
  },
  {
    title: 'Attractive Fee Structure',
    description:
      'We charge low fees and earn through cash flow and appreciation. Low overhead lets us charge lower fees compared with competitors.',
    icon: 'percent',
  },
];

export const testimonials = [
  {
    quote:
      'As a 20-year real estate investor, my experience with Avid Realty Partners was among my most professional and profitable. Craig is a consummate relationship-builder, and a creative financial mind.',
    name: 'Marc A.',
    role: 'Equity Sales & Branding Expert — Investor',
  },
  {
    quote:
      'I strongly endorse working with Avid Realty Partners. The transparency the firm provides in its modeling and regular business updates is impressive. Forecasting has been conservative and they have over-delivered.',
    name: 'Lance M.',
    role: 'Resolute Capital Partners',
  },
  {
    quote:
      'Our firm has made several investments with Avid Realty Partners. Avid has represented their deals clearly and conservatively up front, and has delivered healthy tax benefits and robust total returns at exit.',
    name: 'Thomas M.',
    role: 'Principal & CIO — Investor',
  },
  {
    quote:
      'We greatly value the timely and in-depth updates we receive on a regular basis, but most of all we appreciate the results from the multiple projects in which we\'ve been involved.',
    name: 'Hal M.',
    role: 'Senior Business Analyst, Apple — Investor',
  },
  {
    quote:
      'I invested with Craig and the Avid Realty Partners team on a multifamily investment. Communication was regular and consistent, and the total return was amazing.',
    name: 'Peter B.',
    role: 'Alternative Investments Director — Investor',
  },
];

export const currentInvestments = [
  {
    name: 'Terraces at Perkins Rowe',
    location: 'Baton Rouge, LA',
    type: 'Multifamily',
    yearBuilt: 2007,
    units: 226,
    acquired: 'November 2022',
    investmentType: 'Limited Partnership',
    targetPeriod: '5 Years',
    minInvestment: '$100,000',
    targetIRR: '21.1%',
    image: propertyAssets.terraces,
  },
  {
    name: 'Auxo at Memorial',
    location: 'Houston, TX',
    type: 'Multifamily',
    yearBuilt: 2009,
    units: 402,
    acquired: 'April 2022',
    investmentType: 'Limited Partnership',
    targetPeriod: '5 Years',
    minInvestment: '$100,000',
    targetIRR: '18.8%',
    image: propertyAssets.auxo,
  },
  {
    name: 'The Pearl at Midtown',
    location: 'Dallas, TX',
    type: 'Multifamily',
    yearBuilt: 1972,
    units: 213,
    acquired: 'October 2021',
    investmentType: 'Limited Partnership',
    targetPeriod: '5 Years',
    minInvestment: '$100,000',
    targetIRR: '19.4%',
    image: propertyAssets.pearl,
  },
  {
    name: 'Pines at Woodcreek',
    location: 'Houston, TX',
    type: 'Multifamily',
    yearBuilt: 2015,
    units: 330,
    acquired: 'July 2020',
    investmentType: 'Limited Partnership',
    targetPeriod: '5 Years',
    minInvestment: '$100,000',
    targetIRR: '22.9%',
    image: propertyAssets.pines,
  },
  {
    name: 'The Reserve at Heritage',
    location: 'St. Louis, MO',
    type: 'Multifamily',
    yearBuilt: 1985,
    units: 109,
    acquired: 'December 2019',
    investmentType: 'Limited Partnership',
    targetPeriod: '5 Years',
    minInvestment: '$100,000',
    targetIRR: '20.0%',
    image: propertyAssets.reserve,
  },
  {
    name: 'The Regency at St. Louis',
    location: 'St. Louis, MO',
    type: 'Multifamily',
    yearBuilt: 1972,
    units: 95,
    acquired: 'May 2015',
    investmentType: 'Limited Partnership',
    targetPeriod: '5 Years',
    minInvestment: '$100,000',
    targetIRR: '20.0%',
    image: propertyAssets.regency,
  },
];

export const exitedInvestments = [
  { name: 'Woodglen Village', location: 'Houston, TX', type: 'Multifamily', units: 250, yearBuilt: 2000, acquired: 'January 2020', sold: 'February 2022', irr: '40.2%', period: 'Jan 2020 – Feb 2022', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80' },
  { name: 'Carvana Orlando', location: 'Orlando, FL', type: 'Retail NNN', acquired: 'June 2019', sold: 'April 2022', irr: '26.1%', period: 'Jun 2019 – Apr 2022', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80' },
  { name: 'The Broadmoor', location: 'Houston, TX', type: 'Multifamily', units: 235, yearBuilt: 1984, acquired: 'February 2018', sold: 'April 2022', irr: '28.5%', period: 'Feb 2018 – Apr 2022', image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80' },
  { name: 'The Reserve at Spanish Lake', location: 'St. Louis, MO', type: 'Multifamily', units: 75, yearBuilt: 1985, acquired: 'January 2019', sold: 'October 2020', irr: '70.7%', period: 'Jan 2019 – Oct 2020', image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80' },
];

export const trackRecordStats = [
  { value: '6', label: 'Properties Exited' },
  { value: '33%', label: 'Weighted Realized IRR' },
  { value: '2,050', label: 'Units Acquired' },
];

export const trackRecordDeals = [
  { name: 'Woodglen Village', type: 'Multifamily', irr: '40.2%', multiple: '1.96x', period: 'Jan 2020 – Feb 2022' },
  { name: 'Carvana Orlando', type: 'Retail NNN', irr: '26.1%', multiple: '1.83x', period: 'Jun 2019 – Apr 2022' },
  { name: 'Broadmoor', type: 'Multifamily', irr: '28.5%', multiple: '2.66x', period: 'Feb 2018 – Apr 2022' },
  { name: 'The Reserve at Spanish Lake', type: 'Multifamily', irr: '70.7%', multiple: '2.46x', period: 'Jan 2019 – Oct 2020' },
  { name: 'Marriott Aloft Hotel', type: 'Hotel Development', irr: '16.0%', multiple: '1.22x', period: 'May 2017 – Jan 2019' },
  { name: 'Ramada Inn Hotel', type: 'Hotel', irr: '30.2%', multiple: '1.90x', period: 'Mar 2016 – Oct 2019' },
];

export const leadership = [
  { name: 'Craig Berger', title: 'Founder & Chief Executive Officer', image: teamAssets.craig },
  { name: 'James MacQueen', title: 'President', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80' },
  { name: 'Jim McCarthy', title: 'Chief Operating Officer', image: 'https://images.unsplash.com/photo-1519081908948-b024b6fe00fe?w=400&q=80' },
  { name: 'Mary Tucker', title: 'Chief Financial Officer', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80' },
];

export const professionalTeam = [
  { name: 'Luis Hernandez', title: 'Chief Acquisition Officer', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
  { name: 'Jeff Feldman', title: 'Asset Manager', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80' },
  { name: 'Omar Moreno', title: 'Senior Acquisition Analyst', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80' },
];

export const culturePillars = [
  {
    title: 'Radical Integrity',
    description:
      'Everything we do starts and ends with integrity. From how we treat Investor-Partners to maximizing Residents\' quality of life, integrity is our company bedrock.',
  },
  {
    title: 'Top Flight Property Execution',
    description:
      'Our value creation is enabled via top-flight property execution — maximizing Residents\' living experience, stronger revenues, and less turnover.',
  },
  {
    title: 'Value Identification & Creation',
    description:
      'We identify and create value through aggressive bidding, big-data insights, peak property performance, and rigorous risk management.',
  },
  {
    title: 'Compassion & Respect',
    description:
      'Compassion and respect are fundamental to how we treat Assets, Residents, Team Members, Investor Partners, and the communities we operate in.',
  },
];

export const researchItems = [
  { title: 'Fed Raises Rates', description: 'Analysis of Federal Reserve policy and its impact on multifamily valuations and cap rates.' },
  { title: 'Three Tenets', description: 'Core investment principles guiding Avid\'s approach to sunbelt multifamily acquisitions.' },
  { title: 'Three Trends', description: 'Key market trends shaping multifamily opportunity in secondary and tertiary growth markets.' },
];

export const events = [
  {
    title: 'FactRight RIA Spring Due Diligence Conference',
    date: 'March 2024',
    location: 'National Conference',
    description: 'Avid Realty Partners presenting at the premier RIA due diligence conference.',
  },
];

export const craigBergerBio = {
  name: 'Craig Berger',
  title: 'Founder & Chief Executive Officer',
  image: teamAssets.craigLg,
  paragraphs: [
    'Founder & CEO of Avid Realty Partners. Craig has been an active real estate investor for nearly 20 years, and founded Avid Realty Partners in 2015 to deploy capital across Multifamily Apartment and other real estate assets. Avid Realty Partners\' portfolio includes the acquisition of more than 2,000 apartment and hotel doors in targeted growth markets across the US totaling over $275M of acquisition value. The firm has zero realized losses with a 33.0% IRR (weighted average) across six exited deals.',
    'Avid typically buys existing assets and is ramping its new development capabilities. The firm intends to continually acquire new assets over the long-term to service an increasing number of Residents and Investor-Partners. With the continuing growth of Avid Realty Partners\' operations, Craig has recruited a highly experienced leadership team of real estate executives with decades of industry experience.',
    'Craig has always been fascinated by the overlap between Wall Street investment strategies and those used to invest in Multifamily properties, finding value that others missed. After leaving Wall Street to Build Something Meaningful, Craig was determined to start a business where his unwavering work ethic would produce a meaningful difference for Residents, Team Members, and Investor-Partners.',
    'Before founding Avid Realty Partners, Craig spent more than a decade as a highly acclaimed semiconductor equity research analyst at Smith Barney Citigroup and FBR Capital Markets where he serviced leading hedge and mutual fund clients, won multiple awards, and was one of CNBC\'s go-to semiconductor market experts with over 75 TV appearances.',
    'Craig began his career at Intel Corporation in the Corporate Finance group where he helped upper management make optimal decisions, participated in monthly close and forecasting processes, and worked to maximize cash return metrics.',
  ],
};

export const coreValues = [
  { title: 'Radical Integrity', description: 'Integrity is our most important company value — from Investor-Partners to Residents to how we underwrite every deal.' },
  { title: 'Institutional Discipline', description: 'Wall Street-grade analytics and risk management applied to every acquisition and asset management decision.' },
  { title: 'Resident-First Execution', description: 'Safe, secure, comfortable housing at a fair price creates the feedback loop that drives property performance.' },
  { title: 'Long-Term Partnership', description: 'We build enduring relationships with Investor-Partners from acquisition through exit.' },
];

export const investmentOpportunityTypes = [
  { label: 'A', title: 'Direct Investment in Existing Assets', description: 'Limited partnership opportunities in value-add multifamily properties across sunbelt growth markets.' },
  { label: 'B', title: 'Direct Investment in New Development', description: 'Participate in ground-up and adaptive reuse multifamily development projects.' },
  { label: 'C', title: 'Avid Realty Partners Promissory Note', description: 'High-yielding promissory note product for qualified investors seeking fixed-income exposure.' },
  { label: 'D', title: '1031 Exchange Opportunities', description: 'Tenant-in-Common (TIC) and DST structures for investors seeking tax-deferred exchange options.' },
  { label: 'E', title: 'Resolute Multifamily Fund I', description: 'Diversified fund vehicle providing exposure to Avid\'s multifamily acquisition pipeline.' },
];

export const newsItems = [
  { date: 'December 15, 2022', title: 'Avid Realty Partners Acquires its Next Multifamily Property' },
  { date: 'April 21, 2022', title: 'DLP Capital and Avid Realty Partners Team Up to Purchase Houston Multifamily Apartment Property' },
  { date: 'November 9, 2021', title: 'Avid Realty, Electra Capital Buy 213-Unit Pearl at Midtown Apartments in Northeast Dallas' },
  { date: 'July 14, 2020', title: 'Electra Capital & Avid Realty Partners Acquire Multifamily Property in Houston' },
  { date: 'March 5, 2018', title: 'Firm Capital American Realty Partners & Avid Realty Partners Acquire Multifamily Property in Houston, TX' },
];

export const webinarReplays = [
  {
    title: 'The Financial Toolbox: Accounting, Forecasting, And Technology In Multifamily Real Estate',
    description: 'Watch the webinar replay for a clear roadmap to success. From analyzing intricate accounting principles specific to real estate to evaluating risk and returns effectively, stay ahead with advanced forecasting techniques in a dynamic market.',
    image: webinarAssets.cash50k,
  },
  {
    title: 'Identifying Value: Sourcing And Underwriting To Create Maximum Value In Real Estate',
    description: 'Learn practical strategies to identify unique investment opportunities. Delve into sourcing deals and underwriting a real estate investment — crucial for both seasoned investors and those new to the field.',
    image: propertyAssets.auxo,
  },
  {
    title: 'What To Do With $50K In Cash – Saving Vs. Investing In Real Estate',
    description: 'Craig Berger explains why to invest $50K in real estate versus holding it in cash. Learn how to identify lucrative opportunities, understand risks, and mitigate them effectively.',
    image: webinarAssets.cash50k,
  },
];

export const videos = [
  {
    title: 'Inflation, Geo Politics, and Multifamily Trends',
    date: 'October 13, 2023',
    description: 'Craig Berger and Jim McCarthy deep dive into recent inflation trends, geopolitical impacts, and multifamily market dynamics.',
    thumbnail: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80',
    duration: '11:39',
  },
  {
    title: 'Inflation Surges Beyond FED\'s Expectations: Interest Rates and Economic Forecasts',
    date: 'September 29, 2023',
    description: 'Inflation is turning up the heat, surpassing even the FED\'s expectations. Analysis of CPI data and implications for multifamily investors.',
    thumbnail: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=600&q=80',
    duration: '6:45',
  },
  {
    title: '2023 Banking Crisis, 10-Year Treasury, Where is Smart Money Going?',
    date: 'March 28, 2023',
    description: 'Deep dive into the banking crisis, treasury rates, and where institutional capital is deploying in multifamily real estate.',
    thumbnail: 'https://images.unsplash.com/photo-1560520653-9a0de4b45d14?w=600&q=80',
    duration: '4:32',
  },
  {
    title: 'Inflation, Multifamily Real Estate Investing, High-Interest Rates, & 2023 Outlook',
    date: 'December 16, 2022',
    description: 'The true story behind PPI & CPI numbers, how Fed actions got us here, and the financial outlook for multifamily in 2023.',
    thumbnail: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80',
    duration: '6:19',
  },
];

export const thinkBigContent = {
  headline: 'Discover the Power of Thinking Big',
  subheadline: 'Navigating The US Real Estate Market: Opportunities and Risks',
  topics: [
    { title: 'Overview', description: 'Current trends, key drivers of growth, and regional differences investors should be aware of.' },
    { title: 'Benefits', description: 'Diversification, passive income potential, and capital appreciation for passive CRE investors.' },
    { title: 'Market Demand', description: 'Understanding demand drivers to seize opportunities and make informed decisions.' },
    { title: 'Predictions', description: 'Future of the real estate market — economy, interest rates, government policies, and social trends.' },
    { title: 'Opportunities', description: 'Finding and evaluating investments: working with GPs, due diligence, and key metrics.' },
    { title: 'Risks', description: 'Market volatility, financing risks, and unexpected expenses in commercial real estate.' },
  ],
  chapters: [
    'Overview Of The U.S Real Estate Market',
    'Market Demand Analysis & Trends',
    'Key Economic Indicators Affecting The Real Estate Market',
    'Benefits Of Investing In Real Estate vs. Other Assets',
    'Opportunities & Risk Mitigation',
    'Predictions Of The Real Estate Market',
    'Is Now The Time To Invest In Real Estate?',
  ],
};

export const reportContent = {
  headline: '2023 Mid-Market Outlook',
  subheadline: 'Assessing The Economy, Recession, & Multifamily Real Estate',
  topics: [
    { title: 'Inflation', description: 'Impact on the economy, triumphs, challenges, and root causes surrounding inflation.' },
    { title: 'Economic Assessment', description: 'Comprehensive analysis including recession risk evaluation and key economic indicators.' },
    { title: 'Job Market', description: 'Labor market state and implications for individuals and the broader economy.' },
    { title: 'Housing Landscape', description: 'Current U.S. housing trends, challenges, and market dynamics.' },
    { title: 'Multifamily Outlook', description: 'Market trends, occupancy rates, financing-related distress, risks, and rewards.' },
    { title: 'Buying Opportunities', description: 'Favorable conditions for investors in 2023 and 2024 with forward-looking perspective.' },
  ],
  chapters: [
    'Inflation: Our Victory With The Three-headed Monster',
    'Revisiting The Root Causes Of Inflation',
    'Interest Rates',
    'Assessing The Economy, A Recession, & The Stock Market',
    'Modest Recession And Job Losses In 2023',
    'Job Losses Are Accelerating',
    'Current Housing Situation In The U.S',
    'Multifamily Market To See Stress, More Buying Opportunities',
    'Multifamily Apartment Market Fundamentals',
    'Occupancy Rates',
    'Financing-related Distress In The Multifamily Market',
    'Conclusion: Buying Opportunities In 2023 And 2024',
  ],
};

export const navLinks = [
  {
    label: 'About',
    children: [
      { label: 'Overview', path: '/about' },
      { label: 'Why Avid Realty Partners', path: '/why-avid' },
      { label: 'Investment Approach', path: '/investment-approach' },
      { label: 'Track Record', path: '/track-record' },
      { label: 'Meet the Team', path: '/team' },
    ],
  },
  { label: 'Investment Opportunities', path: '/investment-opportunities' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Careers', path: '/careers' },
  {
    label: 'Media',
    children: [
      { label: 'Think Big Savvy Investors', path: '/think-big' },
      { label: '2023 Mid-Market Outlook', path: '/report' },
      { label: 'Webinar Replay', path: '/webinar-replay' },
      { label: 'Blog', path: '/blog' },
      { label: 'Events', path: '/events' },
      { label: 'News', path: '/news' },
      { label: 'Videos', path: '/videos' },
    ],
  },
  { label: 'Contact Us', path: '/contact' },
];
