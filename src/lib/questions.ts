export interface Question {
  id: number;
  text: string;
  answers: Array<{ text: string; value: number }>;
}

export const questionsZh: Question[] = [
  {
    id: 1,
    text: "周末你更愿意做什么？",
    answers: [
      { text: "在家看电视或玩游戏", value: 15 },
      { text: "和朋友聚会或外出", value: 25 },
      { text: "读书或学习新技能", value: 35 },
      { text: "整理家务或做家庭活动", value: 45 }
    ]
  },
  {
    id: 2,
    text: "面对困难时，你通常会？",
    answers: [
      { text: "找朋友倾诉或寻求帮助", value: 20 },
      { text: "自己想办法解决", value: 30 },
      { text: "先冷静分析再行动", value: 40 },
      { text: "凭经验和直觉处理", value: 50 }
    ]
  },
  {
    id: 3,
    text: "你对新科技产品的态度是？",
    answers: [
      { text: "总是第一时间尝试", value: 18 },
      { text: "等朋友推荐后再考虑", value: 28 },
      { text: "仔细研究后再购买", value: 38 },
      { text: "除非必要否则不换", value: 48 }
    ]
  },
  {
    id: 4,
    text: "你的理想假期是？",
    answers: [
      { text: "刺激的冒险旅行", value: 22 },
      { text: "和朋友的欢乐旅程", value: 28 },
      { text: "文化深度游或学习之旅", value: 38 },
      { text: "安静舒适的度假村", value: 48 }
    ]
  },
  {
    id: 5,
    text: "你如何看待金钱？",
    answers: [
      { text: "有钱就花，享受当下", value: 20 },
      { text: "适度消费，偶尔奖励自己", value: 30 },
      { text: "有计划地储蓄和投资", value: 40 },
      { text: "节俭为主，为未来考虑", value: 50 }
    ]
  },
  {
    id: 6,
    text: "你更喜欢什么样的音乐？",
    answers: [
      { text: "流行音乐或电子音乐", value: 18 },
      { text: "摇滚或说唱音乐", value: 25 },
      { text: "古典音乐或爵士乐", value: 40 },
      { text: "民谣或老歌", value: 45 }
    ]
  },
  {
    id: 7,
    text: "你的社交方式是？",
    answers: [
      { text: "喜欢大型聚会和热闹场合", value: 22 },
      { text: "更喜欢小圈子的深度交流", value: 32 },
      { text: "享受一对一的深入对话", value: 42 },
      { text: "更愿意独处或小范围社交", value: 52 }
    ]
  },
  {
    id: 8,
    text: "你对工作的态度是？",
    answers: [
      { text: "工作是为了玩乐", value: 20 },
      { text: "追求工作与生活平衡", value: 30 },
      { text: "工作是实现自我价值的途径", value: 40 },
      { text: "工作是责任和义务", value: 50 }
    ]
  },
  {
    id: 9,
    text: "你如何做重要决定？",
    answers: [
      { text: "跟着感觉走", value: 18 },
      { text: "征求朋友和家人意见", value: 28 },
      { text: "仔细权衡利弊", value: 38 },
      { text: "基于过往经验判断", value: 48 }
    ]
  },
  {
    id: 10,
    text: "你最看重的品质是？",
    answers: [
      { text: "自由和创造力", value: 22 },
      { text: "友谊和忠诚", value: 28 },
      { text: "智慧和知识", value: 38 },
      { text: "稳定和安全", value: 48 }
    ]
  }
];

export const questionsEn: Question[] = [
  {
    id: 1,
    text: "What would you prefer to do on weekends?",
    answers: [
      { text: "Stay home watching TV or playing games", value: 15 },
      { text: "Hang out with friends or go out", value: 25 },
      { text: "Read books or learn new skills", value: 35 },
      { text: "Organize household chores or family activities", value: 45 }
    ]
  },
  {
    id: 2,
    text: "When facing difficulties, you usually?",
    answers: [
      { text: "Talk to friends or seek help", value: 20 },
      { text: "Figure out solutions by yourself", value: 30 },
      { text: "Analyze calmly before taking action", value: 40 },
      { text: "Handle based on experience and intuition", value: 50 }
    ]
  },
  {
    id: 3,
    text: "What's your attitude towards new technology products?",
    answers: [
      { text: "Always try them first", value: 18 },
      { text: "Consider after friends recommend", value: 28 },
      { text: "Research carefully before buying", value: 38 },
      { text: "Don't change unless necessary", value: 48 }
    ]
  },
  {
    id: 4,
    text: "What's your ideal vacation?",
    answers: [
      { text: "Exciting adventure travel", value: 22 },
      { text: "Fun trip with friends", value: 28 },
      { text: "Cultural deep tour or learning journey", value: 38 },
      { text: "Quiet and comfortable resort", value: 48 }
    ]
  },
  {
    id: 5,
    text: "How do you view money?",
    answers: [
      { text: "Spend when you have it, enjoy the present", value: 20 },
      { text: "Moderate consumption, occasional rewards", value: 30 },
      { text: "Planned saving and investment", value: 40 },
      { text: "Frugal mainly, consider the future", value: 50 }
    ]
  },
  {
    id: 6,
    text: "What kind of music do you prefer?",
    answers: [
      { text: "Pop music or electronic music", value: 18 },
      { text: "Rock or rap music", value: 25 },
      { text: "Classical music or jazz", value: 40 },
      { text: "Folk music or oldies", value: 45 }
    ]
  },
  {
    id: 7,
    text: "What's your social style?",
    answers: [
      { text: "Like large parties and lively occasions", value: 22 },
      { text: "Prefer small circle deep communication", value: 32 },
      { text: "Enjoy one-on-one deep conversations", value: 42 },
      { text: "Prefer solitude or small-scale socializing", value: 52 }
    ]
  },
  {
    id: 8,
    text: "What's your attitude towards work?",
    answers: [
      { text: "Work is for fun", value: 20 },
      { text: "Pursue work-life balance", value: 30 },
      { text: "Work is a way to realize self-worth", value: 40 },
      { text: "Work is responsibility and duty", value: 50 }
    ]
  },
  {
    id: 9,
    text: "How do you make important decisions?",
    answers: [
      { text: "Follow your feelings", value: 18 },
      { text: "Ask friends and family for advice", value: 28 },
      { text: "Carefully weigh pros and cons", value: 38 },
      { text: "Judge based on past experience", value: 48 }
    ]
  },
  {
    id: 10,
    text: "What quality do you value most?",
    answers: [
      { text: "Freedom and creativity", value: 22 },
      { text: "Friendship and loyalty", value: 28 },
      { text: "Wisdom and knowledge", value: 38 },
      { text: "Stability and security", value: 48 }
    ]
  }
];

// For backward compatibility
export const questions = questionsZh;

export function getQuestions(language: 'zh' | 'en' = 'en'): Question[] {
  return language === 'en' ? questionsEn : questionsZh;
} 