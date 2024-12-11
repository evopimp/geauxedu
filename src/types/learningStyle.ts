// src/types/learningStyle.ts
export type LearningStyle = 
  | 'visual'
  | 'auditory' 
  | 'reading_writing'
  | 'kinesthetic'
  | 'multimodal';

export interface LearningStyleScore {
  style: LearningStyle;
  score: number;
}

export interface AssessmentState {
  currentQuestion: number;
  responses: string[];
  learningStyles: LearningStyleScore[];
  isComplete: boolean;
}