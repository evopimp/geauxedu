import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useStore } from '../store/useStore';
import { LearningStyle } from '../types'; // Add this import

const questions = [
  {
    id: 1,
    text: "When learning something new, I prefer to:",
    options: [
      "Read written instructions",
      "Listen to verbal explanations",
      "Try it hands-on myself",
    ],
  },
  {
    id: 2,
    text: "I remember information best when:",
    options: [
      "I see it written down",
      "I hear it explained",
      "I physically practice it",
    ],
  },
];

export const LearningStyleAssessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const { updateLearningStyle } = useStore();

  const handleAnswer = (answer: string) => {
    const newAnswers = {
      ...answers,
      [currentQuestion]: answer
    };
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // Calculate and update learning style when assessment is complete
      const learningStyles = calculateLearningStyles(newAnswers);
      updateLearningStyle(learningStyles, 'primary'); // Add missing 'primary' argument
    }
  };

  const calculateLearningStyles = (answers: Record<string, string>): LearningStyle => {
    let visual = 0, auditory = 0, reading = 0, kinesthetic = 0;

    Object.values(answers).forEach(answer => {
      if (answer.includes('written') || answer.includes('see')) reading += 1;
      if (answer.includes('listen') || answer.includes('hear')) auditory += 1;
      if (answer.includes('hands-on') || answer.includes('physically')) kinesthetic += 1;
    });

    // Return the dominant learning style as a string
    const scores = { visual, auditory, reading, kinesthetic };
    const dominantStyle = Object.entries(scores).reduce((a, b) => 
      scores[a[0]] > scores[b[0]] ? a : b
    )[0] as LearningStyle;

    return dominantStyle;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-2xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold mb-8">Learning Style Assessment</h1>
      {currentQuestion < questions.length ? (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">
            {questions[currentQuestion].text}
          </h2>
          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="w-full p-4 text-left border rounded-lg hover:bg-gray-50"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Assessment Complete!</h2>
          <p className="mt-4">Thank you for completing the assessment.</p>
        </div>
      )}
    </motion.div>
  );
};

export default LearningStyleAssessment;