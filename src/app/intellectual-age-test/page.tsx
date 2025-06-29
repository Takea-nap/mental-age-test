import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Brain, Clock, Target, TrendingUp, CheckCircle, AlertCircle, BookOpen, Lightbulb } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intellectual Age Test - Assess Your Cognitive Development",
  description: "Understand your intellectual age and cognitive development level through scientific cognitive assessment tests. ",
  keywords: "intellectual age test, cognitive ability test, IQ test, intelligence assessment, cognitive development",
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
              Through scientific cognitive assessment, measure your intellectual development level and cognitive age.
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


          {/* Test Overview */}
          <Card className="mb-8 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                Test Overview
              </CardTitle>
              <CardDescription>
                This test covers 4 main cognitive domains, each containing multiple questions, totaling approximately 30 questions.
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
                      <p className="text-gray-600 text-sm">Mathematical operations, number sequences, numerical logic</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm font-semibold text-purple-600">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Abstract Thinking</h3>
                      <p className="text-gray-600 text-sm">Pattern recognition, visual reasoning, spatial imagination</p>
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
                      <p className="text-gray-600 text-sm">Working memory, information processing, learning ability</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm font-semibold text-orange-600">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Logical Reasoning</h3>
                      <p className="text-gray-600 text-sm">Deductive reasoning, inductive reasoning, critical thinking</p>
                    </div>
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
                Test Instructions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Test Preparation</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      Find a quiet environment to avoid distractions
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      Prepare paper and pen for calculations (some questions require)
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      Ensure stable internet connection
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Answer Requirements</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      Each question has a time limit, please answer quickly
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      Choose the most appropriate answer, cannot go back to modify
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      If unsure, please choose the most likely answer
                    </li>
                  </ul>
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
                    This test is a cognitive ability assessment tool, and the results are for reference only. Intellectual age is not equivalent to IQ and cannot fully represent a person's intelligence level.
                  </p>
                  <p className="text-amber-700 text-sm">
                    If you have professional consultation needs about cognitive abilities, it is recommended to seek help from professional psychologists or cognitive experts.
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
                Sample Questions
              </CardTitle>
              <CardDescription>
                Here are examples of some question types to help you understand the test content
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Numerical Reasoning Example</h4>
                  <p className="text-blue-800 mb-3">Find the pattern in the sequence: 2, 6, 18, 54, ?</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    <Button variant="outline" size="sm" className="text-blue-700">A. 108</Button>
                    <Button variant="outline" size="sm" className="text-blue-700">B. 162</Button>
                    <Button variant="outline" size="sm" className="text-blue-700">C. 216</Button>
                    <Button variant="outline" size="sm" className="text-blue-700">D. 270</Button>
                  </div>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">Logical Reasoning Example</h4>
                  <p className="text-green-800 mb-3">
                    If "All birds can fly" and "Penguins are birds" are both true, which of the following conclusions is correct?
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
              </div>
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