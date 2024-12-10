import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LearningStyleAssessment } from './components/LearningStyleAssessment';
import { UserProfile } from './components/UserProfile';
import { CourseCreation } from './components/CourseCreation';
import { BookOpen, User, PlusCircle } from 'lucide-react';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between h-16">
              <div className="flex">
                <Link to="/" className="flex items-center">
                  <span className="text-xl font-bold">Geaux Academy</span>
                </Link>
              </div>
              <div className="flex space-x-4">
                <Link to="/assessment" className="flex items-center px-3 py-2">
                  <BookOpen className="h-5 w-5 mr-1" />
                  Assessment
                </Link>
                <Link to="/profile" className="flex items-center px-3 py-2">
                  <User className="h-5 w-5 mr-1" />
                  Profile
                </Link>
                <Link to="/create" className="flex items-center px-3 py-2">
                  <PlusCircle className="h-5 w-5 mr-1" />
                  Create Course
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/assessment" element={<LearningStyleAssessment />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/create" element={<CourseCreation />} />
            <Route path="/" element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <h1 className="text-4xl font-bold mb-4">Welcome to Geaux Academy</h1>
                <p className="text-xl text-gray-600">
                  Discover your learning style and get personalized content
                </p>
              </motion.div>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;