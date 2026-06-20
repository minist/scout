import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Scout — Validate before you build",
  description:
    "Scout tells you the cheapest experiment to run before you build — and hands you the assets to run it — so you validate with evidence instead of optimism."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
