import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async () => {
    try {
      const connectionString = process.env.MONGODB_URI; // Use the environment variable
      if (!connectionString) {
        throw new Error("MONGODB_URI not defined in .env");
      }
      await mongoose.connect(connectionString, {
      });
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB', error);
      process.exit(1);
    }
  };

'password = ngQGcktqbHmBAKDS'