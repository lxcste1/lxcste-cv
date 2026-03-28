import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { LanguageProvider } from "@/lib/language-context";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Lucas Tello | Front-End Developer",
  description:
    "Desarrollador Front-End especializado en ReactJS, NextJS y TypeScript. Portfolio profesional con experiencia en La Nación, PinApp, TOBS y más.",
  keywords: [
    "Front-End Developer",
    "ReactJS",
    "NextJS",
    "TypeScript",
    "Buenos Aires",
    "Argentina",
  ],
  authors: [{ name: "Lucas Tello" }],
  openGraph: {
    title: "Lucas Tello | Front-End Developer",
    images: [
      {
        url: "/android-chrome-192x192.png",
        width: 192,
        height: 192,
        alt: "Lucas Tello | Front-End Developer",
      },
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Lucas Tello | Front-End Developer",
      },
    ],
    description:
      "Desarrollador Front-End especializado en ReactJS, NextJS y TypeScript.",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/favicon-32x32.png",
      },
      {
        url: "/lxcste-cv_logo.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
