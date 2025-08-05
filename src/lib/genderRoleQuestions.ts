export interface GenderRoleQuestion {
  id: number;
  text: string;
  answers: Array<{ text: string; value: keyof typeof genderRoleScores }>;
}

export const genderRoleScores = {
  masculine: 0,
  feminine: 0,
  androgynous: 0,
  undifferentiated: 0,
};

export const genderRoleQuestions: GenderRoleQuestion[] = [
  {
    id: 1,
    text: "I am assertive and confident in expressing my opinions.",
    answers: [
      { text: "Strongly agree", value: "masculine" },
      { text: "Agree", value: "masculine" },
      { text: "Disagree", value: "feminine" },
      { text: "Strongly disagree", value: "undifferentiated" },
    ],
  },
  {
    id: 2,
    text: "I am nurturing and caring towards others.",
    answers: [
      { text: "Strongly agree", value: "feminine" },
      { text: "Agree", value: "feminine" },
      { text: "Disagree", value: "masculine" },
      { text: "Strongly disagree", value: "undifferentiated" },
    ],
  },
  {
    id: 3,
    text: "I enjoy competitive activities and strive to win.",
    answers: [
      { text: "Strongly agree", value: "masculine" },
      { text: "Agree", value: "masculine" },
      { text: "Disagree", value: "feminine" },
      { text: "Strongly disagree", value: "undifferentiated" },
    ],
  },
  {
    id: 4,
    text: "I am sensitive to others' emotions and feelings.",
    answers: [
      { text: "Strongly agree", value: "feminine" },
      { text: "Agree", value: "feminine" },
      { text: "Disagree", value: "masculine" },
      { text: "Strongly disagree", value: "undifferentiated" },
    ],
  },
  {
    id: 5,
    text: "I take charge and lead in group situations.",
    answers: [
      { text: "Strongly agree", value: "masculine" },
      { text: "Agree", value: "masculine" },
      { text: "Disagree", value: "feminine" },
      { text: "Strongly disagree", value: "undifferentiated" },
    ],
  },
  {
    id: 6,
    text: "I am gentle and soft-spoken in my interactions.",
    answers: [
      { text: "Strongly agree", value: "feminine" },
      { text: "Agree", value: "feminine" },
      { text: "Disagree", value: "masculine" },
      { text: "Strongly disagree", value: "undifferentiated" },
    ],
  },
  {
    id: 7,
    text: "I am independent and self-reliant.",
    answers: [
      { text: "Strongly agree", value: "masculine" },
      { text: "Agree", value: "masculine" },
      { text: "Disagree", value: "feminine" },
      { text: "Strongly disagree", value: "undifferentiated" },
    ],
  },
  {
    id: 8,
    text: "I am understanding and compassionate towards others.",
    answers: [
      { text: "Strongly agree", value: "feminine" },
      { text: "Agree", value: "feminine" },
      { text: "Disagree", value: "masculine" },
      { text: "Strongly disagree", value: "undifferentiated" },
    ],
  },
  {
    id: 9,
    text: "I am ambitious and driven to achieve my goals.",
    answers: [
      { text: "Strongly agree", value: "masculine" },
      { text: "Agree", value: "masculine" },
      { text: "Disagree", value: "feminine" },
      { text: "Strongly disagree", value: "undifferentiated" },
    ],
  },
  {
    id: 10,
    text: "I am warm and affectionate in relationships.",
    answers: [
      { text: "Strongly agree", value: "feminine" },
      { text: "Agree", value: "feminine" },
      { text: "Disagree", value: "masculine" },
      { text: "Strongly disagree", value: "undifferentiated" },
    ],
  },
  {
    id: 11,
    text: "I am analytical and logical in problem-solving.",
    answers: [
      { text: "Strongly agree", value: "masculine" },
      { text: "Agree", value: "masculine" },
      { text: "Disagree", value: "feminine" },
      { text: "Strongly disagree", value: "undifferentiated" },
    ],
  },
  {
    id: 12,
    text: "I am loyal and devoted to my loved ones.",
    answers: [
      { text: "Strongly agree", value: "feminine" },
      { text: "Agree", value: "feminine" },
      { text: "Disagree", value: "masculine" },
      { text: "Strongly disagree", value: "undifferentiated" },
    ],
  },
  {
    id: 13,
    text: "I am willing to take risks and face challenges.",
    answers: [
      { text: "Strongly agree", value: "masculine" },
      { text: "Agree", value: "masculine" },
      { text: "Disagree", value: "feminine" },
      { text: "Strongly disagree", value: "undifferentiated" },
    ],
  },
  {
    id: 14,
    text: "I am tender and emotionally expressive.",
    answers: [
      { text: "Strongly agree", value: "feminine" },
      { text: "Agree", value: "feminine" },
      { text: "Disagree", value: "masculine" },
      { text: "Strongly disagree", value: "undifferentiated" },
    ],
  },
  {
    id: 15,
    text: "I am decisive and make quick decisions.",
    answers: [
      { text: "Strongly agree", value: "masculine" },
      { text: "Agree", value: "masculine" },
      { text: "Disagree", value: "feminine" },
      { text: "Strongly disagree", value: "undifferentiated" },
    ],
  },
  {
    id: 16,
    text: "I am supportive and encouraging to others.",
    answers: [
      { text: "Strongly agree", value: "feminine" },
      { text: "Agree", value: "feminine" },
      { text: "Disagree", value: "masculine" },
      { text: "Strongly disagree", value: "undifferentiated" },
    ],
  },
  {
    id: 17,
    text: "I am forceful and dominant in my approach.",
    answers: [
      { text: "Strongly agree", value: "masculine" },
      { text: "Agree", value: "masculine" },
      { text: "Disagree", value: "feminine" },
      { text: "Strongly disagree", value: "undifferentiated" },
    ],
  },
  {
    id: 18,
    text: "I am sympathetic and considerate of others' needs.",
    answers: [
      { text: "Strongly agree", value: "feminine" },
      { text: "Agree", value: "feminine" },
      { text: "Disagree", value: "masculine" },
      { text: "Strongly disagree", value: "undifferentiated" },
    ],
  },
  {
    id: 19,
    text: "I am self-sufficient and don't rely on others much.",
    answers: [
      { text: "Strongly agree", value: "masculine" },
      { text: "Agree", value: "masculine" },
      { text: "Disagree", value: "feminine" },
      { text: "Strongly disagree", value: "undifferentiated" },
    ],
  },
  {
    id: 20,
    text: "I am cheerful and have a positive outlook on life.",
    answers: [
      { text: "Strongly agree", value: "feminine" },
      { text: "Agree", value: "feminine" },
      { text: "Disagree", value: "masculine" },
      { text: "Strongly disagree", value: "undifferentiated" },
    ],
  },
];

