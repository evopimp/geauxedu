// src/api/openaiClient.ts
import { OpenAIClient, AzureKeyCredential } from '@azure/openai';

const endpoint = process.env.AZURE_OPENAI_ENDPOINT as string;
const apiKey = process.env.AZURE_OPENAI_API_KEY as string;

export const client = new OpenAIClient(endpoint, new AzureKeyCredential(apiKey));