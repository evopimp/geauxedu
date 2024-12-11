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