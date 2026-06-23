import { Link } from 'react-router-dom';
import { MapPin, Building2 } from 'lucide-react';

export default function PropertyCard({ property, exited = false, pipeline = false }) {
  const details = [
    property.yearBuilt && { label: 'Year Built', value: property.yearBuilt },
    property.units && { label: 'Units', value: property.units },
    property.acquired && { label: 'Date Acquired', value: property.acquired },
    property.sold && { label: 'Date Sold', value: property.sold },
    property.investmentType && { label: 'Investment Type', value: property.investmentType },
    property.targetPeriod && { label: 'Target Period', value: property.targetPeriod },
    property.minInvestment && { label: 'Min. Investment', value: property.minInvestment },
    property.equityRequired && { label: 'Equity Required', value: property.equityRequired },
    property.targetIRR && { label: pipeline ? 'Projected Gross IRR' : 'Target IRR', value: property.targetIRR, highlight: true },
    property.equityMultiple && { label: 'Equity Multiple', value: property.equityMultiple, highlight: true },
    property.irr && { label: 'Realized IRR', value: property.irr, highlight: true },
    property.period && { label: 'Hold Period', value: property.period },
  ].filter(Boolean);

  return (
    <article className="group overflow-hidden rounded-2xl border border-navy-900/10 bg-white shadow-sm transition-shadow hover:shadow-xl">
      {property.image && (
        <div className="relative h-52 overflow-hidden">
          <img
            src={property.image}
            alt={property.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {exited && (
            <span className="absolute left-4 top-4 rounded-full bg-gold-400 px-3 py-1 text-xs font-semibold text-navy-950">
              Exited
            </span>
          )}
          {pipeline && (
            <span className="absolute left-4 top-4 rounded-full bg-navy-900 px-3 py-1 text-xs font-semibold text-gold-400">
              Pipeline
            </span>
          )}
        </div>
      )}
      <div className="p-6">
        <h3 className="font-serif text-lg text-navy-900">{property.name}</h3>
        <div className="mt-2 flex flex-wrap gap-3 text-sm text-navy-800/60">
          <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{property.location}</span>
          <span className="flex items-center gap-1"><Building2 className="h-3.5 w-3.5" />{property.type}</span>
        </div>
        <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
          {details.map((d) => (
            <div key={d.label} className="contents">
              <dt className="text-navy-800/50">{d.label}</dt>
              <dd className={`font-medium ${d.highlight ? 'text-gold-500' : ''}`}>{d.value}</dd>
            </div>
          ))}
        </dl>
        {property.highlights?.length > 0 && (
          <ul className="mt-4 space-y-1.5 border-t border-navy-900/5 pt-4 text-sm text-navy-800/65">
            {property.highlights.map((h) => (
              <li key={h} className="flex gap-2">
                <span className="text-gold-500">•</span>
                {h}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

export function BlogCard({ post }) {
  return (
    <Link to={`/blog/${post.slug}`} className="group block overflow-hidden rounded-2xl border border-navy-900/10 bg-white shadow-sm transition-shadow hover:shadow-xl">
      <div className="h-48 overflow-hidden">
        <img src={post.image} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="p-6">
        <div className="text-xs font-semibold uppercase tracking-wider text-gold-500">{post.category}</div>
        <h3 className="mt-2 font-serif text-lg text-navy-900">{post.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-navy-800/60">{post.excerpt}</p>
        <div className="mt-4 text-xs text-navy-800/40">{post.date} · {post.author}</div>
      </div>
    </Link>
  );
}

export function TeamCard({ member }) {
  return (
    <div className="text-center">
      <div className="mx-auto h-40 w-40 overflow-hidden rounded-full border-4 border-cream-100 shadow-lg">
        <img src={member.image} alt={member.name} className="h-full w-full object-cover" />
      </div>
      <h3 className="mt-4 font-serif text-lg text-navy-900">{member.name}</h3>
      <p className="text-sm text-navy-800/60">{member.title}</p>
    </div>
  );
}
