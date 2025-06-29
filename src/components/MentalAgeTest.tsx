"use client";

import { useState, useEffect } from "react";
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
  const [canAnswer, setCanAnswer] = useState(true);
  const [showWarning, setShowWarning] = useState(false);

  // 当firstAnswer变化时重置状态
  useEffect(() => {
    if (firstAnswer) {
      setCurrentQuestionIndex(1);
      setAnswers([firstAnswer]);
    } else {
      setCurrentQuestionIndex(0);
      setAnswers([]);
    }
  }, [firstAnswer]);

  const questions = getQuestions(language);
  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleAnswer = (value: number) => {
    if (!canAnswer) {
      setShowWarning(true);
      setTimeout(() => setShowWarning(false), 4000);
      return;
    }

    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      // 切换到下一题后，禁用回答2秒
      setCanAnswer(false);
      setTimeout(() => {
        setCanAnswer(true);
      }, 500);
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

      {showWarning && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 p-3 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded-md shadow-lg animate-in fade-in slide-in-from-top-2 duration-300">
          You're clicking too fast! Please think about the question carefully.
        </div>
      )}

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