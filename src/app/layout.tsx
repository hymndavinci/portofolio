import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Hymn",
  description: "Developer building modern web experiences with clean UI and smooth interactions.",
  keywords: ["Portfolio", "Web Developer", "Software Engineer", "Next.js", "TypeScript", "React"],
  authors: [{ name: "Hymn Davinci" }],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Hymn",
    description: "Developer building modern web experiences with clean UI and smooth interactions.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hymn",
    description: "Developer building modern web experiences with clean UI and smooth interactions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jakarta.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
