import Link from "next/link";
import { ArrowRight, Target } from "lucide-react";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-white">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Scout home">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-ink text-white">
            <Target className="h-5 w-5" />
          </span>
          <span className="text-xl font-semibold tracking-normal text-ink">Scout</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 sm:flex">
          <Link href="/#validate" className="hover:text-ink">
            Validate
          </Link>
          <Link href="/#results" className="hover:text-ink">
            Results
          </Link>
          <Link href="/pricing" className="hover:text-ink">
            Pricing
          </Link>
          <Link href="/app" className="hover:text-ink">
            Login
          </Link>
        </nav>
        <Link
          href="/#validate"
          className="inline-flex h-10 items-center gap-2 rounded-lg bg-teal-600 px-4 text-sm font-semibold text-white hover:bg-teal-700"
        >
          Start <ArrowRight className="h-4 w-4" />
        </Link>
      </header>
      {children}
    </main>
  );
}
