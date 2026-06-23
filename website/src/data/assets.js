export const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

export const brandAssets = {
  logo: asset('logo.png'),
  favicon: asset('favicon.png'),
  hero: asset('hero.jpg'),
};

export const propertyAssets = {
  auxo: asset('properties/auxo-at-memorial.jpg'),
  pearl: asset('properties/pearl-at-midtown.jpg'),
  pines: asset('properties/pines-at-woodcreek.jpg'),
  regency: asset('properties/regency-st-louis.jpg'),
  reserve: asset('properties/reserve-at-heritage.jpg'),
  terraces: asset('properties/terraces-perkins-rowe.jpg'),
};

export const pageAssets = {
  about: asset('pages/about.jpg'),
  whyAvid: asset('pages/why-avid.jpg'),
  investmentApproach: asset('pages/investment-approach.jpg'),
  trackRecord: asset('pages/track-record.jpg'),
  team: asset('pages/team.jpg'),
  investmentOpportunities: asset('pages/investment-opportunities.jpg'),
  portfolio: asset('pages/portfolio.jpg'),
  careers: asset('pages/careers.jpg'),
  thinkBig: asset('pages/think-big.jpg'),
  report: asset('pages/report.jpg'),
  webinar: asset('pages/webinar.jpg'),
  blog: asset('pages/blog.jpg'),
  events: asset('pages/events.jpg'),
  news: asset('pages/news.jpg'),
  videos: asset('pages/videos.jpg'),
  contact: asset('pages/contact.jpg'),
  research: asset('pages/research.jpg'),
  homePlatform: asset('pages/home-platform.jpg'),
  homeHero1: asset('pages/home-hero-1.jpg'),
  homeHero2: asset('pages/home-hero-2.jpg'),
  homeHero3: asset('pages/home-hero-3.jpg'),
};

export const teamAssets = {
  craig: asset('team/craig-berger.jpg'),
  craigLg: asset('team/craig-berger-lg.jpg'),
};

export const webinarAssets = {
  cash50k: asset('webinars/50k-cash.jpg'),
};
