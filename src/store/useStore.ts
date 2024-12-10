import { create } from 'zustand';
import { User, Course, LearningStyle } from '../types';

interface Store {
  user: User | null;
  courses: Course[];
  setUser: (user: User) => void;
  addCourse: (course: Course) => void;
  updateLearningStyle: (style: LearningStyle, value: number) => void;
}

export const useStore = create<Store>((set) => ({
  user: null,
  courses: [],
  setUser: (user) => set({ user }),
  addCourse: (course) => set((state) => ({ courses: [...state.courses, course] })),
  updateLearningStyle: (style, value) =>
    set((state) => ({
      user: state.user
        ? {
            ...state.user,
            learningStyles: {
              ...state.user.learningStyles,
              [style]: value,
            },
          }
        : null,
    })),
}));