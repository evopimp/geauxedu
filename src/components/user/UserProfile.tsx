import React from 'react';
import { motion } from 'framer-motion';
import { useStore } from '../store/useStore';
import { RadarChart, Radar, PolarGrid, PolarAngleAxis } from 'recharts';
import { updateUserStreak } from '../api/userApi';

const UserProfile: React.FC = () => {
  const { user, setUser } = useStore();

  if (!user) return null;

  const resetStreak = async () => {
    if (user) {
      const updatedUser = await updateUserStreak(user.email, 0);
      setUser(updatedUser);
    }
  };

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
          <RadarChart width={300} height={300} data={learningStyleData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <Radar
              name="Learning Style"
              dataKey="value"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
          </RadarChart>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Learning Streak</h2>
          <div className="text-4xl font-bold text-blue-600">{user.streak} days</div>
          <button
            onClick={resetStreak}
            className="mt-4 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700"
          >
            Reset Streak
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default UserProfile;