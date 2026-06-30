export default function StatsBar({ stats, dark = false }) {
  const gridClass =
    stats.length === 3
      ? 'mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8'
      : stats.length === 2
        ? 'mx-auto grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8'
        : 'mx-auto grid max-w-7xl grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8';

  return (
    <section className={dark ? 'bg-navy-900' : 'bg-white'}>
      <div className={`px-4 py-12 sm:px-6 sm:py-14 ${gridClass}`}>
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center justify-center text-center ${dark ? 'text-white' : 'text-navy-900'}`}
          >
            <div className={`font-serif text-4xl sm:text-5xl ${dark ? 'text-gold-400' : 'text-navy-900'}`}>
              {stat.value}
            </div>
            <div className={`mt-3 max-w-[12rem] text-sm font-medium uppercase leading-snug tracking-wider sm:text-base ${dark ? 'text-white/70' : 'text-navy-800/65'}`}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
