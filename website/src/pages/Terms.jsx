import PageHero from '../components/PageHero';

export default function Terms() {
  return (
    <>
      <PageHero title="Terms & Conditions" subtitle="Legal" />
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 text-sm leading-relaxed text-navy-800/70 sm:px-6">
          <p>By accessing and using the Avid Realty Partners website, you accept and agree to be bound by these Terms and Conditions. If you do not agree, please do not use this website.</p>
          <h2 className="mt-8 text-lg font-semibold text-navy-900">Investment Disclaimer</h2>
          <p className="mt-3">Nothing on this website constitutes an offer to sell or a solicitation of an offer to buy any security. Investment opportunities are available only to accredited investors through private placement memoranda. Past performance is not indicative of future results.</p>
          <h2 className="mt-8 text-lg font-semibold text-navy-900">Intellectual Property</h2>
          <p className="mt-3">All content on this website, including text, graphics, logos, and research materials, is the property of Avid Realty Partners and is protected by applicable copyright and trademark laws.</p>
          <h2 className="mt-8 text-lg font-semibold text-navy-900">Contact</h2>
          <p className="mt-3">For questions about these Terms, contact us at info@AvidRealtyPartners.com.</p>
        </div>
      </section>
    </>
  );
}
