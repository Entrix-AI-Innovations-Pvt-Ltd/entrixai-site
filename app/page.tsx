export default function EntrixLanding() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-400" />
            <span className="font-semibold tracking-tight text-lg">Entrix AI</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
            <a href="#product" className="hover:text-white">Product</a>
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#waitlist" className="hover:text-white">Waitlist</a>
          </nav>
          <a href="#waitlist" className="rounded-xl bg-white/10 px-4 py-2 text-sm hover:bg-white/20 md:inline-block">Join waitlist</a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-40 [background:radial-gradient(80%_50%_at_50%_0%,theme(colors.indigo.600/.35),transparent_60%),radial-gradient(70%_40%_at_80%_10%,theme(colors.fuchsia.500/.35),transparent_60%),radial-gradient(70%_40%_at_20%_10%,theme(colors.cyan.500/.35),transparent_60%)]" />
        <div className="mx-auto max-w-6xl px-4 pt-20 pb-16 md:pt-28 md:pb-24">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-neutral-400">Under the Entrix AI umbrella</p>
          <h1 className="text-3xl leading-tight font-semibold md:text-6xl md:leading-[1.05]">
            An emotionally intelligent, local‑first co‑pilot for creative flow.
          </h1>
          <p className="mt-4 max-w-2xl text-neutral-300 md:text-lg">
            Budha is our flagship product: a fast, privacy‑first assistant that remembers what works for you—
            then guides you back to your best self.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#waitlist" className="rounded-2xl bg-white text-black px-5 py-3 text-sm font-medium">
              Join the waitlist
            </a>
            <a href="#features" className="rounded-2xl border border-white/20 px-5 py-3 text-sm font-medium hover:bg-white/10">
              Explore features
            </a>
          </div>
        </div>
      </section>

      {/* Product highlight */}
      <section id="product" className="mx-auto max-w-6xl px-4 pb-8 md:pb-16">
        <div className="grid md:grid-cols-2 gap-8 items-center rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10">
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold">Budha — Know Thy Mind</h2>
            <p className="mt-3 text-neutral-300">
              A layered cognitive stack: Reflex Core for low‑latency actions, Cognition Layer for deep work,
              and a Dynamic Personality Core that adapts to your state. Powered by Compressed Thought Vectors (CTVs)
              and an Emotional Recall Engine (ERE).
            </p>
            <ul className="mt-6 space-y-2 text-sm text-neutral-300">
              <li>• Local‑first, sub‑second voice/CLI commands</li>
              <li>• Emotional memory that recalls your best rituals</li>
              <li>• Private by design — your data stays with you</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-white/10 to-white/0 p-6 border border-white/10">
            <div className="aspect-[16/10] w-full rounded-xl bg-neutral-900 grid place-items-center text-neutral-400">
              <span className="text-sm">(Demo screenshot / video placeholder)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-4 py-12 md:py-20">
        <h3 className="text-xl md:text-3xl font-semibold">Why Entrix AI</h3>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            {
              title: 'Local‑first speed',
              body: 'Reflex Core runs lightweight models on‑device for instant responses and offline reliability.'
            },
            {
              title: 'Emotionally aware',
              body: 'ERE + CTVs let Budha recall mood‑task patterns and suggest the right ritual at the right time.'
            },
            {
              title: 'Privacy by default',
              body: 'No dark patterns. Your data is yours. Encryption, memory pruning, and transparent controls.'
            },
            {
              title: 'Creator‑grade UX',
              body: 'A minimal CLI + optional voice that feels alive—not bloated dashboards or gimmicks.'
            },
            {
              title: 'Extendable modules',
              body: 'Add nodes for rap writing, coding sessions, journaling, or ADHD‑friendly routines.'
            },
            {
              title: 'Open integrations',
              body: 'Hooks for VS Code, calendars, and local tools. Keep your stack—Budha adapts to you.'
            }
          ].map((f, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h4 className="font-medium">{f.title}</h4>
              <p className="mt-2 text-sm text-neutral-300">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="mx-auto max-w-3xl px-4 py-12" aria-labelledby="waitlist-title">
        <h3 id="waitlist-title" className="text-xl md:text-3xl font-semibold">Be first to try Budha</h3>
        <p className="mt-2 text-neutral-300">
          We’re inviting early users in small waves. Drop your email and we’ll reach out with access.
        </p>
        <form
          className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto]"
          method="POST"
          action="https://formspree.io/f/your-form-id" // TODO: replace with your Formspree/GForms endpoint
        >
          <input
            type="email"
            required
            name="email"
            placeholder="you@company.com"
            className="w-full rounded-xl bg-white/10 px-4 py-3 text-sm outline-none ring-1 ring-inset ring-white/20 placeholder:text-neutral-400 focus:ring-white/40"
          />
          <button
            type="submit"
            className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-black hover:opacity-90"
          >
            Join waitlist
          </button>
        </form>
        <p className="mt-2 text-xs text-neutral-400">No spam. One‑click unsubscribe.</p>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-400">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Entrix AI Innovations Pvt. Ltd. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="mailto:hello@entrixai.com" className="hover:text-neutral-200">hello@entrixai.com</a>
              <a href="#" className="hover:text-neutral-200">Twitter</a>
              <a href="#" className="hover:text-neutral-200">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
