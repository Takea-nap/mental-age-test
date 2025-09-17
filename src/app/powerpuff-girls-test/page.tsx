import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PowerpuffTestClient from "@/components/PowerpuffTestClient";
import { Metadata } from "next";
import {
  Heart,
  Star,
  Shield,
  Brain,
  Clock,
  Users,
  Award,
  HelpCircle,
  CheckCircle,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Powerpuff Girls Test - Which Powerpuff Girl Are You?",
  description: "Take the Powerpuff Girls Test to find out if you are most like Blossom, Bubbles, or Buttercup. Quick, fun, and insightful personality quiz.",
  keywords: [
    "Powerpuff Girls Test",
    "Which Powerpuff Girl are you",
    "Blossom Bubbles Buttercup quiz",
    "personality test"
  ],
  alternates: {
    canonical: "https://mental-age-test.app/powerpuff-girls-test",
  },
};

const texts = {
  en: {
    title: "Powerpuff Girls Test",
    subtitle:
      "Find out whether you're Blossom (smart leader), Bubbles (kind creator), or Buttercup (bold protector). Answer 12 quick questions to get your match.",
    ctaButton: "Start Powerpuff Girls Test",

    // Static SEO content
    aboutTitle: "About the Powerpuff Girls Test",
    aboutText:
      "The Powerpuff Girls Test is a light, playful personality quiz inspired by the iconic trio: Blossom, Bubbles, and Buttercup. Choose the options that fit you best to see which character you align with most — strategic leadership, creative empathy, or bold courage. The experience is fast, friendly, and designed for clear, shareable results.",
    whyTitle: "Why Take This Test?",
    benefits: [
      "Get a quick, playful snapshot of your personality style.",
      "See which of Blossom, Bubbles, or Buttercup you're most like.",
      "Share fun results with friends and compare personalities.",
      "Reflect on strengths like leadership, creativity, and resilience.",
      "Completely free, private, and mobile‑friendly.",
      "Great icebreaker for classrooms, clubs, or team check‑ins.",
      "A friendly starting point before deeper assessments.",
    ],
    featuresTitle: "Test Features",
    faqTitle: "Powerpuff Girls Test FAQ",
    faqs: [
      {
        q: "What does the Powerpuff Girls Test measure?",
        a: "The Powerpuff Girls Test compares your choices with signature traits from Blossom (organized, strategic), Bubbles (kind, imaginative), and Buttercup (bold, determined) to suggest your closest match.",
      },
      {
        q: "Is the Powerpuff Girls Test scientific?",
        a: "The Powerpuff Girls Test is an entertainment‑oriented quiz for self‑reflection and fun. It is not a clinical or scientific diagnostic tool.",
      },
      {
        q: "How long does the Powerpuff Girls Test take?",
        a: "Usually 2–4 minutes. There are 12 concise questions and instant results.",
      },
      {
        q: "Do I need to sign in to use the Powerpuff Girls Test?",
        a: "No. The Powerpuff Girls Test does not require sign‑in, and we don’t ask for personally identifiable information.",
      },
      {
        q: "Can I retake the Powerpuff Girls Test?",
        a: "Yes. You can retake the Powerpuff Girls Test anytime. Trying it again later can reveal how context or mood influences your choices.",
      },
      {
        q: "What if my answers fit more than one character?",
        a: "That’s common. The Powerpuff Girls Test highlights your strongest match, but many people share traits across Blossom, Bubbles, and Buttercup.",
      },
      {
        q: "Can I share my Powerpuff Girls Test result?",
        a: "Absolutely. The Powerpuff Girls Test is designed for easy sharing and discussion with friends or teammates.",
      },
      {
        q: "Does the Powerpuff Girls Test store my responses?",
        a: "We don’t store personal data for the Powerpuff Girls Test. Your responses are used only to compute your result in‑session.",
      },
      {
        q: "Who is the Powerpuff Girls Test best for?",
        a: "Students, social groups, new teams, content creators, and anyone who wants a quick, friendly personality snapshot will enjoy the Powerpuff Girls Test.",
      },
      {
        q: "Can the Powerpuff Girls Test help with teamwork?",
        a: "Yes. The Powerpuff Girls Test makes differences visible and positive: planners (Blossom), connectors (Bubbles), and finishers (Buttercup) complement each other.",
      },
    ],
  },
};

export default function PowerpuffGirlsTestPage() {
  const currentTexts = texts.en;

  return (
    <main className="min-h-screen">
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-green-50 pt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4 text-pink-600">
              <Heart className="w-6 h-6" />
              <Star className="w-6 h-6 text-yellow-500" />
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Powerpuff Girls Test
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {currentTexts.subtitle}
            </p>
          </div>

          <PowerpuffTestClient texts={currentTexts} />

          <StaticContent />
        </div>
      </div>
      <Footer />
    </main>
  );
}

