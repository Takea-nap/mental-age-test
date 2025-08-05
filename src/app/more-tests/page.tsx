import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Brain, Heart, Users, Target, Lightbulb, Clock, Star, TrendingUp } from "lucide-react";

export default function MoreTestsPage() {
  const testCategories = [
    {
      title: "Intelligence & Cognitive Tests",
      description: "Test your intelligence level, memory, and cognitive abilities",
      icon: Brain,
      color: "bg-blue-100 text-blue-600",
      tests: [
        {
          name: "Mental Age Test",
          description: "Analyze your psychological maturity through questions",
          difficulty: "Easy",
          duration: "5-10 minutes",
          popular: true,
          link: "/mental-test"
        },
        {
          name: "Intellectual Age Test",
          description: "Assess your intellectual development and cognitive age",
          difficulty: "Medium",
          duration: "15-25 minutes",
          popular: true,
          link: "/intellectual-age-test"
        },
        {
          name: "Mental Health Test",
          description: "Evaluate your overall mental wellness and psychological state",
          difficulty: "Easy",
          duration: "10-15 minutes",
          popular: true,
          link: "#"
        },
        {
          name: "Personality Disorder Test",
          description: "Assess your personality traits and potential disorder tendencies",
          difficulty: "Medium",
          duration: "15-20 minutes",
          popular: false,
          link: "/personality-disorder-test"
        }
      ]
    },
    {
      title: "Emotional & Personality Tests",
      description: "Understand your emotional state and personality traits",
      icon: Heart,
      color: "bg-pink-100 text-pink-600",
      tests: [
        {
          name: "MBTI Personality Test",
          description: "16-type personality analysis test",
          difficulty: "Medium",
          duration: "20-30 minutes",
          popular: true,
          link: "#"
        },
        {
          name: "Emotional Intelligence Test",
          description: "Assess your emotional intelligence level",
          difficulty: "Easy",
          duration: "15-25 minutes",
          popular: true,
          link: "#"
        },
        {
          name: "Gender Role Test",
          description: "Discover your psychological gender role orientation and personality traits",
          difficulty: "Easy",
          duration: "5-8 minutes",
          popular: true,
          link: "/gender-role-test"
        },
        {
          name: "Stress Level Test",
          description: "Evaluate your current stress situation",
          difficulty: "Easy",
          duration: "10-15 minutes",
          popular: false,
          link: "#"
        }
      ]
    },
    {
      title: "Social & Interpersonal Skills",
      description: "Test your social abilities and interpersonal relationship skills",
      icon: Users,
      color: "bg-green-100 text-green-600",
      tests: [
        {
          name: "Social Skills Test",
          description: "Assess your performance in social situations",
          difficulty: "Medium",
          duration: "20-25 minutes",
          popular: false,
          link: "#"
        },
        {
          name: "Leadership Test",
          description: "Test your leadership potential and style",
          difficulty: "Medium",
          duration: "25-35 minutes",
          popular: true,
          link: "#"
        },
        {
          name: "Communication Style Test",
          description: "Understand your communication preferences and patterns",
          difficulty: "Easy",
          duration: "15-20 minutes",
          popular: false,
          link: "#"
        }
      ]
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-green-100 text-green-700";
      case "Medium": return "bg-yellow-100 text-yellow-700";
      case "Hard": return "bg-red-100 text-red-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <main className="min-h-screen">
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              More Psychological Tests
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Explore various professional psychological tests to gain a comprehensive understanding of your personality, abilities, and potential. Each test is scientifically validated to provide you with accurate analytical results.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <span>Scientifically Validated</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-500" />
                <span>Quick Completion</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span>Detailed Analysis</span>
              </div>
            </div>
          </div>

          {/* Test Categories */}
          <div className="space-y-16">
            {testCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-3 rounded-xl ${category.color}`}>
                    <category.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.tests.map((test, testIndex) => (
                    <Card key={testIndex} className="group hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-gray-300">
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {test.name}
                          </CardTitle>
                          {test.popular && (
                            <Badge className="bg-orange-100 text-orange-700 border-orange-200">
                              Popular
                            </Badge>
                          )}
                        </div>
                        <CardDescription className="text-gray-600 line-clamp-2">
                          {test.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge variant="outline" className={getDifficultyColor(test.difficulty)}>
                            {test.difficulty}
                          </Badge>
                          <Badge variant="outline" className="text-gray-600">
                            <Clock className="w-3 h-3 mr-1" />
                            {test.duration}
                          </Badge>
                        </div>
                        <Link href={test.link}>
                          <Button 
                            className="w-full bg-gray-900 hover:bg-gray-800 text-white transition-colors"
                            disabled={test.link === "#"}
                          >
                            {test.link === "#" ? "Coming Soon" : "Start Test"}
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Featured Test CTA */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
            <Lightbulb className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
            <h2 className="text-3xl font-bold mb-4">Start with Mental Age Test</h2>
            <p className="text-xl mb-8 opacity-90">
              The most popular entry-level test - discover your psychological maturity in just 5 minutes
            </p>
            <Link href="/mental-test">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                Start Test Now
              </Button>
            </Link>
          </div>

          {/* Coming Soon Section */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">More Tests Coming Soon</h2>
            <p className="text-gray-600 mb-8">
              We are developing more professional psychological tests, including career planning, learning abilities, creativity assessment, and more. Stay tuned!
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {["Cognitive Bias Test", "Decision Style Test", "Conflict Resolution Test", "Time Management Test"].map((test, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border-2 border-dashed border-gray-200">
                  <p className="text-gray-500 font-medium">{test}</p>
                  <p className="text-sm text-gray-400 mt-1">In Development...</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
} 