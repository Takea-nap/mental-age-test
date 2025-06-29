export interface IntellectualQuestion {
  id: number;
  category: 'numerical' | 'abstract' | 'memory' | 'logical';
  type: 'multiple-choice' | 'sequence' | 'pattern';
  text: string;
  options: Array<{ text: string; value: number; isCorrect?: boolean }>;
  timeLimit: number; // seconds
  difficulty: 'easy' | 'medium' | 'hard';
  explanation?: string;
}

export const intellectualQuestions: IntellectualQuestion[] = [
  // Numerical Reasoning Questions
  {
    id: 1,
    category: 'numerical',
    type: 'sequence',
    text: "Find the pattern in the sequence: 2, 6, 18, 54, ?",
    options: [
      { text: "108", value: 10, isCorrect: false },
      { text: "162", value: 30, isCorrect: true },
      { text: "216", value: 10, isCorrect: false },
      { text: "270", value: 5, isCorrect: false }
    ],
    timeLimit: 60,
    difficulty: 'easy',
    explanation: "Each term is multiplied by 3: 2×3=6, 6×3=18, 18×3=54, 54×3=162"
  },
  {
    id: 2,
    category: 'numerical',
    type: 'multiple-choice',
    text: "If x + 3 = 12, then x = ?",
    options: [
      { text: "6", value: 10, isCorrect: false },
      { text: "9", value: 30, isCorrect: true },
      { text: "12", value: 5, isCorrect: false },
      { text: "15", value: 5, isCorrect: false }
    ],
    timeLimit: 30,
    difficulty: 'easy',
    explanation: "x + 3 = 12, so x = 12 - 3 = 9"
  },
  {
    id: 3,
    category: 'numerical',
    type: 'sequence',
    text: "What is the next number in the sequence: 1, 4, 9, 16, 25, ?",
    options: [
      { text: "30", value: 5, isCorrect: false },
      { text: "36", value: 30, isCorrect: true },
      { text: "42", value: 10, isCorrect: false },
      { text: "49", value: 15, isCorrect: false }
    ],
    timeLimit: 45,
    difficulty: 'easy',
    explanation: "This is a sequence of perfect squares: 1²=1, 2²=4, 3²=9, 4²=16, 5²=25, 6²=36"
  },
  {
    id: 4,
    category: 'numerical',
    type: 'multiple-choice',
    text: "A class has 30 students, 60% of whom are girls. How many boys are there?",
    options: [
      { text: "12", value: 25, isCorrect: true },
      { text: "15", value: 15, isCorrect: false },
      { text: "18", value: 10, isCorrect: false },
      { text: "20", value: 5, isCorrect: false }
    ],
    timeLimit: 60,
    difficulty: 'medium',
    explanation: "Girls: 30 × 60% = 18, Boys: 30 - 18 = 12"
  },
  {
    id: 5,
    category: 'numerical',
    type: 'sequence',
    text: "Find the pattern: 3, 7, 15, 31, ?",
    options: [
      { text: "47", value: 10, isCorrect: false },
      { text: "55", value: 15, isCorrect: false },
      { text: "63", value: 30, isCorrect: true },
      { text: "71", value: 20, isCorrect: false }
    ],
    timeLimit: 90,
    difficulty: 'hard',
    explanation: "Pattern: multiply by 2 and add 1: 3×2+1=7, 7×2+1=15, 15×2+1=31, 31×2+1=63"
  },

  // Abstract Reasoning Questions
  {
    id: 6,
    category: 'abstract',
    type: 'pattern',
    text: "Observe the pattern and select the most suitable next figure: ○ △ ○ △ ○ ?",
    options: [
      { text: "○", value: 10, isCorrect: false },
      { text: "△", value: 30, isCorrect: true },
      { text: "□", value: 5, isCorrect: false },
      { text: "◇", value: 5, isCorrect: false }
    ],
    timeLimit: 45,
    difficulty: 'easy',
    explanation: "The pattern cycles between ○ and △"
  },
  {
    id: 7,
    category: 'abstract',
    type: 'pattern',
    text: "If ★★ = 4, ★★★ = 9, then ★★★★ = ?",
    options: [
      { text: "12", value: 10, isCorrect: false },
      { text: "16", value: 30, isCorrect: true },
      { text: "20", value: 15, isCorrect: false },
      { text: "25", value: 10, isCorrect: false }
    ],
    timeLimit: 60,
    difficulty: 'medium',
    explanation: "Pattern: square of the number of stars"
  },
  {
    id: 8,
    category: 'abstract',
    type: 'pattern',
    text: "In the sequence A1, B2, C3, D4, what is the next term?",
    options: [
      { text: "E5", value: 30, isCorrect: true },
      { text: "F5", value: 15, isCorrect: false },
      { text: "E6", value: 10, isCorrect: false },
      { text: "D5", value: 5, isCorrect: false }
    ],
    timeLimit: 45,
    difficulty: 'easy',
    explanation: "Letters and numbers increase sequentially: A1, B2, C3, D4, E5"
  },
  {
    id: 9,
    category: 'abstract',
    type: 'pattern',
    text: "If black block represents +1 and white block represents -1, then: ■□■□■ = ?",
    options: [
      { text: "1", value: 30, isCorrect: true },
      { text: "2", value: 15, isCorrect: false },
      { text: "3", value: 10, isCorrect: false },
      { text: "0", value: 10, isCorrect: false }
    ],
    timeLimit: 60,
    difficulty: 'medium',
    explanation: "■□■□■ = (+1)+(-1)+(+1)+(-1)+(+1) = 1-1+1-1+1 = 1"
  },
  {
    id: 10,
    category: 'abstract',
    type: 'pattern',
    text: "Observe the pattern: Red→Green→Blue→Red→Green→Blue→?",
    options: [
      { text: "Red", value: 30, isCorrect: true },
      { text: "Green", value: 15, isCorrect: false },
      { text: "Blue", value: 10, isCorrect: false },
      { text: "Yellow", value: 5, isCorrect: false }
    ],
    timeLimit: 30,
    difficulty: 'easy',
    explanation: "The pattern cycles between Red, Green, and Blue"
  },

  // Memory and Learning Questions
  {
    id: 11,
    category: 'memory',
    type: 'multiple-choice',
    text: "Remember the following words for 30 seconds: Apple, Car, Book, Flower, Computer. Now, without looking at the question, how many words do you remember?",
    options: [
      { text: "4", value: 10, isCorrect: false },
      { text: "5", value: 30, isCorrect: true },
      { text: "6", value: 15, isCorrect: false },
      { text: "7", value: 5, isCorrect: false }
    ],
    timeLimit: 45,
    difficulty: 'easy',
    explanation: "The correct answer is 5 words: Apple, Car, Book, Flower, Computer"
  },
  {
    id: 12,
    category: 'memory',
    type: 'multiple-choice',
    text: "Observe this sequence for 10 seconds: 7-3-9-1-5-8. Now, select the correct sequence:",
    options: [
      { text: "7-3-9-1-5-8", value: 30, isCorrect: true },
      { text: "7-3-9-1-8-5", value: 15, isCorrect: false },
      { text: "3-7-9-1-5-8", value: 10, isCorrect: false },
      { text: "7-3-1-9-5-8", value: 10, isCorrect: false }
    ],
    timeLimit: 60,
    difficulty: 'medium',
    explanation: "The correct sequence is: 7-3-9-1-5-8"
  },
  {
    id: 13,
    category: 'memory',
    type: 'multiple-choice',
    text: "Learn the rule: +2 when you see ★, -1 when you see ●. Apply the rule: ★●★●★ = ?",
    options: [
      { text: "4", value: 30, isCorrect: true },
      { text: "5", value: 15, isCorrect: false },
      { text: "6", value: 10, isCorrect: false },
      { text: "3", value: 10, isCorrect: false }
    ],
    timeLimit: 75,
    difficulty: 'medium',
    explanation: "★●★●★ = (+2)+(-1)+(+2)+(-1)+(+2) = 2-1+2-1+2 = 4"
  },
  {
    id: 14,
    category: 'memory',
    type: 'multiple-choice',
    text: "Remember these pairs: A-Red, B-Blue, C-Green, D-Yellow. Now, what color does B correspond to?",
    options: [
      { text: "Red", value: 10, isCorrect: false },
      { text: "Blue", value: 30, isCorrect: true },
      { text: "Green", value: 10, isCorrect: false },
      { text: "Yellow", value: 10, isCorrect: false }
    ],
    timeLimit: 45,
    difficulty: 'easy',
    explanation: "According to the pairing rule, B corresponds to Blue"
  },
  {
    id: 15,
    category: 'memory',
    type: 'multiple-choice',
    text: "Quick calculation of working memory: (3+7) × 2 - 5 = ?",
    options: [
      { text: "15", value: 30, isCorrect: true },
      { text: "13", value: 15, isCorrect: false },
      { text: "17", value: 10, isCorrect: false },
      { text: "12", value: 10, isCorrect: false }
    ],
    timeLimit: 45,
    difficulty: 'medium',
    explanation: "(3+7) × 2 - 5 = 10 × 2 - 5 = 20 - 5 = 15"
  },

  // Logical Reasoning Questions
  {
    id: 16,
    category: 'logical',
    type: 'multiple-choice',
    text: "All cats are animals. Little Flower is a cat. Therefore:",
    options: [
      { text: "Little Flower is an animal", value: 30, isCorrect: true },
      { text: "Little Flower is not an animal", value: 5, isCorrect: false },
      { text: "Some animals are cats", value: 15, isCorrect: false },
      { text: "Cannot determine", value: 10, isCorrect: false }
    ],
    timeLimit: 60,
    difficulty: 'easy',
    explanation: "From deductive reasoning: All cats are animals + Little Flower is a cat → Little Flower is an animal"
  },
  {
    id: 17,
    category: 'logical',
    type: 'multiple-choice',
    text: "If it rains today, I won't go out. I went out today. Therefore:",
    options: [
      { text: "It rained today", value: 5, isCorrect: false },
      { text: "It didn't rain today", value: 30, isCorrect: true },
      { text: "It might rain today", value: 10, isCorrect: false },
      { text: "Cannot determine", value: 15, isCorrect: false }
    ],
    timeLimit: 75,
    difficulty: 'medium',
    explanation: "From contrapositive: If I went out today, then it didn't rain today"
  },
  {
    id: 18,
    category: 'logical',
    type: 'multiple-choice',
    text: "In a class, all good students are hardworking. Little Ming is a good student. Therefore:",
    options: [
      { text: "Little Ming is hardworking", value: 30, isCorrect: true },
      { text: "Little Ming is not hardworking", value: 5, isCorrect: false },
      { text: "Hardworking students all learn well", value: 15, isCorrect: false },
      { text: "Cannot determine if Little Ming is hardworking", value: 10, isCorrect: false }
    ],
    timeLimit: 60,
    difficulty: 'easy',
    explanation: "All good students are hardworking + Little Ming is a good student → Little Ming is hardworking"
  },
  {
    id: 19,
    category: 'logical',
    type: 'multiple-choice',
    text: "There are A, B, C. A says: 'B is lying'. B says: 'C is lying'. C says: 'A and B are lying'. If only one person is telling the truth, who is telling the truth?",
    options: [
      { text: "A", value: 15, isCorrect: false },
      { text: "B", value: 30, isCorrect: true },
      { text: "C", value: 15, isCorrect: false },
      { text: "Cannot determine", value: 10, isCorrect: false }
    ],
    timeLimit: 120,
    difficulty: 'hard',
    explanation: "If only one person is telling the truth, through logical analysis, B is telling the truth"
  },
  {
    id: 20,
    category: 'logical',
    type: 'multiple-choice',
    text: "If all birds can fly, Penguin is a bird, but Penguin cannot fly. This statement:",
    options: [
      { text: "Logic is correct", value: 5, isCorrect: false },
      { text: "Exists in contradiction", value: 30, isCorrect: true },
      { text: "Needs more information", value: 10, isCorrect: false },
      { text: "Penguin is not a bird", value: 15, isCorrect: false }
    ],
    timeLimit: 75,
    difficulty: 'medium',
    explanation: "The premise 'All birds can fly' contradicts 'Penguin is a bird but cannot fly'"
  },

  // Extra High Difficulty Questions
  {
    id: 21,
    category: 'numerical',
    type: 'sequence',
    text: "Complex sequence: 2, 6, 12, 20, 30, ?",
    options: [
      { text: "40", value: 15, isCorrect: false },
      { text: "42", value: 35, isCorrect: true },
      { text: "44", value: 20, isCorrect: false },
      { text: "48", value: 10, isCorrect: false }
    ],
    timeLimit: 120,
    difficulty: 'hard',
    explanation: "Pattern: n×(n+1), i.e., 1×2=2, 2×3=6, 3×4=12, 4×5=20, 5×6=30, 6×7=42"
  },
  {
    id: 22,
    category: 'abstract',
    type: 'pattern',
    text: "Spatial imagination: A cube, if viewed from above is a square, from front is a square, from side is what?",
    options: [
      { text: "Circle", value: 5, isCorrect: false },
      { text: "Square", value: 35, isCorrect: true },
      { text: "Triangle", value: 10, isCorrect: false },
      { text: "Rectangle", value: 15, isCorrect: false }
    ],
    timeLimit: 60,
    difficulty: 'medium',
    explanation: "All sides of a cube are squares, so it's a square from any vertical angle"
  },
  {
    id: 23,
    category: 'memory',
    type: 'multiple-choice',
    text: "Working memory challenge: Remember and calculate: Remember numbers 4, 7, 2, then calculate their average:",
    options: [
      { text: "4.3", value: 35, isCorrect: true },
      { text: "4.5", value: 20, isCorrect: false },
      { text: "5.0", value: 10, isCorrect: false },
      { text: "3.5", value: 10, isCorrect: false }
    ],
    timeLimit: 90,
    difficulty: 'hard',
    explanation: "(4+7+2)÷3 = 13÷3 = 4.33..."
  },
  {
    id: 24,
    category: 'logical',
    type: 'multiple-choice',
    text: "Logical paradox: If a barber only shaves those who don't shave themselves, should the barber shave himself?",
    options: [
      { text: "Should", value: 15, isCorrect: false },
      { text: "Should not", value: 15, isCorrect: false },
      { text: "This is a paradox", value: 35, isCorrect: true },
      { text: "Needs more conditions", value: 20, isCorrect: false }
    ],
    timeLimit: 120,
    difficulty: 'hard',
    explanation: "This is the famous barber paradox. No matter which answer is chosen, a contradiction will occur, so it's a logical paradox"
  },
];

