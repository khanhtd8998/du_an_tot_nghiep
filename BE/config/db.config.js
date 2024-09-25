
import mongoose from 'mongoose';

const connectDB = async (db) => {
  try {
    await mongoose.connect(db);
    console.log('The connect is successfully!');
  } catch (error) {
    console.log(error);
  }
};
export default connectDB;

require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const dbURI = process.env.MONGO_URI;
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connected successfully!');
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1); 
  }
};

module.exports = connectDB;

