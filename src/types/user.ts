
export interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  learningStyles: {
    visual: number;
    auditory: number;
    reading: number;
    kinesthetic: number;
  };
  streak: number;
  avatar: string;
}

export type UserWithoutPassword = Omit<User, 'password'>;