// Helper function to group questions by category
export function getQuestionsByCategory(category: IntellectualQuestion['category']): IntellectualQuestion[] {
  return intellectualQuestions.filter(q => q.category === category);
}

// Helper function to filter questions by difficulty
export function getQuestionsByDifficulty(difficulty: IntellectualQuestion['difficulty']): IntellectualQuestion[] {
  return intellectualQuestions.filter(q => q.difficulty === difficulty);
}

// Function to randomly select a specified number of questions
export function getRandomQuestions(count: number = 20): IntellectualQuestion[] {
  const shuffled = [...intellectualQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Function to calculate intellectual age
export function calculateIntellectualAge(totalScore: number, maxScore: number): {
  intellectualAge: number;
  level: string;
  description: string;
} {
  const percentage = (totalScore / maxScore) * 100;
  
  let intellectualAge: number;
  let level: string;
  let description: string;

  if (percentage >= 90) {
    intellectualAge = 35;
    level = "Exceptional Intelligence";
    description = "Your cognitive abilities are outstanding, excelling in numerical reasoning, abstract thinking, and logical analysis. You possess a high level of intelligence and are adept at handling complex cognitive tasks.";
  } else if (percentage >= 80) {
    intellectualAge = 30;
    level = "Superior Intelligence";
    description = "Your cognitive abilities are strong, performing well in most intellectual tasks. You have excellent analytical thinking and problem-solving skills, suitable for cognitively demanding work.";
  } else if (percentage >= 70) {
    intellectualAge = 25;
    level = "Above Average Intelligence";
    description = "Your cognitive abilities are above average, with strong performance in certain areas. Continue practicing and learning to further enhance your intellectual capacity.";
  } else if (percentage >= 60) {
    intellectualAge = 22;
    level = "Average Intelligence";
    description = "Your cognitive abilities are within the normal range, capable of handling most daily cognitive tasks. You can improve specific areas through targeted training.";
  } else if (percentage >= 50) {
    intellectualAge = 18;
    level = "Below Average Intelligence";
    description = "Your cognitive abilities are basically normal, but you may need more time and practice for complex tasks. It's recommended to engage in more intelligence training to improve cognitive abilities.";
  } else {
    intellectualAge = 15;
    level = "Needs Improvement";
    description = "Your cognitive abilities have significant room for improvement. It's recommended to pursue systematic intelligence training, including mathematical practice, logical reasoning, and memory exercises.";
  }

  return { intellectualAge, level, description };
} 