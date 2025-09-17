export interface PowerpuffQuestion {
  id: number;
  text: string;
  answers: Array<{ text: string; value: keyof typeof powerpuffScores }>;
}

export const powerpuffScores = {
  blossom: 0, // leader, strategic, responsible
  bubbles: 0, // kind, creative, empathetic
  buttercup: 0, // bold, direct, tough
};

export const powerpuffQuestions: PowerpuffQuestion[] = [
  {
    id: 1,
    text: "A team problem appears. What do you do first?",
    answers: [
      { text: "Make a plan and assign roles", value: "blossom" },
      { text: "Check how everyone feels", value: "bubbles" },
      { text: "Jump in and tackle it head‑on", value: "buttercup" },
    ],
  },
  {
    id: 2,
    text: "Your friends describe you as mostly…",
    answers: [
      { text: "Smart and organized", value: "blossom" },
      { text: "Sweet and imaginative", value: "bubbles" },
      { text: "Brave and straightforward", value: "buttercup" },
    ],
  },
  {
    id: 3,
    text: "When facing a tough decision, you rely on…",
    answers: [
      { text: "Logic and strategy", value: "blossom" },
      { text: "Values and kindness", value: "bubbles" },
      { text: "Guts and determination", value: "buttercup" },
    ],
  },
  {
    id: 4,
    text: "Pick a favorite activity:",
    answers: [
      { text: "Planning and solving puzzles", value: "blossom" },
      { text: "Drawing and listening to music", value: "bubbles" },
      { text: "Sports and outdoor challenges", value: "buttercup" },
    ],
  },
  {
    id: 5,
    text: "In conflicts, your style is…",
    answers: [
      { text: "Lead calmly toward a solution", value: "blossom" },
      { text: "Find a gentle compromise", value: "bubbles" },
      { text: "Stand firm and protect others", value: "buttercup" },
    ],
  },
  {
    id: 6,
    text: "Your biggest strength is…",
    answers: [
      { text: "Responsibility and focus", value: "blossom" },
      { text: "Empathy and positivity", value: "bubbles" },
      { text: "Courage and persistence", value: "buttercup" },
    ],
  },
  {
    id: 7,
    text: "Choose a color that matches your vibe:",
    answers: [
      { text: "Pink — confident and composed", value: "blossom" },
      { text: "Blue — bright and friendly", value: "bubbles" },
      { text: "Green — bold and energetic", value: "buttercup" },
    ],
  },
  {
    id: 8,
    text: "A friend is stressed. You…",
    answers: [
      { text: "Create a step‑by‑step plan to help", value: "blossom" },
      { text: "Listen, comfort, and encourage", value: "bubbles" },
      { text: "Shield them and take charge", value: "buttercup" },
    ],
  },
  {
    id: 9,
    text: "Pick a motto:",
    answers: [
      { text: "Think clearly, act wisely", value: "blossom" },
      { text: "Be kind, spread joy", value: "bubbles" },
      { text: "Be fearless, stay strong", value: "buttercup" },
    ],
  },
  {
    id: 10,
    text: "When trying something new, you…",
    answers: [
      { text: "Research and prepare", value: "blossom" },
      { text: "Invite friends and make it fun", value: "bubbles" },
      { text: "Dive in and learn by doing", value: "buttercup" },
    ],
  },
  {
    id: 11,
    text: "Your communication style is…",
    answers: [
      { text: "Clear and thoughtful", value: "blossom" },
      { text: "Warm and supportive", value: "bubbles" },
      { text: "Direct and honest", value: "buttercup" },
    ],
  },
  {
    id: 12,
    text: "In a team, your natural role is…",
    answers: [
      { text: "Leader/strategist", value: "blossom" },
      { text: "Morale booster/peacemaker", value: "bubbles" },
      { text: "Protector/executor", value: "buttercup" },
    ],
  },
];

export function calculatePowerpuffResult(answers: Array<{ value: keyof typeof powerpuffScores }>): {
  character: 'Blossom' | 'Bubbles' | 'Buttercup';
  description: string;
  percentages: Record<'blossom' | 'bubbles' | 'buttercup', number>;
} {
  const scores = { ...powerpuffScores };
  answers.forEach((a) => {
    scores[a.value]++;
  });

  const total = answers.length || 1;
  const percentages = {
    blossom: Math.round((scores.blossom / total) * 100),
    bubbles: Math.round((scores.bubbles / total) * 100),
    buttercup: Math.round((scores.buttercup / total) * 100),
  } as const;

  let top: keyof typeof scores = 'blossom';
  for (const k of Object.keys(scores) as Array<keyof typeof scores>) {
    if (scores[k] > scores[top]) top = k;
  }

  const map: Record<keyof typeof scores, { label: 'Blossom' | 'Bubbles' | 'Buttercup'; desc: string }> = {
    blossom: {
      label: 'Blossom',
      desc: 'Smart, strategic, and responsible. You naturally take the lead, stay composed under pressure, and aim for well‑thought‑out solutions.',
    },
    bubbles: {
      label: 'Bubbles',
      desc: 'Kind‑hearted, creative, and empathetic. You bring warmth to the team, lift spirits, and care deeply about others.’ feelings.',
    },
    buttercup: {
      label: 'Buttercup',
      desc: 'Bold, direct, and tough. You charge forward, protect your friends, and aren’t afraid to face challenges head‑on.',
    },
  };

  return {
    character: map[top].label,
    description: map[top].desc,
    percentages: { ...percentages },
  };
}

