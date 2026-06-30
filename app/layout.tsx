import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "AMR Solutions | The Operating System for Modern Agriculture",
  description:
    "Unify AI, Digital Twins, IoT sensors, and automation into a single agricultural platform. Precision engineering for the future of food supply.",
  icons:"Favicon.ico",
  keywords:"AI, IoT, Digital Twins, Agritech, Agriculture, Tunisia, Startup, Farm, LoRaWAN, Water Management, Farms"
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
      <body className={`${inter.variable} font-sans antialiased bg-background text-on-surface min-h-screen flex flex-col`}>
        <ThemeProvider>
          <Navbar />
          <Analytics />
          <main className="grow pt-16 sm:pt-20">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
