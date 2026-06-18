export default function Newsletter() {
  return (
    <section className="bg-navy-900 py-16">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <h2 className="font-serif text-3xl text-white">Sign Up for Our Newsletter</h2>
        <p className="mt-3 text-white/60">
          Receive market updates and information on Avid&apos;s latest investment opportunities.
        </p>
        <form className="mt-8 flex flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/40 focus:border-gold-400 focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-full bg-gold-400 px-8 py-3 text-sm font-semibold text-navy-950 hover:bg-gold-500"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
