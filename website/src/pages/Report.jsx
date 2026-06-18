import PageHero from '../components/PageHero';
import Newsletter from '../components/Newsletter';
import LeadForm, { TopicGrid, ChapterList } from '../components/LeadForm';
import { reportContent, craigBergerBio, images } from '../data/content';

export default function Report() {
  return (
    <>
      <PageHero
        title={reportContent.headline}
        subtitle={reportContent.subheadline}
        image={images.research}
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-center font-serif text-2xl text-navy-900">Topics Covered In The Report</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-navy-800/65">
            A comprehensive overview of the 2023 market for proactive decision-making — economic trends, recession risks, and multifamily dynamics.
          </p>
          <div className="mt-12">
            <TopicGrid items={reportContent.topics} />
          </div>
        </div>
      </section>
      <section className="bg-cream-100 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <ChapterList chapters={reportContent.chapters} title="Topics Included" />
          <LeadForm title="Get Your Free Report" submitLabel="Download the Report" fields="download" />
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-serif text-2xl text-navy-900">Why Is This Report A Must-Read?</h2>
          <p className="mt-4 leading-relaxed text-navy-800/70">
            This report offers valuable insights into economic trends, recession risks, and multifamily real estate dynamics — equipping readers with knowledge to make informed decisions, seize opportunities, and stay ahead of the curve.
          </p>
        </div>
      </section>
      <section className="border-t border-navy-900/5 bg-white py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[200px_1fr]">
          <img src={craigBergerBio.image} alt={craigBergerBio.name} className="mx-auto w-full max-w-[200px] rounded-xl object-cover" />
          <div>
            <h3 className="font-serif text-xl text-navy-900">{craigBergerBio.name}</h3>
            <p className="text-sm text-gold-500">{craigBergerBio.title}</p>
            <p className="mt-3 text-sm leading-relaxed text-navy-800/65">{craigBergerBio.paragraphs[0]}</p>
          </div>
        </div>
      </section>
      <Newsletter />
    </>
  );
}
