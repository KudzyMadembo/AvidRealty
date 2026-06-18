import { Link } from 'react-router-dom';
import { site, navLinks } from '../data/content';

export default function Footer() {
  const about = navLinks.find((n) => n.label === 'About')?.children ?? [];
  const media = navLinks.find((n) => n.label === 'Media')?.children ?? [];

  return (
    <footer className="bg-navy-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="mb-4 inline-block">
              <img src={site.logo} alt={site.name} className="h-12 w-auto" />
            </Link>
            <p className="text-sm leading-relaxed text-white/60">
              A multifamily real estate investment platform delivering institutional analytics, sunbelt expertise, and proven returns.
            </p>
            <div className="mt-4 flex gap-3">
              <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-gold-400" aria-label="LinkedIn">LinkedIn</a>
              <a href={site.social.youtube} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-gold-400" aria-label="YouTube">YouTube</a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gold-400">About</h4>
            <ul className="space-y-2">
              {about.map((l) => (
                <li key={l.path}><Link to={l.path} className="text-sm text-white/60 hover:text-white">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gold-400">Media</h4>
            <ul className="space-y-2">
              {media.map((l) => (
                <li key={l.path}><Link to={l.path} className="text-sm text-white/60 hover:text-white">{l.label}</Link></li>
              ))}
            </ul>
            <h4 className="mb-4 mt-6 text-xs font-semibold uppercase tracking-wider text-gold-400">Learn More</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><Link to="/investment-opportunities" className="hover:text-white">Investment Opportunities</Link></li>
              <li><Link to="/portfolio" className="hover:text-white">Portfolio</Link></li>
              <li><Link to="/research" className="hover:text-white">Research</Link></li>
              <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gold-400">Contact</h4>
            <address className="not-italic text-sm leading-relaxed text-white/60">
              {site.name}<br />
              {site.address}<br />
              {site.city}<br />
              <a href={`tel:${site.phone}`} className="hover:text-white">{site.phone}</a>
            </address>
            <Link to="/contact" className="mt-4 inline-block text-sm text-gold-400 hover:text-gold-500">
              Get in Touch →
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/40">© {new Date().getFullYear()} Avid Realty Partners.</p>
          <div className="flex gap-6 text-xs text-white/40">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
