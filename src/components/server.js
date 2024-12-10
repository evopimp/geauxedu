// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('your-mongodb-connection-string', { useNewUrlParser: true, useUnifiedTopology: true });

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
  const user = new User(req.body);
  await user.save();
  res.send(user);
});

app.get('/api/users', async (req, res) => {
  const user = await User.findOne({ email: req.query.email });
  res.send(user);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});