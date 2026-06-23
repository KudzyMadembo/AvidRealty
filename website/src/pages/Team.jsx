import PageHero from '../components/PageHero';
import Newsletter from '../components/Newsletter';
import { TeamCard } from '../components/Cards';
import { leadership, professionalTeam, images } from '../data/content';

export default function Team() {
  return (
    <>
      <PageHero title="Meet The Avid Team" subtitle="Leadership" image={images.team} />
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="leading-relaxed text-navy-800/70">
            Avid Realty Partners&apos; management team has an incredible depth and breadth of professional experience across Real Estate, Wall Street, Fortune 500 operations, Professional Services, and more. Our collective variety of viewpoints is critical to identifying and unlocking value from our investments.
          </p>
        </div>
      </section>
      <section className="pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-10 text-center font-serif text-2xl text-navy-900">Leadership Team</h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((m) => <TeamCard key={m.name} member={m} />)}
          </div>
        </div>
      </section>
      <section className="bg-cream-100 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-10 text-center font-serif text-2xl text-navy-900">Professional Team</h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {professionalTeam.map((m) => <TeamCard key={m.name} member={m} />)}
          </div>
        </div>
      </section>
      <Newsletter />
    </>
  );
}
