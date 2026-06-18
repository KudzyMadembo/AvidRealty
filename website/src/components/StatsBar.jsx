export default function StatsBar({ stats, dark = false }) {
  return (
    <section className={dark ? 'bg-navy-900' : 'bg-white'}>
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-white/10 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`px-6 py-10 text-center ${dark ? 'bg-navy-900' : 'bg-white'}`}
          >
            <div className={`font-serif text-3xl sm:text-4xl ${dark ? 'text-gold-400' : 'text-navy-900'}`}>
              {stat.value}
            </div>
            <div className={`mt-2 text-xs uppercase tracking-wider ${dark ? 'text-white/60' : 'text-navy-800/60'}`}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
