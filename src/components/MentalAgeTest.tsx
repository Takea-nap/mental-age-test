"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { getQuestions, type Question } from "@/lib/questions";

interface MentalAgeTestProps {
  onComplete: (answers: number[]) => void;
  language?: 'zh' | 'en';
  firstAnswer?: number; // 从Hero页面传递的第一个答案
}

export default function MentalAgeTest({ onComplete, language = 'zh', firstAnswer }: MentalAgeTestProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(firstAnswer ? 1 : 0);
  const [answers, setAnswers] = useState<number[]>(firstAnswer ? [firstAnswer] : []);

  const questions = getQuestions(language);
  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      onComplete(newAnswers);
    }
  };

  const texts = {
    zh: {
      question: "问题",
      of: "/"
    },
    en: {
      question: "Question",
      of: "/"
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600">
            {texts[language].question} {currentQuestionIndex + 1} {texts[language].of} {questions.length}
          </span>
          <span className="text-sm text-gray-600">
            {Math.round(progress)}%
          </span>
        </div>
        <Progress value={progress} className="w-full" />
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-center">
            {currentQuestion.text}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {currentQuestion.answers.map((answer, index) => (
              <Button
                key={index}
                variant="outline"
                className="w-full p-4 h-auto text-left justify-start"
                onClick={() => handleAnswer(answer.value)}
              >
                {answer.text}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 