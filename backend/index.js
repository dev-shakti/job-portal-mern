const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const { connectToDb } = require("./connection");

const PORT = process.env.PORT || 3000;

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//routes
app.get("/", (req, res) => {
  res.json({ msg: "Welcome to Job portal" });
});

// Connect to MongoDB and start server
connectToDb(process.env.MONGO_URI)
  .then(() => {
    console.log("mongodb is running");
    //listening to app
    app.listen(PORT, () => {
      console.log(`Server is running at port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB", error);
  });
