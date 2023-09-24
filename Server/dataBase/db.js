//mongoose connection.
const mongoose = require("mongoose");
//connection for db
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb://localhost:27017/socialmedia"
    );
    console.log(`MongoDB Connected ${conn.connection.host}`);
  } catch (err) {
    console.log(`Error in Mongodb ${err}`);
  }
};
module.exports = connectDB;
