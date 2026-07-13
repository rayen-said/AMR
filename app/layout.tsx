import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next"

import SmoothScroll from "@/components/SmoothScroll";
import SiteMotion from "@/components/SiteMotion";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

const sora = Sora({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "AMR Solutions | Intelligent Agriculture, Made Actionable",
  description:
    "Unify AI, Digital Twins, IoT sensors, and automation into a single agricultural platform. Precision engineering for the future of food supply.",
  icons: "/Favicon.ico",
  keywords: "AI, IoT, Digital Twins, Agritech, Agriculture, Tunisia, Smart Farming, LoRaWAN, Water Management",
  };

const themeScript = `
  (function() {
    try {
      var t = localStorage.getItem('theme');
      if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      }
    } catch (e) {}
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${manrope.variable} ${sora.variable} tactical-theme font-sans antialiased bg-background text-on-surface min-h-screen flex flex-col`}>
        <ThemeProvider>
          <SmoothScroll />
          <SiteMotion />
          <Navbar />
          <Analytics />
          <SpeedInsights />
          <main className="grow pt-18 sm:pt-22">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
