import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides, stats, advantages, testimonials, images } from '../data/content';
import Button from '../components/Button';
import StatsBar from '../components/StatsBar';
import Newsletter from '../components/Newsletter';
import { BarChart3, Shield, Target, MapPin, Percent, Quote } from 'lucide-react';

const icons = { chart: BarChart3, shield: Shield, target: Target, map: MapPin, percent: Percent };

export default function Home() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 6000);
    return () => clearInterval(t);
  }, []);

  const current = heroSlides[slide];

  return (
    <>
      <section className="relative flex h-[85vh] min-h-[600px] items-center overflow-hidden bg-navy-950">
        {heroSlides.map((s, i) => (
          <img
            key={s.title}
            src={s.image}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ${i === slide ? 'opacity-100' : 'opacity-0'}`}
            loading={i === 0 ? 'eager' : 'lazy'}
            decoding="async"
            fetchPriority={i === 0 ? 'high' : 'auto'}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/60 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
          <h1 className="max-w-3xl font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            {current.title}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/70">{current.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button to={current.link}>{current.cta}</Button>
            <Button to="/invest" variant="secondary">Invest with Us</Button>
          </div>
        </div>
        <div className="absolute bottom-8 right-8 flex gap-2">
          <button type="button" onClick={() => setSlide((s) => (s - 1 + heroSlides.length) % heroSlides.length)} className="rounded-full bg-white/10 p-2 text-white backdrop-blur hover:bg-white/20">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button type="button" onClick={() => setSlide((s) => (s + 1) % heroSlides.length)} className="rounded-full bg-white/10 p-2 text-white backdrop-blur hover:bg-white/20">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </section>

      <StatsBar stats={stats} />

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl text-navy-900 sm:text-4xl">
              A Real Estate Investment Platform
            </h2>
            <p className="mt-6 leading-relaxed text-navy-800/70">
              Avid Realty Partners proudly provides safe and secure housing that positively impacts our Residents&apos; Quality of Life, while generating robust risk-adjusted returns for our Investor-Partners, as well as personal fulfillment and professional growth for our Team Members.
            </p>
            <p className="mt-4 leading-relaxed text-navy-800/70">
              Avid Realty Partners offers deal-by-deal Limited Partner opportunities, a high yielding private credit note, and other investment products to meet a variety of client needs and structures. With a target of 15–30 multifamily acquisitions over the next 36 months, Avid is leveraging our proprietary acquisition pipeline, extreme property-level execution, and institutional reporting processes to buy at low prices in today&apos;s distressed environment.
            </p>
            <Button to="/about" variant="outline" className="mt-8">Learn More</Button>
          </div>
          <div className="relative">
            <img src={images.homePlatform} alt="Luxury multifamily apartment community" className="rounded-2xl shadow-2xl" />
            <div className="absolute -bottom-6 -left-6 rounded-xl bg-navy-900 p-6 text-white shadow-xl">
              <div className="font-serif text-3xl text-gold-400">2,500+</div>
              <div className="text-base text-white/60">Multifamily Units</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream-100 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="font-serif text-3xl text-navy-900 sm:text-4xl">Our Competitive Advantages</h2>
            <p className="mx-auto mt-4 max-w-2xl text-navy-800/60">
              Institutional sophistication meets sunbelt multifamily expertise.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map((adv) => {
              const Icon = icons[adv.icon];
              return (
                <div key={adv.title} className="rounded-2xl border border-navy-900/5 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-gold-400">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy-900">{adv.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-navy-800/65">{adv.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-center font-serif text-3xl text-navy-900 sm:text-4xl">Testimonials</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote key={t.name} className="rounded-2xl border border-navy-900/5 bg-white p-8 shadow-sm">
                <Quote className="h-8 w-8 text-gold-400/50" />
                <p className="mt-4 text-sm leading-relaxed text-navy-800/70">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-6 border-t border-navy-900/5 pt-4">
                  <div className="font-semibold text-navy-900">{t.name}</div>
                  <div className="text-xs text-navy-800/50">{t.role}</div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
