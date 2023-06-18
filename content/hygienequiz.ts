export type Option = {
  id: number,
  text: string,
}

export type QuizItem = {
  question: string,
  options: Option[],
  answer: number,
}


type Quiz = {
  brush: QuizItem[],
}
const quiz: Quiz = {
  brush: [
    {
      question: 'How long should you brush your teeth in one session?',
      options: [
        { id: 1, text: '30 seconds' },
        { id: 2, text: '2 minutes' },
        { id: 3, text: '1 minute' },
      ],
      answer: 2,
    },
    {
      question: 'How many times a day should you brush your teeth?',
      options: [
        { id: 1, text: 'Twice' },
        { id: 2, text: 'Once' },
        { id: 3, text: 'No times' },
      ],
      answer: 1,
    },
    {
      question: "When should you use mouthwash?",
      options: [
        { id: 1, text: 'Before brushing' },
        { id: 2, text: 'After brushing' },
        { id: 3, text: 'Instead of brushing' },
      ],
      answer: 2,
    },
    {
      question: "Should you floss?",
      options: [
        { id: 1, text: 'Yes' },
        { id: 2, text: 'No' },
        { id: 3, text: 'Not at all' },
      ],
      answer: 1,
    },
    {
      question: "How often should you floss?",
      options: [
        { id: 1, text: 'Once a day' },
        { id: 2, text: 'Every once in a while' },
        { id: 3, text: 'Never' },
      ],
      answer: 1,
    },
    {
      question: "What is the best way to brush your teeth?",
      options: [
        { id: 1, text: 'Up and down' },
        { id: 2, text: 'Side to side' },
        { id: 3, text: 'Circular motions' },
      ],
      answer: 3,
    },
    {
      question: "How long should you use mouthwash?",
      options: [
        { id: 1, text: '30 seconds' },
        { id: 2, text: '2 minutes' },
        { id: 3, text: '1 minute' },
      ],
      answer: 1,
    }
  ],
}
export default quiz