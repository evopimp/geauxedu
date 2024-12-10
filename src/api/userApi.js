// src/api/userApi.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users'; // Replace with your API URL

export const createUser = async (user) => {
  const response = await axios.post(API_URL, user);
  return response.data;
};

export const findUserByEmail = async (email) => {
  const response = await axios.get(`${API_URL}?email=${email}`);
  return response.data;
};

export const updateUserStreak = async (email, streak) => {
  const response = await axios.put(`${API_URL}/streak`, { email, streak });
  return response.data;
};