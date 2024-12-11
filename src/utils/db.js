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

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error('MONGODB_URI environment variable is not set');
}

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
      const connection = await client.connect();
      db = connection.db(process.env.DB_NAME || 'geauxacademy');
      // Test the connection
      await db.command({ ping: 1 });
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