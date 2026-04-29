import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["SOFT", "WONK", "opsz"],
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Vita Gohel — Creative & Brand Leader",
  description:
    "Creative & Brand Leader with 15+ years of experience driving growth for beauty and consumer brands. Currently Head of Creative and Marketing at LBLA Beauty.",
  openGraph: {
    title: "Vita Gohel — Creative & Brand Leader",
    description:
      "Creative & Brand Leader with 15+ years of experience driving growth for beauty and consumer brands.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
