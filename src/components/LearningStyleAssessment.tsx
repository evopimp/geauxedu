import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useStore } from '../store/useStore';
import { LearningStyle } from '../types';

const questions = [
  {
    id: 1,
    text: "When learning something new, I prefer to:",
    options: [
      { style: 'visual', text: "Watch videos or demonstrations" },
      { style: 'auditory', text: "Listen to explanations" },
      { style: 'reading', text: "Read written instructions" },
      { style: 'kinesthetic', text: "Try it hands-on" }
    ]
  },
  // Add more questions here
];

export const LearningStyleAssessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { updateLearningStyle } = useStore();

  const handleAnswer = async (style: LearningStyle) => {
    updateLearningStyle(style, 1);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(c => c + 1);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-2xl mx-auto p-6"
    >
      <h2 className="text-2xl font-bold mb-6">Learning Style Assessment</h2>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl mb-4">{questions[currentQuestion].text}</h3>
        <div className="space-y-4">
          {questions[currentQuestion].options.map((option) => (
            <button
              key={option.style}
              onClick={() => handleAnswer(option.style as LearningStyle)}
              className="w-full p-4 text-left rounded-lg border hover:bg-blue-50 transition-colors"
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};