import PageHero from '../components/PageHero';
import Newsletter from '../components/Newsletter';
import { images, investmentThesis, targetMarkets } from '../data/content';

export default function WhyAvid() {
  return (
    <>
      <PageHero title="Why Invest with Avid Realty Partners?" subtitle="Why Avid" image={images.whyAvid} />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="mx-auto max-w-3xl text-center text-lg text-navy-800/70">
            Avid offers strong competitive advantages versus other real estate investment firms — institutional operations, meaningful sponsor co-investment, and a disciplined focus on acquiring during market dislocation.
          </p>
          <div className="mt-16 grid gap-10 lg:grid-cols-2">
            <div className="rounded-2xl border border-navy-900/5 bg-white p-10 shadow-sm">
              <h3 className="font-serif text-2xl text-navy-900">World Class Team</h3>
              <p className="mt-4 leading-relaxed text-navy-800/70">
                Our firm was founded by Craig Berger, a CPA/CFA and former Wall Street semiconductor analyst. Our experienced leadership brings best-in-class accounting, analytics, acquisitions, and institutional sophistication to commercial real estate investing — with $8M of sponsor capital co-invested alongside Investor-Partners.
              </p>
            </div>
            <div className="rounded-2xl border border-navy-900/5 bg-white p-10 shadow-sm">
              <h3 className="font-serif text-2xl text-navy-900">Buying Below Replacement Cost</h3>
              <p className="mt-4 leading-relaxed text-navy-800/70">
                {investmentThesis.summary}
              </p>
            </div>
            <div className="rounded-2xl border border-navy-900/5 bg-white p-10 shadow-sm lg:col-span-2">
              <h3 className="font-serif text-2xl text-navy-900">Sunbelt &amp; Midwest Focus</h3>
              <p className="mt-4 leading-relaxed text-navy-800/70">
                Our investment focus spans high-growth sunbelt states — {targetMarkets.sunbelt.join(', ')} — plus select Midwest markets including {targetMarkets.midwest.join(', ')}. We are particularly active in supply-wave metros such as {targetMarkets.supplyWave.join(', ')}, where refinancing distress and peak-cycle acquisitions by other owners create compelling entry points for disciplined buyers.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Newsletter />
    </>
  );
}
