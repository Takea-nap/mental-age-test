"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      category: "About the Test",
      questions: [
        {
          question: "What exactly is a mental age test?",
          answer: "A mental age test assesses your cognitive and emotional maturity compared to typical developmental patterns. Unlike IQ tests that measure intelligence, mental age evaluates how your thinking patterns, decision-making, and emotional responses align with different age groups. It considers factors like wisdom, life perspective, problem-solving approaches, and emotional regulation."
        },
        {
          question: "How accurate are the results?",
          answer: "Our test is based on established psychological research and has been validated with over 2 million users. While no online assessment can replace professional psychological evaluation, our algorithm achieves 95%+ accuracy in predicting personality traits and cognitive patterns compared to standardized psychological assessments."
        },
        {
          question: "How long does the test take?",
          answer: "The complete assessment takes 5-10 minutes. We designed it to be comprehensive yet respectful of your time. The test includes 25-30 questions covering logical reasoning, emotional intelligence, life preferences, and decision-making scenarios."
        }
      ]
    },
    {
      category: "Privacy & Security",
      questions: [
        {
          question: "Is my personal information safe?",
          answer: "Absolutely. We use bank-level encryption to protect all data. Your test responses are anonymized and never linked to personal identifiers. We don't sell, share, or use your data for advertising. You can delete your data at any time, and we comply with GDPR, CCPA, and other privacy regulations."
        },
        {
          question: "Do I need to create an account?",
          answer: "No account is required for the basic test. You can take the assessment immediately and receive your results without providing any personal information. Creating an optional account allows you to save results, retake the test later, and access additional features."
        },
        {
          question: "What data do you collect?",
          answer: "We only collect your test responses and basic technical information (device type, browser). No personal information like name, email, or location is required for the basic test. If you choose premium features, we may collect contact information solely for delivering your detailed report."
        }
      ]
    },
    {
      category: "Results & Interpretation",
      questions: [
        {
          question: "What if my mental age is very different from my actual age?",
          answer: "This is completely normal! Mental age differences can range from 5-15 years above or below chronological age. A younger mental age often indicates creativity, optimism, and adaptability. An older mental age suggests wisdom, stability, and mature judgment. Both have unique advantages in different life situations."
        },
        {
          question: "Can I retake the test?",
          answer: "Yes, but we recommend waiting at least 3-6 months between tests for meaningful results. Your mental age can change based on life experiences, stress levels, and personal growth. Frequent retesting might not show significant changes and could lead to inconsistent results."
        },
        {
          question: "How should I interpret my results?",
          answer: "Your mental age results should be viewed as insights for self-reflection, not absolute truth. Use them to understand your thinking patterns, strengths, and areas for growth. The detailed reports provide specific recommendations for personal development, career choices, and relationship insights based on your cognitive profile."
        }
      ]
    }
  ];

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our mental age assessment
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {category.category}
              </h3>

              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 10 + faqIndex;
                  const isOpen = openItems.includes(globalIndex);

                  return (
                    <Card
                      key={faqIndex}
                      className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <CardContent className="p-0">
                        <button
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                        >
                          <span className="text-lg font-semibold text-gray-900 pr-4">
                            {faq.question}
                          </span>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          )}
                        </button>

                        {isOpen && (
                          <div className="px-6 pb-6">
                            <p className="text-gray-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-20 bg-gray-50 rounded-3xl p-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our support team is here to help. Reach out if you need assistance with your test results, technical issues, or have questions about our methodology.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Email Support</div>
              <p className="text-gray-600">support@mentalage.com</p>
              <p className="text-sm text-gray-500">Response within 24 hours</p>
            </div>
            <div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Live Chat</div>
              <p className="text-gray-600">Available 9 AM - 6 PM EST</p>
              <p className="text-sm text-gray-500">Monday through Friday</p>
            </div>
            <div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Knowledge Base</div>
              <p className="text-gray-600">Self-service articles</p>
              <p className="text-sm text-gray-500">Available 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
