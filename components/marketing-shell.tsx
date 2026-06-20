import Link from "next/link";
import { Target } from "lucide-react";

export function MarketingShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-ink">
      <header className="sticky top-0 z-20 border-b border-line bg-white/85 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href="/" className="flex items-center gap-2.5" aria-label="Scout home">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-ink text-white">
              <Target className="h-4 w-4" />
            </span>
            <span className="text-lg font-semibold tracking-normal text-ink">Scout</span>
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
            <Link href="/#how" className="hover:text-ink">
              How it works
            </Link>
            <Link href="/#features" className="hover:text-ink">
              Features
            </Link>
            <Link href="/pricing" className="hover:text-ink">
              Pricing
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/signin"
              className="hidden h-9 items-center rounded-lg px-3 text-sm font-semibold text-slate-700 hover:bg-mist sm:inline-flex"
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              className="inline-flex h-9 items-center rounded-lg bg-ink px-4 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Get started
            </Link>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-line bg-mist">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="flex items-center gap-2.5">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-ink text-white">
              <Target className="h-3.5 w-3.5" />
            </span>
            <span className="text-sm font-semibold text-ink">Scout</span>
            <span className="text-sm text-slate-400">— validate before you build.</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <Link href="/pricing" className="hover:text-ink">
              Pricing
            </Link>
            <Link href="/signin" className="hover:text-ink">
              Sign in
            </Link>
            <Link href="/app" className="hover:text-ink">
              Open app
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
