const  mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/betterbuy");
    console.log(`Database connected`);
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = connectDB;
