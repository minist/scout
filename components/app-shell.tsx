"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CreditCard,
  ClipboardList,
  LayoutDashboard,
  LogOut,
  MessagesSquare,
  PenLine,
  PlugZap,
  Route,
  Sparkles,
  Target,
  WandSparkles,
  type LucideIcon
} from "lucide-react";

type NavItem = {
  href: string;
  label: string;
  icon: LucideIcon;
};

const navItems: NavItem[] = [
  { href: "/app", label: "Overview", icon: LayoutDashboard },
  { href: "/app/canvas", label: "Idea Canvas", icon: PenLine },
  { href: "/app/roadmap", label: "Validation Roadmap", icon: Route },
  { href: "/app/assets", label: "Asset Studio", icon: WandSparkles },
  { href: "/app/interviews", label: "Interviews", icon: MessagesSquare },
  { href: "/app/log", label: "Decision Log", icon: ClipboardList },
  { href: "/app/integrations", label: "Integrations", icon: PlugZap },
  { href: "/app/billing", label: "Billing", icon: CreditCard }
];

function isActive(pathname: string, href: string) {
  if (href === "/app") return pathname === "/app";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#f8f4ec] text-ink">
      <div className="mx-auto flex w-full max-w-[1400px]">
        <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col border-r border-line bg-[#fffaf1] px-4 py-6 lg:flex">
          <Link href="/app" className="flex items-center gap-3 px-2" aria-label="Scout home">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-ink text-white">
              <Target className="h-5 w-5" />
            </span>
            <span className="text-lg font-semibold tracking-normal text-ink">Scout</span>
          </Link>

          <p className="mt-8 px-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
            Workspace
          </p>
          <nav className="mt-3 flex flex-col gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={[
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    active
                      ? "bg-teal-50 text-teal-700"
                      : "text-stone-600 hover:bg-mist hover:text-ink"
                  ].join(" ")}
                >
                  <Icon className={active ? "h-5 w-5 text-teal-700" : "h-5 w-5 text-slate-400"} />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto grid gap-3">
            <div className="rounded-lg border border-line bg-mist p-4">
              <div className="flex items-center gap-2 text-teal-700">
                <Sparkles className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase tracking-[0.12em]">Phase 2</span>
              </div>
              <p className="mt-2 text-xs leading-5 text-slate-600">
                Feature validation with your live users is coming next.
              </p>
            </div>
            <Link
              href="/"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-500 hover:bg-mist hover:text-ink"
            >
              <LogOut className="h-5 w-5 text-slate-400" />
              Sign out
            </Link>
          </div>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          {/* Mobile top nav */}
          <header className="sticky top-0 z-10 flex items-center gap-4 border-b border-line bg-[#fffaf1]/90 px-4 py-3 backdrop-blur lg:hidden">
            <Link href="/app" className="flex items-center gap-2" aria-label="Scout home">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-ink text-white">
                <Target className="h-4 w-4" />
              </span>
              <span className="text-base font-semibold text-ink">Scout</span>
            </Link>
            <nav className="-mx-1 flex flex-1 items-center gap-1 overflow-x-auto">
              {navItems.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={[
                      "shrink-0 rounded-md px-2.5 py-1.5 text-xs font-medium",
                      active ? "bg-teal-50 text-teal-700" : "text-slate-600 hover:bg-mist"
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </header>

          <main className="flex-1 px-5 py-8 sm:px-8 lg:px-10 lg:py-10">{children}</main>
        </div>
      </div>
    </div>
  );
}
