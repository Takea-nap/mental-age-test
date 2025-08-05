'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { genderRoleQuestions, calculateGenderRole, genderRoleScores } from '@/lib/genderRoleQuestions';
import { Progress } from '@/components/ui/progress';

interface GenderRoleTestClientProps {
  title: string;
  subtitle: string;
  ctaButton: string;
}

// This is the main component for the gender role test.
function GenderRoleTest() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Array<{ value: keyof typeof genderRoleScores }>>([]);
  const [showResult, setShowResult] = useState(false);
  const router = useRouter();

  const handleAnswer = (value: keyof typeof genderRoleScores) => {
    const newAnswers = [...answers, { value }];
    setAnswers(newAnswers);

    if (currentQuestionIndex < genderRoleQuestions.length - 1) {
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
    router.push('/gender-role-test');
  };

  const result = showResult ? calculateGenderRole(answers) : null;

  return (
    <Card className="max-w-2xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Gender Role Test</CardTitle>
      </CardHeader>
      <CardContent>
        {showResult && result ? (
          <div className="text-center p-4">
            <h2 className="text-xl font-semibold mb-4">Gender Role Test Result</h2>
            <div className="mb-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">{result.genderRole}</div>
              <p className="text-gray-700 mb-4 text-left">{result.description}</p>
              
              {/* Score breakdown */}
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <h3 className="font-semibold mb-3 text-gray-800">Your Trait Distribution:</h3>
                <div className="space-y-2 text-left">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Masculine Traits:</span>
                    <span className="font-medium text-blue-600">{result.percentages.masculine}%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Feminine Traits:</span>
                    <span className="font-medium text-pink-600">{result.percentages.feminine}%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Neutral Responses:</span>
                    <span className="font-medium text-gray-600">{result.percentages.undifferentiated}%</span>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-blue-600 bg-blue-50 p-3 rounded-lg mb-4">
              <strong>Note:</strong> This gender role test measures psychological traits traditionally associated with masculinity and femininity. These results reflect personality characteristics, not biological sex or gender identity.
            </p>
            
            <Button onClick={handleRestart} className="mt-4">Retake Gender Role Test</Button>
          </div>
        ) : (
          <div>
            <Progress value={((currentQuestionIndex + 1) / genderRoleQuestions.length) * 100} className="mb-6" />
            <div className="text-center mb-4">
              <span className="text-sm text-gray-500">
                Question {currentQuestionIndex + 1} of {genderRoleQuestions.length}
              </span>
            </div>
            <h2 className="text-lg font-semibold mb-6 min-h-[60px] text-center">
              {genderRoleQuestions[currentQuestionIndex].text}
            </h2>
            <div className="grid grid-cols-1 gap-3">
              {genderRoleQuestions[currentQuestionIndex].answers.map((answer, index) => (
                <Button 
                  key={index} 
                  onClick={() => handleAnswer(answer.value)} 
                  variant="outline" 
                  className="py-4 text-base hover:bg-blue-50 hover:border-blue-300 transition-colors"
                >
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

export default function GenderRoleTestClient({ texts }: { texts: GenderRoleTestClientProps }) {
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
        <GenderRoleTest />
      ) : (
        <div className="text-center">
            <Button size="lg" onClick={() => setIsTestStarted(true)} className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold px-8 py-4 text-lg">
                {texts.ctaButton}
                <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
        </div>
      )}
    </div>
  );
}