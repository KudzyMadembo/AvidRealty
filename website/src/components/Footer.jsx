import { Link } from 'react-router-dom';
import { site, navLinks } from '../data/content';
import { LogoLink } from './Logo';

const linkClass = 'text-[13px] leading-snug text-white/55 transition-colors hover:text-white';

export default function Footer() {
  const about = navLinks.find((n) => n.label === 'About')?.children ?? [];
  const media = navLinks.find((n) => n.label === 'Media')?.children ?? [];

  const learnMore = [
    { label: 'Investment Opportunities', path: '/investment-opportunities' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Research', path: '/research' },
    { label: 'Careers', path: '/careers' },
    { label: 'Invest with Us', path: '/invest' },
  ];

  return (
    <footer className="border-t border-white/10 bg-navy-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-10">
        <div className="grid grid-cols-2 items-start gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-8">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <LogoLink className="mb-3" size="sm" />
            <p className="max-w-xs text-[13px] leading-relaxed text-white/50">
              Multifamily investment platform with institutional analytics and sunbelt expertise.
            </p>
            <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
              {[
                { label: 'LinkedIn', href: site.social.linkedin },
                { label: 'YouTube', href: site.social.youtube },
                { label: 'Instagram', href: site.social.instagram },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px] text-white/40 hover:text-gold-400"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* About */}
          <div>
            <h4 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold-400/90">
              About
            </h4>
            <ul className="space-y-1.5">
              {about.map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className={linkClass}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Media */}
          <div>
            <h4 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold-400/90">
              Media
            </h4>
            <ul className="space-y-1.5">
              {media.map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className={linkClass}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn More */}
          <div>
            <h4 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold-400/90">
              Learn More
            </h4>
            <ul className="space-y-1.5">
              {learnMore.map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className={linkClass}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold-400/90">
              Contact
            </h4>
            <address className="space-y-1 not-italic text-[13px] leading-snug text-white/55">
              <span className="block">{site.address}</span>
              <span className="block">{site.city}</span>
              <a href={`tel:${site.phone}`} className="block hover:text-white">{site.phone}</a>
              <a href={`mailto:${site.email}`} className="block break-all hover:text-white">{site.email}</a>
            </address>
            <Link to="/contact" className="mt-3 inline-block text-[12px] font-medium text-gold-400 hover:text-gold-500">
              Get in Touch →
            </Link>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-[11px] text-white/35">© {new Date().getFullYear()} Avid Realty Partners. All rights reserved.</p>
          <div className="flex gap-5 text-[11px] text-white/35">
            <Link to="/privacy" className="hover:text-white/70">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white/70">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
