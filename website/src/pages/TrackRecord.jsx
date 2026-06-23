import PageHero from '../components/PageHero';
import StatsBar from '../components/StatsBar';
import Newsletter from '../components/Newsletter';
import { trackRecordStats, trackRecordDeals, otherExits, images } from '../data/content';

export default function TrackRecord() {
  return (
    <>
      <PageHero title="Track Record" subtitle="Profits with a Purpose" image={images.trackRecord} />
      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="leading-relaxed text-navy-800/70">
            Avid Realty Partners has completed seven full-cycle multifamily dispositions with zero realized capital losses and a 32% weighted average gross IRR across exited deals — while creating safe, secure housing for Residents across sunbelt and Midwest markets.
          </p>
        </div>
      </section>
      <StatsBar stats={trackRecordStats} dark />
      <section className="py-20">
        <div className="mx-auto max-w-7xl overflow-x-auto px-4 sm:px-6">
          <h2 className="mb-8 font-serif text-2xl text-navy-900">Notable Multifamily Exits</h2>
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
      {otherExits.length > 0 && (
        <section className="bg-cream-100 py-16">
          <div className="mx-auto max-w-7xl overflow-x-auto px-4 sm:px-6">
            <h2 className="mb-4 font-serif text-xl text-navy-900">Additional Historical Exits</h2>
            <p className="mb-8 max-w-2xl text-sm text-navy-800/60">
              Prior investments outside of Avid&apos;s core multifamily strategy, including retail and hospitality assets.
            </p>
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
                {otherExits.map((d) => (
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
      )}
      <Newsletter />
    </>
  );
}
