import PageHero from '../components/PageHero';
import Newsletter from '../components/Newsletter';
import LeadForm, { TopicGrid, ChapterList } from '../components/LeadForm';
import { reportContent, images } from '../data/content';

export default function Report() {
  return (
    <>
      <PageHero
        title={reportContent.headline}
        subtitle={reportContent.subheadline}
        image={images.report}
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
      <Newsletter />
    </>
  );
}
