import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
import { findUserByEmail } from '../api/userApi';
import { useStore } from '../store/useStore';

const Signin = () => {
  const { setUser } = useStore();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: async (values) => {
      try {
        const user = await findUserByEmail(values.email);
        if (!user) {
          setError('No account found with this email address');
          return;
        }
        
        // TODO: Add actual password verification here
        // This is a placeholder - you should implement proper password verification
        if (values.password !== user.password) {
          setError('Invalid email or password');
          return;
        }
        
        setUser(user);
        navigate('/profile');
      } catch (error) {
        setError(error instanceof Error ? error.message : 'An unexpected error occurred');
      }
    },
  });

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Sign In</h2>
      <form onSubmit={formik.handleSubmit}>
        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            {...formik.getFieldProps('email')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-600 text-sm">{formik.errors.email}</div>
          ) : null}
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            {...formik.getFieldProps('password')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-600 text-sm">{formik.errors.password}</div>
          ) : null}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Sign In
        </button>
      </form>

      <p className="mt-4 text-center">
        Don't have an account?{' '}
        <Link to="/signup" className="text-blue-600">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Signin;