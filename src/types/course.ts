export interface Course {
  id: string;
  title: string;
  description: string;
  content: Array<any>; // Define specific content type based on your needs
}

export interface CourseContent {
  id: string;
  type: 'video' | 'audio' | 'text' | 'interactive';
  title: string;
  content: string;
  learningStyle: LearningStyle;
}