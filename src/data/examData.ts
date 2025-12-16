export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Subject {
  id: string;
  name: string;
  icon: string;
  questionCount: number;
  color: string;
}

export interface Exam {
  id: string;
  name: string;
  shortName: string;
  description: string;
  subjects: string[];
  color: string;
  icon: string;
}

export const exams: Exam[] = [
  {
    id: "tgpsc",
    name: "Telangana Public Service Commission",
    shortName: "TGPSC",
    description: "Prepare for TGPSC Group 1, 2, 3 & 4 exams",
    subjects: ["general-studies", "indian-polity", "history"],
    color: "hsl(199 89% 48%)",
    icon: "🏛️",
  },
  {
    id: "appsc",
    name: "Andhra Pradesh Public Service Commission",
    shortName: "APPSC",
    description: "Complete preparation for AP state exams",
    subjects: ["general-studies", "indian-polity"],
    color: "hsl(167 72% 40%)",
    icon: "📋",
  },
  {
    id: "upsc",
    name: "Union Public Service Commission",
    shortName: "UPSC",
    description: "Civil Services, IAS, IPS preparation",
    subjects: ["general-studies", "indian-polity", "geography", "economics"],
    color: "hsl(262 83% 58%)",
    icon: "🇮🇳",
  },
  {
    id: "ugc-net",
    name: "University Grants Commission - NET",
    shortName: "UGC-NET",
    description: "National Eligibility Test preparation",
    subjects: ["general-studies", "economics"],
    color: "hsl(38 92% 50%)",
    icon: "🎓",
  },
  {
    id: "ssc",
    name: "Staff Selection Commission",
    shortName: "SSC",
    description: "SSC CGL, CHSL, MTS preparation",
    subjects: ["general-studies", "mathematics", "reasoning"],
    color: "hsl(340 82% 52%)",
    icon: "📝",
  },
  {
    id: "banking",
    name: "Banking Exams",
    shortName: "Banking",
    description: "IBPS, SBI, RBI exam preparation",
    subjects: ["mathematics", "reasoning", "economics"],
    color: "hsl(142 76% 36%)",
    icon: "🏦",
  },
  {
    id: "rrb",
    name: "Railway Recruitment Board",
    shortName: "RRB",
    description: "Railway NTPC, Group D, ALP preparation",
    subjects: ["general-studies", "mathematics", "reasoning"],
    color: "hsl(280 70% 50%)",
    icon: "🚂",
  },
];

export const subjects: Subject[] = [
  { id: "general-studies", name: "General Studies", icon: "📚", questionCount: 250, color: "hsl(199 89% 48%)" },
  { id: "indian-polity", name: "Indian Polity", icon: "🏛️", questionCount: 180, color: "hsl(167 72% 40%)" },
  { id: "history", name: "History", icon: "📜", questionCount: 200, color: "hsl(38 92% 50%)" },
  { id: "geography", name: "Geography", icon: "🌍", questionCount: 150, color: "hsl(142 76% 36%)" },
  { id: "economics", name: "Economics", icon: "💰", questionCount: 120, color: "hsl(262 83% 58%)" },
  { id: "mathematics", name: "Mathematics", icon: "🔢", questionCount: 300, color: "hsl(340 82% 52%)" },
  { id: "reasoning", name: "Reasoning", icon: "🧠", questionCount: 220, color: "hsl(280 70% 50%)" },
  { id: "science", name: "Science", icon: "🔬", questionCount: 180, color: "hsl(199 60% 50%)" },
  { id: "current-affairs", name: "Current Affairs", icon: "📰", questionCount: 100, color: "hsl(0 84% 60%)" },
  { id: "english", name: "English", icon: "📝", questionCount: 160, color: "hsl(220 70% 50%)" },
];

