import PageHero from '../components/PageHero';
import Newsletter from '../components/Newsletter';
import {
  images,
  investmentThesis,
  targetMarkets,
  acquisitionCriteria,
  riskFramework,
} from '../data/content';

const points = [
  'Hundreds of deals are sourced and analyzed in order to complete one acquisition',
  'Conservative assumptions are used to project rent growth, occupancy and operating expenses',
  'Our underwriting is compared to and adjusted for actual operating information in Avid\'s proprietary database',
  'We target core-plus (2015–2026) and value-add (1980s–2000s) assets in markets with strong demographics',
];

export default function InvestmentApproach() {
  return (
    <>
      <PageHero title="Investment Approach" subtitle="How We Invest" image={images.investmentApproach} />
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-serif text-2xl text-navy-900">{investmentThesis.headline}</h2>
          <p className="mt-6 leading-relaxed text-navy-800/70">{investmentThesis.summary}</p>
          <p className="mt-4 text-sm font-medium text-gold-600">{investmentThesis.deploymentTarget}</p>
        </div>
      </section>
      <section className="bg-cream-100 py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="leading-relaxed text-navy-800/70">
              Avid Realty Partners is building a national footprint across sunbelt and select Midwest growth markets. We invest for the long-term — typically a 3–7 year hold with a 5-year base-case underwriting — seeking to grow cash flows and realize appreciation upon exit.
            </p>
            <p className="mt-4 leading-relaxed text-navy-800/70">
              The Avid Team utilizes best-in-class asset management tools and processes to drive top-flight property-level execution, with an intense focus on property management, resulting in above-average market returns.
            </p>
          </div>
          <div className="rounded-2xl bg-navy-900 p-8 text-white">
            <h3 className="font-serif text-xl text-gold-400">Highly Analytic Underwriting</h3>
            <ul className="mt-6 space-y-4">
              {points.map((p) => (
                <li key={p} className="flex gap-3 text-sm leading-relaxed text-white/80">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-center font-serif text-2xl text-navy-900">Target Markets &amp; Criteria</h2>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <div className="rounded-2xl border border-navy-900/5 bg-white p-8 shadow-sm">
              <h3 className="font-serif text-lg text-navy-900">Sunbelt Markets</h3>
              <p className="mt-4 text-sm leading-relaxed text-navy-800/65">
                {targetMarkets.sunbelt.join(', ')}
              </p>
              <h3 className="mt-6 font-serif text-lg text-navy-900">Select Midwest</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-800/65">
                {targetMarkets.midwest.join(', ')}
              </p>
            </div>
            <div className="rounded-2xl border border-navy-900/5 bg-white p-8 shadow-sm">
              <h3 className="font-serif text-lg text-navy-900">Supply-Wave Metros</h3>
              <p className="mt-4 text-sm leading-relaxed text-navy-800/65">
                Active in markets experiencing a multifamily supply wave — {targetMarkets.supplyWave.join(', ')} — where distressed sellers and refinancing pressure create buying opportunities.
              </p>
              <p className="mt-6 text-sm leading-relaxed text-navy-800/65">{acquisitionCriteria.demographics}</p>
            </div>
            <div className="rounded-2xl border border-navy-900/5 bg-white p-8 shadow-sm">
              <h3 className="font-serif text-lg text-navy-900">Property Types</h3>
              <ul className="mt-4 space-y-4">
                {acquisitionCriteria.propertyTypes.map((t) => (
                  <li key={t.label} className="text-sm text-navy-800/65">
                    <span className="font-semibold text-navy-900">{t.label}:</span> {t.description}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-navy-800/65">{acquisitionCriteria.holdPeriod}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-navy-950 py-20 text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-center font-serif text-2xl text-gold-400">Risk Management Framework</h2>
          <ul className="mt-10 space-y-4">
            {riskFramework.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-white/80">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Newsletter />
    </>
  );
}
