// src/server.ts
import express from 'express';
import chatRouter from './api/chat';
import userRoutes from './routes/userRoutes'; // Import without extension

const app = express();
app.use(express.json());

app.use('/api/chat', chatRouter);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});