// src/server.ts
import express from 'express';
import chatRouter from './api/chat';

const app = express();
app.use(express.json());

app.use('/api', chatRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});