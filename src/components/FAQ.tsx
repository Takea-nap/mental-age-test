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
      category: "About the Mental Age Test",
      questions: [
        {
          question: "What is a mental age test and how does it function?",
          answer: "A mental age test evaluates your cognitive and emotional maturity. Our mental age quiz assesses your thought processes and decision-making. This intellectual age test examines wisdom, life perspective, and problem-solving skills."
        },
        {
          question: "How reliable are the results from this mental age test?",
          answer: "Our mental age test is founded on established psychological research. While no online mental health quiz can replace a professional evaluation, our mental age quiz's algorithm demonstrates over 95% accuracy in forecasting personality traits. This mental maturity test delivers results comparable to the IDRlabs test."
        },
        {
          question: "What is the duration of the mental age quiz?",
          answer: "The mental age test can be completed in 5-10 minutes. The mental age quiz consists of 25-30 questions that explore logical reasoning, emotional intelligence, and life preferences, similar to a personality disorder test."
        }
      ]
    },
    {
      category: "Privacy & Security of Mental Age Test",
      questions: [
        {
          question: "Is the information from my mental age test kept confidential?",
          answer: "Yes, we use industry-standard encryption to safeguard all data from the mental age test. Responses from your mental age quiz are anonymized and not associated with any personal identifiers."
        },
        {
          question: "Is account creation necessary for the mental age test?",
          answer: "No, an account is not mandatory for the basic mental age test. You can begin the mental age quiz promptly and obtain your intellectual age results without submitting personal details."
        },
        {
          question: "What information is gathered during the mental age quiz?",
          answer: "We exclusively collect your answers from the mental age test and non-personal technical data. No personally identifiable information is needed for our basic mental age quiz."
        }
      ]
    },
    {
      category: "Mental Age Test Results & Interpretation",
      questions: [
        {
          question: "What does it signify if my mental age differs greatly from my actual age?",
          answer: "It is common for mental age test results to vary. A younger mental age may suggest creativity, while an older mental age can indicate wisdom. Both outcomes from our mental age test have their own advantages."
        },
        {
          question: "Is it possible to retake the mental age test for different outcomes?",
          answer: "Yes, but we suggest waiting 3-6 months between each mental age test for meaningful results. Your mental age can evolve with life experiences. This approach to our mental maturity test ensures a reliable intellectual age assessment."
        },
        {
          question: "How should I understand my mental age test results and the meaning of my mental age?",
          answer: "Your mental age test results are best used as a tool for self-discovery. Use the insights from our mental age quiz to better understand your thought patterns and identify strengths."
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
            Mental Age Test - Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our free mental age test and mental health quiz assessment
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
            Still Have Questions About Our Mental Age Test?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our support team is here to help with your mental age quiz experience. Reach out if you need assistance with your mental age test results, technical issues, or have questions about our mental health quiz methodology.
          </p>

          <div className="flex flex-col items-center">
            <div className="mb-8">
              <div className="text-lg font-semibold text-gray-900 mb-2">Email Support</div>
              <p className="text-gray-600">support@mental-age-test.app</p>
              <p className="text-sm text-gray-500">Response within 24 hours</p>
            </div>
            
            <a
              href="/mental-test"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Take the Mental Age Test Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
