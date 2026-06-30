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
          <p className="leading-relaxed text-lg text-navy-800/75">
            Avid Realty Partners has completed seven full-cycle multifamily dispositions while creating safe, secure housing for Residents across sunbelt and Midwest markets.
          </p>
        </div>
      </section>
      <StatsBar stats={trackRecordStats} dark />
      <section className="py-20">
        <div className="mx-auto max-w-7xl overflow-x-auto px-4 sm:px-6">
          <h2 className="mb-10 font-serif text-3xl text-navy-900 sm:text-4xl">Notable Multifamily Exits</h2>
          <table className="w-full min-w-[720px] text-left text-lg sm:text-xl">
            <thead>
              <tr className="border-b border-navy-900/10 text-base uppercase tracking-wider text-navy-800/50 sm:text-lg">
                <th className="pb-5 pr-6">Property</th>
                <th className="pb-5 pr-6">Type</th>
                <th className="pb-5 pr-6">IRR</th>
                <th className="pb-5 pr-6">Multiple</th>
                <th className="pb-5">Period</th>
              </tr>
            </thead>
            <tbody>
              {trackRecordDeals.map((d) => (
                <tr key={d.name} className="border-b border-navy-900/5">
                  <td className="py-5 pr-6 font-medium">{d.name}</td>
                  <td className="py-5 pr-6 text-navy-800/60">{d.type}</td>
                  <td className="py-5 pr-6 font-semibold text-gold-500">{d.irr}</td>
                  <td className="py-5 pr-6">{d.multiple}</td>
                  <td className="py-5 text-navy-800/60">{d.period}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      {otherExits.length > 0 && (
        <section className="bg-cream-100 py-16">
          <div className="mx-auto max-w-7xl overflow-x-auto px-4 sm:px-6">
            <h2 className="mb-5 font-serif text-3xl text-navy-900 sm:text-4xl">Additional Historical Exits</h2>
            <p className="mb-10 max-w-3xl text-lg leading-relaxed text-navy-800/65 sm:text-xl">
              Prior investments outside of Avid&apos;s core multifamily strategy, including retail and hospitality assets.
            </p>
            <table className="w-full min-w-[720px] text-left text-lg sm:text-xl">
              <thead>
                <tr className="border-b border-navy-900/10 text-base uppercase tracking-wider text-navy-800/50 sm:text-lg">
                  <th className="pb-5 pr-6">Property</th>
                  <th className="pb-5 pr-6">Type</th>
                  <th className="pb-5 pr-6">IRR</th>
                  <th className="pb-5 pr-6">Multiple</th>
                  <th className="pb-5">Period</th>
                </tr>
              </thead>
              <tbody>
                {otherExits.map((d) => (
                  <tr key={d.name} className="border-b border-navy-900/5">
                    <td className="py-5 pr-6 font-medium">{d.name}</td>
                    <td className="py-5 pr-6 text-navy-800/60">{d.type}</td>
                    <td className="py-5 pr-6 font-semibold text-gold-500">{d.irr}</td>
                    <td className="py-5 pr-6">{d.multiple}</td>
                    <td className="py-5 text-navy-800/60">{d.period}</td>
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
