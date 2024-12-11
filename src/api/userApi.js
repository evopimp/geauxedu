import axios, { AxiosError } from 'axios';
import { User } from '../types';

const API_URL = 'http://localhost:5000/api/users';

interface APIError {
  message: string;
  status?: number;
}

export const createUser = async (userData: Partial<User>): Promise<User> => {
  try {
    const response = await axios.post<User>(API_URL, userData);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<APIError>;
    console.error('Error creating user:', axiosError.response?.data || axiosError.message);
    throw {
      message: axiosError.response?.data?.message || 'Failed to create user',
      status: axiosError.response?.status
    };
  }
};

export const findUserByEmail = async (email: string): Promise<User | null> => {
  try {
    const response = await axios.get<User>(`${API_URL}/email`, {
      params: { email },
      timeout: 15000
    });
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<APIError>;
    console.error('Error finding user:', axiosError.response?.data || axiosError.message);
    throw {
      message: axiosError.response?.data?.message || 'Failed to find user',
      status: axiosError.response?.status
    };
  }
};

export const updateUserStreak = async (email: string, streak: number): Promise<User> => {
  try {
    const response = await axios.put<User>(`${API_URL}/streak`, { email, streak });
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<APIError>;
    console.error('Error updating streak:', axiosError.response?.data || axiosError.message);
    throw {
      message: axiosError.response?.data?.message || 'Failed to update streak',
      status: axiosError.response?.status
    };
  }
};

export const updateUser = async (userId: string, userDetails: Partial<User>): Promise<User> => {
  try {
    const response = await axios.put<User>(`${API_URL}/${userId}`, userDetails);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<APIError>;
    console.error('Error updating user:', axiosError.response?.data || axiosError.message);
    throw {
      message: axiosError.response?.data?.message || 'Failed to update user',
      status: axiosError.response?.status
    };
  }
};