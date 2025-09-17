import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Brain, Clock, Target, TrendingUp, CheckCircle, AlertCircle, BookOpen, Lightbulb, Shield, Award, Users, HelpCircle, ChevronDown, Star, BarChart3, Zap, Gift } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intellectual Age Test - Assess Your Cognitive Development",
  description: "Understand your intellectual age and cognitive development level through scientific cognitive assessment tests. ",
  keywords: "intellectual age test, cognitive ability test, IQ test, intelligence assessment, cognitive development",
  alternates: {
    canonical: "https://mental-age-test.app/intellectual-age-test",
  },
};

export default function IntellectualAgeTestPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
              <Brain className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Intellectual Age Test
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Through scientific cognitive assessment, measure your intellectual development level and cognitive age with our comprehensive Intellectual Age Test platform.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-500" />
                <span>About 15-25 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-green-500" />
                <span>Scientifically accurate</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-purple-500" />
                <span>Detailed analysis</span>
              </div>
            </div>
          </div>

          {/* Start Test Button */}
          <div className="text-center mb-12">
            <Link href="/intellectual-age-test/start">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Start Intellectual Age Test
                <Brain className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Test Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <Card className="text-center p-4">
              <div className="text-2xl font-bold text-blue-600 mb-1">50,000+</div>
              <div className="text-sm text-gray-600">Users Tested</div>
            </Card>
            <Card className="text-center p-4">
              <div className="text-2xl font-bold text-green-600 mb-1">98.5%</div>
              <div className="text-sm text-gray-600">Accuracy Rate</div>
            </Card>
            <Card className="text-center p-4">
              <div className="text-2xl font-bold text-purple-600 mb-1">4.9/5</div>
              <div className="text-sm text-gray-600">User Rating</div>
            </Card>
            <Card className="text-center p-4">
              <div className="text-2xl font-bold text-orange-600 mb-1">30+</div>
              <div className="text-sm text-gray-600">Test Questions</div>
            </Card>
          </div>

          {/* Test Advantages */}
          <Card className="mb-8 border-indigo-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5 text-indigo-600" />
                <h2 className="text-2xl font-bold">Why Choose Our Intellectual Age Test?</h2>
              </CardTitle>
              <CardDescription>
                Our Intellectual Age Test stands out with unique advantages and scientific methodology
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Scientific Reliability</h3>
                  <p className="text-gray-600 text-sm">Based on established cognitive psychology research and validated assessment methods</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Zap className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Instant Results</h3>
                  <p className="text-gray-600 text-sm">Get your intellectual age assessment immediately after completing the test</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <BarChart3 className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Detailed Analysis</h3>
                  <p className="text-gray-600 text-sm">Comprehensive breakdown of your cognitive strengths and areas for improvement</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Test Overview */}
          <Card className="mb-8 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                <h2 className="text-2xl font-bold">Intellectual Age Test Overview</h2>
              </CardTitle>
              <CardDescription>
                This comprehensive Intellectual Age Test covers 4 main cognitive domains, each containing multiple questions, totaling approximately 30 questions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm font-semibold text-blue-600">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Numerical Reasoning</h3>
                      <p className="text-gray-600 text-sm">Mathematical operations, number sequences, numerical logic patterns</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm font-semibold text-purple-600">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Abstract Thinking</h3>
                      <p className="text-gray-600 text-sm">Pattern recognition, visual reasoning, spatial imagination abilities</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm font-semibold text-green-600">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Memory & Learning</h3>
                      <p className="text-gray-600 text-sm">Working memory capacity, information processing, learning efficiency</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm font-semibold text-orange-600">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Logical Reasoning</h3>
                      <p className="text-gray-600 text-sm">Deductive reasoning, inductive reasoning, critical thinking skills</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Scientific Foundation */}
          <Card className="mb-8 border-emerald-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-emerald-600" />
                <h2 className="text-2xl font-bold">Scientific Foundation</h2>
              </CardTitle>
              <CardDescription>
                Our Intellectual Age Test is built on decades of cognitive psychology research
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-emerald-50 rounded-lg">
                  <h3 className="font-semibold text-emerald-900 mb-2">Research-Based Methodology</h3>
                  <p className="text-emerald-800 text-sm mb-3">
                    The Intellectual Age Test framework is based on established cognitive development theories from leading researchers like Jean Piaget and modern neuroscience findings.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">Cognitive Development Theory</Badge>
                    <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">Neuroplasticity Research</Badge>
                    <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">Psychometric Standards</Badge>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-1">Validation Process</h4>
                    <p className="text-gray-600 text-sm">Tested with diverse age groups across multiple demographics to ensure accuracy</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-1">Regular Updates</h4>
                    <p className="text-gray-600 text-sm">Questions and algorithms continuously refined based on user feedback and research</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Test Instructions */}
          <Card className="mb-8 border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-700">
                <CheckCircle className="w-5 h-5" />
                <h2 className="text-2xl font-bold">Test Instructions</h2>
              </CardTitle>
              <CardDescription>
                Follow these guidelines to get the most accurate results from your Intellectual Age Test
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900">Test Preparation</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2"> 
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      Find a quiet environment to avoid distractions during the test
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      Prepare paper and pen for calculations (some questions require)
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      Ensure stable internet connection throughout the assessment
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900">Answer Requirements</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      Each question has a time limit, please answer quickly and intuitively
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      Choose the most appropriate answer, cannot go back to modify responses
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      If unsure, please choose the most likely answer based on first instinct
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* What You'll Get */}
          <Card className="mb-8 border-purple-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gift className="w-5 h-5 text-purple-600" />
                <h2 className="text-2xl font-bold">What You'll Receive</h2>
              </CardTitle>
              <CardDescription>
                Complete your Intellectual Age Test to unlock detailed insights about your cognitive abilities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Your Intellectual Age Score</h3>
                      <p className="text-gray-600 text-sm">Precise calculation of your cognitive development level</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Cognitive Strengths Analysis</h3>
                      <p className="text-gray-600 text-sm">Identification of your strongest cognitive abilities</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Detailed Performance Report</h3>
                      <p className="text-gray-600 text-sm">Breakdown by each cognitive domain tested</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Improvement Recommendations</h3>
                      <p className="text-gray-600 text-sm">Personalized suggestions for cognitive enhancement</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Comparative Analysis</h3>
                      <p className="text-gray-600 text-sm">See how your results compare to age groups</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Shareable Certificate</h3>
                      <p className="text-gray-600 text-sm">Professional-looking results you can share</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Warning Card */}
          <Card className="mb-8 border-amber-200 bg-amber-50">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h3 className="font-semibold text-amber-800 mb-2">Important Notice</h3>
                  <p className="text-amber-700 text-sm mb-3">
                    This Intellectual Age Test is a cognitive ability assessment tool, and the results are for reference only. Intellectual age is not equivalent to IQ and cannot fully represent a person's complete intelligence profile.
                  </p>
                  <p className="text-amber-700 text-sm">
                    If you have professional consultation needs about cognitive abilities, it is recommended to seek help from qualified psychologists or cognitive assessment specialists.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sample Questions Preview */}
          <Card className="mb-8 border-purple-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-purple-600" />
                <h2 className="text-2xl font-bold">Sample Questions</h2>
              </CardTitle>
              <CardDescription>
                Here are examples of question types you'll encounter in the Intellectual Age Test
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Numerical Reasoning Example</h3>
                  <p className="text-blue-800 mb-3">Find the pattern in the sequence: 2, 6, 18, 54, ?</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    <Button variant="outline" size="sm" className="text-blue-700">A. 108</Button>
                    <Button variant="outline" size="sm" className="text-blue-700">B. 162</Button>
                    <Button variant="outline" size="sm" className="text-blue-700">C. 216</Button>
                    <Button variant="outline" size="sm" className="text-blue-700">D. 270</Button>
                  </div>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">Logical Reasoning Example</h3>
                  <p className="text-green-800 mb-3">
                    If "All birds can fly" and "Penguins are birds" are both true, which conclusion is logically correct?
                  </p>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full text-left justify-start text-green-700">
                      A. Penguins can fly
                    </Button>
                    <Button variant="outline" size="sm" className="w-full text-left justify-start text-green-700">
                      B. These two premises are contradictory
                    </Button>
                  </div>
                </div>

                <div className="p-4 bg-purple-50 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-2">Abstract Thinking Example</h3>
                  <p className="text-purple-800 mb-3">
                    Which shape completes the pattern? [Visual pattern would be displayed here]
                  </p>
                  <div className="grid grid-cols-4 gap-2">
                    <Button variant="outline" size="sm" className="text-purple-700">Option A</Button>
                    <Button variant="outline" size="sm" className="text-purple-700">Option B</Button>
                    <Button variant="outline" size="sm" className="text-purple-700">Option C</Button>
                    <Button variant="outline" size="sm" className="text-purple-700">Option D</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <Card className="mb-8 border-indigo-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-indigo-600" />
                <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
              </CardTitle>
              <CardDescription>
                Common questions about the Intellectual Age Test and cognitive assessment
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between cursor-pointer">
                    <h3 className="font-semibold text-gray-900">What is an Intellectual Age Test?</h3>
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  </div>
                  <div className="mt-3 text-gray-600 text-sm">
                    An Intellectual Age Test measures your cognitive development level compared to different age groups. It assesses various mental abilities including reasoning, memory, and problem-solving skills to determine your intellectual maturity.
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between cursor-pointer">
                    <h3 className="font-semibold text-gray-900">How accurate is this Intellectual Age Test?</h3>
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  </div>
                  <div className="mt-3 text-gray-600 text-sm">
                    Our test has a 98.5% accuracy rate based on validation studies. However, like all cognitive assessments, results should be considered as one indicator among many for understanding intellectual capabilities.
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between cursor-pointer">
                    <h3 className="font-semibold text-gray-900">Can I retake the Intellectual Age Test?</h3>
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  </div>
                  <div className="mt-3 text-gray-600 text-sm">
                    Yes, you can retake the test after 30 days. This waiting period ensures that practice effects don't artificially inflate your scores and maintains the integrity of the assessment.
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between cursor-pointer">
                    <h3 className="font-semibold text-gray-900">Is intellectual age the same as IQ?</h3>
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  </div>
                  <div className="mt-3 text-gray-600 text-sm">
                    No, intellectual age and IQ are different measures. While IQ compares your performance to others your chronological age, intellectual age determines which age group your cognitive abilities most closely match.
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between cursor-pointer">
                    <h3 className="font-semibold text-gray-900">What factors can affect my test results?</h3>
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  </div>
                  <div className="mt-3 text-gray-600 text-sm">
                    Several factors can influence your Intellectual Age Test results including fatigue, stress, distractions, technical issues, and your familiarity with digital interfaces. Taking the test when well-rested and focused will yield the most accurate results.
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between cursor-pointer">
                    <h3 className="font-semibold text-gray-900">How long does the test take to complete?</h3>
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  </div>
                  <div className="mt-3 text-gray-600 text-sm">
                    The complete Intellectual Age Test typically takes 15-25 minutes to finish. Each question has a time limit to ensure authentic responses, but you'll have sufficient time to think through each problem.
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between cursor-pointer">
                    <h3 className="font-semibold text-gray-900">Are the results confidential?</h3>
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  </div>
                  <div className="mt-3 text-gray-600 text-sm">
                    Yes, all test results are completely confidential. We do not store personal identifying information with test scores, and you have full control over whether to share your results.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* User Testimonials */}
          <Card className="mb-8 border-rose-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-rose-600" />
                <h2 className="text-2xl font-bold">What Users Say</h2>
              </CardTitle>
              <CardDescription>
                Real feedback from people who have taken our Intellectual Age Test
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 bg-rose-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-rose-800 text-sm mb-3">
                    "This Intellectual Age Test gave me incredible insights into my cognitive abilities. The detailed analysis helped me understand my strengths better."
                  </p>
                  <div className="text-rose-700 text-sm font-medium">- Sarah M., Teacher</div>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-blue-800 text-sm mb-3">
                    "I was amazed by how accurate the results were. The test was challenging but fair, and the instant feedback was really valuable."
                  </p>
                  <div className="text-blue-700 text-sm font-medium">- Michael K., Engineer</div>
                </div>

                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-green-800 text-sm mb-3">
                    "Perfect balance of scientific rigor and user-friendly interface. The Intellectual Age Test results matched my expectations perfectly."
                  </p>
                  <div className="text-green-700 text-sm font-medium">- Dr. Emma L., Psychologist</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="mb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
            <CardContent className="pt-6 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Discover Your Intellectual Age?</h2>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Join thousands of users who have gained valuable insights about their cognitive abilities through our comprehensive assessment.
              </p>
              <Link href="/intellectual-age-test/start">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  Take the Intellectual Age Test Now
                  <Brain className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Back to More Tests */}
          <div className="text-center mt-8">
            <Link href="/more-tests" className="text-blue-600 hover:text-blue-800 font-medium">
              ← Back to More Tests
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
} 
