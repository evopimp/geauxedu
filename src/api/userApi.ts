import axios, { AxiosError } from 'axios';
import { User } from '../types';

const API_URL = process.env.VITE_API_URL || 'http://localhost:5000/api/users';

// Add request timeout and error handling
const api = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
});

interface APIError {
  message: string;
  status?: number;
}

interface AuthResponse {
  user: User;
  token: string;
}

export const createUser = async (userData: Partial<User>): Promise<User> => {
  try {
    const response = await api.post<User>(API_URL, userData);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<APIError>;
    const errorMessage = axiosError.response?.data?.message 
      || axiosError.response?.statusText 
      || 'Failed to create user';
    console.error('Create user error:', errorMessage);
    throw new Error(errorMessage);
  }
};

export const findUserByEmail = async (email: string): Promise<User | null> => {
  try {
    // Fix: Update to match the route in userRoutes.js
    const response = await api.get<User>(`${API_URL}/email`, {
      params: { email }
    });
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<APIError>;
    if (axiosError.response?.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch user');
  }
};

export const updateUserStreak = async (email: string, streak: number): Promise<User> => {
  try {
    const response = await api.put<User>(`${API_URL}/streak`, { email, streak });
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
    const response = await api.put<User>(`${API_URL}/${userId}`, userDetails);
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

export const getAllUsers = async (): Promise<User[]> => {
  try {
    const response = await api.get<User[]>(API_URL);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<APIError>;
    console.error('Error fetching users:', axiosError.response?.data || axiosError.message);
    throw {
      message: axiosError.response?.data?.message || 'Failed to fetch users',
      status: axiosError.response?.status
    };
  }
};

export const deleteUser = async (userId: string): Promise<void> => {
  try {
    await api.delete(`${API_URL}/${userId}`);
  } catch (error) {
    const axiosError = error as AxiosError<APIError>;
    console.error('Error deleting user:', axiosError.response?.data || axiosError.message);
    throw {
      message: axiosError.response?.data?.message || 'Failed to delete user',
      status: axiosError.response?.status
    };
  }
};

export const signIn = async (email: string, password: string): Promise<AuthResponse> => {
  try {
    const response = await api.post<AuthResponse>(`${API_URL}/signin`, {
      email,
      password
    });
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<APIError>;
    throw new Error(axiosError.response?.data?.message || 'Failed to sign in');
  }
};