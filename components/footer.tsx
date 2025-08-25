export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-400" />
            <span className="font-semibold">Entrix AI</span>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
            <div className="flex items-center gap-6 text-sm text-neutral-400">
              <a href="/privacy" className="hover:text-neutral-200 transition-colors">
                Privacy
              </a>
              <a href="/terms" className="hover:text-neutral-200 transition-colors">
                Terms
              </a>
              <a
                href="mailto:hello@entrixai.com"
                className="hover:text-neutral-200 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-neutral-400">
          <p>© {new Date().getFullYear()} Entrix AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
