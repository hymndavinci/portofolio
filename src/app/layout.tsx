import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import "./marquee-motion.css";
import "./light-mode-fixes.css";
import { Toaster } from "@/components/ui/toaster";
import BackToTop from "@/components/portfolio/back-to-top";
import ThemeSync from "@/components/portfolio/theme-sync";
import SessionProvider from "@/components/portfolio/session-provider";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const siteUrl = 'https://hymndavinci.my.id';
const siteTitle = 'Muhammad Bintang Kurniawan — Portfolio';
const siteDescription = 'Software engineering enthusiast focused on modern web interfaces, full-stack projects, automation tools, and clean digital experiences.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Muhammad Bintang Kurniawan Portfolio",
  title: siteTitle,
  description: siteDescription,
  keywords: ["Muhammad Bintang Kurniawan", "Hymn Davinci", "Portfolio", "Web Developer", "Software Engineer", "Next.js", "TypeScript", "React"],
  authors: [{ name: "Muhammad Bintang Kurniawan", url: siteUrl }],
  creator: "Muhammad Bintang Kurniawan",
  publisher: "Muhammad Bintang Kurniawan",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "Muhammad Bintang Kurniawan Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Bintang Kurniawan portfolio preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.png"],
    creator: "@hymndavinci",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light-mode" suppressHydrationWarning>
      <body
        className={`${jakarta.variable} antialiased home-portfolio`}
        suppressHydrationWarning
      >
        <SessionProvider>
          <ThemeSync />
          {/* Background Effects */}
          <div className="pointer-events-none fixed inset-0 z-[-1]">
            <div className="absolute inset-0 bg-[var(--home-bg)]" />

            {/* Subtle Gradient Spotlights */}
            <div className="absolute top-[-10%] left-[-10%] h-[40%] w-[40%] rounded-full bg-violet-600/10 blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] h-[40%] w-[40%] rounded-full bg-blue-600/10 blur-[120px]" />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-grid-pattern bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

            {/* SVG Noise Filter */}
            <svg className="absolute hidden">
              <filter id="noiseFilter">
                <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" />
              </filter>
            </svg>
            <div className="absolute inset-0 opacity-[0.03]" style={{ filter: 'url(#noiseFilter)' }} />
          </div>

          <div className="relative z-0">
            {children}
          </div>
          <Toaster />
          <BackToTop />
        </SessionProvider>
      </body>
    </html>
  );
}
