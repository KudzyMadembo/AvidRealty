import { Play } from 'lucide-react';
import PageHero from '../components/PageHero';
import Newsletter from '../components/Newsletter';
import { webinarReplays, images } from '../data/content';

export default function WebinarReplay() {
  return (
    <>
      <PageHero
        title="Get Ready To Elevate Your Investment Portfolio"
        subtitle="Webinar Replay"
        image={images.interior}
      />
      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-lg text-navy-800/75">
            Embark on an exciting journey with seasoned real estate professional Craig Berger as he reveals insider tips for successful multifamily investing.
          </p>
        </div>
      </section>
      <section className="pb-20">
        <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6">
          {webinarReplays.map((webinar) => (
            <article key={webinar.title} className="overflow-hidden rounded-2xl border border-navy-900/5 bg-white shadow-sm lg:flex">
              <div className="relative lg:w-2/5">
                <img src={webinar.image} alt="" className="h-56 w-full object-cover lg:h-full" />
                <div className="absolute inset-0 flex items-center justify-center bg-navy-950/30">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-400 text-navy-950">
                    <Play className="h-6 w-6 fill-current" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center p-8 lg:w-3/5">
                <h2 className="font-serif text-xl text-navy-900 sm:text-2xl">{webinar.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-navy-800/70">{webinar.description}</p>
                <button type="button" className="mt-6 self-start rounded-full bg-navy-900 px-6 py-2.5 text-sm font-semibold text-white hover:bg-navy-800">
                  Watch Webinar Replay
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
      <Newsletter />
    </>
  );
}
