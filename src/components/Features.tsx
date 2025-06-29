import { Card, CardContent } from "@/components/ui/card";
import {
  Brain,
  Users,
  Target,
  Share2,
  Globe,
  Smartphone
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Brain,
      title: "Advanced Mental Age Psychology",
      description: "Our mental age test provides an accurate intellectual age assessment and can serve as a preliminary character disorder test.",
      color: "purple"
    },
    {
      icon: Target,
      title: "Personalized Mental Health Insights",
      description: "Our mental age test can help you explore questions like 'what mental problem do I have quiz' and offers insights similar to a personality problems test.",
      color: "blue"
    },
    {
      icon: Users,
      title: "Social Mental Age Comparison",
      description: "Compare your mental age test results with others and see how your mental maturity test scores stack up against different age groups.",
      color: "green"
    },
    {
      icon: Share2,
      title: "Easy Mental Age Sharing",
      description: "Share your mental age quiz results on social media to discuss 'what is my mental age' with friends and family.",
      color: "orange"
    },
    {
      icon: Globe,
      title: "Multi-Language Mental Age Test",
      description: "Our mental age test is available in multiple languages, making it the best personality test for a global audience.",
      color: "pink"
    },
    {
      icon: Smartphone,
      title: "Mobile Mental Age Quiz",
      description: "Take our mental age test on any device. We offer a high-quality experience for a mental age test free of charge.",
      color: "cyan"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      purple: "bg-purple-100 text-purple-600",
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      orange: "bg-orange-100 text-orange-600",
      pink: "bg-pink-100 text-pink-600",
      cyan: "bg-cyan-100 text-cyan-600"
    };
    return colorMap[color as keyof typeof colorMap] || "bg-gray-100 text-gray-600";
  };

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Our Free Mental Age Test?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our mental age quiz is a leading mental health quiz that provides reliable insights. If you're wondering 'what mental disorder do I have quiz', our intellectual age test can be a valuable first step.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gray-50 hover:bg-white"
            >
              <CardContent className="p-8">
                <div className={`w-16 h-16 rounded-2xl ${getColorClasses(feature.color)} flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-gray-300">Mental Age Accuracy Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-gray-300">Countries Taking Our Mental Age Quiz</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.9</div>
              <div className="text-gray-300">Mental Age Test User Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
