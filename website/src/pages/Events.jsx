import PageHero from '../components/PageHero';
import Newsletter from '../components/Newsletter';
import { events, images } from '../data/content';
import { Calendar, MapPin } from 'lucide-react';

export default function Events() {
  return (
    <>
      <PageHero title="Events" subtitle="Media" image={images.events} />
      <section className="py-20">
        <div className="mx-auto max-w-3xl space-y-6 px-4 sm:px-6">
          {events.map((e) => (
            <article key={e.title} className="rounded-2xl border border-navy-900/5 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-navy-900">{e.title}</h3>
              <div className="mt-3 flex flex-wrap gap-4 text-sm text-navy-800/60">
                <span className="flex items-center gap-1"><Calendar className="h-4 w-4" />{e.date}</span>
                <span className="flex items-center gap-1"><MapPin className="h-4 w-4" />{e.location}</span>
              </div>
              <p className="mt-4 text-navy-800/70">{e.description}</p>
            </article>
          ))}
        </div>
      </section>
      <Newsletter />
    </>
  );
}
