import PageHero from '../components/PageHero';
import Newsletter from '../components/Newsletter';
import { images } from '../data/content';

export default function WhyAvid() {
  return (
    <>
      <PageHero title="Why Invest with Avid Realty Partners?" subtitle="Why Avid" image={images.team} />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="mx-auto max-w-3xl text-center text-lg text-navy-800/70">
            Avid Offers Strong Competitive Advantages versus other real estate investment firms.
          </p>
          <div className="mt-16 grid gap-10 lg:grid-cols-2">
            <div className="rounded-2xl border border-navy-900/5 bg-white p-10 shadow-sm">
              <h3 className="font-serif text-2xl text-navy-900">World Class Team</h3>
              <p className="mt-4 leading-relaxed text-navy-800/70">
                Our firm was founded by a multi-award-winning Wall Street equities analyst. Our experienced team brings best-in-class accounting, analytics, asset management, and institutional sophistication to Commercial Real Estate investing. Over time, this translates into outsized Alpha for our Investors.
              </p>
            </div>
            <div className="rounded-2xl border border-navy-900/5 bg-white p-10 shadow-sm">
              <h3 className="font-serif text-2xl text-navy-900">Experts in Sunbelt Metros</h3>
              <p className="mt-4 leading-relaxed text-navy-800/70">
                Our investment focus is on high growth sunbelt markets like Dallas, Austin, Houston, Atlanta, Orlando, Tampa, and Phoenix. Population growth tends to be faster in these secondary & tertiary cities, thus allowing for higher investment returns. We have team members and preferred management companies located in some of these locations.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Newsletter />
    </>
  );
}
