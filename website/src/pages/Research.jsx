import PageHero from '../components/PageHero';
import Newsletter from '../components/Newsletter';
import Button from '../components/Button';
import { researchItems, images } from '../data/content';
import { FileText } from 'lucide-react';

export default function Research() {
  return (
    <>
      <PageHero title="Research" subtitle="Market Intelligence" image={images.research} />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="mx-auto mb-12 max-w-2xl text-center text-navy-800/70">
            Proprietary market research and analysis from our Founder & CEO, a former institutional Wall Street analyst with 15 years of experience.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {researchItems.map((item) => (
              <article key={item.title} className="rounded-2xl border border-navy-900/5 bg-white p-8 shadow-sm">
                <FileText className="h-8 w-8 text-gold-400" />
                <h3 className="mt-4 text-lg font-semibold text-navy-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-800/60">{item.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button to="/blog" variant="outline">Read Our Blog</Button>
          </div>
        </div>
      </section>
      <Newsletter />
    </>
  );
}
