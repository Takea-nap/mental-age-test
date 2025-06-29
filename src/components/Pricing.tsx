import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Free Test",
      price: "$0",
      period: "forever",
      description: "Perfect for trying out our mental age assessment",
      features: [
        "Complete mental age test",
        "Basic results analysis",
        "General recommendations",
        "Social media sharing",
        "Mobile optimized"
      ],
      cta: "Take Free Test",
      popular: false,
      icon: Check
    },
    {
      name: "Detailed Insights",
      price: "$9.99",
      period: "one-time",
      description: "Comprehensive analysis with detailed breakdown",
      features: [
        "Everything in Free",
        "Detailed cognitive analysis",
        "Personality trait breakdown",
        "Career guidance insights",
        "Relationship compatibility",
        "Personal development plan",
        "PDF report download",
        "Priority email support"
      ],
      cta: "Get Detailed Report",
      popular: true,
      icon: Star
    },
    {
      name: "Premium Plus",
      price: "$19.99",
      period: "one-time",
      description: "Complete psychological profile with expert consultation",
      features: [
        "Everything in Detailed",
        "Expert consultation call",
        "Custom development plan",
        "Quarterly follow-up tests",
        "Advanced comparisons",
        "Team/family packages",
        "Priority phone support",
        "Lifetime access to updates"
      ],
      cta: "Go Premium",
      popular: false,
      icon: Zap
    }
  ];

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start with our free test or unlock deeper insights with our comprehensive analysis packages. All plans include our core mental age assessment.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-b from-gray-900 to-gray-800 text-white ring-4 ring-purple-500 ring-opacity-50'
                  : 'bg-white hover:-translate-y-1'
              }`}
            >
              {plan.popular && (
                <Badge
                  className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white px-4 py-1"
                >
                  Most Popular
                </Badge>
              )}

              <CardContent className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                    plan.popular ? 'bg-purple-500' : 'bg-gray-100'
                  }`}>
                    <plan.icon className={`w-8 h-8 ${plan.popular ? 'text-white' : 'text-gray-600'}`} />
                  </div>
                  <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mb-4 ${plan.popular ? 'text-gray-300' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>
                  <div className="mb-6">
                    <span className={`text-5xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                      {plan.price}
                    </span>
                    <span className={`text-lg ${plan.popular ? 'text-gray-300' : 'text-gray-600'}`}>
                      /{plan.period}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${
                        plan.popular ? 'text-purple-400' : 'text-green-500'
                      }`} />
                      <span className={`text-sm ${plan.popular ? 'text-gray-300' : 'text-gray-600'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  className={`w-full py-3 font-semibold rounded-xl transition-all duration-300 ${
                    plan.popular
                      ? 'bg-purple-500 hover:bg-purple-600 text-white'
                      : 'bg-black hover:bg-gray-800 text-white'
                  }`}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="bg-white rounded-3xl p-12 shadow-lg">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              30-Day Money-Back Guarantee
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              We're confident you'll love your mental age insights. If you're not completely satisfied with your detailed report, we'll refund your purchase within 30 days, no questions asked.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Secure Payment</div>
                <p className="text-sm text-gray-600">256-bit SSL encryption</p>
              </div>
              <div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Instant Access</div>
                <p className="text-sm text-gray-600">Immediate report delivery</p>
              </div>
              <div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Privacy Protected</div>
                <p className="text-sm text-gray-600">Your data stays private</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Link */}
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Have questions about our plans?
            <a href="#faq" className="text-blue-600 hover:text-blue-700 font-medium ml-1">
              Check our FAQ
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
