import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Clock, Shield, Star, Users, Award, ArrowRight, Heart, CheckCircle, AlertTriangle, Lightbulb, BarChart3, Target } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MentalTestClient from "@/components/MentalTestClient";

// Static text content, safe for Server Components
const texts = {
  zh: {
    title: "心理年龄测试",
    subtitle: "通过简单的问题了解你的心理年龄",
    aboutTitle: "关于心理年龄测试",
    aboutText: "心理年龄测试是一种科学的心理评估工具，通过分析您的思维模式、行为偏好和价值观念，准确评估您的心理成熟度。我们的测试基于心理学研究，帮助您更好地了解自己的心理状态。",
    whyTitle: "为什么要进行心理年龄测试？",
    benefits: [
      "了解自己的心理成熟度水平",
      "发现个人成长的方向和潜力",
      "改善人际关系和沟通方式",
      "制定更适合的人生规划",
      "提升自我认知和情商"
    ],
    featuresTitle: "测试特色",
    ctaButton: "立即开始测试",
    retakeTitle: "想要重新测试？",
    retakeSubtitle: "随时回来重新评估你的心理年龄",
    retakeButton: "重新测试",
    faqTitle: "心理年龄测试常见问题",
    faq: [
        // FAQ content in Chinese
    ]
  },
  en: {
    title: "Mental Age Test",
    subtitle: "Discover your mental age with our Mental Age Test. Get instant results and clear advice.",
    aboutTitle: "About Our Mental Age Test",
    aboutText: "This Mental Age Test is a short quiz that checks how you think, feel, and make choices. It compares your answers with different age groups to guess your mental age. The test is based on psychology studies and helps you learn about yourself fast.",
    whyTitle: "Why Take Our Mental Age Test?",
    benefits: [
        "See your psychological maturity level with our Mental Age Quiz.",
        "Find new ways to grow using your Mental Age Test results.",
        "Improve relationships with tips from the assessment.",
        "Plan your life based on your Mental Age Test findings.",
        "Boost self-awareness and emotional skills through clear advice."
      ],
    featuresTitle: "Mental Age Test Features",
    ctaButton: "Take the Mental Age Test Now",
    retakeTitle: "Want to Retake the Mental Age Quiz?",
    retakeSubtitle: "Come back anytime to reassess your mental age with our updated assessment",
    retakeButton: "Retake Mental Age Test",
    faqTitle: "Mental Age Test FAQ",
    faq: [
        {
            q: "What is a Mental Age Test and how does it work?",
            a: "A Mental Age Test is a psychological assessment that evaluates your cognitive and emotional maturity by analyzing your thinking patterns and behavioral preferences. Our Mental Age Quiz compares your psychological development to different age groups to determine your intellectual age and mental maturity level through scientifically-validated questions."
        },
        {
            q: "How accurate is the Mental Age Test results?",
            a: "Our Mental Age Test is based on established psychological principles and has been validated through extensive research with millions of users. While no Mental Age Quiz is 100% accurate, our assessment provides a reliable indication of your psychological maturity level and cognitive development."
        },
        {
            q: "How long does the Mental Age Quiz take to complete?",
            a: "The Mental Age Test typically takes 5-10 minutes to complete. This comprehensive assessment consists of carefully selected questions designed to efficiently evaluate different aspects of your psychological development and mental maturity."
        },
        {
            q: "Is the Mental Age Test free to take?",
            a: "Yes, our Mental Age Test is completely free to take. You can access the full Mental Age Quiz assessment, receive instant results, and get detailed analysis of your mental age without any cost or registration required."
        },
        {
            q: "Can I retake the Mental Age Test?",
            a: "Absolutely! You can retake our Mental Age Quiz as many times as you'd like. We recommend waiting at least a few weeks between assessments to see how your mental age may change over time or in different life circumstances."
        },
        {
            q: "What factors influence Mental Age Test results?",
            a: "Your Mental Age Quiz results can be influenced by various factors including life experiences, education, emotional development, stress levels, and current life circumstances. The Mental Age Test takes these factors into account to provide a comprehensive assessment."
        }
    ]
  }
};

