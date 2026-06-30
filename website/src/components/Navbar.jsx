import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { navLinks, site } from '../data/content';
import Button from './Button';
import { LogoLink } from './Logo';
import { PhoneLink, SocialLinks } from './SocialLinks';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="bg-navy-950 text-white/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm sm:px-6">
          <div className="flex items-center gap-4">
            <PhoneLink />
            <SocialLinks className="hidden sm:flex" />
          </div>
          <div className="flex items-center gap-4">
            <Link to="/research" className="hover:text-gold-400">Research</Link>
            <a href={site.investorPortal} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white/10 px-3 py-1 hover:bg-white/20">
              Investor Portal
            </a>
          </div>
        </div>
      </div>

      <nav className="border-b border-white/10 bg-navy-900/95 backdrop-blur-md">
        <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6">
          <LogoLink />

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setDropdown(item.label)}
                  onMouseLeave={() => setDropdown(null)}
                >
                  <button className="flex items-center gap-1 rounded-lg px-3 py-2 text-base text-white/90 hover:bg-white/10 hover:text-white">
                    {item.label}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {dropdown === item.label && (
                    <div className="absolute left-0 top-full min-w-[220px] rounded-xl border border-white/10 bg-navy-900 py-2 shadow-2xl">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={`block px-4 py-2.5 text-base hover:bg-white/10 ${isActive(child.path) ? 'text-gold-400' : 'text-white/80'}`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`rounded-lg px-3 py-2 text-base hover:bg-white/10 ${isActive(item.path) ? 'text-gold-400' : 'text-white/90'}`}
                >
                  {item.label}
                </Link>
              )
            )}
            <Button to="/invest" className="ml-2 !py-2.5 !text-sm">Invest with Us</Button>
          </div>

          <button
            type="button"
            className="rounded-lg p-2 text-white lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="border-t border-white/10 bg-navy-900 px-4 py-4 lg:hidden">
            {navLinks.map((item) =>
              item.children ? (
                <div key={item.label} className="mb-3">
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-gold-400">{item.label}</div>
                  {item.children.map((child) => (
                    <Link key={child.path} to={child.path} onClick={() => setOpen(false)} className="block py-2 text-base text-white/80">
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link key={item.path} to={item.path} onClick={() => setOpen(false)} className="block py-2 text-base text-white/80">
                  {item.label}
                </Link>
              )
            )}
            <Button to="/invest" className="mt-4 w-full">Invest with Us</Button>
            <SocialLinks className="mt-6 justify-center" />
          </div>
        )}
      </nav>
    </header>
  );
}
