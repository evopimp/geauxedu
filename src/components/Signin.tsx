import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
import { findUserByEmail } from '../api/userApi';
import { useStore } from '../store/useStore';
import bcrypt from 'bcryptjs'; // Import bcrypt

const Signin = () => {
  const { setUser } = useStore();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .min(6, 'Must be at least 6 characters')
        .required('Required'),
    }),
    onSubmit: async (values) => {
      try {
        const user = await findUserByEmail(values.email);
        if (user) {
          const passwordMatch = await bcrypt.compare(
            values.password,
            user.password
          );
          if (passwordMatch) {
            setUser(user);
            navigate('/profile');
          } else {
            alert('Invalid email or password');
          }
        } else {
          alert('User not found');
        }
      } catch (error) {
        console.error('Error signing in:', error);
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