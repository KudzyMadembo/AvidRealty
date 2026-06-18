import { Play } from 'lucide-react';
import PageHero from '../components/PageHero';
import Newsletter from '../components/Newsletter';
import { videos, images } from '../data/content';

export default function Videos() {
  return (
    <>
      <PageHero title="Videos" subtitle="Latest Videos & Podcasts" image={images.interior} />
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2">
          {videos.map((v) => (
            <article key={v.title} className="group overflow-hidden rounded-2xl border border-navy-900/5 bg-white shadow-sm lg:flex">
              <div className="relative lg:w-2/5">
                <img src={v.thumbnail} alt="" className="h-48 w-full object-cover lg:h-full" />
                <div className="absolute inset-0 flex items-center justify-center bg-navy-950/25 opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-navy-900">
                    <Play className="h-5 w-5 fill-current" />
                  </div>
                </div>
                <span className="absolute bottom-2 right-2 rounded bg-navy-950/80 px-2 py-0.5 text-xs text-white">{v.duration}</span>
              </div>
              <div className="p-6 lg:w-3/5">
                <time className="text-xs text-navy-800/45">{v.date}</time>
                <h3 className="mt-1 font-serif text-lg text-navy-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-800/65">{v.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <Newsletter />
    </>
  );
}