export const sampleQuestions: Record<string, Question[]> = {
  "general-studies": [
    {
      id: "gs-1",
      question: "Which Article of the Indian Constitution deals with the Right to Education?",
      options: ["Article 19", "Article 21", "Article 21A", "Article 32"],
      correctAnswer: 2,
      explanation: "Article 21A was inserted by the 86th Constitutional Amendment Act, 2002. It provides free and compulsory education to all children between 6 to 14 years of age as a Fundamental Right.",
    },
    {
      id: "gs-2",
      question: "The Preamble to the Indian Constitution was amended by which Constitutional Amendment?",
      options: ["42nd Amendment", "44th Amendment", "52nd Amendment", "73rd Amendment"],
      correctAnswer: 0,
      explanation: "The 42nd Constitutional Amendment Act, 1976 added the words 'Socialist', 'Secular' and 'Integrity' to the Preamble. This amendment is also known as the 'Mini Constitution'.",
    },
    {
      id: "gs-3",
      question: "Who was the first Speaker of the Lok Sabha?",
      options: ["Hukam Singh", "G.V. Mavalankar", "M.A. Ayyangar", "Neelam Sanjiva Reddy"],
      correctAnswer: 1,
      explanation: "G.V. Mavalankar was the first Speaker of the Lok Sabha, serving from 1952 to 1956. He is often referred to as the 'Father of the Lok Sabha'.",
    },
    {
      id: "gs-4",
      question: "Which of the following is NOT a Fundamental Right under the Indian Constitution?",
      options: ["Right to Property", "Right to Equality", "Right against Exploitation", "Right to Freedom of Religion"],
      correctAnswer: 0,
      explanation: "Right to Property was originally a Fundamental Right under Article 31, but it was removed by the 44th Constitutional Amendment Act, 1978. It is now a legal right under Article 300A.",
    },
    {
      id: "gs-5",
      question: "The concept of 'Basic Structure' of the Constitution was propounded in which case?",
      options: ["Golaknath Case", "Kesavananda Bharati Case", "Minerva Mills Case", "Maneka Gandhi Case"],
      correctAnswer: 1,
      explanation: "The Basic Structure doctrine was established in the Kesavananda Bharati v. State of Kerala case (1973). The Supreme Court held that Parliament cannot amend the basic structure of the Constitution.",
    },
  ],
  "indian-polity": [
    {
      id: "ip-1",
      question: "The President of India can be removed from office by:",
      options: ["Prime Minister", "Parliament through impeachment", "Supreme Court", "Cabinet"],
      correctAnswer: 1,
      explanation: "According to Article 61 of the Constitution, the President can be removed by Parliament through the process of impeachment for 'violation of the Constitution'.",
    },
    {
      id: "ip-2",
      question: "Which Schedule of the Constitution contains provisions related to Anti-Defection Law?",
      options: ["8th Schedule", "9th Schedule", "10th Schedule", "11th Schedule"],
      correctAnswer: 2,
      explanation: "The 10th Schedule was added by the 52nd Amendment Act, 1985. It contains provisions for disqualification of members of Parliament and State Legislatures on the ground of defection.",
    },
    {
      id: "ip-3",
      question: "The term of the Rajya Sabha members is:",
      options: ["4 years", "5 years", "6 years", "Life term"],
      correctAnswer: 2,
      explanation: "Members of the Rajya Sabha are elected for a term of 6 years. However, one-third of its members retire every two years, making it a permanent body.",
    },
  ],
  "history": [
    {
      id: "h-1",
      question: "The Quit India Movement was launched in which year?",
      options: ["1940", "1942", "1944", "1946"],
      correctAnswer: 1,
      explanation: "The Quit India Movement was launched on August 8, 1942, at the Bombay session of the All India Congress Committee. Mahatma Gandhi gave the call 'Do or Die'.",
    },
    {
      id: "h-2",
      question: "Who founded the Indian National Congress?",
      options: ["Dadabhai Naoroji", "A.O. Hume", "W.C. Bonnerjee", "Surendranath Banerjee"],
      correctAnswer: 1,
      explanation: "Allan Octavian Hume, a retired British civil servant, founded the Indian National Congress in 1885. The first session was held in Bombay with W.C. Bonnerjee as the first President.",
    },
    {
      id: "h-3",
      question: "The Battle of Plassey was fought in which year?",
      options: ["1757", "1764", "1857", "1947"],
      correctAnswer: 0,
      explanation: "The Battle of Plassey was fought on June 23, 1757, between the British East India Company and the Nawab of Bengal, Siraj-ud-Daulah. This battle marked the beginning of British rule in India.",
    },
  ],
  "mathematics": [
    {
      id: "m-1",
      question: "If x + y = 10 and xy = 21, what is the value of x² + y²?",
      options: ["58", "79", "100", "42"],
      correctAnswer: 0,
      explanation: "Using the identity (x + y)² = x² + 2xy + y², we get 100 = x² + 42 + y². Therefore, x² + y² = 100 - 42 = 58.",
    },
    {
      id: "m-2",
      question: "A train travels 360 km in 4 hours. What is its speed in m/s?",
      options: ["25 m/s", "30 m/s", "90 m/s", "20 m/s"],
      correctAnswer: 0,
      explanation: "Speed = Distance/Time = 360 km / 4 hours = 90 km/h. To convert to m/s, multiply by 5/18: 90 × 5/18 = 25 m/s.",
    },
    {
      id: "m-3",
      question: "What is the compound interest on Rs. 10,000 at 10% per annum for 2 years?",
      options: ["Rs. 2,000", "Rs. 2,100", "Rs. 2,200", "Rs. 1,900"],
      correctAnswer: 1,
      explanation: "CI = P[(1 + r/100)^n - 1] = 10000[(1.1)² - 1] = 10000[1.21 - 1] = 10000 × 0.21 = Rs. 2,100.",
    },
  ],
  "reasoning": [
    {
      id: "r-1",
      question: "Find the odd one out: Apple, Mango, Potato, Orange",
      options: ["Apple", "Mango", "Potato", "Orange"],
      correctAnswer: 2,
      explanation: "Potato is a vegetable (root crop), while Apple, Mango, and Orange are all fruits. Hence, Potato is the odd one out.",
    },
    {
      id: "r-2",
      question: "If FRIEND is coded as HUMGPF, how is CANDLE coded?",
      options: ["EDRIRL", "DCPFNG", "ECRFMG", "EDRFNG"],
      correctAnswer: 0,
      explanation: "Each letter is replaced by the letter two positions ahead in the alphabet. C→E, A→D, N→R, D→I, L→R, E→L. So CANDLE becomes EDRIRL.",
    },
  ],
};

export const getQuestionsForSubject = (subjectId: string): Question[] => {
  return sampleQuestions[subjectId] || sampleQuestions["general-studies"];
};

export const getExamById = (examId: string): Exam | undefined => {
  return exams.find(e => e.id === examId);
};

export const getSubjectById = (subjectId: string): Subject | undefined => {
  return subjects.find(s => s.id === subjectId);
};
