import PageHero from '../components/PageHero';
import Newsletter from '../components/Newsletter';
import Button from '../components/Button';
import { craigBergerBio, coreValues, images } from '../data/content';

export default function About() {
  return (
    <>
      <PageHero title="Overview" subtitle="About Us" image={images.skyline} />
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-[320px_1fr]">
          <div className="text-center lg:text-left">
            <img
              src={craigBergerBio.image}
              alt={craigBergerBio.name}
              className="mx-auto aspect-[4/5] w-full max-w-[280px] rounded-2xl object-cover shadow-xl lg:mx-0"
            />
            <h2 className="mt-6 font-serif text-2xl text-navy-900">{craigBergerBio.name}</h2>
            <p className="mt-1 text-sm font-medium text-gold-500">{craigBergerBio.title}</p>
          </div>
          <div>
            {craigBergerBio.paragraphs.map((p) => (
              <p key={p.slice(0, 50)} className="mb-4 leading-relaxed text-navy-800/75">{p}</p>
            ))}
            <Button to="/team" variant="outline" className="mt-4">Meet the Avid Team</Button>
          </div>
        </div>
      </section>
      <section className="bg-cream-100 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-center font-serif text-3xl text-navy-900">Core Values</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((v) => (
              <div key={v.title} className="rounded-2xl border border-navy-900/5 bg-white p-6 shadow-sm">
                <h3 className="font-serif text-lg text-navy-900">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-800/65">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Newsletter />
    </>
  );
}
