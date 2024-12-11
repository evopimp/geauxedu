export type LearningStyle = 'visual' | 'auditory' | 'reading' | 'kinesthetic';

export interface User {
  _id?: string;
  name: string;
  email: string;
  password: string;
  learningStyles: Record<LearningStyle, number>;
  streak: number;
  avatar: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  content: CourseContent[];
}

export interface CourseContent {
  id: string;
  type: 'video' | 'audio' | 'text' | 'interactive';
  title: string;
  content: string;
  learningStyle: LearningStyle;
}

export interface APIResponse<T> {
  data?: T;
  message?: string;
  status: number;
}

// src/types/index.ts
export * from './user';
export * from './course';