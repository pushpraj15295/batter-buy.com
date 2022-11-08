const  mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.Mongo_URL);
    console.log(`Database connected`);
  } catch (e) {
    console.log("Error: " + e);
  }
};

module.exports = connectDB;
