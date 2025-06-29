"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Clock, Shield, Star, Users, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MentalAgeTest from "@/components/MentalAgeTest";
import TestResult from "@/components/TestResult";
import { calculateMentalAge } from "@/lib/utils";

// 创建一个单独的组件来处理搜索参数
function TestPageContent() {
  const [isCompleted, setIsCompleted] = useState(false);
  const [mentalAge, setMentalAge] = useState<number>(0);
  const [language, setLanguage] = useState<'zh' | 'en'>('en');
  const searchParams = useSearchParams();
  
  // 获取从Hero页面传递的第一个答案
  const firstAnswer = searchParams.get('firstAnswer') ? parseInt(searchParams.get('firstAnswer')!) : undefined;

  const handleTestComplete = (answers: number[]) => {
    const calculatedAge = calculateMentalAge(answers);
    setMentalAge(calculatedAge);
    setIsCompleted(true);
  };

  const handleRestart = () => {
    setIsCompleted(false);
    setMentalAge(0);
  };

  // 快速预览结果页面
  const handlePreviewResult = () => {
    setMentalAge(23); // 示例年龄
    setIsCompleted(true);
  };

  const texts = {
    zh: {
      title: "心理年龄测试",
      subtitle: "通过简单的问题了解你的心理年龄",
      seoTitle: "免费心理年龄测试 - 发现你的真实心理年龄",
      seoDescription: "通过科学设计的心理年龄测试，准确评估你的心理成熟度。免费在线测试，立即获得个性化结果和专业分析。",
      aboutTitle: "关于心理年龄测试",
      aboutText: "心理年龄测试是一种科学的心理评估工具，通过分析您的思维模式、行为偏好和价值观念，准确评估您的心理成熟度。我们的测试基于心理学研究，帮助您更好地了解自己的心理状态。",
      whyTitle: "为什么要进行心理年龄测试？",
      benefits: [
        "了解自己的心理成熟度水平",
        "发现个人成长的方向和潜力",
        "改善人际关系和沟通方式",
        "制定更适合的人生规划",
        "提升自我认知和情商"
      ],
      featuresTitle: "测试特色",
      features: [
        { icon: Brain, title: "科学准确", desc: "基于心理学理论，结果可靠" },
        { icon: Clock, title: "快速便捷", desc: "5分钟完成，即时获得结果" },
        { icon: Shield, title: "隐私保护", desc: "完全匿名，数据安全保护" },
        { icon: Star, title: "专业分析", desc: "详细的个性化结果解读" },
        { icon: Users, title: "广泛认可", desc: "数百万用户的信赖选择" },
        { icon: Award, title: "权威可信", desc: "专业心理学团队开发" }
      ]
    },
    en: {
      title: "Mental Age Test",
      subtitle: "Discover your mental age through simple questions",
      seoTitle: "Free Mental Age Test - Discover Your True Psychological Age",
      seoDescription: "Take our scientifically-designed mental age test to accurately assess your psychological maturity. Free online assessment with instant personalized results and professional analysis.",
      aboutTitle: "About Mental Age Test",
      aboutText: "A mental age test is a scientific psychological assessment tool that accurately evaluates your psychological maturity by analyzing your thinking patterns, behavioral preferences, and values. Our test is based on psychological research to help you better understand your mental state.",
      whyTitle: "Why Take a Mental Age Test?",
      benefits: [
        "Understand your level of psychological maturity",
        "Discover directions and potential for personal growth",
        "Improve interpersonal relationships and communication",
        "Create more suitable life plans",
        "Enhance self-awareness and emotional intelligence"
      ],
      featuresTitle: "Test Features",
      features: [
        { icon: Brain, title: "Scientifically Accurate", desc: "Based on psychological theory, reliable results" },
        { icon: Clock, title: "Quick & Convenient", desc: "Complete in 5 minutes, instant results" },
        { icon: Shield, title: "Privacy Protected", desc: "Completely anonymous, secure data protection" },
        { icon: Star, title: "Professional Analysis", desc: "Detailed personalized result interpretation" },
        { icon: Users, title: "Widely Trusted", desc: "Trusted choice of millions of users" },
        { icon: Award, title: "Authoritative", desc: "Developed by professional psychology team" }
      ]
    }
  };

  return (
    <div className="pt-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto py-8">
        {/* Header Section with SEO Content */}
        <div className="text-center mb-12">
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
          
          {/* 快速预览按钮 - 仅用于开发测试 */}
          {/* {!isCompleted && (
            <div className="flex justify-center mb-4">
              <Button
                variant="outline"
                size="sm"
                onClick={handlePreviewResult}
                className="text-xs text-gray-500"
              >
                
              </Button>
            </div>
          )} */}

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {texts[language].title}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {texts[language].subtitle}
          </p>

          {/* Test Component */}
        {isCompleted ? (
          <TestResult 
            mentalAge={mentalAge} 
            onRestart={handleRestart}
            language={language}
          />
        ) : (
          <MentalAgeTest 
            onComplete={handleTestComplete}
            language={language}
            firstAnswer={firstAnswer}
          />
        )}

          {/* SEO Rich Content - Only show when test is not started/completed */}
          {!isCompleted && (
            <div className="max-w-4xl mx-auto text-left space-y-12 mb-12">
              {/* About Section */}
              <Card className="p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {texts[language].aboutTitle}
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {texts[language].aboutText}
                </p>
              </Card>

              {/* Benefits Section */}
              <Card className="p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  {texts[language].whyTitle}
                </h2>
                <ul className="space-y-3">
                  {texts[language].benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 text-lg">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Features Grid */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
                  {texts[language].featuresTitle}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {texts[language].features.map((feature, index) => (
                    <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                      <CardContent className="pt-6">
                        <feature.icon className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600">
                          {feature.desc}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        

        {/* Additional SEO Content - Bottom Section */}
        {!isCompleted && (
          <div className="max-w-4xl mx-auto mt-16 space-y-8">
            <Card className="p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {language === 'en' ? 'How Does the Mental Age Test Work?' : '心理年龄测试如何工作？'}
              </h2>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg leading-relaxed">
                  {language === 'en' ? 
                    'Our mental age test uses a comprehensive questionnaire that evaluates various aspects of your personality, decision-making patterns, and life preferences. The assessment analyzes your responses to determine your psychological maturity level compared to different age groups.' :
                    '我们的心理年龄测试使用综合问卷，评估您的性格、决策模式和生活偏好的各个方面。评估分析您的回答，确定您与不同年龄组相比的心理成熟度水平。'
                  }
                </p>
                <p className="text-lg leading-relaxed">
                  {language === 'en' ? 
                    'The mental age test results provide insights into your cognitive development, emotional intelligence, and social maturity. This information can be valuable for personal growth, career development, and understanding your relationships with others.' :
                    '心理年龄测试结果提供对您的认知发展、情商和社会成熟度的洞察。这些信息对个人成长、职业发展和理解与他人的关系很有价值。'
                  }
                </p>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {language === 'en' ? 'Frequently Asked Questions' : '常见问题'}
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {language === 'en' ? 'Is the mental age test accurate?' : '心理年龄测试准确吗？'}
                  </h3>
                  <p className="text-gray-700">
                    {language === 'en' ? 
                      'Our mental age test is based on established psychological principles and has been validated through extensive research. While no test is 100% accurate, our assessment provides a reliable indication of your psychological maturity level.' :
                      '我们的心理年龄测试基于既定的心理学原理，并通过广泛的研究得到验证。虽然没有测试是100%准确的，但我们的评估提供了您心理成熟度水平的可靠指示。'
                    }
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {language === 'en' ? 'How long does the mental age test take?' : '心理年龄测试需要多长时间？'}
                  </h3>
                  <p className="text-gray-700">
                    {language === 'en' ? 
                      'The mental age test typically takes 5-10 minutes to complete. It consists of carefully selected questions designed to assess different aspects of your psychological development efficiently.' :
                      '心理年龄测试通常需要5-10分钟完成。它由精心挑选的问题组成，旨在有效评估您心理发展的不同方面。'
                    }
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {language === 'en' ? 'Can I retake the mental age test?' : '我可以重新进行心理年龄测试吗？'}
                  </h3>
                  <p className="text-gray-700">
                    {language === 'en' ? 
                      'Yes, you can retake the mental age test at any time. Your mental age can change over time as you gain new experiences and develop personally, so periodic retesting can provide updated insights.' :
                      '是的，您可以随时重新进行心理年龄测试。随着您获得新的经验和个人发展，您的心理年龄可能会随时间而改变，因此定期重新测试可以提供更新的见解。'
                    }
                  </p>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}

export default function TestPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Suspense fallback={
        <div className="pt-16 bg-gray-50 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading...</p>
          </div>
        </div>
      }>
        <TestPageContent />
      </Suspense>
      <Footer />
    </main>
  );
} 