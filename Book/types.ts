export type Chapter = {
  topicID: string;
  topic: string;
  content: {
    id: number;
    question: string;
    img?: string;
    answers: {
      text: string;
      isCorrect: boolean;
    }[];
  }[];
};
