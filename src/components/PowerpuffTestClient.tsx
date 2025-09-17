'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowRight } from "lucide-react";
import { powerpuffQuestions, powerpuffScores, calculatePowerpuffResult } from "@/lib/powerpuffQuestions";

interface PowerpuffTestClientTexts {
  title: string;
  subtitle: string;
  ctaButton: string;
}

function PowerpuffTest() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Array<{ value: keyof typeof powerpuffScores }>>([]);
  const [showResult, setShowResult] = useState(false);

  const onAnswer = (value: keyof typeof powerpuffScores) => {
    const next = [...answers, { value }];
    setAnswers(next);
    if (currentIndex < powerpuffQuestions.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      setShowResult(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const onRestart = () => {
    setShowResult(false);
    setAnswers([]);
    setCurrentIndex(0);
    router.push('/powerpuff-girls-test');
  };

  const result = showResult ? calculatePowerpuffResult(answers) : null;

  return (
    <Card className="max-w-2xl mx-auto shadow-lg">
      <CardContent>
        {showResult && result ? (
          <div className="text-center p-4">
            <h2 className="text-xl font-semibold mb-4">Powerpuff Girls Test Result</h2>
            <div className="text-3xl font-extrabold mb-2">
              {result.character}
            </div>
            <p className="text-gray-700 mb-6 text-left">{result.description}</p>

            <div className="bg-gray-50 p-4 rounded-lg mb-4 text-left">
              <h3 className="font-semibold mb-3 text-gray-800">Trait Distribution</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-pink-600">Blossom</span>
                  <span className="font-medium text-pink-700">{result.percentages.blossom}%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-blue-600">Bubbles</span>
                  <span className="font-medium text-blue-700">{result.percentages.bubbles}%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-green-600">Buttercup</span>
                  <span className="font-medium text-green-700">{result.percentages.buttercup}%</span>
                </div>
              </div>
            </div>

            <Button onClick={onRestart} className="mt-2">Retake Powerpuff Girls Test</Button>
          </div>
        ) : (
          <div>
            <Progress value={((currentIndex + 1) / powerpuffQuestions.length) * 100} className="mb-6" />
            <div className="text-center mb-4">
              <span className="text-sm text-gray-500">
                Question {currentIndex + 1} of {powerpuffQuestions.length}
              </span>
            </div>
            <h2 className="text-lg font-semibold mb-6 min-h-[60px] text-center">
              {powerpuffQuestions[currentIndex].text}
            </h2>
            <div className="grid grid-cols-1 gap-3">
              {powerpuffQuestions[currentIndex].answers.map((ans, idx) => (
                <Button
                  key={idx}
                  onClick={() => onAnswer(ans.value)}
                  variant="outline"
                  className="py-4 text-base hover:bg-blue-50 hover:border-blue-300 transition-colors"
                >
                  {ans.text}
                </Button>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default function PowerpuffTestClient({ texts, showHeader = false }: { texts: PowerpuffTestClientTexts; showHeader?: boolean }) {
  const [started, setStarted] = useState(false);

  return (
    <div id="test-section">
      {showHeader && (
        <>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
            {texts.title}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto text-center">
            {texts.subtitle}
          </p>
        </>
      )}

      {started ? (
        <PowerpuffTest />
      ) : (
        <div className="text-center">
          <Button
            size="lg"
            onClick={() => setStarted(true)}
            className="bg-gradient-to-r from-pink-500 to-green-600 hover:from-pink-600 hover:to-green-700 text-white font-semibold px-8 py-4 text-lg"
          >
            {texts.ctaButton}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      )}
    </div>
  );
}
