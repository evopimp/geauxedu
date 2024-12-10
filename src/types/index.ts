export type LearningStyle = 'visual' | 'auditory' | 'reading' | 'kinesthetic';

export interface User {
  id: string;
  name: string;
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