'use client';

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import MentalAgeTest from "@/components/MentalAgeTest";
import TestResult from "@/components/TestResult";
import { calculateMentalAge } from "@/lib/utils";

interface MentalTestClientProps {
  texts: {
    en: { title: string; subtitle: string; };
    zh: { title: string; subtitle: string; };
  };
}

// This component handles the interactive state of the mental age test
export default function MentalTestClient({ texts }: MentalTestClientProps) {
  const [isCompleted, setIsCompleted] = useState(false);
  const [mentalAge, setMentalAge] = useState<number>(0);
  const [language, setLanguage] = useState<'zh' | 'en'>('en');
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const firstAnswer = searchParams.get('firstAnswer') ? parseInt(searchParams.get('firstAnswer')!) : undefined;

  const handleTestComplete = (answers: number[]) => {
    const calculatedAge = calculateMentalAge(answers);
    setMentalAge(calculatedAge);
    setIsCompleted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRestart = () => {
    setIsCompleted(false);
    setMentalAge(0);
    router.push('/mental-test');
  };

  const currentTexts = texts[language];

  return (
    <div id="test-section">
        <div className="flex justify-center mb-4">
            <div className="flex bg-white rounded-lg p-1 shadow-sm">
            <Button
                variant={language === 'en' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setLanguage('en')}
                className="rounded-md"
            >
                English
            </Button>
            <Button
                variant={language === 'zh' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setLanguage('zh')}
                className="rounded-md"
            >
                中文
            </Button>
            </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
            {currentTexts.title}
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto text-center">
            {currentTexts.subtitle}
        </p>

        {isCompleted ? (
        <TestResult 
            mentalAge={mentalAge} 
            onRestart={handleRestart}
            language={language}
        />
        ) : (
        <MentalAgeTest 
            key={firstAnswer || 'restart'} // Use key to force re-mount
            onComplete={handleTestComplete}
            language={language}
            firstAnswer={firstAnswer}
        />
        )}
  </div>
  );
}