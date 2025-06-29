"use client";

import { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Clock, Shield, Star, Users, Award, ArrowRight, Share2, Heart } from "lucide-react";
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
  const router = useRouter();
  
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
    // 清除URL参数，重新导航到干净的测试页面
    router.push('/mental-test');
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
      ],
      ctaTitle: "开始你的心理年龄测试之旅",
      ctaSubtitle: "加入数百万用户，发现你的真实心理年龄",
      ctaButton: "立即开始测试",
      shareTitle: "分享给朋友",
      shareSubtitle: "邀请朋友一起测试，比较结果",
      shareButton: "分享测试",
      retakeTitle: "想要重新测试？",
      retakeSubtitle: "随时回来重新评估你的心理年龄",
      retakeButton: "重新测试"
    },
    en: {
      title: "Mental Age Quiz",
      subtitle: "Discover your mental age through our comprehensive mental age quiz with instant results",
      seoTitle: "Free Mental Age Quiz - Advanced Online Assessment",
      seoDescription: "Take our scientifically-designed mental age quiz to accurately assess your psychological maturity with instant results.",
            aboutTitle: "About Our Mental Age Quiz",
      aboutText: "Our mental age quiz is a comprehensive psychological assessment tool that evaluates your psychological maturity. This assessment analyzes your thinking patterns, behavioral preferences, and decision-making processes to provide accurate results. Our scientifically-designed evaluation is based on psychological research, helping you discover your intellectual age and understand your mental state.",
      whyTitle: "Why Take Our Mental Age Quiz?",
                      benefits: [
          "Understand your psychological maturity level",
          "Discover personal growth directions",
          "Improve interpersonal relationships",
          "Create suitable life plans based on your mental age quiz results",
          "Enhance self-awareness and emotional intelligence"
        ],
      featuresTitle: "Mental Age Quiz Features",
                      features: [
          { icon: Brain, title: "Scientifically Accurate", desc: "Based on validated psychological theories" },
          { icon: Clock, title: "Quick Mental Age Quiz", desc: "Complete in 5 minutes with instant results" },
          { icon: Shield, title: "Secure & Private", desc: "Complete anonymity with secure data protection" },
          { icon: Star, title: "Professional Analysis", desc: "Detailed personalized results and insights" },
          { icon: Users, title: "Trusted by Millions", desc: "Millions of users worldwide trust our assessment" },
          { icon: Award, title: "Expert Developed", desc: "Created by professional psychology experts" }
        ],
      ctaTitle: "Start Your Mental Age Discovery Journey",
      ctaSubtitle: "Join millions of users and discover your true mental age",
      ctaButton: "Take the Quiz Now",
      shareTitle: "Share with Friends",
      shareSubtitle: "Invite friends to take the quiz and compare results",
      shareButton: "Share Quiz",
      retakeTitle: "Want to Retake the Quiz?",
      retakeSubtitle: "Come back anytime to reassess your mental age",
      retakeButton: "Retake Quiz"
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
        <div data-test-section>
          {isCompleted ? (
            <TestResult 
              mentalAge={mentalAge} 
              onRestart={handleRestart}
              language={language}
            />
          ) : (
            <MentalAgeTest 
              key={firstAnswer || 'restart'} // 使用key强制组件重新挂载
              onComplete={handleTestComplete}
              language={language}
              firstAnswer={firstAnswer}
            />
          )}
        </div>

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

              {/* Mid-Content CTA */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-100">
                <div className="text-center">
                  <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {texts[language].retakeTitle}
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg">
                    {texts[language].retakeSubtitle}
                  </p>
                                     <Button 
                     size="lg" 
                     className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-3"
                     onClick={() => {
                       window.scrollTo({ top: 0, behavior: 'smooth' });
                     }}
                   >
                     {texts[language].retakeButton}
                     <ArrowRight className="ml-2 h-5 w-5" />
                   </Button>
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
                {language === 'en' ? 'How Does Our Mental Age Quiz Work?' : '心理年龄测试如何工作？'}
              </h2>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg leading-relaxed">
                  {language === 'en' ? 
                    'Our mental age quiz uses a comprehensive questionnaire that evaluates your personality, decision-making patterns, and life preferences. The assessment analyzes your responses using psychological frameworks to determine your maturity level compared to different age groups.' :
                    '我们的心理年龄测试使用综合问卷评估您的性格、决策模式和生活偏好。心理年龄测试使用心理学框架分析您的回答，确定您与不同年龄组相比的成熟度水平。'
                  }
                </p>
                <p className="text-lg leading-relaxed">
                  {language === 'en' ? 
                    'The results provide insights into your cognitive development, emotional intelligence, and social maturity. This information can be valuable for personal growth and understanding your psychological profile.' :
                    '心理年龄测试结果提供对您的认知发展、情商和社会成熟度的洞察。来自心理年龄测试的这些信息对个人成长和了解您的心理档案很有价值。'
                  }
                </p>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {language === 'en' ? 'Mental Age Quiz FAQ' : '心理年龄测试常见问题'}
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {language === 'en' ? 'Is the mental age quiz accurate?' : '心理年龄测试准确吗？'}
                  </h3>
                  <p className="text-gray-700">
                    {language === 'en' ? 
                      'Our mental age quiz is based on established psychological principles and validated through research. While no mental age quiz is 100% accurate, our assessment provides a reliable indication of your psychological maturity level.' :
                      '我们的心理年龄测试基于既定的心理学原理并通过研究验证。虽然没有心理年龄测试是100%准确的，但我们的评估提供了您心理成熟度水平的可靠指示。'
                    }
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {language === 'en' ? 'How long does the mental age quiz take?' : '心理年龄测试需要多长时间？'}
                  </h3>
                  <p className="text-gray-700">
                    {language === 'en' ? 
                      'The mental age quiz typically takes 5-10 minutes to complete. It consists of carefully selected questions designed to assess your psychological development efficiently.' :
                      '心理年龄测试通常需要5-10分钟完成。它由精心挑选的问题组成，旨在有效评估您的心理发展。'
                    }
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {language === 'en' ? 'Can I retake the mental age quiz?' : '我可以重新进行心理年龄测试吗？'}
                  </h3>
                  <p className="text-gray-700">
                    {language === 'en' ? 
                      'Yes, you can retake the mental age quiz at any time. Your mental age can change as you gain new experiences, so periodic retesting can provide updated insights.' :
                      '是的，您可以随时重新进行心理年龄测试。随着您获得新的经验，您的心理年龄可能会改变，因此定期重新进行我们的心理年龄测试可以提供更新的见解。'
                    }
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {language === 'en' ? 'What age groups can take this assessment?' : '哪些年龄段可以参加这个测试？'}
                  </h3>
                  <p className="text-gray-700">
                    {language === 'en' ? 
                      'Our assessment is designed for individuals aged 13 and above. The questions are carefully crafted to be relevant across different life stages and cultural backgrounds.' :
                      '我们的测试适用于13岁及以上的个人。问题经过精心设计，适用于不同的人生阶段和文化背景。'
                    }
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {language === 'en' ? 'Is my personal information safe?' : '我的个人信息安全吗？'}
                  </h3>
                  <p className="text-gray-700">
                    {language === 'en' ? 
                      'Absolutely! We prioritize your privacy and security. No personal information is required to take the test, and all responses are processed anonymously. We do not store or share any personal data.' :
                      '绝对安全！我们优先考虑您的隐私和安全。参加测试不需要个人信息，所有回答都是匿名处理的。我们不存储或分享任何个人数据。'
                    }
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {language === 'en' ? 'What does my mental age result mean?' : '我的心理年龄结果意味着什么？'}
                  </h3>
                  <p className="text-gray-700">
                    {language === 'en' ? 
                      'Your mental age result reflects your psychological maturity and cognitive development relative to different age groups. It indicates how your thinking patterns, emotional responses, and decision-making processes align with various life stages.' :
                      '您的心理年龄结果反映了您相对于不同年龄组的心理成熟度和认知发展。它表明您的思维模式、情绪反应和决策过程如何与各个人生阶段保持一致。'
                    }
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {language === 'en' ? 'Can I share my results with others?' : '我可以与他人分享我的结果吗？'}
                  </h3>
                  <p className="text-gray-700">
                    {language === 'en' ? 
                      'Yes, you can easily share your results with friends and family through social media or by sending them a screenshot. Many people find it fun to compare results and discuss their findings.' :
                      '是的，您可以通过社交媒体或发送截图轻松与朋友和家人分享您的结果。许多人发现比较结果和讨论发现很有趣。'
                    }
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {language === 'en' ? 'How often should I take the mental age quiz?' : '我应该多久进行一次心理年龄测试？'}
                  </h3>
                  <p className="text-gray-700">
                    {language === 'en' ? 
                      'We recommend taking the mental age quiz every 3-6 months to track your psychological development. Major life events, new experiences, or personal growth can influence your mental age over time.' :
                      '我们建议每3-6个月进行一次心理年龄测试，以跟踪您的心理发展。重大生活事件、新经历或个人成长可能会随着时间影响您的心理年龄。'
                    }
                  </p>
                </div>
              </div>
            </Card>


          </div>
        )}

        {/* Final CTA Section */}
        {!isCompleted && (
          <div className="bg-gradient-to-br from-purple-600 via-blue-600 to-teal-500 rounded-2xl p-8 text-white text-center mt-16">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">
                {language === 'en' ? 'Ready to Discover Your Mental Age?' : '准备发现你的心理年龄了吗？'}
              </h2>
              <p className="text-lg mb-6 opacity-90">
                {language === 'en' ? 
                  'Take our comprehensive mental age quiz now and unlock insights about your psychological development. Join millions who have already discovered their mental age!' :
                  '立即参加我们的综合心理年龄测试，解锁关于你心理发展的见解。加入已经发现自己心理年龄的数百万人！'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                 <Button 
                   size="lg" 
                   className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-8 py-4 text-lg"
                   onClick={() => {
                     window.scrollTo({ top: 0, behavior: 'smooth' });
                   }}
                 >
                   {language === 'en' ? 'Start Mental Age Quiz' : '开始心理年龄测试'}
                   <ArrowRight className="ml-2 h-6 w-6" />
                 </Button>
              </div>
            </div>
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