export type Option = {
  id: number;
  text: string;
};

export type QuizItem = {
  question: string;
  reason?: string;
  options: Option[];
  answer: number;
};

export type QuizItemOrder = {
  text: string;
  emoji?: string;
  id: number;
};
type Quiz = {
  brush: QuizItem[];
  handwash: QuizItemOrder[];
};
const quiz: Quiz = {
  brush: [
    {
      question: "How long should you brush your teeth in one session?",
      options: [
        { id: 1, text: "30 seconds" },
        { id: 2, text: "2 minutes" },
        { id: 3, text: "1 minute" },
      ],
      answer: 2,
      reason: "It thoughourly cleans your teeth and gums."
    },
    {
      question: "How many times a day should you brush your teeth?",
      options: [
        { id: 1, text: "Twice" },
        { id: 2, text: "Once" },
        { id: 3, text: "No times" },
      ],
      answer: 1,
      reason: "It is recommended to brush your teeth twice a day."
    },
    {
      question: "When should you use mouthwash?",
      options: [
        { id: 1, text: "Before brushing" },
        { id: 2, text: "After brushing" },
        { id: 3, text: "Instead of brushing" },
      ],
      answer: 2,
      reason: "Mouthwashing after brushing helps strengthen your tooth enamel."
    },
    {
      question: "Should you floss?",
      options: [
        { id: 1, text: "Yes" },
        { id: 2, text: "No" },
        { id: 3, text: "Not at all" },
      ],
      answer: 1,
      reason: "Flossing helps remove plaque and food particles in between your teeth."
    },
    {
      question: "How often should you floss?",
      options: [
        { id: 1, text: "Once a day" },
        { id: 2, text: "Every once in a while" },
        { id: 3, text: "Never" },
      ],
      answer: 1,
      reason: "Plaque and other food particles accumulate in between your teeth every day, so it is recommended to floss once a day."
    },
    {
      question: "What is the best way to brush your teeth?",
      options: [
        { id: 1, text: "Up and down" },
        { id: 2, text: "Side to side" },
        { id: 3, text: "Circular motions" },
      ],
      answer: 3,
      reason: "Circular motions help to ensure you are covering all areas of your teeth and gums."
    },
    {
      question: "How long should you use mouthwash?",
      options: [
        { id: 1, text: "30 seconds" },
        { id: 2, text: "2 minutes" },
        { id: 3, text: "1 minute" },
      ],
      answer: 1,
      reason: 'More than 30 seconds can disrupt the balance of bacteria in your mouth. '
    },
  ],
  handwash: [
    {
      emoji: "💧",
      text: "Wet your hands with clean, running water (warm or cold), then turn off the tap.",
      id: 1,
    },
    {
      emoji: "🧼",
      text: "Lather your hands by rubbing them together with the soap. Lather the backs of your hands, between your fingers, and under your nails.",
      id: 2,
    },
    {
      emoji: "⏳",
      text: 'Scrub your hands for at least 20 seconds. Need a timer? Hum the "Happy Birthday" song from beginning to end twice.',
      id: 3,
    },
    {
      emoji: "🚰",
      text: "Rinse your hands well under clean, running water.",
      id: 4,
    },
    {
      emoji: "🧻",
      text: "Dry your hands using a clean towel or air dry them.",
      id: 5,
    },
  ],
};
export const correctHandwashOrder = [1, 2, 3, 4, 5];
export default quiz;
