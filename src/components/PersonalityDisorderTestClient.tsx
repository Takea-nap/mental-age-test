'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { personalityDisorderQuestions, calculatePersonalityDisorder, disorderScores } from '@/lib/personalityDisorderQuestions';
import { Progress } from '@/components/ui/progress';

interface PersonalityDisorderTestClientProps {
  title: string;
  subtitle: string;
  ctaButton: string;
}

// This is the main component for the personality disorder test.
function PersonalityDisorderTest() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Array<{ value: keyof typeof disorderScores }>>([]);
  const [showResult, setShowResult] = useState(false);
  const router = useRouter();

  const handleAnswer = (value: keyof typeof disorderScores) => {
    const newAnswers = [...answers, { value }];
    setAnswers(newAnswers);

    if (currentQuestionIndex < personalityDisorderQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  const handleRestart = () => {
    setShowResult(false);
    setAnswers([]);
    setCurrentQuestionIndex(0);
    router.push('/personality-disorder-test');
  };

  const result = showResult ? calculatePersonalityDisorder(answers) : null;

  return (
    <Card className="max-w-2xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Personality Disorder Test</CardTitle>
      </CardHeader>
      <CardContent>
        {showResult && result ? (
          <div className="text-center p-4">
            <h2 className="text-xl font-semibold mb-4">Personality Disorder Test Result</h2>
            <p className="text-lg mb-2">Your personality may have a tendency towards: <strong>{result.disorder}</strong></p>
            <p className="text-gray-600 mb-6">{result.description}</p>
            <p className="text-sm text-red-600 bg-red-50 p-3 rounded-lg">
              <strong>Disclaimer:</strong> This personality disorder test is for educational and informational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment.
            </p>
            <Button onClick={handleRestart} className="mt-6">Retake Personality Disorder Test</Button>
          </div>
        ) : (
          <div>
            <Progress value={((currentQuestionIndex + 1) / personalityDisorderQuestions.length) * 100} className="mb-6" />
            <h2 className="text-lg font-semibold mb-4 min-h-[60px]">{personalityDisorderQuestions[currentQuestionIndex].text}</h2>
            <div className="grid grid-cols-1 gap-4">
              {personalityDisorderQuestions[currentQuestionIndex].answers.map((answer, index) => (
                <Button key={index} onClick={() => handleAnswer(answer.value)} variant="outline" className="py-6 text-base">
                  {answer.text}
                </Button>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default function PersonalityDisorderTestClient({ texts }: { texts: PersonalityDisorderTestClientProps }) {
  const [isTestStarted, setIsTestStarted] = useState(false);

  return (
    <div id="test-section">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
            {texts.title}
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto text-center">
            {texts.subtitle}
        </p>

      {isTestStarted ? (
        <PersonalityDisorderTest />
      ) : (
        <div className="text-center">
            <Button size="lg" onClick={() => setIsTestStarted(true)} className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-4 text-lg">
                {texts.ctaButton}
                <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
        </div>
      )}
    </div>
  );
}