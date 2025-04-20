
import mongoose from 'mongoose'; //* Basically going to be running to able to connect to the database by using the connection string (process.env.MONGO_URI) and the mongoose library

export const connectDB = async () => { 
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) { 
    console.error(`Error: ${error.message}`);
    process.exit(1); //* process 1 code means exit with failure, 0 means success
  }
}








