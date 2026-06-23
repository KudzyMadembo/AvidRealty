export default function PageHero({ title, subtitle, image, overlay = true, children }) {
  return (
    <section className="relative flex min-h-[48vh] items-end overflow-hidden bg-navy-950">
      {image && (
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      )}
      {overlay && <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/75 to-navy-900/30" />}
      <div className="relative mx-auto w-full max-w-7xl px-4 pb-12 pt-24 sm:px-6">
        {subtitle && (
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-gold-400">{subtitle}</p>
        )}
        <h1 className="font-serif text-4xl text-white sm:text-5xl lg:text-6xl">{title}</h1>
        {children}
      </div>
    </section>
  );
}
