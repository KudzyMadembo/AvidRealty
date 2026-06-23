import PageHero from '../components/PageHero';
import Newsletter from '../components/Newsletter';
import LeadForm, { TopicGrid, ChapterList } from '../components/LeadForm';
import { thinkBigContent, images } from '../data/content';

export default function ThinkBig() {
  return (
    <>
      <PageHero
        title={thinkBigContent.headline}
        subtitle={thinkBigContent.subheadline}
        image={images.thinkBig}
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-center font-serif text-2xl text-navy-900">Topics Covered In The eBook</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-navy-800/65">
            Your comprehensive guide to navigating the US real estate market — opportunities and risks for savvy passive investors.
          </p>
          <div className="mt-12">
            <TopicGrid items={thinkBigContent.topics} />
          </div>
        </div>
      </section>
      <section className="bg-cream-100 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <ChapterList chapters={thinkBigContent.chapters} />
          <LeadForm title="Get Your Free Copy" submitLabel="Download the eBook" fields="download" />
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-serif text-2xl text-navy-900">About the Author</h2>
          <p className="mt-4 leading-relaxed text-navy-800/70">
            Written by Craig Berger, Founder &amp; CEO of Avid Realty Partners — a multi-award-winning former Wall Street equities analyst with nearly 20 years of multifamily real estate investing experience.
          </p>
        </div>
      </section>
      <Newsletter />
    </>
  );
}
