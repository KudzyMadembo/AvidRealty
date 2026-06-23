import PageHero from '../components/PageHero';
import Newsletter from '../components/Newsletter';
import Button from '../components/Button';
import LeadForm from '../components/LeadForm';
import { investmentOpportunityTypes, images } from '../data/content';

export default function InvestmentOpportunities() {
  return (
    <>
      <PageHero title="Investment Opportunities" subtitle="Invest with a True Partner" image={images.investmentOpportunities} />
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-lg leading-relaxed text-navy-800/75">
            Founded by a multi-award-winning Wall Street equities analyst, Avid Realty Partners brings high-powered analytics, risk management, and institutional sophistication to Commercial Real Estate Investing.
          </p>
        </div>
      </section>
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-10 text-center font-serif text-2xl text-navy-900">Current Investment Opportunities</h2>
          <p className="mx-auto mb-12 max-w-3xl text-center text-navy-800/70">
            Avid Realty Partners has a variety of different investment opportunities at any time, including:
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {investmentOpportunityTypes.map((item) => (
              <div key={item.label} className="rounded-2xl border border-navy-900/5 bg-white p-6 shadow-sm">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-navy-900 text-sm font-bold text-gold-400">
                  {item.label}
                </span>
                <h3 className="mt-4 font-serif text-lg text-navy-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-800/65">{item.description}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-navy-800/60">
            Reach out to our team to learn more about what opportunities we have available today.
          </p>
        </div>
      </section>
      <section className="bg-cream-100 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl text-navy-900">Request Current Offerings</h2>
            <p className="mt-4 text-navy-800/70">
              Investment opportunities are available to accredited investors. Minimum investments typically start at $100,000 for limited partnership offerings.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/portfolio">View Portfolio</Button>
              <Button to="/track-record" variant="outline">Track Record</Button>
            </div>
          </div>
          <LeadForm title="Contact Our Team" submitLabel="Learn More" fields="download" />
        </div>
      </section>
      <Newsletter />
    </>
  );
}
