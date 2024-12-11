// src/components/ChatUI.tsx
import { useState } from 'react';
import axios from 'axios';

const ChatUI = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input) return;
    setMessages([...messages, `You: ${input}`]);
    setInput('');
    try {
      const response = await axios.post('/api/chat', { message: input });
      setMessages(prev => [...prev, `Assistant: ${response.data.reply}`]);
    } catch {
      setMessages(prev => [...prev, 'Assistant: Error occurred']);
    }
  };

  return (
    <div>
      <div>
        {messages.map((msg, idx) => (
          <p key={idx}>{msg}</p>
        ))}
      </div>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Type your message"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatUI;