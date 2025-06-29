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
      title: "Advanced Psychology",
      description: "Our test is based on established psychological research and cognitive science principles to provide accurate mental age assessment.",
      color: "purple"
    },
    {
      icon: Target,
      title: "Personalized Insights",
      description: "Receive detailed analysis of your cognitive patterns, emotional maturity, and mental development with actionable recommendations.",
      color: "blue"
    },
    {
      icon: Users,
      title: "Social Comparison",
      description: "Compare your results with peers and understand where you stand in different age groups and demographics.",
      color: "green"
    },
    {
      icon: Share2,
      title: "Easy Sharing",
      description: "Share your results on social media or with friends while maintaining complete control over your privacy settings.",
      color: "orange"
    },
    {
      icon: Globe,
      title: "Multi-Language",
      description: "Available in multiple languages to ensure accurate assessment regardless of your native language.",
      color: "pink"
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Take the test seamlessly on any device - desktop, tablet, or smartphone with the same high-quality experience.",
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
            Why Choose Our Mental Age Test?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive assessment combines cutting-edge psychology with user-friendly design to deliver insights you can trust and understand.
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">2M+</div>
              <div className="text-gray-300">Tests Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-gray-300">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-gray-300">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.9</div>
              <div className="text-gray-300">User Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
