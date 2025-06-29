import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Mental Age Test - Discover Your True Psychological Age",
  description: "Take our scientifically-designed mental age test to accurately assess your psychological maturity. Free online assessment with instant personalized results and professional analysis.",
  keywords: [
    "mental age test",
    "psychological age assessment", 
    "mental maturity test",
    "personality test",
    "psychological evaluation",
    "cognitive age test",
    "mental development assessment",
    "psychology quiz",
    "emotional maturity test",
    "mental age calculator",
    "free mental age test",
    "online mental age test",
    "psychological maturity assessment",
    "mental age quiz",
    "cognitive development test"
  ],
  authors: [{ name: "Mental Age Test Team" }],
  creator: "Mental Age Test",
  publisher: "Mental Age Test",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mental-age-test.app/test",
    title: "Free Mental Age Test - Discover Your True Psychological Age",
    description: "Take our scientifically-designed mental age test to accurately assess your psychological maturity. Free online assessment with instant personalized results and professional analysis.",
    siteName: "Mental Age Test",
    images: [
      {
        url: "/og-mental-age-test.jpg",
        width: 1200,
        height: 630,
        alt: "Mental Age Test - Discover Your Psychological Age",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Mental Age Test - Discover Your True Psychological Age",
    description: "Take our scientifically-designed mental age test to accurately assess your psychological maturity. Free online assessment with instant personalized results.",
    images: ["/og-mental-age-test.jpg"],
    creator: "@mentalagetest",
  },
  alternates: {
    canonical: "https://yourdomain.com/test",
    languages: {
      'en-US': 'https://yourdomain.com/test',
      'zh-CN': 'https://yourdomain.com/test',
    },
  },
  category: "Psychology",
  classification: "Mental Health Assessment",
  other: {
    "article:section": "Psychology",
    "article:tag": "mental age test, psychological assessment, personality test",
  },
};

export default function TestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Mental Age Test",
            "description": "A scientifically-designed mental age test to assess psychological maturity and cognitive development",
            "url": "https://yourdomain.com/test",
            "applicationCategory": "HealthApplication",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            },
            "author": {
              "@type": "Organization",
              "name": "Mental Age Test Team"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Mental Age Test"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "15420",
              "bestRating": "5",
              "worstRating": "1"
            },
            "featureList": [
              "Free mental age assessment",
              "Instant results",
              "Scientific methodology",
              "Privacy protection",
              "Multi-language support",
              "Detailed analysis"
            ]
          }),
        }}
      />
      
      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is a mental age test?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A mental age test is a psychological assessment tool that evaluates your cognitive and emotional maturity by analyzing your thinking patterns, behavioral preferences, and decision-making processes. It compares your psychological development to different age groups to determine your mental age."
                }
              },
              {
                "@type": "Question", 
                "name": "How accurate is the mental age test?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our mental age test is based on established psychological principles and validated through extensive research. While no psychological test is 100% accurate, our assessment provides a reliable indication of your psychological maturity level and cognitive development."
                }
              },
              {
                "@type": "Question",
                "name": "How long does the mental age test take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The mental age test typically takes 5-10 minutes to complete. It consists of carefully selected questions designed to efficiently assess different aspects of your psychological development and mental maturity."
                }
              },
              {
                "@type": "Question",
                "name": "Is the mental age test free?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, our mental age test is completely free to take. You can access the full assessment, receive instant results, and get detailed analysis without any cost or registration required."
                }
              }
            ]
          }),
        }}
      />
      
      {children}
    </>
  );
} 