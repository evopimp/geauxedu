import React from 'react';
import { useStore } from '../store/useStore';
import { Link } from 'react-router-dom';

export const UserDashboard = () => {
  const { user } = useStore();

  if (!user) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Welcome, {user.name}!</h3>
        <p className="text-gray-600">Email: {user.email}</p>
        <p className="text-gray-600">Streak: {user.streak} days</p>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Learning Styles</h3>
        <ul className="list-disc list-inside">
          {Object.entries(user.learningStyles).map(([style, value]) => (
            <li key={style}>
              {style}: {value}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <Link to="/profile" className="text-blue-600">Go to Profile</Link>
      </div>
    </div>
  );
};