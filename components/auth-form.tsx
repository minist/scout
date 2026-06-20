"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Target } from "lucide-react";

export function AuthForm({ mode }: { mode: "signin" | "signup" }) {
  const router = useRouter();
  const isSignup = mode === "signup";

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    // Front-end demo only — no real authentication.
    router.push("/app");
  }

  return (
    <div className="grid min-h-screen place-items-center bg-mist px-5 py-12">
      <div className="w-full max-w-md">
        <Link href="/" className="flex items-center justify-center gap-2.5" aria-label="Scout home">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-ink text-white">
            <Target className="h-5 w-5" />
          </span>
          <span className="text-xl font-semibold tracking-normal text-ink">Scout</span>
        </Link>

        <div className="mt-8 rounded-[12px] border border-line bg-white p-6 shadow-panel sm:p-8">
          <h1 className="text-2xl font-semibold tracking-tight text-ink">
            {isSignup ? "Create your account" : "Welcome back"}
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            {isSignup
              ? "Start validating your idea in minutes — free, no card required."
              : "Sign in to your validation workspace."}
          </p>

          <form className="mt-6 grid gap-3" onSubmit={onSubmit}>
            {isSignup ? (
              <input
                type="text"
                placeholder="Full name"
                className="h-11 rounded-lg border border-line px-3 text-sm text-ink outline-none placeholder:text-slate-400 focus:border-teal-500 focus:ring-4 focus:ring-teal-50"
              />
            ) : null}
            <input
              type="email"
              placeholder="you@company.com"
              className="h-11 rounded-lg border border-line px-3 text-sm text-ink outline-none placeholder:text-slate-400 focus:border-teal-500 focus:ring-4 focus:ring-teal-50"
            />
            <input
              type="password"
              placeholder={isSignup ? "Create a password" : "Password"}
              className="h-11 rounded-lg border border-line px-3 text-sm text-ink outline-none placeholder:text-slate-400 focus:border-teal-500 focus:ring-4 focus:ring-teal-50"
            />
            <button
              type="submit"
              className="mt-1 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-ink px-5 text-sm font-semibold text-white hover:bg-slate-800"
            >
              {isSignup ? "Create account" : "Sign in"} <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <p className="mt-5 text-center text-sm text-slate-500">
            {isSignup ? (
              <>
                Already have an account?{" "}
                <Link href="/signin" className="font-semibold text-teal-700 hover:text-teal-800">
                  Sign in
                </Link>
              </>
            ) : (
              <>
                New to Scout?{" "}
                <Link href="/signup" className="font-semibold text-teal-700 hover:text-teal-800">
                  Create an account
                </Link>
              </>
            )}
          </p>
        </div>

        <p className="mt-4 text-center text-xs text-slate-400">
          Demo only — any details take you straight into the workspace.
        </p>
      </div>
    </div>
  );
}
