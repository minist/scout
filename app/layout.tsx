import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Scout | Startup Validation Experiments",
  description:
    "Scout recommends the best validation experiment and generates the assets to run it."
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
