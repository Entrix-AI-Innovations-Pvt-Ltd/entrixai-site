'use client';

export function WaitlistForm() {
  return (
    <form
      method="POST"
      action="https://formspree.io/f/mzzvnnzb"
      className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto]"
    >
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
      <input type="hidden" name="_next" value="/?joined=1" />
      <input
        type="email"
        name="email"
        required
        placeholder="you@company.com"
        aria-label="Email address"
        className="w-full rounded-xl bg-white/10 px-4 py-3 text-sm outline-none ring-1 ring-inset ring-white/20 placeholder:text-neutral-400 focus:ring-white/40"
      />
      <button
        type="submit"
        className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-black hover:opacity-90"
      >
        Join waitlist
      </button>
    </form>
  );
}
