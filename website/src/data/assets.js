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
};

export const teamAssets = {
  craig: asset('team/craig-berger.jpg'),
  craigLg: asset('team/craig-berger-lg.jpg'),
};

export const webinarAssets = {
  cash50k: asset('webinars/50k-cash.jpg'),
};
