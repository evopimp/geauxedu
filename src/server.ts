// src/server.ts
import express from 'express';
import cors from 'cors';
import { env } from '@/config/env';
import { chatRouter } from '@/server/routes/chatRoutes';
import { userRouter } from '@/server/routes/userRoutes';
import { errorHandler } from '@/server/middleware/errorHandler';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/chat', chatRouter);
app.use('/api/users', userRouter);
app.use(errorHandler);

const PORT = env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});