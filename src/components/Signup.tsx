import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
import { createUser } from '../api/userApi';
import { useStore } from '../store/useStore';

const Signup = () => {
  const { setUser } = useStore();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      avatar: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .min(6, 'Must be at least 6 characters')
        .required('Required'),
      confirmPassword: Yup.string()
        .oneOf([formik.values.password], 'Passwords must match')
        .required('Required'),
      avatar: Yup.string().url('Invalid URL').required('Required'),
    }),
    onSubmit: async (values) => {
      try {
        console.log('Submitting signup form:', values);
        const newUser = {
          name: values.name,
          email: values.email,
          password: values.password,
          learningStyles: {
            visual: 0,
            auditory: 0,
            reading: 0,
            kinesthetic: 0,
          },
          streak: 0,
          avatar: values.avatar,
        };
        console.log('Sending user data:', newUser);
        const createdUser = await createUser(newUser);
        console.log('Created user:', createdUser);
        if (createdUser) {
          setUser(createdUser);
          navigate('/profile');
        }
      } catch (error) {
        console.error('Signup error:', error);
        // Add user feedback here
      }
    },
  });

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
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