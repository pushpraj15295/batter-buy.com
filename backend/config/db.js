//**********************************************************************************  mongo Databse connection  */

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://pushpa:raj@cluster0.ervxzhg.mongodb.net/better-buy");
    console.log(`Database connected`);
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = connectDB;
