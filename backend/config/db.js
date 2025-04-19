import mongoose from 'mongoose'; //* Basically going to be running to able to connect to the database by using the connection string (process.env.MONGO_URI) and the mongoose library

export const connectDB = async () => { 
  try {
    const mongoose = require('mongoose');
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) { 

  }
}