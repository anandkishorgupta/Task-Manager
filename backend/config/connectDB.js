const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    mongoose.connect(process.env.connectDB_URI);
    console.log("connected to database");
  } catch (error) {
    console.log(error);
  }
};
mongoose.set("strictQuery", false);
module.exports = connectDB;
