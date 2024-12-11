// userModel.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  learningStyles: Object,
  streak: Number,
  avatar: String,
});

const User = mongoose.model('User', userSchema);

export default User;