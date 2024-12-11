import { config } from 'dotenv';

config();

export const env = {
  MONGODB_URI: process.env.MONGODB_URI!,
  DB_NAME: process.env.DB_NAME!,
  API_BASE_URL: process.env.API_BASE_URL!,
  AZURE_OPENAI_ENDPOINT: process.env.AZURE_OPENAI_ENDPOINT!,
  AZURE_OPENAI_API_KEY: process.env.AZURE_OPENAI_API_KEY!,
  PORT: process.env.PORT || 5000
} as const;