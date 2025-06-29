import { Separator } from "@/components/ui/separator";
import {
  Github,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  MapPin,
  Phone
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const footerLinks = {
    product: [
      { name: "Take Mental Age Test", href: "/#home" },
      { name: "How It Works", href: "/#how-it-works" },
      { name: "Features", href: "/#features" },
      { name: "FAQ", href: "#faq" }
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
    friendLinks: [
      { name: "Psychology Today", href: "https://www.psychologytoday.com" },
      { name: "Mind Tools", href: "https://www.mindtools.com" },
      { name: "Cognitive Assessment", href: "https://www.cognitiveassessment.com" },
      { name: "Mental Health", href: "https://www.mentalhealth.gov" },
      { name: "Brain Training", href: "https://www.braintraining.com" }
    ]
  };

  const socialLinks = [
    { name: "Github", icon: Github, href: "https://github.com/Takea-nap/mental-age-test" },
    { name: "Pinterest", icon: MapPin, href: "https://www.pinterest.com/mentalagetest/" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <Image
                  src="/logo.png"
                  alt="Mental Age Test Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8 mr-3"
                />
                <span className="text-2xl font-bold">MentalAge Test</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                Discover your intellectual age through our scientifically-designed mental age test and mental health quiz assessment.
              </p>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Mental Age Test</h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Friend Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Friend Links</h3>
              <ul className="space-y-3">
                {footerLinks.friendLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        <Separator className="bg-gray-700" />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Copyright */}
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 MentalAge Test. All rights reserved. Free mental age quiz built with privacy and security in mind.
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-gray-300" />
                </a>
              ))}
            </div>
          </div>

        
        </div>
      </div>
    </footer>
  );
}
