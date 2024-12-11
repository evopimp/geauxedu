// src/api/chat.ts
import express from 'express';
import { client } from './openaiClient';

const router = express.Router();

router.post('/chat', async (req, res) => {
  const { message } = req.body;

  try {
    const response = await client.getCompletions('<deployment-id>', {
      prompt: message,
      maxTokens: 100,
    });
    res.json({ reply: response.choices[0].text });
  } catch (error) {
    res.status(500).send('Error communicating with Azure OpenAI');
  }
});

export default router;