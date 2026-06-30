import PageHero from '../components/PageHero';
import Newsletter from '../components/Newsletter';
import Button from '../components/Button';
import LeadForm from '../components/LeadForm';
import { investmentOpportunityTypes, investmentThesis, images } from '../data/content';

export default function InvestmentOpportunities() {
  return (
    <>
      <PageHero title="Investment Opportunities" subtitle="Invest with a True Partner" image={images.investmentOpportunities} />
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-lg leading-relaxed text-navy-800/75">
            Founded by a CPA/CFA and former Wall Street semiconductor analyst, Avid Realty Partners brings institutional analytics and risk management to multifamily investing — with a target deployment of {investmentThesis.deploymentTarget}
          </p>
          <p className="mt-4 text-navy-800/65">
            Current offerings are shared privately with qualified investors. Contact our team to learn more.
          </p>
        </div>
      </section>
      <section id="inquire" className="bg-cream-100 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl text-navy-900">Request Information</h2>
            <p className="mt-4 text-navy-800/70">
              Investment opportunities are available to accredited investors. Minimum investments typically start at $100,000 for limited partnership offerings.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/portfolio">View Portfolio</Button>
              <Button to="/track-record" variant="outline">Track Record</Button>
            </div>
          </div>
          <LeadForm title="Contact Our Team" submitLabel="Send Message" fields="contact" />
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-10 text-center font-serif text-2xl text-navy-900">Investment Products</h2>
          <p className="mx-auto mb-12 max-w-3xl text-center text-navy-800/70">
            Avid Realty Partners offers a variety of investment structures for qualified Investor-Partners, including:
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
        </div>
      </section>
      <Newsletter />
    </>
  );
}
