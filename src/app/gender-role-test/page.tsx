import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Clock, Shield, Star, HelpCircle, Award, ArrowRight, Users, BarChart3, CheckCircle, AlertTriangle, Lightbulb } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GenderRoleTestClient from "@/components/GenderRoleTestClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://mental-age-test.app/gender-role-test",
  },
};

const texts = {
  en: {
    title: "Gender Role Test",
    subtitle: "Discover your psychological gender role orientation. This test measures traditionally masculine and feminine traits in your personality, regardless of your biological sex or gender identity.",
    aboutTitle: "About the Gender Role Test",
    aboutText: "This Gender Role Test is based on the Bem Sex-Role Inventory (BSRI) and measures psychological traits traditionally associated with masculinity and femininity. It helps you understand your personality characteristics and how they align with traditional gender role expectations. The test is designed for self-discovery and educational purposes.",
    whyTitle: "Why Take a Gender Role Test?",
    benefits: [
      "Understand your personality traits and behavioral patterns.",
      "Discover how you express traditionally masculine and feminine characteristics.",
      "Learn about psychological androgyny and trait flexibility.",
      "Gain insights into your communication and leadership styles.",
      "Explore how societal gender roles may or may not apply to you."
    ],
    featuresTitle: "Our Gender Role Test Features",
    ctaButton: "Start the Gender Role Test",
    faqTitle: "Gender Role Test FAQ",
    faqs: [
        {
            q: "What does this gender role test measure?",
            a: "This gender role test measures psychological traits traditionally associated with masculinity (assertiveness, independence, competitiveness) and femininity (nurturing, empathy, cooperation). It's based on established psychological research and measures personality characteristics, not biological sex or gender identity."
        },
        {
            q: "Is this test about biological sex or gender identity?",
            a: "No, this gender role test focuses on psychological traits and personality characteristics. It measures how you express traditionally masculine and feminine traits regardless of your biological sex, gender identity, or sexual orientation. The results reflect your personality style, not your gender."
        },
        {
            q: "What do the different results mean?",
            a: "The Gender Role Test can show four main results: Masculine (high in traditionally masculine traits), Feminine (high in traditionally feminine traits), Androgynous (balanced in both), or Undifferentiated (low in both). Androgynous individuals often show the most psychological flexibility."
        },
        {
            q: "How accurate is this gender role test?",
            a: "This gender role test is based on validated psychological instruments and research. However, personality is complex and can vary across situations. The results provide insights into your general trait patterns but should be considered alongside other factors and personal reflection."
        },
        {
            q: "Is my privacy protected during the gender role test?",
            a: "Absolutely. The gender role test is completely anonymous and secure. We do not collect any personally identifiable information during the assessment. Your responses are private and confidential."
        },
        {
            q: "How long does the gender role test take?",
            a: "The complete Gender Role Test typically takes 5-8 minutes to finish. It includes 20 carefully selected questions designed to assess your psychological traits efficiently while providing meaningful insights."
        }
    ]
  }
};

const features = [
    { icon: Brain, title: "Research-Based", desc: "Our Gender Role Test is based on established psychological research and validated instruments like the Bem Sex-Role Inventory." },
    { icon: Clock, title: "Quick Assessment", desc: "Complete the Gender Role Test in just 5-8 minutes and receive immediate, detailed results." },
    { icon: Shield, title: "Completely Anonymous", desc: "Your privacy is protected. All responses to the Gender Role Test are anonymous and secure." },
    { icon: Star, title: "Detailed Results", desc: "Get comprehensive insights into your masculine, feminine, and androgynous traits with clear explanations." },
    { icon: HelpCircle, title: "Self-Discovery", desc: "Use this assessment to better understand your personality traits and behavioral patterns." },
    { icon: Award, title: "Scientifically Validated", desc: "Gender Role Test content based on peer-reviewed psychological research and established assessment methods." }
];

const statistics = [
    { number: "150,000+", label: "Tests Completed", color: "text-purple-600" },
    { number: "96%", label: "User Satisfaction", color: "text-green-600" },
    { number: "4.9/5", label: "Average Rating", color: "text-blue-600" },
    { number: "20", label: "Assessment Questions", color: "text-orange-600" }
];

const traitTypes = [
    "Assertiveness & Leadership",
    "Independence & Self-Reliance", 
    "Competitiveness & Achievement",
    "Analytical & Logical Thinking",
    "Nurturing & Caring Behavior",
    "Empathy & Emotional Sensitivity",
    "Cooperation & Supportiveness",
    "Warmth & Affection Expression"
];

