import PageHero from '../components/PageHero';
import Newsletter from '../components/Newsletter';
import PropertyCard from '../components/Cards';
import { currentInvestments, exitedInvestments, images } from '../data/content';

export default function Portfolio() {
  return (
    <>
      <PageHero title="Portfolio" subtitle="Our Properties" image={images.portfolio} />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-10 font-serif text-2xl text-navy-900">Avid Realty Partners&apos; Portfolio:</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {currentInvestments.map((p) => (
              <PropertyCard key={p.name} property={p} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-cream-100 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-10 font-serif text-2xl text-navy-900">Exited Investments</h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {exitedInvestments.map((p) => (
              <PropertyCard key={p.name} property={p} exited />
            ))}
          </div>
        </div>
      </section>
      <Newsletter />
    </>
  );
}
