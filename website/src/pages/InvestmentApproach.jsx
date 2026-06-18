import PageHero from '../components/PageHero';
import Newsletter from '../components/Newsletter';
import { images } from '../data/content';

const points = [
  'Hundreds of deals are sourced and analyzed in order to complete one acquisition',
  'Conservative assumptions are used to project rent growth, occupancy and operating expenses',
  'Our underwriting is compared to and adjusted for actual operating information in Avid\'s proprietary database',
  'We focus on existing properties with value-add potential in markets with strong fundamentals',
];

export default function InvestmentApproach() {
  return (
    <>
      <PageHero title="Investment Approach" subtitle="How We Invest" image={images.analytics} />
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="leading-relaxed text-navy-800/70">
              Avid Realty Partners is building a national footprint, with a particular focus on sunbelt growth locations. We invest for the long-term, and seek to grow cash flows and realize significant appreciation upon exit.
            </p>
            <p className="mt-4 leading-relaxed text-navy-800/70">
              The Avid Team utilizes best-in-class asset management tools and processes to drive top-flight property-level execution, with an intense focus on property management, resulting in above average market returns.
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
      <Newsletter />
    </>
  );
}
