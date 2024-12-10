import React from 'react';
import { motion } from 'framer-motion';
import { useStore } from '../store/useStore';
import { Radar } from 'recharts';

export const UserProfile = () => {
  const { user } = useStore();

  if (!user) return null;

  const learningStyleData = Object.entries(user.learningStyles).map(([key, value]) => ({
    subject: key,
    value: value,
  }));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-6 max-w-4xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Learning Style Profile</h2>
          <Radar
            width={300}
            height={300}
            data={learningStyleData}
            dataKey="value"
            name="Learning Style"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Learning Streak</h2>
          <div className="text-4xl font-bold text-blue-600">{user.streak} days</div>
        </div>
      </div>
    </motion.div>
  );
};