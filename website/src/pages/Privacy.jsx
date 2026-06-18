import PageHero from '../components/PageHero';

export default function Privacy() {
  return (
    <>
      <PageHero title="Privacy Policy" subtitle="Legal" />
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 text-sm leading-relaxed text-navy-800/70 sm:px-6">
          <p>Avid Realty Partners (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our investment services.</p>
          <h2 className="mt-8 text-lg font-semibold text-navy-900">Information We Collect</h2>
          <p className="mt-3">We may collect personal information that you voluntarily provide when you fill out contact forms, subscribe to our newsletter, or express interest in investment opportunities, including name, email address, phone number, and accredited investor status.</p>
          <h2 className="mt-8 text-lg font-semibold text-navy-900">How We Use Your Information</h2>
          <p className="mt-3">We use collected information to respond to inquiries, provide investment materials to qualified investors, send market updates and newsletters, and improve our website and services.</p>
          <h2 className="mt-8 text-lg font-semibold text-navy-900">Contact</h2>
          <p className="mt-3">For questions about this Privacy Policy, contact us at info@AvidRealtyPartners.com or 212-540-4540.</p>
        </div>
      </section>
    </>
  );
}
