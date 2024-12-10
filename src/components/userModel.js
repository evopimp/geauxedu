// userModel.js
import { connectDB } from './db';
import bcrypt from 'bcryptjs';

const getUserCollection = async () => {
  const db = await connectDB();
  return db.collection('users');
};

export const createUser = async (user) => {
  const users = await getUserCollection();
  const hashedPassword = await bcrypt.hash(user.password, 10);
  const result = await users.insertOne({ ...user, password: hashedPassword });
  return result.ops[0];
};

export const findUserByEmail = async (email) => {
  const users = await getUserCollection();
  return await users.findOne({ email });
};

export const updateUserPassword = async (email, newPassword) => {
  const users = await getUserCollection();
  const hashedPassword = await bcrypt.hash(newPassword, 10);
  const result = await users.updateOne(
    { email },
    { $set: { password: hashedPassword } }
  );
  return result.modifiedCount > 0;
};