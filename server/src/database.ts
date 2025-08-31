import { MongoClient } from "mongodb";

// Check if environment variables are loaded
console.log('Environment check:', {
  DB_USER: process.env.DB_USER || 'NOT_LOADED',
  DB_CLUSTER: process.env.DB_CLUSTER || 'NOT_LOADED',
  DB_NAME: process.env.DB_NAME || 'NOT_LOADED'
});

// Use environment variables if available, otherwise use hardcoded values
const DB_USER = process.env.DB_USER || "julianowicka_db_user";
const DB_USER_PASSWORD = process.env.DB_USER_PASSWORD || "BOglbPeofTUndIwo";
const DB_CLUSTER = process.env.DB_CLUSTER || "booking.ojnpicn";
const DB_NAME = process.env.DB_NAME || "main";

console.log('Using database connection:', {
  DB_USER,
  DB_CLUSTER,
  DB_NAME
});

const url = `mongodb+srv://${DB_USER}:${DB_USER_PASSWORD}@${DB_CLUSTER}.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

export const connectDatabase = async () => {
  try {
    console.log('Attempting to connect to MongoDB...');
    const client = await MongoClient.connect(url);
    console.log('Successfully connected to MongoDB!');
    const db = client.db(DB_NAME);
    
    return {
      listings: db.collection("test_listings")
    };
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
};
