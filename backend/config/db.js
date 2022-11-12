//**********************************************************************************  mongo Databse connection  */
require('dotenv').config()

const mongoose = require("mongoose");
const url = process.env.MONGO_URL

const connectDB = async () => {
  try {
    return mongoose.connect(url,
      { useNewUrlParser: true, useUnifiedTopology: true }, err => {
          console.log('Database Connected')
      });
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = connectDB;