function StaticContent() {
  const currentTexts = texts.en;

  const features = [
    { icon: Brain, title: "Clear Character Logic", desc: "Results map to familiar traits so the Powerpuff Girls Test feels intuitive and easy to trust." },
    { icon: Clock, title: "Quick & Simple", desc: "Finish the Powerpuff Girls Test in minutes and get instant, shareable results." },
    { icon: Shield, title: "Private & Safe", desc: "No sign‑up required and no personally identifiable data collected by the Powerpuff Girls Test." },
    { icon: Users, title: "Fun to Share", desc: "Compare results with friends — team Blossom, Bubbles, or Buttercup!" },
    { icon: Award, title: "Polished UX", desc: "Mobile‑friendly design with smooth interactions, clear buttons, and helpful progress." },
    { icon: HelpCircle, title: "Guided Insights", desc: "Each profile explains strengths and tendencies revealed by the Powerpuff Girls Test." },
    { icon: Star, title: "Trait Breakdown", desc: "See your distribution across Blossom, Bubbles, and Buttercup for deeper context." },
    { icon: Heart, title: "Zero Pressure", desc: "The Powerpuff Girls Test is purely for fun and self‑reflection — no right or wrong answers." },
    { icon: Lightbulb, title: "Actionable Tips", desc: "Turn your Powerpuff Girls Test insights into small, practical improvements at school or work." },
  ];

  return (
    <div className="mt-16 space-y-16">
      {/* About */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
          {currentTexts.aboutTitle}
        </h2>
        <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto text-center">
          {currentTexts.aboutText}
        </p>
      </section>

      {/* Why */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
          {currentTexts.whyTitle}
        </h2>
        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {currentTexts.benefits.map((b, i) => (
            <div key={i} className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
              <p className="text-gray-700">{b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">How the Test Works</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {["Answer", "Match", "Reveal", "Share"].map((step, idx) => (
            <div key={step} className="text-center bg-white rounded-xl p-5 shadow-sm">
              <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-pink-600 font-bold">{idx + 1}</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{step}</h3>
              <p className="text-gray-600 text-sm">
                {idx === 0 && "Choose what sounds most like you."}
                {idx === 1 && "Your traits align with a character."}
                {idx === 2 && "See your result with explanation."}
                {idx === 3 && "Share and compare with friends."}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Character overview */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Meet the Powerpuff Girls</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-xl p-6 bg-pink-50 border border-pink-100">
            <h3 className="text-lg font-semibold text-pink-700 mb-2">Blossom — The Smart Leader</h3>
            <p className="text-pink-800/90 text-sm">
              Strategic, organized, and responsible. You like plans, clarity, and guiding others toward goals with calm confidence.
            </p>
          </div>
          <div className="rounded-xl p-6 bg-blue-50 border border-blue-100">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">Bubbles — The Kind Creator</h3>
            <p className="text-blue-800/90 text-sm">
              Friendly, imaginative, and empathetic. You bring warmth to groups, value harmony, and express ideas with creativity.
            </p>
          </div>
          <div className="rounded-xl p-6 bg-green-50 border border-green-100">
            <h3 className="text-lg font-semibold text-green-700 mb-2">Buttercup — The Bold Protector</h3>
            <p className="text-green-800/90 text-sm">
              Brave, direct, and resilient. You take action, defend your values, and inspire others with fearless energy.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
          {currentTexts.featuresTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="p-6 text-center bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <f.icon className="w-12 h-12 text-pink-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Friendly note */}
      <section className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
        <div className="flex items-start gap-3">
          <Lightbulb className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-blue-800 mb-1">Just for Fun</h3>
            <p className="text-blue-700 text-sm">
              The Powerpuff Girls Test is for entertainment and self-reflection. It’s not a psychological diagnosis.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
          {currentTexts.faqTitle}
        </h2>
        <div className="space-y-6 max-w-4xl mx-auto">
          {currentTexts.faqs.map((faq: { q: string; a: string }, i: number) => (
            <div key={i}>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{faq.q}</h3>
              <p className="text-gray-700 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Removed long-form guide per design feedback; expanded Features and FAQ instead */}

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-pink-600 via-blue-600 to-green-600 rounded-2xl p-8 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-3">Ready to Find Your Powerpuff Match?</h2>
          <p className="text-lg mb-6 opacity-90">
            Take the free, friendly quiz and see whether you’re more like Blossom, Bubbles, or Buttercup.
          </p>
          <a href="#test-section" className="inline-flex items-center bg-white text-pink-600 hover:bg-gray-100 font-bold px-6 py-3 rounded-md">
            Start Powerpuff Girls Test
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
