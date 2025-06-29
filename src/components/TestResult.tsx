"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Download, Share2, RotateCcw } from "lucide-react";
import { getMentalAgeDescription } from "@/lib/utils";
import html2canvas from "html2canvas";

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
      export: "导出图片",
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
      export: "Export Image",
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
    // 创建一个用于导出的元素
    const exportElement = document.createElement('div');
    exportElement.style.cssText = `
      width: 900px;
      padding: 80px;
      background: linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      position: fixed;
      top: -9999px;
      left: -9999px;
    `;
    
    exportElement.innerHTML = `
      <div style="background: rgba(255, 255, 255, 0.95); border-radius: 24px; padding: 60px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); backdrop-filter: blur(16px); position: relative;">
        <!-- 主要结果显示 -->
        <div style="text-align: center; margin-bottom: 60px;">
          <div style="font-size: 140px; font-weight: 900; color: #000000; margin-bottom: 20px; line-height: 1; text-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            ${mentalAge}
          </div>
          <h2 style="font-size: 36px; font-weight: 700; color: #1f2937; margin-bottom: 12px; margin-top: 0;">
            ${texts[language].yourAge}
          </h2>
          <p style="color: #4b5563; font-size: 20px; margin: 0; font-weight: 500;">
            ${texts[language].basedOn}
          </p>
        </div>

        <!-- 维度分析 -->
        <div style="margin-bottom: 60px;">
          <!-- 逻辑思维 -->
          <div style="margin-bottom: 40px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
              <span style="font-size: 24px; font-weight: 600; color: #1f2937;">
                ${texts[language].logicalThinking}
              </span>
              <span style="font-size: 20px; color: #374151; font-weight: 600;">${scores.logical}%</span>
            </div>
            <div style="width: 100%; height: 16px; position: relative;">
              <div style="height: 100%; width: 100%; background: #e5e7eb; border-radius: 8px; position: absolute; top: 0; left: 0;"></div>
              <div style="height: 100%; width: ${scores.logical}%; background: linear-gradient(90deg, #a855f7, #d946ef); border-radius: 8px 0 0 8px; position: absolute; top: 0; left: 0; z-index: 1;"></div>
            </div>
          </div>

          <!-- 情感成熟度 -->
          <div style="margin-bottom: 40px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
              <span style="font-size: 24px; font-weight: 600; color: #1f2937;">
                ${texts[language].emotionalMaturity}
              </span>
              <span style="font-size: 20px; color: #374151; font-weight: 600;">${scores.emotional}%</span>
            </div>
            <div style="width: 100%; height: 16px; position: relative;">
              <div style="height: 100%; width: 100%; background: #e5e7eb; border-radius: 8px; position: absolute; top: 0; left: 0;"></div>
              <div style="height: 100%; width: ${scores.emotional}%; background: linear-gradient(90deg, #3b82f6, #1d4ed8); border-radius: 8px 0 0 8px; position: absolute; top: 0; left: 0; z-index: 1;"></div>
            </div>
          </div>

          <!-- 生活阅历 -->
          <div style="margin-bottom: 40px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
              <span style="font-size: 24px; font-weight: 600; color: #1f2937;">
                ${texts[language].lifeExperience}
              </span>
              <span style="font-size: 20px; color: #374151; font-weight: 600;">${scores.experience}%</span>
            </div>
            <div style="width: 100%; height: 16px; position: relative;">
              <div style="height: 100%; width: 100%; background: #e5e7eb; border-radius: 8px; position: absolute; top: 0; left: 0;"></div>
              <div style="height: 100%; width: ${scores.experience}%; background: linear-gradient(90deg, #10b981, #059669); border-radius: 8px 0 0 8px; position: absolute; top: 0; left: 0; z-index: 1;"></div>
            </div>
          </div>
        </div>

        <!-- 描述文本 -->
        <div style="text-align: center;">
          <p style="color: #374151; font-size: 20px; line-height: 1.6; margin: 0; max-width: 600px; margin: 0 auto; font-weight: 500;">
            ${description}
          </p>
        </div>

        <!-- 水印 -->
        <div style="position: absolute; bottom: 20px; right: 20px; color: rgb(37, 105, 240); font-size: 24px; font-weight: 600; opacity: 0.8;">
          created by mental-age-test.app
        </div>
      </div>
    `;

    document.body.appendChild(exportElement);

    // 使用html2canvas生成图片
    html2canvas(exportElement, {
      backgroundColor: null,
      scale: 2, // 高分辨率
      useCORS: true,
      allowTaint: true,
      width: 900,
      height: exportElement.offsetHeight
    }).then(canvas => {
      // 创建下载链接
      const link = document.createElement('a');
      link.download = `mental-age-result-${mentalAge}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
      
      // 清理临时元素
      document.body.removeChild(exportElement);
    }).catch((err: Error) => {
      console.error('导出图片失败:', err);
      document.body.removeChild(exportElement);
      alert(language === 'zh' ? '导出图片失败，请重试' : 'Failed to export image, please try again');
    });
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