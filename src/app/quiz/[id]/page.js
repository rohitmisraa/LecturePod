"use client"
import { useState } from "react";

const questions = [
  {
    id: 1,
    question: "What is the boiling point of water at sea level?",
    options: ["100°C", "90°C", "80°C", "120°C"],
    answer: "100°C",
  },
  {
    id: 2,
    question: "Which programming language is known as the language of AI?",
    options: ["Python", "Java", "C++", "Ruby"],
    answer: "Python",
  },
  {
    id: 3,
    question: "What is the formula for calculating speed?",
    options: ["Distance / Time", "Time / Distance", "Mass / Volume", "Force / Area"],
    answer: "Distance / Time",
  },
  {
    id: 4,
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    id: 5,
    question: "What is the SI unit of electric current?",
    options: ["Ampere", "Volt", "Watt", "Ohm"],
    answer: "Ampere",
  },
  {
    id: 6,
    question: "Which element has the chemical symbol 'O'?",
    options: ["Oxygen", "Gold", "Silver", "Iron"],
    answer: "Oxygen",
  },
  {
    id: 7,
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    id: 8,
    question: "What is the largest organ in the human body?",
    options: ["Skin", "Heart", "Liver", "Brain"],
    answer: "Skin",
  },
  {
    id: 9,
    question: "What is the process by which plants make their food?",
    options: ["Photosynthesis", "Respiration", "Digestion", "Fermentation"],
    answer: "Photosynthesis",
  },
  {
    id: 10,
    question: "What is the hardest natural substance on Earth?",
    options: ["Diamond", "Gold", "Iron", "Platinum"],
    answer: "Diamond",
  },
];

export default function QuizPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleNext = () => {
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
    } else {
      setQuizCompleted(true);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  if (quizCompleted) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white text-gray-700 shadow-md rounded-lg p-6 w-full max-w-2xl md:max-w-4xl lg:max-w-6xl">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Quiz Completed!</h1>
          <p className="text-lg md:text-xl lg:text-2xl font-medium mb-4">Your Score: {score} / {questions.length}</p>
          <button
            onClick={() => window.location.href = `/lecture/${questions[0].id}`}
            className="mt-4 py-2 px-4 rounded-lg w-full bg-indigo-500 text-white hover:bg-indigo-400 transition text-sm md:text-base lg:text-lg"
          >
            Back to Lecture
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white text-gray-700 shadow-md rounded-lg p-6 w-full max-w-2xl md:max-w-4xl lg:max-w-6xl">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Quiz</h1>
        <p className="text-lg md:text-xl lg:text-2xl font-medium mb-4">{currentQuestion.question}</p>
        <div className="space-y-2">
          {currentQuestion.options.map((option, index) => (
            <label key={index} className="flex items-center space-x-2">
              <input
                type="radio"
                name="quiz-option"
                value={option}
                checked={selectedOption === option}
                onChange={() => setSelectedOption(option)}
                className="form-radio h-5 w-5 text-indigo-500"
              />
              <span className="text-gray-700 text-sm md:text-base lg:text-lg">{option}</span>
            </label>
          ))}
        </div>
        <button
          onClick={handleNext}
          disabled={!selectedOption}
          className={`mt-4 py-2 px-4 rounded-lg w-full transition ${
            selectedOption
              ? "bg-green-500 text-white hover:bg-green-400"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          } text-sm md:text-base lg:text-lg`}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
}