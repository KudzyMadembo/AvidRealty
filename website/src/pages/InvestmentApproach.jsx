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
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="font-serif text-3xl text-navy-900 sm:text-4xl">{investmentThesis.headline}</h2>
          <p className="mt-8 text-lg leading-relaxed text-navy-800/75 sm:text-xl">{investmentThesis.summary}</p>
          <p className="mt-6 text-base font-medium text-gold-600 sm:text-lg">{investmentThesis.deploymentTarget}</p>
        </div>
      </section>
      <section className="bg-cream-100 py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-navy-800/75">
              Avid Realty Partners is building a national footprint across sunbelt and select Midwest growth markets. We invest for the long-term — typically a 3–7 year hold with a 5-year base-case underwriting — seeking to grow cash flows and realize appreciation upon exit.
            </p>
            <p className="text-lg leading-relaxed text-navy-800/75">
              The Avid Team utilizes best-in-class asset management tools and processes to drive top-flight property-level execution, with an intense focus on property management, resulting in above-average market returns.
            </p>
          </div>
          <div className="rounded-2xl bg-navy-900 p-8 sm:p-10 text-white">
            <h3 className="font-serif text-2xl text-gold-400">Highly Analytic Underwriting</h3>
            <ul className="mt-8 space-y-5">
              {points.map((p) => (
                <li key={p} className="flex gap-4 text-base leading-relaxed text-white/85 sm:text-lg">
                  <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-gold-400" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-center font-serif text-3xl text-navy-900 sm:text-4xl">Target Markets &amp; Criteria</h2>
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            <div className="rounded-2xl border border-navy-900/5 bg-white p-8 shadow-sm sm:p-10">
              <h3 className="font-serif text-xl text-navy-900 sm:text-2xl">Sunbelt Markets</h3>
              <p className="mt-4 text-base leading-relaxed text-navy-800/70 sm:text-lg">
                {targetMarkets.sunbelt.join(', ')}
              </p>
              <h3 className="mt-8 font-serif text-xl text-navy-900 sm:text-2xl">Select Midwest</h3>
              <p className="mt-3 text-base leading-relaxed text-navy-800/70 sm:text-lg">
                {targetMarkets.midwest.join(', ')}
              </p>
            </div>
            <div className="rounded-2xl border border-navy-900/5 bg-white p-8 shadow-sm sm:p-10">
              <h3 className="font-serif text-xl text-navy-900 sm:text-2xl">Supply-Wave Metros</h3>
              <p className="mt-4 text-base leading-relaxed text-navy-800/70 sm:text-lg">
                Active in markets experiencing a multifamily supply wave — {targetMarkets.supplyWave.join(', ')} — where distressed sellers and refinancing pressure create buying opportunities.
              </p>
              <p className="mt-6 text-base leading-relaxed text-navy-800/70 sm:text-lg">{acquisitionCriteria.demographics}</p>
            </div>
            <div className="rounded-2xl border border-navy-900/5 bg-white p-8 shadow-sm sm:p-10">
              <h3 className="font-serif text-xl text-navy-900 sm:text-2xl">Property Types</h3>
              <ul className="mt-4 space-y-5">
                {acquisitionCriteria.propertyTypes.map((t) => (
                  <li key={t.label} className="text-base leading-relaxed text-navy-800/70 sm:text-lg">
                    <span className="font-semibold text-navy-900">{t.label}:</span> {t.description}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-base leading-relaxed text-navy-800/70 sm:text-lg">{acquisitionCriteria.holdPeriod}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-navy-950 py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-center font-serif text-3xl text-gold-400 sm:text-4xl">Risk Management Framework</h2>
          <ul className="mt-12 space-y-5">
            {riskFramework.map((item) => (
              <li key={item} className="flex gap-4 text-base leading-relaxed text-white/85 sm:text-lg">
                <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-gold-400" />
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
