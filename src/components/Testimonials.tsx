import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      age: "32",
      mentalAge: "28",
      content: "This mental age test gave me incredible insights. The mental age quiz results were surprisingly accurate and helped me understand myself better.",
      rating: 5,
      avatar: "SJ",
      image: "/avatars/sarah-johnson.jpg"
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      age: "26",
      mentalAge: "31",
      content: "I was skeptical about this mental age test, but the analysis was eye-opening. This intellectual age test helped me understand my preference for structured environments.",
      rating: 5,
      avatar: "MC",
      image: "/avatars/michael-chen.jpg"
    },
    {
      name: "Emma Rodriguez",
      role: "Psychology Student",
      age: "22",
      mentalAge: "25",
      content: "I appreciate this well-designed mental age test. The mental health quiz questions are thoughtful and the results offer actionable insights.",
      rating: 5,
      avatar: "ER",
      image: "/avatars/emma-rodriguez.jpg"
    },
    {
      name: "David Thompson",
      role: "Retired Teacher",
      age: "58",
      mentalAge: "45",
      content: "The mental age test results confirmed I'm young at heart. This mental maturity test is a perfect tool for self-reflection.",
      rating: 5,
      avatar: "DT",
      image: "/avatars/david-thompson.jpg"
    },
    {
      name: "Lisa Park",
      role: "Entrepreneur",
      age: "35",
      mentalAge: "38",
      content: "Taking this mental age test with my team was a great exercise. We learned about each other's thinking patterns through this mental health quiz.",
      rating: 5,
      avatar: "LP",
      image: "/avatars/lisa-park.jpg"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What People Say About Our Mental Age Test
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied users who have discovered valuable insights through our mental health quiz and intellectual age assessment.
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
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
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
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
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
        {/* <div className="bg-gray-50 rounded-3xl p-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Our Mental Age Test Trusted by Leading Organizations
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-600">Universities</div>
                <div className="text-sm text-gray-500">50+ Mental Age Research Partners</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-600">Corporations</div>
                <div className="text-sm text-gray-500">HR Development & Personality Testing</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-600">Therapists</div>
                <div className="text-sm text-gray-500">Clinical Mental Health Use</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-600">Media</div>
                <div className="text-sm text-gray-500">Featured Mental Age Coverage</div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
