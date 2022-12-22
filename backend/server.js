const connectDB = require("./config/connectDB");
const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const Task = require("./model/taskModel");
const cors = require("cors");
app.use(cors());
app.use(express.json()); //need for send json requested data as a response
app.use(express.urlencoded({ extended: false }));
const taskRoutes = require("./routes/taskRoutes");
const PORT = process.env.PORT || 5000;
app.use("/api/tasks", taskRoutes);

const connectServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
connectServer();