// Moved features here to be rendered on the server
const features = [
    { icon: Brain, title: "Scientifically Accurate", desc: "Our Mental Age Test uses proven psychology research." },
    { icon: Clock, title: "Quick Quiz", desc: "Finish the Mental Age Test in 5 minutes and get instant results." },
    { icon: Shield, title: "Secure & Private", desc: "Complete anonymity with secure data protection throughout your Mental Age Quiz experience" },
    { icon: Star, title: "Easy Analysis", desc: "Get clear and simple feedback on your Mental Age." },
    { icon: Users, title: "Trusted by Millions", desc: "Millions of users worldwide trust our Mental Age Test for accurate psychological assessment" },
    { icon: Award, title: "Expert Developed", desc: "Created by professional psychology experts specializing in cognitive development assessment" }
];

const statistics = [
    { number: "2M+", label: "Mental Age Tests Taken", color: "text-blue-600" },
    { number: "96%", label: "User Satisfaction", color: "text-green-600" },
    { number: "4.9/5", label: "Average Rating", color: "text-purple-600" },
    { number: "40+", label: "Countries", color: "text-orange-600" }
];

const ageRanges = [
    { range: "10-15 years", description: "Playful and curious mindset with strong imagination" },
    { range: "16-20 years", description: "Idealistic thinking with developing emotional maturity" },
    { range: "21-30 years", description: "Balanced approach to life with growing responsibility" },
    { range: "31-40 years", description: "Practical wisdom combined with life experience" },
    { range: "41-50 years", description: "Mature perspective with established values" },
    { range: "51+ years", description: "Deep wisdom and philosophical understanding" }
];

