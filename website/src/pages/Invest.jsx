import { Quote } from 'lucide-react';
import PageHero from '../components/PageHero';
import Newsletter from '../components/Newsletter';
import LeadForm from '../components/LeadForm';
import { testimonials, images } from '../data/content';

export default function Invest() {
  return (
    <>
      <PageHero title="Invest With Us" subtitle="Partner With Avid" image={images.heroAlt} />
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-lg leading-relaxed text-navy-800/75">
            We have over 15 years of experience evaluating high-volatile investment products on Wall Street — now applied to sunbelt multifamily real estate for qualified Investor-Partners.
          </p>
        </div>
      </section>
      <section className="pb-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <LeadForm title="Investor Information Form" submitLabel="Submit" fields="investor" />
          <div>
            <h2 className="font-serif text-2xl text-navy-900">Why Investors Choose Avid</h2>
            <ul className="mt-6 space-y-3 text-sm text-navy-800/70">
              <li className="flex gap-2"><span className="text-gold-500">✓</span> Zero realized losses across six exited deals</li>
              <li className="flex gap-2"><span className="text-gold-500">✓</span> 33% weighted average realized IRR</li>
              <li className="flex gap-2"><span className="text-gold-500">✓</span> Deal-by-deal LP, promissory note, 1031, and fund options</li>
              <li className="flex gap-2"><span className="text-gold-500">✓</span> Transparent modeling and regular investor updates</li>
              <li className="flex gap-2"><span className="text-gold-500">✓</span> Institutional underwriting from a Wall Street analyst founder</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-cream-100 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-center font-serif text-3xl text-navy-900">Testimonials</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote key={t.name} className="rounded-2xl border border-navy-900/5 bg-white p-8 shadow-sm">
                <Quote className="h-7 w-7 text-gold-400/50" />
                <p className="mt-4 text-sm leading-relaxed text-navy-800/70">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-6 border-t border-navy-900/5 pt-4">
                  <div className="font-semibold text-navy-900">{t.name}</div>
                  <div className="text-xs text-navy-800/50">{t.role}</div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
      <Newsletter />
    </>
  );
}
