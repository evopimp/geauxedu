import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { sendChatMessage } from '../../api/chat';
import type { AssessmentState } from '../../types/learningStyle';

export const LearningStyleAssessment: React.FC = () => {
  const [state, setState] = useState<AssessmentState>({
    currentQuestion: 0,
    responses: [],
    learningStyles: [],
    isComplete: false
  });
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState<string[]>([
    "Hi! I'm here to help identify your learning style. Let's have a conversation about how you prefer to learn. What's your favorite way to learn something new?"
  ]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    // Add user message to chat
    const updatedMessages = [...messages, `You: ${userInput}`];
    setMessages(updatedMessages);

    try {
      // Send to Azure OpenAI
      const response = await sendChatMessage({
        messages: updatedMessages,
        context: "You are an educational expert analyzing learning styles. Ask questions to determine the student's learning preferences between visual, auditory, reading/writing, and kinesthetic styles. Be conversational and engaging."
      });

      // Update chat with AI response
      setMessages([...updatedMessages, `Assistant: ${response.reply}`]);
      
      // Update assessment state
      setState(prev => ({
        ...prev,
        responses: [...prev.responses, userInput],
        currentQuestion: prev.currentQuestion + 1
      }));

      setUserInput('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-2xl mx-auto p-6"
    >
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6">Learning Style Assessment</h2>
        
        {state.isComplete ? (
          <div className="text-green-600 font-semibold mb-4">
            Assessment Complete! We'll analyze your responses to determine your learning style.
          </div>
        ) : (
          <div className="text-gray-600 mb-4">
            Question {state.currentQuestion + 1}
          </div>
        )}

        <div className="space-y-4 mb-6">
          {messages.map((message, index) => (
            <div 
              key={index}
              className={`p-3 rounded-lg ${
                message.startsWith('You:') 
                  ? 'bg-blue-100 ml-auto' 
                  : 'bg-gray-100'
              }`}
            >
              {message}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Type your response..."
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Send
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default LearningStyleAssessment;