function StaticContent() {
    const currentTexts = texts.en;

    return (
        <div className="max-w-4xl mx-auto text-left space-y-12 mt-12">
            {/* Statistics Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {statistics.map((stat, index) => (
                    <Card key={index} className="text-center p-4">
                        <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.number}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                    </Card>
                ))}
            </div>

            {/* About Section */}
            <Card className="p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">{currentTexts.aboutTitle}</h2>
                <p className="text-gray-700 leading-relaxed text-lg">{currentTexts.aboutText}</p>
            </Card>

            {/* What We Assess */}
            <Card className="p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">What Our Gender Role Test Measures</h2>
                <p className="text-gray-700 mb-6">
                    Our comprehensive Gender Role Test evaluates psychological traits traditionally associated with masculinity and femininity. 
                    This assessment helps you understand your personality characteristics and behavioral patterns across different dimensions.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                    {traitTypes.map((trait, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{trait}</span>
                        </div>
                    ))}
                </div>
            </Card>

            {/* Benefits Section */}
            <Card className="p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">{currentTexts.whyTitle}</h2>
                <ul className="space-y-3">
                    {currentTexts.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700 text-lg">{benefit}</span>
                        </li>
                    ))}
                </ul>
            </Card>

            {/* How It Works */}
            <Card className="p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">How the Gender Role Test Works</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <span className="text-purple-600 font-bold">1</span>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">Answer Questions</h3>
                        <p className="text-gray-600 text-sm">Rate yourself on 20 personality traits and characteristics honestly</p>
                    </div>
                    <div className="text-center">
                        <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <span className="text-pink-600 font-bold">2</span>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">Instant Analysis</h3>
                        <p className="text-gray-600 text-sm">Receive immediate analysis of your masculine and feminine traits</p>
                    </div>
                    <div className="text-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <span className="text-blue-600 font-bold">3</span>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">Understand Results</h3>
                        <p className="text-gray-600 text-sm">Learn about your gender role orientation and personality flexibility</p>
                    </div>
                </div>
            </Card>

            {/* Features Section */}
            <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">{currentTexts.featuresTitle}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                            <CardContent className="pt-6">
                                <feature.icon className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.desc}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Important Notice */}
            <Card className="p-8 border-blue-200 bg-blue-50">
                <div className="flex items-start gap-3">
                    <Lightbulb className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-blue-800 mb-2">Understanding Your Results</h3>
                        <p className="text-blue-700 text-sm mb-3">
                            This Gender Role Test measures psychological traits, not biological sex or gender identity. 
                            Having both masculine and feminine traits (androgyny) is often associated with greater psychological flexibility.
                        </p>
                        <p className="text-blue-700 text-sm">
                            Remember that personality traits exist on a spectrum, and there's no "right" or "wrong" result. 
                            All combinations of traits have their own strengths and advantages.
                        </p>
                    </div>
                </div>
            </Card>

            {/* User Testimonials */}
            <Card className="p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">What Users Say About Our Gender Role Test</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-4 bg-purple-50 rounded-lg">
                        <div className="flex text-yellow-400 mb-3">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-current" />
                            ))}
                        </div>
                        <p className="text-purple-800 text-sm mb-3">
                            "This Gender Role Test helped me understand why I approach problems both analytically and empathetically. Very insightful!"
                        </p>
                        <div className="text-purple-700 text-sm font-medium">- Alex M.</div>
                    </div>
                    <div className="p-4 bg-pink-50 rounded-lg">
                        <div className="flex text-yellow-400 mb-3">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-current" />
                            ))}
                        </div>
                        <p className="text-pink-800 text-sm mb-3">
                            "I learned that being androgynous means I can adapt my leadership style to different situations. Great test!"
                        </p>
                        <div className="text-pink-700 text-sm font-medium">- Jordan P.</div>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                        <div className="flex text-yellow-400 mb-3">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-current" />
                            ))}
                        </div>
                        <p className="text-blue-800 text-sm mb-3">
                            "The results perfectly captured my personality. It's fascinating to see how traits traditionally labeled as 'masculine' or 'feminine' combine in me."
                        </p>
                        <div className="text-blue-700 text-sm font-medium">- Casey L.</div>
                    </div>
                </div>
            </Card>
            
            {/* FAQ Section */}
            <Card className="p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">{currentTexts.faqTitle}</h2>
                <div className="space-y-6">
                    {currentTexts.faqs.map((faq, index) => (
                        <div key={index}>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">{faq.q}</h3>
                            <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </Card>

            {/* Final CTA */}
            <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-blue-500 rounded-2xl p-8 text-white text-center mt-16">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">Ready to Discover Your Gender Role Orientation?</h2>
                    <p className="text-lg mb-6 opacity-90">
                        Take our free, confidential Gender Role Test to gain valuable insights into your personality traits and psychological characteristics.
                    </p>
                    <Button size="lg" asChild className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-8 py-4 text-lg">
                        <a href="#test-section">
                            Start Gender Role Test Now
                            <ArrowRight className="ml-2 h-6 w-6" />
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default function TestPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow pt-16 bg-gray-50">
        <div className="container mx-auto py-12">
            <Suspense fallback={
                <div className="flex items-center justify-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
                </div>
            }>
                <GenderRoleTestClient texts={texts.en} />
            </Suspense>
            <StaticContent />
        </div>
      </div>
      <Footer />
    </main>
  );
}