export function calculateGenderRole(
  answers: Array<{ value: keyof typeof genderRoleScores }>
): { genderRole: string; description: string; percentages: Record<string, number> } {
  const scores = { ...genderRoleScores };
  answers.forEach((answer) => {
    scores[answer.value]++;
  });

  // Calculate percentages
  const total = answers.length;
  const percentages = {
    masculine: Math.round((scores.masculine / total) * 100),
    feminine: Math.round((scores.feminine / total) * 100),
    androgynous: Math.round((scores.androgynous / total) * 100),
    undifferentiated: Math.round((scores.undifferentiated / total) * 100),
  };

  // Determine gender role based on scores
  let genderRole: string;
  let description: string;

  const masculineScore = scores.masculine;
  const feminineScore = scores.feminine;
  const threshold = total * 0.3; // 30% threshold

  if (masculineScore >= threshold && feminineScore >= threshold) {
    genderRole = "Androgynous";
    description = "You exhibit both masculine and feminine traits in a balanced way. You are adaptable and can display assertiveness when needed while also being nurturing and empathetic. This psychological androgyny allows you to respond flexibly to different situations.";
  } else if (masculineScore > feminineScore && masculineScore >= threshold) {
    genderRole = "Masculine";
    description = "You tend to exhibit traditionally masculine traits such as assertiveness, independence, competitiveness, and leadership. You are likely to be goal-oriented, analytical, and comfortable taking charge in various situations.";
  } else if (feminineScore > masculineScore && feminineScore >= threshold) {
    genderRole = "Feminine";
    description = "You tend to exhibit traditionally feminine traits such as nurturing, empathy, sensitivity, and cooperation. You are likely to be relationship-oriented, emotionally expressive, and skilled at understanding others' needs.";
  } else {
    genderRole = "Undifferentiated";
    description = "You show relatively low levels of both traditionally masculine and feminine traits. This may indicate a more neutral approach to gender roles, or you might express your personality in ways that don't align strongly with traditional gender stereotypes.";
  }

  return {
    genderRole,
    description,
    percentages,
  };
}