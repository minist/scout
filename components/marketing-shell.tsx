import Link from "next/link";
import { ArrowRight, Target } from "lucide-react";

export function MarketingShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      {/* Announcement bar */}
      <div className="flex h-9 items-center justify-center gap-2 bg-black px-4 text-white">
        <span className="font-mono text-xs uppercase tracking-[0.08em] text-coral">New</span>
        <span className="text-xs text-white/80">
          Validate the riskiest part of your idea before you build.
        </span>
        <Link href="/pricing" className="text-xs text-white underline underline-offset-4">
          Learn more
        </Link>
      </div>

      {/* Nav: logo left, menu center, actions right */}
      <header className="sticky top-0 z-20 border-b border-line bg-canvas/90 backdrop-blur">
        <div className="mx-auto grid w-full max-w-[1280px] grid-cols-[1fr_auto_1fr] items-center px-5 py-4 sm:px-8">
          <Link href="/" className="flex items-center gap-2.5" aria-label="Scout home">
            <span className="grid h-8 w-8 place-items-center rounded-sm bg-primary text-white">
              <Target className="h-4 w-4" />
            </span>
            <span className="font-display text-lg font-medium tracking-tighter text-ink">Scout</span>
          </Link>

          <nav className="hidden items-center gap-8 justify-self-center text-sm text-bodymuted md:flex">
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

          <div className="flex items-center gap-4 justify-self-end">
            <Link href="/signin" className="hidden text-sm text-ink hover:text-primary sm:inline">
              Sign in
            </Link>
            <Link href="/signup" className="pill-primary px-5 py-2">
              Get started
            </Link>
          </div>
        </div>
      </header>

      <main>{children}</main>

      {/* Footer — near-black with coral label */}
      <footer className="bg-primary text-white">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8">
          <div className="flex flex-col gap-10 border-b border-white/10 pb-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-md">
              <p className="font-mono text-xs uppercase tracking-[0.08em] text-coral">
                AI moves fast
              </p>
              <h2 className="mt-3 font-display text-3xl font-medium tracking-tighter">
                Validate before you build.
              </h2>
              <p className="mt-3 text-sm leading-6 text-white/60">
                The cheapest experiment, the assets to run it, and the evidence to decide.
              </p>
            </div>
            <Link href="/signup" className="pill-on-dark w-fit">
              Get started <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2.5">
              <span className="grid h-7 w-7 place-items-center rounded-sm bg-white text-primary">
                <Target className="h-3.5 w-3.5" />
              </span>
              <span className="font-display text-sm font-medium tracking-tighter">Scout</span>
            </div>
            <div className="flex items-center gap-7 text-sm text-white/60">
              <Link href="/pricing" className="hover:text-white">
                Pricing
              </Link>
              <Link href="/signin" className="hover:text-white">
                Sign in
              </Link>
              <Link href="/app" className="hover:text-white">
                Open app
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
