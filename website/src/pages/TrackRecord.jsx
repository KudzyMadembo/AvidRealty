import PageHero from '../components/PageHero';
import StatsBar from '../components/StatsBar';
import Newsletter from '../components/Newsletter';
import { trackRecordStats, trackRecordDeals, images } from '../data/content';

export default function TrackRecord() {
  return (
    <>
      <PageHero title="Track Record" subtitle="Profits with a Purpose" image={images.building} />
      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="leading-relaxed text-navy-800/70">
            Investing directly into commercial real estate offers passive income generation, robust total returns, and favorable tax treatment. At Avid Realty Partners, you can enjoy passive wealth creation while participating in investments that create social good.
          </p>
        </div>
      </section>
      <StatsBar stats={trackRecordStats} dark />
      <section className="py-20">
        <div className="mx-auto max-w-7xl overflow-x-auto px-4 sm:px-6">
          <h2 className="mb-8 font-serif text-2xl text-navy-900">Exited Properties</h2>
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-navy-900/10 text-xs uppercase tracking-wider text-navy-800/50">
                <th className="pb-4 pr-4">Property</th>
                <th className="pb-4 pr-4">Type</th>
                <th className="pb-4 pr-4">IRR</th>
                <th className="pb-4 pr-4">Multiple</th>
                <th className="pb-4">Period</th>
              </tr>
            </thead>
            <tbody>
              {trackRecordDeals.map((d) => (
                <tr key={d.name} className="border-b border-navy-900/5">
                  <td className="py-4 pr-4 font-medium">{d.name}</td>
                  <td className="py-4 pr-4 text-navy-800/60">{d.type}</td>
                  <td className="py-4 pr-4 font-semibold text-gold-500">{d.irr}</td>
                  <td className="py-4 pr-4">{d.multiple}</td>
                  <td className="py-4 text-navy-800/60">{d.period}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <Newsletter />
    </>
  );
}
