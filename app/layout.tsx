import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { LanguageProvider } from "@/lib/language-context";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Lucas Tello | Frontend Engineer",
  description:
    "Frontend Engineer building scalable product experiences with React, Next.js, TypeScript and AI-augmented development workflows.",
  keywords: [
    "Frontend Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Design Systems",
    "Performance",
    "AI-Augmented Development",
  ],
  authors: [{ name: "Lucas Tello" }],
  openGraph: {
    title: "Lucas Tello | Frontend Engineer",
    description:
      "Building considered digital products with modern frontend systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
