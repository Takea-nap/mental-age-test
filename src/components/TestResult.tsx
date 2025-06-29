"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Download, Share2, RotateCcw } from "lucide-react";
import { getMentalAgeDescription } from "@/lib/utils";

interface TestResultProps {
  mentalAge: number;
  onRestart: () => void;
  language?: 'zh' | 'en';
}

export default function TestResult({ mentalAge, onRestart, language = 'zh' }: TestResultProps) {
  const description = getMentalAgeDescription(mentalAge, language);

  const texts = {
    zh: {
      completed: "测试完成！",
      yourAge: "您的心理年龄",
      basedOn: "基于您的回答",
      logicalThinking: "逻辑思维",
      emotionalMaturity: "情感成熟度",
      lifeExperience: "生活阅历",
      tryAgain: "再测一次",
      export: "导出结果",
      share: "分享结果"
    },
    en: {
      completed: "Test Completed!",
      yourAge: "Your Mental Age",
      basedOn: "Based on your responses",
      logicalThinking: "Logical Thinking",
      emotionalMaturity: "Emotional Maturity",
      lifeExperience: "Life Experience",
      tryAgain: "Try Again",
      export: "Export Result",
      share: "Share Result"
    }
  };

  // 根据心理年龄计算各维度分数
  const getScores = (age: number) => {
    // 使用年龄作为种子，确保同一年龄的分数稳定
    const seed = age * 13; // 简单的种子生成
    const random1 = ((seed * 9301 + 49297) % 233280) / 233280;
    const random2 = (((seed + 1) * 9301 + 49297) % 233280) / 233280;
    const random3 = (((seed + 2) * 9301 + 49297) % 233280) / 233280;
    
    // 逻辑思维：年龄越大通常越高，但有上限
    const logical = Math.min(95, Math.max(30, (age - 15) * 1.8 + 40 + random1 * 15));
    // 情感成熟度：中年时期较高
    const emotional = Math.min(90, Math.max(25, age <= 35 ? age * 1.6 + 20 : 80 - (age - 35) * 0.3 + random2 * 15));
    // 生活阅历：随年龄增长
    const experience = Math.min(85, Math.max(20, (age - 15) * 1.4 + 25 + random3 * 15));
    
    return {
      logical: Math.round(logical),
      emotional: Math.round(emotional),
      experience: Math.round(experience)
    };
  };

  const scores = getScores(mentalAge);

  const handleExport = () => {
    const resultText = `${texts[language].yourAge}: ${mentalAge}\n\n${description}\n\n${texts[language].logicalThinking}: ${scores.logical}%\n${texts[language].emotionalMaturity}: ${scores.emotional}%\n${texts[language].lifeExperience}: ${scores.experience}%`;
    
    const blob = new Blob([resultText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `mental-age-result-${mentalAge}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleShare = async () => {
    const shareText = `${texts[language].yourAge}: ${mentalAge}! ${description}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: language === 'zh' ? '心理年龄测试结果' : 'Mental Age Test Result',
          text: shareText,
          url: window.location.origin + '/test'
        });
      } catch (err) {
        console.log('Error sharing:', err);
        fallbackShare(shareText);
      }
    } else {
      fallbackShare(shareText);
    }
  };

  const fallbackShare = (text: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        alert(language === 'zh' ? '结果已复制到剪贴板！' : 'Result copied to clipboard!');
      });
    } else {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert(language === 'zh' ? '结果已复制到剪贴板！' : 'Result copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
        <CardContent className="p-12">
          {/* 主要结果显示 */}
          <div className="text-center mb-12">
            {/* 大号年龄数字 */}
            <div className="mb-6">
              <div className="text-8xl font-bold text-gray-900 mb-4">
                {mentalAge}
              </div>
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                {texts[language].yourAge}
              </h2>
              <p className="text-gray-500">
                {texts[language].basedOn}
              </p>
            </div>
          </div>

          {/* 维度分析 */}
          <div className="space-y-8 mb-12">
            {/* 逻辑思维 */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium text-gray-700">
                  {texts[language].logicalThinking}
                </span>
                <span className="text-sm text-gray-500">{scores.logical}%</span>
              </div>
              <Progress 
                value={scores.logical} 
                className="h-3 bg-gray-200"
                indicatorClassName="bg-gradient-to-r from-purple-500 to-pink-500"
              />
            </div>

            {/* 情感成熟度 */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium text-gray-700">
                  {texts[language].emotionalMaturity}
                </span>
                <span className="text-sm text-gray-500">{scores.emotional}%</span>
              </div>
              <Progress 
                value={scores.emotional} 
                className="h-3 bg-gray-200"
                indicatorClassName="bg-gradient-to-r from-blue-500 to-blue-700"
              />
            </div>

            {/* 生活阅历 */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium text-gray-700">
                  {texts[language].lifeExperience}
                </span>
                <span className="text-sm text-gray-500">{scores.experience}%</span>
              </div>
              <Progress 
                value={scores.experience} 
                className="h-3 bg-gray-200"
                indicatorClassName="bg-gradient-to-r from-green-500 to-green-600"
              />
            </div>
          </div>

          {/* 描述文本 */}
          <div className="text-center mb-8">
            <p className="text-gray-600 leading-relaxed">
              {description}
            </p>
          </div>
          
          {/* 操作按钮 */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              onClick={onRestart}
              size="lg"
              className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
            >
              <RotateCcw className="w-4 h-4" />
              {texts[language].tryAgain}
            </Button>
            
            <Button 
              onClick={handleExport}
              variant="outline"
              size="lg"
              className="flex-1 flex items-center justify-center gap-2 border-gray-300 hover:bg-gray-50"
            >
              <Download className="w-4 h-4" />
              {texts[language].export}
            </Button>
            
            <Button 
              onClick={handleShare}
              variant="outline"
              size="lg"
              className="flex-1 flex items-center justify-center gap-2 border-gray-300 hover:bg-gray-50"
            >
              <Share2 className="w-4 h-4" />
              {texts[language].share}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 