import PageHero from '../components/PageHero';
import Newsletter from '../components/Newsletter';
import LeadForm from '../components/LeadForm';
import { site, images } from '../data/content';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <PageHero title="Let's Keep in Touch" subtitle="Contact Us" image={images.contact} />
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="h-5 w-5 shrink-0 text-gold-500" />
                <div>
                  <div className="font-semibold">{site.name}</div>
                  <div className="text-sm text-navy-800/65">{site.address}, {site.city}</div>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="h-5 w-5 shrink-0 text-gold-500" />
                <a href={`tel:${site.phone}`} className="text-sm hover:text-gold-500">{site.phone}</a>
              </div>
              <div className="flex gap-4">
                <Mail className="h-5 w-5 shrink-0 text-gold-500" />
                <a href={`mailto:${site.email}`} className="text-sm hover:text-gold-500">{site.email}</a>
              </div>
            </div>
            <div className="mt-10">
              <h3 className="font-serif text-lg text-navy-900">Avid Realty Partners Offices</h3>
              <ul className="mt-3 space-y-1 text-sm text-navy-800/65">
                {site.offices.map((o) => <li key={o}>{o}</li>)}
              </ul>
            </div>
          </div>
          <LeadForm title="" submitLabel="Send Message" fields="contact" />
        </div>
      </section>
      <Newsletter />
    </>
  );
}
