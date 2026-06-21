import Link from "next/link";
import { ArrowRight, Target } from "lucide-react";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-[#0A0A0B]">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Scout home">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-ink text-white">
            <Target className="h-5 w-5" />
          </span>
          <span className="text-xl font-semibold tracking-normal text-ink">Scout</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-300 sm:flex">
          <Link href="/#how" className="hover:text-ink">
            How it works
          </Link>
          <Link href="/pricing" className="hover:text-ink">
            Pricing
          </Link>
        </nav>
        <Link
          href="/app"
          className="inline-flex h-10 items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-4 text-sm font-semibold text-white transition hover:scale-[0.98]"
        >
          Open Scout <ArrowRight className="h-4 w-4" />
        </Link>
      </header>
      {children}
    </main>
  );
}
