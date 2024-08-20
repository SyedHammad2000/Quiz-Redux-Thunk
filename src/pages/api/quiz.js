export default function handler(req, res) {
  res.json([
    {
      question: "what is 1+1?",
      answer: "2",
      choice: ["1", "2", "3", "4"],
    },
    {
      question: "what is 2+2?",
      answer: "4",
      choice: ["1", "2", "3", "4"],
    },
    {
      question: "what is 3+3?",
      answer: "6",
      choice: ["1", "2", "3", "6"],
    },
    {
      question: "what is 4+4?",
      answer: "8",
      choice: ["1", "2", "3", "8"],
    },
    {
      question: "what is 5+5?",
      answer: "10",
      choice: ["1", "2", "3", "10"],
    },
    {
      question: "what is 6+6?",
      answer: "12",
      choice: ["1", "2", "3", "12"],
    },
    // general questions
    {
      // questions related on general

      //! no questions related on math
      question: "what is the capital of France?",
      answer: "Paris",
      choice: ["Paris", "London", "Berlin", "Madrid"],
    },
    {
      question: "what is the capital of Germany?",
      answer: "Berlin",
      choice: ["Paris", "London", "Berlin", "Madrid"],
    },
    {
      question: "what is the capital of Spain?",
      answer: "Madrid",
      choice: ["Paris", "London", "Berlin", "Madrid"],
    },
    {
      question: "what is the capital of Italy?",
      answer: "Rome",
      choice: ["Paris", "London", "Berlin", "Rome"],
    },
    {
      question: "what is the capital of Portugal?",
      answer: "Lisbon",
      choice: ["Paris", "London", "Berlin", "Lisbon"],
    },
    {
      question: "what is the capital of UK?",
      answer: "London",
      choice: ["Paris", "London", "Berlin", "Lisbon"],
    },
  ]);
}
