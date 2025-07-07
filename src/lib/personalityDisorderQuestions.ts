
export interface PersonalityDisorderQuestion {
  id: number;
  text: string;
  answers: Array<{ text: string; value: keyof typeof disorderScores }>;
}

export const disorderScores = {
  paranoid: 0,
  schizoid: 0,
  schizotypal: 0,
  antisocial: 0,
  borderline: 0,
  histrionic: 0,
  narcissistic: 0,
  avoidant: 0,
  dependent: 0,
  obsessiveCompulsive: 0,
};

export const personalityDisorderQuestions: PersonalityDisorderQuestion[] = [
  {
    id: 1,
    text: "When you are in a group, you often feel that others are whispering about you or paying special attention to you, which makes you feel uneasy.",
    answers: [
      { text: "Strongly agree", value: "paranoid" },
      { text: "Agree", value: "paranoid" },
      { text: "Disagree", value: "schizoid" },
      { text: "Strongly disagree", value: "schizoid" },
    ],
  },
  {
    id: 2,
    text: "You prefer to be alone and do not have a strong desire for intimacy with others, including family and friends.",
    answers: [
      { text: "Strongly agree", value: "schizoid" },
      { text: "Agree", value: "schizoid" },
      { text: "Disagree", value: "histrionic" },
      { text: "Strongly disagree", value: "histrionic" },
    ],
  },
  {
    id: 3,
    text: "You often have some strange or magical thoughts, such as believing that you have special abilities or that you can influence things through your thoughts.",
    answers: [
      { text: "Strongly agree", value: "schizotypal" },
      { text: "Agree", value: "schizotypal" },
      { text: "Disagree", value: "obsessiveCompulsive" },
      { text: "Strongly disagree", value: "obsessiveCompulsive" },
    ],
  },
  {
    id: 4,
    text: "You tend to be impulsive, reckless, and do not consider the consequences, and often engage in behaviors that violate social norms, such as lying, stealing, or fighting.",
    answers: [
      { text: "Strongly agree", value: "antisocial" },
      { text: "Agree", value: "antisocial" },
      { text: "Disagree", value: "dependent" },
      { text: "Strongly disagree", value: "dependent" },
    ],
  },
  {
    id: 5,
    text: "Your mood is very unstable, and you may shift from extreme happiness to extreme depression in a short period of time. Your interpersonal relationships are also very intense and unstable.",
    answers: [
      { text: "Strongly agree", value: "borderline" },
      { text: "Agree", value: "borderline" },
      { text: "Disagree", value: "schizoid" },
      { text: "Strongly disagree", value: "schizoid" },
    ],
  },
  {
    id: 6,
    text: "You particularly enjoy being the center of attention and will try to attract the attention of others through exaggerated words, actions, or appearance.",
    answers: [
      { text: "Strongly agree", value: "histrionic" },
      { text: "Agree", value: "histrionic" },
      { text: "Disagree", value: "avoidant" },
      { text: "Strongly disagree", value: "avoidant" },
    ],
  },
  {
    id: 7,
    text: "You have a very high opinion of yourself, believing that you are unique and more important than others, and you expect to be admired and privileged.",
    answers: [
      { text: "Strongly agree", value: "narcissistic" },
      { text: "Agree", value: "narcissistic" },
      { text: "Disagree", value: "dependent" },
      { text: "Strongly disagree", value: "dependent" },
    ],
  },
  {
    id: 8,
    text: "You are very sensitive to criticism or disapproval from others, and you will avoid social activities or new attempts for fear of being rejected or making a fool of yourself.",
    answers: [
      { text: "Strongly agree", value: "avoidant" },
      { text: "Agree", value: "avoidant" },
      { text: "Disagree", value: "histrionic" },
      { text: "Strongly disagree", value: "histrionic" },
    ],
  },
  {
    id: 9,
    text: "You have a strong need to be taken care of, and you find it difficult to make your own decisions, and you always hope that others will take responsibility for you.",
    answers: [
      { text: "Strongly agree", value: "dependent" },
      { text: "Agree", value: "dependent" },
      { text: "Disagree", value: "narcissistic" },
      { text: "Strongly disagree", value: "narcissistic" },
    ],
  },
  {
    id: 10,
    text: "You are a perfectionist and pay great attention to details, rules, and order, which often makes you very rigid and inefficient.",
    answers: [
      { text: "Strongly agree", value: "obsessiveCompulsive" },
      { text: "Agree", value: "obsessiveCompulsive" },
      { text: "Disagree", value: "antisocial" },
      { text: "Strongly disagree", value: "antisocial" },
    ],
  },
];

export function calculatePersonalityDisorder(
  answers: Array<{ value: keyof typeof disorderScores }>
): { disorder: keyof typeof disorderScores; description: string } {
  const scores = { ...disorderScores };
  answers.forEach((answer) => {
    scores[answer.value]++;
  });

  let maxScore = 0;
  let disorder: keyof typeof disorderScores = "paranoid";
  for (const key in scores) {
    if (scores[key as keyof typeof disorderScores] > maxScore) {
      maxScore = scores[key as keyof typeof disorderScores];
      disorder = key as keyof typeof disorderScores;
    }
  }

  const descriptions = {
    paranoid: "You may have a tendency to be paranoid, often feeling that you are being monitored or persecuted by others, and you are full of suspicion and distrust of others.",
    schizoid: "You may have a tendency to be schizoid, preferring to be alone, lacking interest in social interaction, and emotionally cold.",
    schizotypal: "You may have a tendency to be schizotypal, with strange thoughts and behaviors, and you may believe that you have magical abilities or are very different from others.",
    antisocial: "You may have a tendency to be antisocial, often disregarding social norms and the rights of others, and acting impulsively and irresponsibly.",
    borderline: "You may have a tendency to be borderline, with unstable mood, interpersonal relationships, and self-image, and you are prone to impulsive behavior.",
    histrionic: "You may have a tendency to be histrionic, eager to be the center of attention, and emotionally exaggerated and easily influenced by others.",
    narcissistic: "You may have a tendency to be narcissistic, with an inflated sense of self-importance, a need for admiration, and a lack of empathy for others.",
    avoidant: "You may have a tendency to be avoidant, overly sensitive to negative evaluations, avoiding social situations, and feeling that you are not good enough.",
    dependent: "You may have a tendency to be dependent, with a strong need to be taken care of, a lack of self-confidence, and difficulty making your own decisions.",
    obsessiveCompulsive: "You may have a tendency to be obsessive-compulsive, with a strong need for perfection, control, and order, which leads to rigidity and stubbornness.",
  };

  return {
    disorder,
    description: descriptions[disorder],
  };
}
