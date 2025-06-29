import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Play,
  FileText,
  BarChart3,
  Share2,
  ArrowRight,
  CheckCircle
} from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      step: "1",
      icon: Play,
      title: "Start the Mental Age Test",
      description: "Begin your free mental age test with one click. This mental age quiz is a quick and easy age test to discover your intellectual age.",
      details: ["No personal information needed", "Instant access to mental age test", "Works on all devices"]
    },
    {
      step: "2",
      icon: FileText,
      title: "Answer Mental Health Quiz Questions",
      description: "Complete a series of mental age test questions. Our mental health quiz is similar to a character disorder test, ensuring a comprehensive evaluation.",
      details: ["5-10 minutes to complete mental age quiz", "Multiple choice format", "No time pressure for this age test"]
    },
    {
      step: "3",
      icon: BarChart3,
      title: "Get Your Mental Age Results",
      description: "Receive your detailed mental age analysis. Our mental maturity test provides insights into your cognitive and emotional age.",
      details: ["Instant mental age test results", "Detailed breakdown", "Personalized insights like IDRlabs test"]
    },
    {
      step: "4",
      icon: Share2,
      title: "Share & Compare Mental Age",
      description: "Share your mental age test results with friends. This 'a real me mental age test' experience helps you understand yourself and others.",
      details: ["Social media sharing of mental age quiz", "Privacy controls", "Group comparisons with other age test takers"]
    }
  ];

  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How Our Mental Age Test Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take our mental age test in four simple steps. Our mental health quiz ensures accurate intellectual age results while respecting your time and privacy.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6">
              {/* Step Number & Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center text-xl font-bold mb-4">
                  {step.step}
                </div>
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center ml-2">
                  <step.icon className="w-6 h-6 text-gray-600" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {step.description}
                </p>
                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-gray-500">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Demo Section */}
        <div className="bg-white rounded-3xl p-12 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Ready to Discover Your Mental Age?
              </h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Join millions of users who have already discovered their cognitive age with our mental age test. Our mental health quiz is trusted by psychologists, researchers, and curious minds worldwide. This free mental age quiz provides the best personality test experience similar to understand myself.com.
              </p>
              <Link href="/#home">
                <Button
                  size="lg"
                  className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-semibold rounded-xl"
                >
                  Start Test Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8">
              <div className="text-center">
                <div className="text-6xl font-bold text-gray-900 mb-2">23</div>
                <div className="text-lg text-gray-600 mb-4">Your Mental Age</div>
                <div className="text-sm text-gray-500 mb-6">Based on your mental age test responses</div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Logical Thinking</span>
                    <div className="w-24 h-2 bg-gray-200 rounded-full">
                      <div className="w-4/5 h-2 bg-purple-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Emotional Maturity</span>
                    <div className="w-24 h-2 bg-gray-200 rounded-full">
                      <div className="w-3/5 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Life Experience</span>
                    <div className="w-24 h-2 bg-gray-200 rounded-full">
                      <div className="w-2/3 h-2 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
