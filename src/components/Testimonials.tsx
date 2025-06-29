import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      age: "32",
      mentalAge: "28",
      content: "This test gave me incredible insights into my personality! I discovered that my mental age is younger than my actual age, which explains my creative thinking and optimistic outlook. The results were surprisingly accurate.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      age: "26",
      mentalAge: "31",
      content: "I was skeptical at first, but the detailed analysis really opened my eyes. Learning that my mental age is older helped me understand why I prefer structured environments and long-term planning.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emma Rodriguez",
      role: "Psychology Student",
      age: "22",
      mentalAge: "25",
      content: "As someone studying psychology, I appreciate how well-designed this test is. The questions are thoughtful and the results provide actionable insights for personal development. Highly recommend!",
      rating: 5,
      avatar: "ER"
    },
    {
      name: "David Thompson",
      role: "Retired Teacher",
      age: "58",
      mentalAge: "45",
      content: "The test results confirmed what I always felt - I'm young at heart! It's fascinating how mental age can differ from chronological age. This tool is perfect for self-reflection and understanding.",
      rating: 5,
      avatar: "DT"
    },
    {
      name: "Lisa Park",
      role: "Entrepreneur",
      age: "35",
      mentalAge: "38",
      content: "Taking this test with my team was a great team-building exercise. We learned so much about each other's thinking patterns and it helped improve our communication and collaboration.",
      rating: 5,
      avatar: "LP"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What People Are Saying
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied users who have discovered valuable insights about their mental age and cognitive patterns.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gray-50">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-gray-300 mb-4" />

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* User Info */}
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarFallback className="bg-gray-200 text-gray-600 font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                    <div className="text-xs text-gray-400">
                      Age: {testimonial.age} | Mental Age: {testimonial.mentalAge}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Testimonials Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.slice(3, 5).map((testimonial, index) => (
            <Card key={index + 3} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gray-50">
              <CardContent className="p-8">
                <Quote className="w-8 h-8 text-gray-300 mb-4" />

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarFallback className="bg-gray-200 text-gray-600 font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                    <div className="text-xs text-gray-400">
                      Age: {testimonial.age} | Mental Age: {testimonial.mentalAge}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gray-50 rounded-3xl p-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Trusted by Leading Organizations
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-600">Universities</div>
                <div className="text-sm text-gray-500">50+ Research Partners</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-600">Corporations</div>
                <div className="text-sm text-gray-500">HR Development</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-600">Therapists</div>
                <div className="text-sm text-gray-500">Clinical Use</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-600">Media</div>
                <div className="text-sm text-gray-500">Featured Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
