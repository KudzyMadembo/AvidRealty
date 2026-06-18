import { Link } from 'react-router-dom';
import { site } from '../data/content';

export default function Button({ children, to, href, variant = 'primary', className = '', ...props }) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200';
  const variants = {
    primary: 'bg-gold-400 text-navy-950 hover:bg-gold-500 hover:shadow-lg hover:shadow-gold-400/25',
    secondary: 'border border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20',
    outline: 'border border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white',
    dark: 'bg-navy-900 text-white hover:bg-navy-800',
  };
  const classes = `${base} ${variants[variant]} ${className}`;

  if (to) return <Link to={to} className={classes} {...props}>{children}</Link>;
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...props}>{children}</a>;
  return <button type="button" className={classes} {...props}>{children}</button>;
}
