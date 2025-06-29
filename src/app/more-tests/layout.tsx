import { Metadata } from "next";

export const metadata: Metadata = {
  title: "More Psychological Tests - Mental Age Test",
  description: "Explore various professional psychological tests including intelligence tests, personality tests, emotional intelligence tests, and more. Comprehensive understanding of your personality, abilities, and potential.",
  keywords: "psychological tests, personality test, intelligence test, emotional intelligence test, MBTI, career test",
  openGraph: {
    title: "More Psychological Tests - Mental Age Test",
    description: "Explore various professional psychological tests including intelligence tests, personality tests, emotional intelligence tests, and more.",
    type: "website",
  },
};

export default function MoreTestsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 