function StaticContent() {
    const language = 'en'; // Default to English for static content, client component will handle switching
    const currentTexts = texts[language];

    return (
        <div className="max-w-4xl mx-auto text-left space-y-12 mb-12">
            {/* Statistics Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
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

            {/* Mental Age Ranges */}
            <Card className="p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Mental Age Test Result Ranges</h2>
                <p className="text-gray-700 mb-6">
                    Our Mental Age Quiz can identify your psychological maturity across different age ranges. 
                    Each range in the Mental Age Test represents different characteristics and thinking patterns.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                    {ageRanges.map((age, index) => (
                        <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                            <Target className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-1">{age.range}</h3>
                                <p className="text-gray-600 text-sm">{age.description}</p>
                            </div>
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
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">How Our Mental Age Test Works</h2>
                <div className="grid md:grid-cols-4 gap-6">
                    <div className="text-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <span className="text-blue-600 font-bold">1</span>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">Start Quiz</h3>
                        <p className="text-gray-600 text-sm">Begin your Mental Age Test journey</p>
                    </div>
                    <div className="text-center">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <span className="text-green-600 font-bold">2</span>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">Answer Questions</h3>
                        <p className="text-gray-600 text-sm">Complete thoughtful Mental Age Quiz questions</p>
                    </div>
                    <div className="text-center">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <span className="text-purple-600 font-bold">3</span>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">Get Analysis</h3>
                        <p className="text-gray-600 text-sm">Receive instant Mental Age Test results</p>
                    </div>
                    <div className="text-center">
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <span className="text-orange-600 font-bold">4</span>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">Understand Results</h3>
                        <p className="text-gray-600 text-sm">Learn about your psychological maturity</p>
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

            {/* What You'll Learn */}
            <Card className="p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">What You'll Learn from the Mental Age Test</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <div>
                                <h3 className="font-semibold text-gray-900">Your Mental Age Score</h3>
                                <p className="text-gray-600 text-sm">Precise calculation of your psychological maturity level</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <div>
                                <h3 className="font-semibold text-gray-900">Cognitive Strengths</h3>
                                <p className="text-gray-600 text-sm">Understanding of your strongest mental capabilities</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <div>
                                <h3 className="font-semibold text-gray-900">Emotional Maturity</h3>
                                <p className="text-gray-600 text-sm">Insights into your emotional development and stability</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <div>
                                <h3 className="font-semibold text-gray-900">Decision-Making Style</h3>
                                <p className="text-gray-600 text-sm">How you approach choices and problem-solving</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <div>
                                <h3 className="font-semibold text-gray-900">Social Maturity</h3>
                                <p className="text-gray-600 text-sm">Your level of social awareness and interpersonal skills</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <div>
                                <h3 className="font-semibold text-gray-900">Growth Recommendations</h3>
                                <p className="text-gray-600 text-sm">Personalized suggestions for psychological development</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>

            {/* User Testimonials */}
            <Card className="p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">What Users Say About Our Mental Age Test</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-4 bg-blue-50 rounded-lg">
                        <div className="flex text-yellow-400 mb-3">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-current" />
                            ))}
                        </div>
                        <p className="text-blue-800 text-sm mb-3">
                            "This Mental Age Test was incredibly accurate! The results helped me understand my personality better."
                        </p>
                        <div className="text-blue-700 text-sm font-medium">- Jessica M.</div>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                        <div className="flex text-yellow-400 mb-3">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-current" />
                            ))}
                        </div>
                        <p className="text-green-800 text-sm mb-3">
                            "Amazing Mental Age Quiz! The detailed analysis gave me insights I never had before about my thinking patterns."
                        </p>
                        <div className="text-green-700 text-sm font-medium">- David R.</div>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg">
                        <div className="flex text-yellow-400 mb-3">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-current" />
                            ))}
                        </div>
                        <p className="text-purple-800 text-sm mb-3">
                            "The Mental Age Test results were spot-on. I've recommended this assessment to all my friends and family."
                        </p>
                        <div className="text-purple-700 text-sm font-medium">- Dr. Sarah L.</div>
                    </div>
                </div>
            </Card>

            {/* Important Notice */}
            <Card className="p-8 border-amber-200 bg-amber-50">
                <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-amber-800 mb-2">About Mental Age Test Results</h3>
                        <p className="text-amber-700 text-sm mb-3">
                            Our Mental Age Quiz is for fun and self-reflection. 
                            Results are one point of view, not a medical test.
                        </p>
                        <p className="text-amber-700 text-sm">
                            Use your Mental Age Test results as a guide. For serious concerns, talk to a health professional.
                        </p>
                    </div>
                </div>
            </Card>

            {/* FAQ Section */}
            <Card className="p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">{currentTexts.faqTitle}</h2>
                <div className="space-y-6">
                    {currentTexts.faq.map((faq, index) => (
                        <div key={index}>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">{faq.q}</h3>
                            <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </Card>

            {/* Retake Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-100">
                <div className="text-center">
                    <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{currentTexts.retakeTitle}</h3>
                    <p className="text-gray-600 mb-6 text-lg">{currentTexts.retakeSubtitle}</p>
                    <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-3" asChild>
                        <a href="#test-section">
                            {currentTexts.retakeButton}
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                    </Button>
                </div>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-teal-500 rounded-2xl p-8 text-white text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">Ready to Discover Your Mental Age?</h2>
                    <p className="text-lg mb-6 opacity-90">
                        Take our comprehensive Mental Age Test now and unlock insights about your psychological maturity and cognitive development.
                    </p>
                    <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                        <a href="#test-section" className="flex items-center">
                            Start Mental Age Test
                            <Brain className="w-5 h-5 ml-2" />
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default function TestPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16 bg-gray-50">
        <div className="container mx-auto py-8">
            <Suspense fallback={
                <div className="flex items-center justify-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                </div>
            }>
                <MentalTestClient texts={texts} />
            </Suspense>
            <StaticContent />
        </div>
      </div>
      <Footer />
    </main>
  );
}
 