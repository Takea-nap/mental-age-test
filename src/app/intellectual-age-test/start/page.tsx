"use client";

import { useState, useEffect, useCallback } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Brain, Clock, CheckCircle, AlertCircle, Trophy, Target, TrendingUp } from "lucide-react";
import { 
  intellectualQuestions, 
  getRandomQuestions, 
  calculateIntellectualAge,
  type IntellectualQuestion 
} from "@/lib/intellectualQuestions";

export default function IntellectualAgeTestStartPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [testQuestions, setTestQuestions] = useState<IntellectualQuestion[]>([]);
  const [timeLeft, setTimeLeft] = useState(0);
  const [testStarted, setTestStarted] = useState(false);
  const [testCompleted, setTestCompleted] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);

  // Complete test
  const completeTest = useCallback(() => {
    let score = 0;
    let maxScore = 0;

    testQuestions.forEach((question, index) => {
      const selectedOption = selectedAnswers[index];
      if (selectedOption >= 0) {
        const selectedAnswer = question.options[selectedOption];
        score += selectedAnswer.value;
        
        // Calculate maximum possible score
        const maxValue = Math.max(...question.options.map(opt => opt.value));
        maxScore += maxValue;
      }
    });

    setTotalScore(score);
    setTestCompleted(true);
  }, [testQuestions, selectedAnswers]);

  // Next question
  const handleNextQuestion = useCallback(() => {
    if (currentQuestionIndex < testQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimeLeft(testQuestions[currentQuestionIndex + 1]?.timeLimit || 60);
      setShowExplanation(false);
    } else {
      completeTest();
    }
  }, [currentQuestionIndex, testQuestions, completeTest]);

  // Initialize test
  useEffect(() => {
    const questions = getRandomQuestions(20); // Select 20 questions
    setTestQuestions(questions);
    setSelectedAnswers(new Array(questions.length).fill(-1));
  }, []);

  // Timer
  useEffect(() => {
    if (testStarted && !testCompleted && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && testStarted && !testCompleted) {
      handleNextQuestion(); // Auto advance to next question when time runs out
    }
  }, [timeLeft, testStarted, testCompleted, handleNextQuestion]);

  // Start test
  const startTest = () => {
    setTestStarted(true);
    setTimeLeft(testQuestions[0]?.timeLimit || 60);
  };

  // Handle answer selection
  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  // Show explanation
  const toggleExplanation = () => {
    setShowExplanation(!showExplanation);
  };

  // Format time
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (testQuestions.length === 0) {
    return (
      <main className="min-h-screen">
        <Header />
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20 flex items-center justify-center">
          <div className="text-center">
            <Brain className="w-16 h-16 text-blue-600 mx-auto mb-4 animate-pulse" />
            <p className="text-xl text-gray-600">Loading test...</p>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  if (testCompleted) {
    const result = calculateIntellectualAge(totalScore, testQuestions.length * 35); // Assume max 35 points per question
    
    return (
      <main className="min-h-screen">
        <Header />
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 pt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                <Trophy className="w-10 h-10 text-green-600" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Test Complete!</h1>
              <p className="text-xl text-gray-600">Congratulations on completing the intellectual age test</p>
            </div>

            <Card className="mb-8 border-green-200">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-green-700">Your Intellectual Age</CardTitle>
                <div className="text-6xl font-bold text-green-600 my-4">
                  {result.intellectualAge} years old
                </div>
                <div className="inline-flex items-center justify-center px-4 py-2 bg-green-100 rounded-full">
                  <span className="text-green-800 font-semibold">{result.level}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-center leading-relaxed">
                  {result.description}
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="border-blue-200">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <Target className="w-8 h-8 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-600">Total Score</p>
                      <p className="text-2xl font-bold text-blue-600">{totalScore}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-purple-200">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-8 h-8 text-purple-600" />
                    <div>
                      <p className="text-sm text-gray-600">Questions Completed</p>
                      <p className="text-2xl font-bold text-purple-600">{testQuestions.length}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-orange-200">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-8 h-8 text-orange-600" />
                    <div>
                      <p className="text-sm text-gray-600">Accuracy Rate</p>
                      <p className="text-2xl font-bold text-orange-600">
                        {Math.round((totalScore / (testQuestions.length * 35)) * 100)}%
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center space-y-4">
              <Link href="/more-tests">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  Try Other Tests
                </Button>
              </Link>
              <div>
                <Link href="/mental-test" className="text-blue-600 hover:text-blue-800 mx-4">
                  Mental Age Test
                </Link>
                <Link href="/" className="text-blue-600 hover:text-blue-800 mx-4">
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  if (!testStarted) {
    return (
      <main className="min-h-screen">
        <Header />
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
              <Brain className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Ready to Start Test</h1>
            <p className="text-xl text-gray-600 mb-8">
              About to start the intellectual age test, with {testQuestions.length} questions total, estimated 15-25 minutes
            </p>
            
            <Card className="mb-8">
              <CardContent className="pt-6">
                <div className="space-y-4 text-left">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm font-semibold text-blue-600">1</span>
                    </div>
                    <p className="text-gray-700">Each question has a time limit, please answer within the specified time</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm font-semibold text-blue-600">2</span>
                    </div>
                    <p className="text-gray-700">After selecting an answer, click "Next Question" to continue</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm font-semibold text-blue-600">3</span>
                    </div>
                    <p className="text-gray-700">Once the test starts, you cannot pause or go back to modify answers</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button 
              size="lg" 
              onClick={startTest}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold"
            >
              Start Test
              <Brain className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  const currentQuestion = testQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / testQuestions.length) * 100;

  return (
    <main className="min-h-screen">
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Progress Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <span className="text-lg font-semibold text-gray-700">
                  Question {currentQuestionIndex + 1} / {testQuestions.length}
                </span>
                <div className="flex items-center gap-2 text-blue-600">
                  <Clock className="w-5 h-5" />
                  <span className="text-lg font-mono">{formatTime(timeLeft)}</span>
                </div>
              </div>
              <div className="text-sm text-gray-500">
                {currentQuestion.category === 'numerical' && 'Numerical Reasoning'}
                {currentQuestion.category === 'abstract' && 'Abstract Thinking'}
                {currentQuestion.category === 'memory' && 'Memory & Learning'}
                {currentQuestion.category === 'logical' && 'Logical Reasoning'}
              </div>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question Card */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-xl">{currentQuestion.text}</CardTitle>
              <CardDescription>
                Choose the most appropriate answer • Difficulty: {
                  currentQuestion.difficulty === 'easy' ? 'Easy' :
                  currentQuestion.difficulty === 'medium' ? 'Medium' : 'Hard'
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => (
                  <Button
                    key={index}
                    variant={selectedAnswers[currentQuestionIndex] === index ? "default" : "outline"}
                    className="w-full text-left justify-start p-4 h-auto"
                    onClick={() => handleAnswerSelect(index)}
                  >
                    <span className="mr-3 font-semibold">
                      {String.fromCharCode(65 + index)}.
                    </span>
                    {option.text}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              onClick={toggleExplanation}
              disabled={!currentQuestion.explanation}
            >
              {showExplanation ? 'Hide Hint' : 'Show Hint'}
            </Button>
            
            <Button
              onClick={handleNextQuestion}
              disabled={selectedAnswers[currentQuestionIndex] === -1}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              {currentQuestionIndex === testQuestions.length - 1 ? 'Complete Test' : 'Next Question'}
            </Button>
          </div>

          {/* Explanation */}
          {showExplanation && currentQuestion.explanation && (
            <Card className="mt-6 border-amber-200 bg-amber-50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-amber-800 mb-2">Solution Approach</h4>
                    <p className="text-amber-700 text-sm">{currentQuestion.explanation}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Exit Button */}
          <div className="text-center mt-8">
            <Link href="/intellectual-age-test" className="text-gray-500 hover:text-gray-700">
              ← Exit Test
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
} 