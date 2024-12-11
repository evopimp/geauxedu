// src/api/chat.ts
import express from 'express';
import { OpenAIClient } from '@azure/openai';
import { env } from '../config/env';

const router = express.Router();

interface ChatRequest {
  messages: string[];
  context: string;
}

export const sendChatMessage = async (request: ChatRequest) => {
  const client = new OpenAIClient(
    env.AZURE_OPENAI_ENDPOINT,
    { key: env.AZURE_OPENAI_API_KEY }
  );

  try {
    const response = await client.getChatCompletions(
      'gpt-4',
      [
        { role: 'system', content: request.context },
        ...request.messages.map(msg => ({
          role: msg.startsWith('You:') ? 'user' : 'assistant',
          content: msg.substring(msg.indexOf(':') + 2)
        }))
      ]
    );

    return {
      reply: response.choices[0].message?.content || 'No response'
    };
  } catch (error) {
    console.error('Chat API Error:', error);
    throw error;
  }
};

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