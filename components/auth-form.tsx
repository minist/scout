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
    <div className="grid min-h-screen place-items-center bg-stone px-5 py-12">
      <div className="w-full max-w-md">
        <Link href="/" className="flex items-center justify-center gap-2.5" aria-label="Scout home">
          <span className="grid h-9 w-9 place-items-center rounded-sm bg-primary text-white">
            <Target className="h-5 w-5" />
          </span>
          <span className="font-display text-xl font-medium tracking-tighter text-ink">Scout</span>
        </Link>

        <div className="mt-8 rounded-media border border-line bg-canvas p-6 sm:p-8">
          <h1 className="font-display text-3xl font-medium leading-none tracking-tighter text-ink">
            {isSignup ? "Create your account" : "Welcome back"}
          </h1>
          <p className="mt-3 text-sm text-slate-500">
            {isSignup
              ? "Start validating your idea in minutes — free, no card required."
              : "Sign in to your validation workspace."}
          </p>

          <form className="mt-6 grid gap-3" onSubmit={onSubmit}>
            {isSignup ? (
              <input
                type="text"
                placeholder="Full name"
                className="h-11 rounded-sm border border-line px-3 text-sm text-ink outline-none placeholder:text-muted focus:border-focus focus:ring-4 focus:ring-paleblue"
              />
            ) : null}
            <input
              type="email"
              placeholder="you@company.com"
              className="h-11 rounded-sm border border-line px-3 text-sm text-ink outline-none placeholder:text-muted focus:border-focus focus:ring-4 focus:ring-paleblue"
            />
            <input
              type="password"
              placeholder={isSignup ? "Create a password" : "Password"}
              className="h-11 rounded-sm border border-line px-3 text-sm text-ink outline-none placeholder:text-muted focus:border-focus focus:ring-4 focus:ring-paleblue"
            />
            <button type="submit" className="pill-primary mt-1 w-full">
              {isSignup ? "Create account" : "Sign in"} <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <p className="mt-5 text-center text-sm text-slate-500">
            {isSignup ? (
              <>
                Already have an account?{" "}
                <Link href="/signin" className="font-medium text-action hover:underline">
                  Sign in
                </Link>
              </>
            ) : (
              <>
                New to Scout?{" "}
                <Link href="/signup" className="font-medium text-action hover:underline">
                  Create an account
                </Link>
              </>
            )}
          </p>
        </div>

        <p className="mt-4 text-center font-mono text-xs text-muted">
          Demo only — any details take you straight into the workspace.
        </p>
      </div>
    </div>
  );
}
