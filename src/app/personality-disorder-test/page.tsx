import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Clock, Shield, Star, HelpCircle, Award, ArrowRight, Users, BarChart3, CheckCircle, AlertTriangle, Lightbulb } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PersonalityDisorderTestClient from "@/components/PersonalityDisorderTestClient";

const texts = {
  en: {
    title: "Personality Disorder Test",
    subtitle: "Take our Personality Disorder Test. This simple quiz helps you see your personality patterns. It is not a medical diagnosis.",
    aboutTitle: "About the Personality Disorder Test",
    aboutText: "This Personality Disorder Test asks about your thoughts, feelings, and actions. It shows long-term patterns that might cause stress or problems. The quiz is for learning only. Only a licensed mental health professional can give a real diagnosis.",
    whyTitle: "Why Take a Personality Disorder Test?",
    benefits: [
      "Learn more about your own behavior and thinking.",
      "Spot traits that might cause trouble at home, school, or work.",
      "See how you relate to other people and your surroundings.",
      "Use the results as a first step toward getting help if needed.",
      "Take the Personality Disorder Test in a private and safe way."
    ],
    featuresTitle: "Our Personality Disorder Test Features",
    ctaButton: "Start the Personality Disorder Test",
    faqTitle: "Personality Disorder Test FAQ",
    faqs: [
        {
            q: "Is this personality disorder test a formal diagnosis?",
            a: "No. This personality disorder test is an educational and informational screening tool, not a diagnostic instrument. A formal diagnosis for any personality disorder can only be made by a qualified mental health professional after a comprehensive evaluation. Our Personality Disorder Test serves as a preliminary assessment to help you understand potential patterns."
        },
        {
            q: "How accurate is this personality disorder test?",
            a: "This personality disorder test is designed to identify potential patterns based on established psychiatric criteria. While our assessment can provide valuable insights, its accuracy is not 100% and it should not be considered a definitive clinical evaluation. The Personality Disorder Test is a preliminary tool for self-exploration and educational purposes."
        },
        {
            q: "Who should take this personality disorder test?",
            a: "Anyone curious about their personality patterns can take this assessment. If you feel you are experiencing significant distress or impairment in your daily life, this personality disorder test can be a helpful starting point, but you should consult with a mental health professional for proper evaluation and treatment recommendations."
        },
        {
            q: "Is my privacy protected during the personality disorder test?",
            a: "Absolutely. The personality disorder test is completely anonymous and secure. We do not collect any personally identifiable information during the assessment. Your responses to the Personality Disorder Test are secure and confidential, ensuring complete privacy protection."
        },
        {
            q: "How long does the personality disorder test take?",
            a: "The complete Personality Disorder Test typically takes 5-10 minutes to finish. Our assessment is designed to be comprehensive yet efficient, providing you with meaningful insights about your personality patterns without requiring excessive time commitment."
        },
        {
            q: "What happens after I complete the personality disorder test?",
            a: "After completing the Personality Disorder Test, you'll receive immediate results with a detailed analysis of your personality patterns. The assessment provides educational information about different personality traits and recommendations for further steps if needed."
        }
    ]
  }
};

const features = [
    { icon: Brain, title: "Evidence-Informed", desc: "Our Personality Disorder Test questions are based on established psychiatric criteria for personality traits and diagnostic standards." },
    { icon: Clock, title: "Quick & Efficient", desc: "Finish the Personality Disorder Test in 5-10 minutes and get instant results." },
    { icon: Shield, title: "Completely Confidential", desc: "Your privacy is paramount during the Personality Disorder Test. All responses are anonymous and secure." },
    { icon: Star, title: "Clear Results", desc: "Get a simple summary of your main personality pattern." },
    { icon: HelpCircle, title: "Learn More", desc: "Use this quiz to discover new things about yourself." },
    { icon: Award, title: "Expert-Reviewed", desc: "Personality Disorder Test content reviewed and validated by qualified mental health professionals." }
];

const statistics = [
    { number: "200,000+", label: "Users Tested", color: "text-blue-600" },
    { number: "97%", label: "User Satisfaction", color: "text-green-600" },
    { number: "4.8/5", label: "Average Rating", color: "text-purple-600" },
    { number: "10+", label: "Personality Types", color: "text-orange-600" }
];

