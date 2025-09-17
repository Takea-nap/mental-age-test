import { Metadata } from "next";

export const metadata: Metadata = {
  title: "More Psychological Tests - Mental Age Test",
  description: "Explore various professional psychological tests including intelligence tests, personality tests, emotional intelligence tests, and more. Comprehensive understanding of your personality, abilities, and potential.",
  keywords: "psychological tests, personality test, intelligence test, emotional intelligence test, MBTI, career test",
  alternates: {
    canonical: "https://mental-age-test.app/more-tests",
  },
  openGraph: {
    title: "More Psychological Tests - Mental Age Test",
    description: "Explore various professional psychological tests including intelligence tests, personality tests, emotional intelligence tests, and more.",
    type: "website",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "More Psychological Tests" }],
  },
};

export default function MoreTestsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 
