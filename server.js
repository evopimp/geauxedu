import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import { createUser, findUserByEmail } from './src/models/userModel.js'; // Ensure the correct path
import { connectDB } from './src/utils/db.js'; // Ensure the correct path
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

connectDB().then(() => {
  console.log('MongoDB connected');

  const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    learningStyles: Object,
    streak: Number,
    avatar: String,
  });

  const User = mongoose.model('User', userSchema);

  app.post('/api/users', async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const user = new User({ ...req.body, password: hashedPassword });
      await user.save();
      res.send(user);
    } catch (error) {
      res.status(500).send(error);
    }
  });

  app.get('/api/users', async (req, res) => {
    try {
      const user = await User.findOne({ email: req.query.email });
      res.send(user);
    } catch (error) {
      res.status(500).send(error);
    }
  });

  app.put('/api/users/streak', async (req, res) => {
    try {
      const user = await User.findOneAndUpdate(
        { email: req.body.email },
        { streak: req.body.streak },
        { new: true }
      );
      res.send(user);
    } catch (error) {
      res.status(500).send(error);
    }
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.error('MongoDB connection error:', err);
});