import PageHero from '../components/PageHero';
import Newsletter from '../components/Newsletter';
import { newsItems, images } from '../data/content';

export default function News() {
  return (
    <>
      <PageHero title="News" subtitle="Media" image={images.news} />
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="space-y-0 divide-y divide-navy-900/10">
            {newsItems.map((item) => (
              <article key={item.title} className="py-8 first:pt-0">
                <time className="text-xs font-semibold uppercase tracking-wider text-gold-500">{item.date}</time>
                <h3 className="mt-2 font-serif text-xl text-navy-900">{item.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Newsletter />
    </>
  );
}
