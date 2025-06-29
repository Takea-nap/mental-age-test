import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateMentalAge(answers: number[]): number {
  // 15个问题的分值设计：
  // 最年轻选项：17-22分（平均19.5）
  // 最成熟选项：41-47分（平均44）
  // 总分范围：255-660分（15个问题）
  
  const totalScore = answers.reduce((sum, score) => sum + score, 0);
  
  // 计算标准化分数 (0-1范围)
  const minPossibleScore = 17 * 15; // 255
  const maxPossibleScore = 47 * 15; // 705
  const normalizedScore = (totalScore - minPossibleScore) / (maxPossibleScore - minPossibleScore);
  
  // 将标准化分数映射到心理年龄范围 (16-55岁)
  // 使用更加平滑的曲线分布
  const minAge = 16;
  const maxAge = 55;
  const ageRange = maxAge - minAge;
  
  // 使用轻微的S曲线来让分布更自然
  const adjustedScore = normalizedScore < 0.5 
    ? 2 * normalizedScore * normalizedScore 
    : 1 - 2 * (1 - normalizedScore) * (1 - normalizedScore);
  
  const mentalAge = Math.round(minAge + adjustedScore * ageRange);
  
  // 确保结果在合理范围内
  return Math.max(16, Math.min(55, mentalAge));
}

export function getMentalAgeDescription(age: number, language: 'zh' | 'en' = 'zh'): string {
  if (language === 'en') {
    return getMentalAgeDescriptionEn(age);
  }
  return getMentalAgeDescriptionZh(age);
}

function getMentalAgeDescriptionZh(age: number): string {
  if (age <= 20) {
    return "你拥有青春活力的心态，充满好奇心和冒险精神！总是以新鲜的眼光看待世界。";
  } else if (age <= 25) {
    return "你的心理年龄正值青年，既保持着年轻的活力，又开始有了自己的想法！";
  } else if (age <= 30) {
    return "你展现出年轻成人的特质，在活力与理性之间找到了很好的平衡！";
  } else if (age <= 35) {
    return "你的心智已经相当成熟，善于思考和规划，但仍保持着开放的心态！";
  } else if (age <= 40) {
    return "你拥有成熟的心智和丰富的人生阅历，处事稳重而有条理！";
  } else if (age <= 45) {
    return "你展现出中年人的智慧，拥有深刻的人生感悟和稳重的性格！";
  } else if (age <= 50) {
    return "你的心理年龄体现出深厚的人生智慧，善于从容应对各种挑战！";
  } else {
    return "你拥有非常成熟的心智，体现出深厚的智慧和人生感悟，是真正的人生导师！";
  }
}

function getMentalAgeDescriptionEn(age: number): string {
  if (age <= 20) {
    return "You have a youthful and energetic mindset, full of curiosity and adventurous spirit! Always viewing the world with fresh eyes.";
  } else if (age <= 25) {
    return "Your mental age is in its youth, maintaining youthful vitality while beginning to develop your own perspectives!";
  } else if (age <= 30) {
    return "You demonstrate young adult traits, finding a great balance between vitality and rationality!";
  } else if (age <= 35) {
    return "Your mind is quite mature, good at thinking and planning, yet still maintaining an open mindset!";
  } else if (age <= 40) {
    return "You possess mature wisdom and rich life experience, handling things steadily and systematically!";
  } else if (age <= 45) {
    return "You show middle-aged wisdom with profound life insights and a steady character!";
  } else if (age <= 50) {
    return "Your mental age reflects deep life wisdom, skillfully handling various challenges with composure!";
  } else {
    return "You have a very mature mind, demonstrating profound wisdom and life insights - a true life mentor!";
  }
}
