// userModel.js
const connectDB = require('./db');

const getUserCollection = async () => {
  const db = await connectDB();
  return db.collection('users');
};

const createUser = async (user) => {
  const users = await getUserCollection();
  const result = await users.insertOne(user);
  return result.ops[0];
};

const findUserByEmail = async (email) => {
  const users = await getUserCollection();
  return await users.findOne({ email });
};

module.exports = { createUser, findUserByEmail };