export default function LeadForm({ title = 'Get in Touch', submitLabel = 'Submit', fields = 'standard' }) {
  return (
    <form className="rounded-2xl border border-navy-900/5 bg-white p-8 shadow-sm" onSubmit={(e) => e.preventDefault()}>
      {title && <h3 className="mb-6 font-serif text-xl text-navy-900">{title}</h3>}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-navy-800/50">First Name *</label>
          <input type="text" required className="w-full rounded-lg border border-navy-900/10 px-4 py-2.5 text-sm focus:border-gold-400 focus:outline-none" />
        </div>
        <div>
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-navy-800/50">Last Name *</label>
          <input type="text" required className="w-full rounded-lg border border-navy-900/10 px-4 py-2.5 text-sm focus:border-gold-400 focus:outline-none" />
        </div>
      </div>
      <div className="mt-4">
        <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-navy-800/50">Email *</label>
        <input type="email" required className="w-full rounded-lg border border-navy-900/10 px-4 py-2.5 text-sm focus:border-gold-400 focus:outline-none" />
      </div>
      {fields === 'investor' && (
        <>
          <div className="mt-4">
            <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-navy-800/50">Cell Phone *</label>
            <input type="tel" required className="w-full rounded-lg border border-navy-900/10 px-4 py-2.5 text-sm focus:border-gold-400 focus:outline-none" />
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-navy-800/50">State *</label>
              <input type="text" required placeholder="State / Province / Region" className="w-full rounded-lg border border-navy-900/10 px-4 py-2.5 text-sm focus:border-gold-400 focus:outline-none" />
            </div>
            <div>
              <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-navy-800/50">Zip Code *</label>
              <input type="text" required placeholder="ZIP / Postal Code" className="w-full rounded-lg border border-navy-900/10 px-4 py-2.5 text-sm focus:border-gold-400 focus:outline-none" />
            </div>
          </div>
        </>
      )}
      {fields === 'download' && (
        <div className="mt-4">
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-navy-800/50">Phone</label>
          <input type="tel" className="w-full rounded-lg border border-navy-900/10 px-4 py-2.5 text-sm focus:border-gold-400 focus:outline-none" />
        </div>
      )}
      {fields === 'contact' && (
        <>
          <div className="mt-4">
            <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-navy-800/50">Phone *</label>
            <input type="tel" required className="w-full rounded-lg border border-navy-900/10 px-4 py-2.5 text-sm focus:border-gold-400 focus:outline-none" />
          </div>
          <div className="mt-4">
            <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-navy-800/50">Message</label>
            <textarea rows={4} className="w-full rounded-lg border border-navy-900/10 px-4 py-2.5 text-sm focus:border-gold-400 focus:outline-none" />
          </div>
        </>
      )}
      <button type="submit" className="mt-6 w-full rounded-full bg-gold-400 py-3 text-sm font-semibold text-navy-950 hover:bg-gold-500">
        {submitLabel}
      </button>
    </form>
  );
}

export function TopicGrid({ items }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div key={item.title} className="rounded-2xl border border-navy-900/5 bg-white p-6 shadow-sm">
          <h3 className="font-serif text-lg text-navy-900">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-navy-800/65">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export function ChapterList({ chapters, title = 'Chapters Included' }) {
  return (
    <div className="rounded-2xl bg-navy-900 p-8 text-white">
      <h3 className="font-serif text-xl text-gold-400">{title}</h3>
      <ol className="mt-6 space-y-2">
        {chapters.map((chapter, i) => (
          <li key={chapter} className="flex gap-3 text-sm text-white/80">
            <span className="font-semibold text-gold-400">{i + 1}.</span>
            {chapter}
          </li>
        ))}
      </ol>
    </div>
  );
}
