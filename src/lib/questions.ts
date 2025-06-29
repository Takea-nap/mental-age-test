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
      { text: "在家看电视或玩游戏", value: 18 },
      { text: "和朋友聚会或外出", value: 25 },
      { text: "读书或学习新技能", value: 32 },
      { text: "整理家务或做家庭活动", value: 42 }
    ]
  },
  {
    id: 2,
    text: "面对困难时，你通常会？",
    answers: [
      { text: "找朋友倾诉或寻求帮助", value: 20 },
      { text: "自己想办法解决", value: 28 },
      { text: "先冷静分析再行动", value: 36 },
      { text: "凭经验和直觉处理", value: 45 }
    ]
  },
  {
    id: 3,
    text: "你对新科技产品的态度是？",
    answers: [
      { text: "总是第一时间尝试", value: 19 },
      { text: "等朋友推荐后再考虑", value: 26 },
      { text: "仔细研究后再购买", value: 34 },
      { text: "除非必要否则不换", value: 43 }
    ]
  },
  {
    id: 4,
    text: "你的理想假期是？",
    answers: [
      { text: "刺激的冒险旅行", value: 21 },
      { text: "和朋友的欢乐旅程", value: 27 },
      { text: "文化深度游或学习之旅", value: 35 },
      { text: "安静舒适的度假村", value: 44 }
    ]
  },
  {
    id: 5,
    text: "你如何看待金钱？",
    answers: [
      { text: "有钱就花，享受当下", value: 20 },
      { text: "适度消费，偶尔奖励自己", value: 28 },
      { text: "有计划地储蓄和投资", value: 37 },
      { text: "节俭为主，为未来考虑", value: 46 }
    ]
  },
  {
    id: 6,
    text: "你更喜欢什么样的音乐？",
    answers: [
      { text: "流行音乐或电子音乐", value: 19 },
      { text: "摇滚或说唱音乐", value: 24 },
      { text: "古典音乐或爵士乐", value: 36 },
      { text: "民谣或老歌", value: 41 }
    ]
  },
  {
    id: 7,
    text: "你的社交方式是？",
    answers: [
      { text: "喜欢大型聚会和热闹场合", value: 22 },
      { text: "更喜欢小圈子的深度交流", value: 29 },
      { text: "享受一对一的深入对话", value: 38 },
      { text: "更愿意独处或小范围社交", value: 47 }
    ]
  },
  {
    id: 8,
    text: "你对工作的态度是？",
    answers: [
      { text: "工作是为了玩乐", value: 20 },
      { text: "追求工作与生活平衡", value: 28 },
      { text: "工作是实现自我价值的途径", value: 37 },
      { text: "工作是责任和义务", value: 45 }
    ]
  },
  {
    id: 9,
    text: "你如何做重要决定？",
    answers: [
      { text: "跟着感觉走", value: 18 },
      { text: "征求朋友和家人意见", value: 26 },
      { text: "仔细权衡利弊", value: 35 },
      { text: "基于过往经验判断", value: 44 }
    ]
  },
  {
    id: 10,
    text: "你最看重的品质是？",
    answers: [
      { text: "自由和创造力", value: 22 },
      { text: "友谊和忠诚", value: 27 },
      { text: "智慧和知识", value: 35 },
      { text: "稳定和安全", value: 43 }
    ]
  },
  {
    id: 11,
    text: "你通常如何度过一个普通的晚上？",
    answers: [
      { text: "刷手机或看短视频", value: 19 },
      { text: "和朋友聊天或打游戏", value: 25 },
      { text: "看书、学习或思考", value: 33 },
      { text: "早早休息，为明天做准备", value: 42 }
    ]
  },
  {
    id: 12,
    text: "面对压力时，你的反应是？",
    answers: [
      { text: "逃避或寻找娱乐分散注意力", value: 17 },
      { text: "和朋友分享，寻求安慰", value: 24 },
      { text: "分析压力来源，制定解决方案", value: 33 },
      { text: "接受现实，调整心态适应", value: 41 }
    ]
  },
  {
    id: 13,
    text: "你对未来的规划是？",
    answers: [
      { text: "活在当下，未来的事未来再说", value: 18 },
      { text: "有一些想法，但还不够具体", value: 26 },
      { text: "有明确的目标和计划", value: 35 },
      { text: "已经为各种可能性做好准备", value: 44 }
    ]
  },
  {
    id: 14,
    text: "你如何看待失败和挫折？",
    answers: [
      { text: "很难接受，会影响情绪很久", value: 19 },
      { text: "短暂失落后继续努力", value: 27 },
      { text: "从中总结经验，避免重复错误", value: 36 },
      { text: "视为必要的人生历练", value: 45 }
    ]
  },
  {
    id: 15,
    text: "你认为什么是人生最重要的？",
    answers: [
      { text: "快乐和享受每一天", value: 21 },
      { text: "良好的人际关系", value: 28 },
      { text: "个人成长和自我实现", value: 36 },
      { text: "内心的平静和智慧", value: 44 }
    ]
  }
];

