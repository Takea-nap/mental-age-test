import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateMentalAge(answers: number[]): number {
  const totalScore = answers.reduce((sum, score) => sum + score, 0);
  const averageScore = totalScore / answers.length;
  
  // 将平均分映射到心理年龄范围 (15-60岁)
  // 平均分范围大约在 15-55 之间
  const mentalAge = Math.round(averageScore);
  
  // 确保结果在合理范围内
  return Math.max(15, Math.min(60, mentalAge));
}

export function getMentalAgeDescription(age: number, language: 'zh' | 'en' = 'zh'): string {
  if (language === 'en') {
    return getMentalAgeDescriptionEn(age);
  }
  return getMentalAgeDescriptionZh(age);
}

function getMentalAgeDescriptionZh(age: number): string {
  if (age <= 20) {
    return "你拥有青春活力的心态，充满好奇心和冒险精神！";
  } else if (age <= 30) {
    return "你的心理年龄正值青年，平衡了活力与理性！";
  } else if (age <= 40) {
    return "你展现出成熟的心智，善于思考和规划！";
  } else if (age <= 50) {
    return "你拥有丰富的人生阅历，处事稳重而睿智！";
  } else {
    return "你的心理年龄体现出深厚的智慧和人生感悟！";
  }
}

function getMentalAgeDescriptionEn(age: number): string {
  if (age <= 20) {
    return "You have a youthful and energetic mindset, full of curiosity and adventurous spirit!";
  } else if (age <= 30) {
    return "Your mental age is in its prime, balancing vitality with rationality!";
  } else if (age <= 40) {
    return "You demonstrate mature wisdom, good at thinking and planning!";
  } else if (age <= 50) {
    return "You possess rich life experience, handling things steadily and wisely!";
  } else {
    return "Your mental age reflects profound wisdom and life insights!";
  }
}
