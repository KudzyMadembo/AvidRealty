import PageHero from '../components/PageHero';
import Newsletter from '../components/Newsletter';
import { culturePillars, images } from '../data/content';

export default function Careers() {
  return (
    <>
      <PageHero title="Careers at Avid Realty Partners" subtitle="Join The Avid Team" image={images.careers} />
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="leading-relaxed text-navy-800/70">
            At Avid Realty Partners, we invest in our team members through knowledge development, career building, and hands-on training. We recognize talent, respect hard work, and reward success. Radical Integrity is the cornerstone of everything we do every single day.
          </p>
          <p className="mt-4 leading-relaxed text-navy-800/70">
            We look to attract and retain the smartest and most dedicated people in the real estate industry, hiring team members with a diversity of experience. Our Team&apos;s desire to win, passion for real estate, and commitment to our Investor-Partners have propelled the firm into a trusted partner for Institutions, Family Offices, and High Net Worth investors.
          </p>
        </div>
      </section>
      <section className="bg-cream-100 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-12 text-center font-serif text-2xl text-navy-900">Company Culture</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {culturePillars.map((p) => (
              <div key={p.title} className="rounded-2xl border border-navy-900/5 bg-white p-8 shadow-sm">
                <h3 className="text-lg font-semibold text-navy-900">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-800/60">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Newsletter />
    </>
  );
}
