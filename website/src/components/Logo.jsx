import { Link } from 'react-router-dom';
import { site } from '../data/content';

const asset = (file) => `${import.meta.env.BASE_URL}${file}`;

export default function Logo({ variant = 'full', size = 'md', className = '' }) {
  const sizes = {
    sm: 'h-11 w-auto sm:h-12',
    md: 'h-14 w-auto sm:h-16 lg:h-[4.5rem]',
  };

  if (variant === 'icon') {
    return (
      <img
        src={asset('favicon.png')}
        alt={`${site.name} logo`}
        className={`h-8 w-8 object-contain ${className}`}
        width={32}
        height={32}
      />
    );
  }

  return (
    <img
      src={asset('logo.png')}
      alt={`${site.name} logo`}
      className={`${sizes[size] ?? sizes.md} object-contain ${className}`}
      width={180}
      height={120}
      loading="eager"
      decoding="async"
    />
  );
}

export function LogoLink({ variant = 'full', size = 'md', className = '' }) {
  return (
    <Link to="/" className={`inline-flex shrink-0 items-center ${className}`}>
      <Logo variant={variant} size={size} />
    </Link>
  );
}
