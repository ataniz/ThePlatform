// import mongoose from 'mongoose';
// import { get } from 'config';
// const db = get('mongoURI');

// es5 way of writing it
const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB Connected...');
  } catch (error) {
    console.error(error.message);
    // Exit provess with failure
    process.exit(1);
  }
};

module.exports = connectDB;
