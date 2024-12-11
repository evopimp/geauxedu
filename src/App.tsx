import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ErrorBoundary from './components/common/ErrorBoundary';
import { BookOpen, User, PlusCircle, LogIn, UserPlus } from 'lucide-react';

const LearningStyleAssessment = React.lazy(() => import('./components/assessment/LearningStyleAssessment'));
const UserProfile = React.lazy(() => import('./components/user/UserProfile'));
const Signup = React.lazy(() => import('./components/auth/Signup'));
const Signin = React.lazy(() => import('./components/auth/Signin'));
const UserDashboard = React.lazy(() => import('./components/user/UserDashboard').then(m => ({ default: m.UserDashboard })));
const CourseCreation = React.lazy(() => import('./components/course/CourseCreation').then(m => ({ default: m.CourseCreation })));

function App() {
  return (
    <Router>
      <ErrorBoundary>
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
                  <Link to="/signup" className="flex items-center px-3 py-2">
                    <UserPlus className="h-5 w-5 mr-1" />
                    Sign Up
                  </Link>
                  <Link to="/signin" className="flex items-center px-3 py-2">
                    <LogIn className="h-5 w-5 mr-1" />
                    Sign In
                  </Link>
                  <Link to="/dashboard" className="flex items-center px-3 py-2">
                    <User className="h-5 w-5 mr-1" />
                    Dashboard
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/assessment" element={<LearningStyleAssessment />} />
                <Route path="/profile" element={<UserProfile />} />
                <Route path="/create" element={<CourseCreation />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/dashboard" element={<UserDashboard />} />
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
            </Suspense>
          </main>
        </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;