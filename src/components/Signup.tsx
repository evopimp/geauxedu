import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
import { createUser } from '../api/userApi.ts';
import { useStore } from '../store/useStore';

const Signup = () => {
  const { setUser } = useStore();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
      .min(6, 'Must be at least 6 characters')
      .required('Required'),
    confirmPassword: Yup.string()
      .required('Required')
      .test('passwords-match', 'Passwords must match', function(value) {
        return value === this.parent.password;
      }),
    avatar: Yup.string().url('Invalid URL').required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      avatar: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        setError(null);
        const newUser = {
          name: values.name,
          email: values.email,
          password: values.password, // Send plain password, backend will hash it
          learningStyles: {
            visual: 0,
            auditory: 0,
            reading: 0,
            kinesthetic: 0,
          },
          streak: 0,
          avatar: values.avatar,
        };
        const createdUser = await createUser(newUser);
        setUser({
          _id: createdUser._id,
          name: createdUser.name,
          email: createdUser.email,
          learningStyles: createdUser.learningStyles,
          streak: createdUser.streak,
          avatar: createdUser.avatar,
          password: '' // Don't store password in frontend state
        });
        navigate('/profile');
      } catch (error) {
        setError(error instanceof Error ? error.message : 'An unexpected error occurred');
      }
    },
  });

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}
      <form onSubmit={formik.handleSubmit}>
        {/* Name Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            {...formik.getFieldProps('name')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-600 text-sm">{formik.errors.name}</div>
          ) : null}
        </div>

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

        {/* Confirm Password Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            {...formik.getFieldProps('confirmPassword')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className="text-red-600 text-sm">
              {formik.errors.confirmPassword}
            </div>
          ) : null}
        </div>

        {/* Avatar URL Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Avatar URL
          </label>
          <input
            type="text"
            name="avatar"
            {...formik.getFieldProps('avatar')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
          {formik.touched.avatar && formik.errors.avatar ? (
            <div className="text-red-600 text-sm">{formik.errors.avatar}</div>
          ) : null}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Sign Up
        </button>
      </form>

      <p className="mt-4 text-center">
        Already have an account?{' '}
        <Link to="/signin" className="text-blue-600">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default Signup;