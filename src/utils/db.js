// db.js
import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';
import winston from 'winston';

dotenv.config();

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
  ],
});

const uri = process.env.MONGODB_URI || 'mongodb+srv://wicked:u46daRH2NhFd9lHI@geaux-contentai.9pqv0ok.mongodb.net/?retryWrites=true&w=majority&appName=geaux-contentai';

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let db;

export const connectDB = async () => {
  if (!db) {
    try {
      await client.connect();
      db = client.db(process.env.DB_NAME || 'geauxacademy');
      logger.info('Connected to MongoDB successfully');
    } catch (error) {
      logger.error('MongoDB connection error:', error);
      await client.close();
      db = null;
      throw error;
    }
  }
  return db;
};

export const disconnectDB = async () => {
  if (client) {
    try {
      await client.close();
      db = null;
      logger.info('Disconnected from MongoDB');
    } catch (error) {
      logger.error('Error disconnecting from MongoDB:', error);
      throw error;
    }
  }
};