import { Link } from 'react-router-dom';
import { site } from '../data/content';
import logoImg from '../assets/brand/logo.png';
import faviconImg from '../assets/brand/favicon.png';

export default function Logo({ variant = 'full', size = 'md', className = '' }) {
  const sizes = {
    sm: 'h-7 w-auto max-w-[140px] sm:max-w-[150px]',
    md: 'h-8 w-auto max-w-[160px] sm:h-9 sm:max-w-[180px]',
  };

  if (variant === 'icon') {
    return (
      <img
        src={faviconImg}
        alt={`${site.name} logo`}
        className={`h-8 w-8 object-contain ${className}`}
        width={32}
        height={32}
      />
    );
  }

  return (
    <img
      src={logoImg}
      alt={`${site.name} logo`}
      className={`${sizes[size] ?? sizes.md} object-contain ${className}`}
      width={180}
      height={36}
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