export const questionsEn: Question[] = [
  {
    id: 1,
    text: "What would you prefer to do on weekends?",
    answers: [
      { text: "Stay home watching TV or playing games", value: 18 },
      { text: "Hang out with friends or go out", value: 25 },
      { text: "Read books or learn new skills", value: 32 },
      { text: "Organize household chores or family activities", value: 42 }
    ]
  },
  {
    id: 2,
    text: "When facing difficulties, you usually?",
    answers: [
      { text: "Talk to friends or seek help", value: 20 },
      { text: "Figure out solutions by yourself", value: 28 },
      { text: "Analyze calmly before taking action", value: 36 },
      { text: "Handle based on experience and intuition", value: 45 }
    ]
  },
  {
    id: 3,
    text: "What's your attitude towards new technology products?",
    answers: [
      { text: "Always try them first", value: 19 },
      { text: "Consider after friends recommend", value: 26 },
      { text: "Research carefully before buying", value: 34 },
      { text: "Don't change unless necessary", value: 43 }
    ]
  },
  {
    id: 4,
    text: "What's your ideal vacation?",
    answers: [
      { text: "Exciting adventure travel", value: 21 },
      { text: "Fun trip with friends", value: 27 },
      { text: "Cultural deep tour or learning journey", value: 35 },
      { text: "Quiet and comfortable resort", value: 44 }
    ]
  },
  {
    id: 5,
    text: "How do you view money?",
    answers: [
      { text: "Spend when you have it, enjoy the present", value: 20 },
      { text: "Moderate consumption, occasional rewards", value: 28 },
      { text: "Planned saving and investment", value: 37 },
      { text: "Frugal mainly, consider the future", value: 46 }
    ]
  },
  {
    id: 6,
    text: "What kind of music do you prefer?",
    answers: [
      { text: "Pop music or electronic music", value: 19 },
      { text: "Rock or rap music", value: 24 },
      { text: "Classical music or jazz", value: 36 },
      { text: "Folk music or oldies", value: 41 }
    ]
  },
  {
    id: 7,
    text: "What's your social style?",
    answers: [
      { text: "Like large parties and lively occasions", value: 22 },
      { text: "Prefer small circle deep communication", value: 29 },
      { text: "Enjoy one-on-one deep conversations", value: 38 },
      { text: "Prefer solitude or small-scale socializing", value: 47 }
    ]
  },
  {
    id: 8,
    text: "What's your attitude towards work?",
    answers: [
      { text: "Work is for fun", value: 20 },
      { text: "Pursue work-life balance", value: 28 },
      { text: "Work is a way to realize self-worth", value: 37 },
      { text: "Work is responsibility and duty", value: 45 }
    ]
  },
  {
    id: 9,
    text: "How do you make important decisions?",
    answers: [
      { text: "Follow your feelings", value: 18 },
      { text: "Ask friends and family for advice", value: 26 },
      { text: "Carefully weigh pros and cons", value: 35 },
      { text: "Judge based on past experience", value: 44 }
    ]
  },
  {
    id: 10,
    text: "What quality do you value most?",
    answers: [
      { text: "Freedom and creativity", value: 22 },
      { text: "Friendship and loyalty", value: 27 },
      { text: "Wisdom and knowledge", value: 35 },
      { text: "Stability and security", value: 43 }
    ]
  },
  {
    id: 11,
    text: "How do you usually spend a typical evening?",
    answers: [
      { text: "Scrolling phone or watching short videos", value: 19 },
      { text: "Chatting with friends or playing games", value: 25 },
      { text: "Reading, studying or thinking", value: 33 },
      { text: "Rest early, preparing for tomorrow", value: 42 }
    ]
  },
  {
    id: 12,
    text: "How do you react when facing stress?",
    answers: [
      { text: "Avoid or seek entertainment to distract", value: 17 },
      { text: "Share with friends and seek comfort", value: 24 },
      { text: "Analyze stress sources and make solutions", value: 33 },
      { text: "Accept reality and adjust mindset", value: 41 }
    ]
  },
  {
    id: 13,
    text: "What's your approach to future planning?",
    answers: [
      { text: "Live in the moment, deal with future later", value: 18 },
      { text: "Have some ideas but not specific enough", value: 26 },
      { text: "Have clear goals and plans", value: 35 },
      { text: "Prepared for various possibilities", value: 44 }
    ]
  },
  {
    id: 14,
    text: "How do you view failure and setbacks?",
    answers: [
      { text: "Hard to accept, affects mood for long time", value: 19 },
      { text: "Brief disappointment then continue efforts", value: 27 },
      { text: "Learn from experience, avoid repeating mistakes", value: 36 },
      { text: "See as necessary life training", value: 45 }
    ]
  },
  {
    id: 15,
    text: "What do you think is most important in life?",
    answers: [
      { text: "Happiness and enjoying every day", value: 21 },
      { text: "Good relationships with others", value: 28 },
      { text: "Personal growth and self-realization", value: 36 },
      { text: "Inner peace and wisdom", value: 44 }
    ]
  }
];

// For backward compatibility
export const questions = questionsZh;

export function getQuestions(language: 'zh' | 'en' = 'en'): Question[] {
  return language === 'en' ? questionsEn : questionsZh;
} 