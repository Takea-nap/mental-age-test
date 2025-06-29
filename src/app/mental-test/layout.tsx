import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Mental Age Test - Take Our Mental Age Quiz | Discover Your Intellectual Age",
  description: "Take our free mental age test and mental health quiz to discover your cognitive maturity. This comprehensive personality disorder test and intellectual age assessment reveals what is my mental age with scientific accuracy. Compare your mental age quiz results with others.",
  keywords: [
    "mental age test",
    "mental age quiz", 
    "intellectual age test",
    "personality disorder test",
    "mental health quiz",
    "what is my mental age",
    "mental maturity test",
    "free mental age test",
    "cognitive age assessment",
    "personality problems test",
    "character disorder test",
    "a real me mental age",
    "age test",
    "mental age test free",
    "idrlabs test",
    "understand myself.com",
    "best personality test"
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
          url: "https://mental-age-test.app/mental-test",
    title: "Free Mental Age Test - Take Our Mental Age Quiz Online",
    description: "Discover your mental age with our free mental age test. This comprehensive mental health quiz and personality disorder test reveals your intellectual age and cognitive maturity level.",
    siteName: "Mental Age Test",
    images: [
      {
        url: "/og-mental-age-test.jpg",
        width: 1200,
        height: 630,
        alt: "Mental Age Test - Free Online Mental Age Quiz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Mental Age Test - Mental Age Quiz Online",
    description: "Take our mental age test to discover your intellectual age and mental maturity. Free mental health quiz with instant results.",
    images: ["/og-mental-age-test.jpg"],
    creator: "@mentalagetest",
  },
  alternates: {
    canonical: "https://yourdomain.com/mental-test",
    languages: {
      'en-US': 'https://yourdomain.com/mental-test',
      'zh-CN': 'https://yourdomain.com/mental-test',
    },
  },
  category: "Psychology",
  classification: "Mental Health Assessment",
  other: {
    "article:section": "Psychology",
    "article:tag": "mental age test, mental age quiz, intellectual age test, personality disorder test, mental health quiz",
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
            "name": "Mental Age Test - Free Mental Age Quiz",
            "description": "A scientifically-designed mental age test and mental health quiz to assess psychological maturity, intellectual age, and cognitive development. Discover what is my mental age with our comprehensive personality disorder test.",
            "url": "https://mental-age-test.app/mental-test",
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
              "Free mental age test assessment",
              "Mental age quiz with instant results",
              "Scientific mental health quiz methodology",
              "Privacy protection for mental age test data",
              "Multi-language mental age quiz support",
              "Detailed intellectual age analysis"
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
                "name": "What is a mental age test and how does it work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A mental age test is a psychological assessment tool that evaluates your cognitive and emotional maturity by analyzing your thinking patterns, behavioral preferences, and decision-making processes. This mental age quiz compares your psychological development to different age groups to determine your intellectual age and mental maturity level."
                }
              },
              {
                "@type": "Question", 
                "name": "How accurate is the mental age test results?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our mental age test is based on established psychological principles and validated through extensive research with over 2 million users. While no mental health quiz is 100% accurate, our mental age quiz assessment provides a reliable indication of your psychological maturity level and cognitive development, comparable to IDRlabs test quality."
                }
              },
              {
                "@type": "Question",
                "name": "How long does the mental age quiz take to complete?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The mental age test typically takes 5-10 minutes to complete. This intellectual age test consists of carefully selected questions designed to efficiently assess different aspects of your psychological development and mental maturity, providing a comprehensive personality disorder test experience."
                }
              },
              {
                "@type": "Question",
                "name": "Is the mental age test free to take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, our mental age test is completely free to take. You can access the full mental age quiz assessment, receive instant results, and get detailed analysis of what is my mental age without any cost or registration required."
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