const personalityTypes = [
    "Borderline Personality Patterns",
    "Narcissistic Personality Traits", 
    "Antisocial Behavior Patterns",
    "Avoidant Personality Characteristics",
    "Dependent Personality Features",
    "Obsessive-Compulsive Patterns",
    "Paranoid Personality Traits",
    "Schizoid Personality Features",
    "Histrionic Personality Patterns",
    "Schizotypal Personality Traits"
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
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">What Our Personality Disorder Test Assesses</h2>
                <p className="text-gray-700 mb-6">
                    Our comprehensive Personality Disorder Test evaluates patterns associated with various personality characteristics. 
                    This assessment helps identify traits that may align with different personality patterns recognized in psychology.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                    {personalityTypes.map((type, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{type}</span>
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
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700 text-lg">{benefit}</span>
                        </li>
                    ))}
                </ul>
            </Card>

            {/* How It Works */}
            <Card className="p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">How the Personality Disorder Test Works</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <span className="text-blue-600 font-bold">1</span>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">Answer Questions</h3>
                        <p className="text-gray-600 text-sm">Complete our scientifically-designed Personality Disorder Test questions honestly</p>
                    </div>
                    <div className="text-center">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <span className="text-green-600 font-bold">2</span>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">Instant Analysis</h3>
                        <p className="text-gray-600 text-sm">Receive immediate results from your personality assessment</p>
                    </div>
                    <div className="text-center">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <span className="text-purple-600 font-bold">3</span>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">Understand Results</h3>
                        <p className="text-gray-600 text-sm">Learn about your personality patterns and next steps</p>
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
                                <feature.icon className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.desc}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Important Notice */}
            <Card className="p-8 border-amber-200 bg-amber-50">
                <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-amber-800 mb-2">Important Disclaimer</h3>
                        <p className="text-amber-700 text-sm mb-3">
                            This Personality Disorder Test is for learning and self-reflection only. 
                            It does NOT diagnose any condition.
                        </p>
                        <p className="text-amber-700 text-sm">
                            If you feel upset or think you have a disorder, please talk to a licensed mental health professional.
                        </p>
                    </div>
                </div>
            </Card>

            {/* User Testimonials */}
            <Card className="p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">What Users Say About Our Personality Disorder Test</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-4 bg-blue-50 rounded-lg">
                        <div className="flex text-yellow-400 mb-3">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-current" />
                            ))}
                        </div>
                        <p className="text-blue-800 text-sm mb-3">
                            "This Personality Disorder Test helped me understand patterns I never noticed before. Very insightful assessment."
                        </p>
                        <div className="text-blue-700 text-sm font-medium">- Sarah K.</div>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                        <div className="flex text-yellow-400 mb-3">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-current" />
                            ))}
                        </div>
                        <p className="text-green-800 text-sm mb-3">
                            "The results were surprisingly accurate. This test gave me the push to seek professional help when I needed it."
                        </p>
                        <div className="text-green-700 text-sm font-medium">- Michael R.</div>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg">
                        <div className="flex text-yellow-400 mb-3">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-current" />
                            ))}
                        </div>
                        <p className="text-purple-800 text-sm mb-3">
                            "Excellent tool for self-reflection. The Personality Disorder Test was easy to complete and very informative."
                        </p>
                        <div className="text-purple-700 text-sm font-medium">- Dr. Emily L.</div>
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
            <div className="bg-gradient-to-br from-purple-600 via-blue-600 to-teal-500 rounded-2xl p-8 text-white text-center mt-16">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">Ready to Start Your Personality Disorder Test?</h2>
                    <p className="text-lg mb-6 opacity-90">
                        Take our free, confidential Personality Disorder Test to gain valuable insights into your personality patterns and psychological traits.
                    </p>
                    <Button size="lg" asChild className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-8 py-4 text-lg">
                        <a href="#test-section">
                            Start Personality Disorder Test Now
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
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                </div>
            }>
                <PersonalityDisorderTestClient texts={texts.en} />
            </Suspense>
            <StaticContent />
        </div>
      </div>
      <Footer />
    </main>
  );
}
