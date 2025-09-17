import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Analytics from "@/components/Analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mental Age Test - Free Online Mental Age Quiz",
  description: "Discover your cognitive maturity with our free mental age test. This quick quiz reveals your intellectual age and mental maturity based on scientific principles",
  robots: "index, follow",
  alternates: {
    canonical: "https://mental-age-test.app",
  },
  openGraph: {
    title: "Mental Age Test - Discover Your True Cognitive Age",
    description: "Free mental age test and personality quiz. Discover your intellectual age and mental maturity with our scientifically-designed assessment.",
    type: "website",
    url: "https://mental-age-test.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mental Age Test - Free Online Cognitive Age Quiz",
    description: "Discover your true mental age with our comprehensive personality and mental health assessment.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <Analytics 
          gtag={process.env.NEXT_PUBLIC_GA_ID}
          clarityId={process.env.NEXT_PUBLIC_CLARITY_ID}
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
