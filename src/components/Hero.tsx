"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Clock, Shield } from "lucide-react";
import { useRouter } from "next/navigation";
import { getQuestions } from "@/lib/questions";

export default function Hero() {
  const router = useRouter();
  const questions = getQuestions('en');
  const firstQuestion = questions[0];

  const handleAnswerSelect = (value: number) => {
    // 将答案作为查询参数传递到test页面
    router.push(`/test?firstAnswer=${value}`);
  };

  return (
    <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-sm font-medium text-gray-600 mb-8">
            <Brain className="w-4 h-4 mr-2" />
            Free Mental Age Test - Discover Your Mental Age
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {" "}What is My Mental Age?
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
          </p>

          {/* First Question Card */}
          <div className="max-w-2xl mx-auto mb-16">
            <Card className="shadow-xl border-0 bg-white">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-semibold text-sm">1</span>
                  </div>
                </div>
                <CardTitle className="text-2xl md:text-3xl text-center text-gray-900">
                  {firstQuestion.text}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  {firstQuestion.answers.map((answer, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full p-6 h-auto text-left justify-start text-lg font-medium hover:bg-purple-50 hover:border-purple-200 transition-all duration-200"
                      onClick={() => handleAnswerSelect(answer.value)}
                    >
                      <span className="flex items-center">
                        <span className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mr-3 text-sm font-semibold text-gray-600">
                          {String.fromCharCode(65 + index)}
                        </span>
                        {answer.text}
                      </span>
                    </Button>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-500">
                    Question 1 of {questions.length} • Choose an option to continue
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="font-semibold text-gray-900 mb-2">5-Minute Mental Age Quiz</h2>
              <p className="text-gray-600">Quick mental age test designed by psychology experts, similar to IDRlabs test quality</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="font-semibold text-gray-900 mb-2">100% Private & Free</h2>
              <p className="text-gray-600">Your mental age test results are secure and never shared with third parties</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="font-semibold text-gray-900 mb-2">A Real Me Mental Age Results</h2>
              <p className="text-gray-600">Detailed personality insights and mental maturity analysis just for you</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
