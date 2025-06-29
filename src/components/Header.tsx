"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/#home" },
    { name: "Features", href: "/#features" },
    { name: "How It Works", href: "/#how-it-works" },
    { name: " FAQ", href: "/#faq" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2" title="Mental Age Test - Free Online Mental Age Quiz">
              <Image
                src="/logo.png"
                alt="Mental Age Test Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-xl font-bold text-gray-900 hidden sm:block">
                MentalAge Test
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              item.href.startsWith('/') ? (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium ${item.name === 'More Tests' ? 'bg-blue-500 text-white hover:text-white px-3 py-2 rounded-md' : ''}`}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium ${item.name === 'More Tests' ? 'bg-blue-500 text-white hover:text-white px-3 py-2 rounded-md' : ''}`}
                >
                  {item.name}
                </a>
              )
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex space-x-3">
            <Link href="/more-tests">
              <Button variant="outline" className="border-blue-500 bg-blue-500 text-white hover:bg-blue-600 hover:text-white px-4" title="More Psychological Tests">
                More Tests
              </Button>
            </Link>
            <Link href="/mental-test">
              <Button className="bg-black hover:bg-gray-800 text-white px-6" title="Start Free Mental Age Test">
                Start Mental Age Test
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-6">
                {navItems.map((item) => (
                  item.href.startsWith('/') ? (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-gray-600 hover:text-gray-900 transition-colors text-lg font-medium py-2 ${item.name === 'More Tests' ? 'bg-blue-500 text-white hover:text-white px-3 rounded-md' : ''}`}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-gray-600 hover:text-gray-900 transition-colors text-lg font-medium py-2 ${item.name === 'More Tests' ? 'bg-blue-500 text-white hover:text-white px-3 rounded-md' : ''}`}
                    >
                      {item.name}
                    </a>
                  )
                ))}
                <div className="pt-4 space-y-3">
                  <Link href="/more-tests">
                    <Button variant="outline" className="w-full border-blue-500 bg-blue-500 text-white hover:bg-blue-600 hover:text-white">
                      More Tests
                    </Button>
                  </Link>
                  <Link href="/mental-test">
                    <Button className="w-full bg-black hover:bg-gray-800 text-white">
                      Start Mental Age Test
                    </Button>
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
