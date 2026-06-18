import PageHero from '../components/PageHero';
import Newsletter from '../components/Newsletter';
import LeadForm, { TopicGrid, ChapterList } from '../components/LeadForm';
import { thinkBigContent, craigBergerBio, images } from '../data/content';

export default function ThinkBig() {
  return (
    <>
      <PageHero
        title={thinkBigContent.headline}
        subtitle={thinkBigContent.subheadline}
        image={images.analytics}
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
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[280px_1fr]">
          <img src={craigBergerBio.image} alt={craigBergerBio.name} className="mx-auto w-full max-w-[280px] rounded-2xl object-cover shadow-lg" />
          <div>
            <h2 className="font-serif text-2xl text-navy-900">About the Author</h2>
            <h3 className="mt-2 text-lg font-semibold text-navy-800">{craigBergerBio.name}</h3>
            <p className="text-sm text-gold-500">{craigBergerBio.title}</p>
            <p className="mt-4 leading-relaxed text-navy-800/70">{craigBergerBio.paragraphs[0]}</p>
          </div>
        </div>
      </section>
      <Newsletter />
    </>
  );
}
