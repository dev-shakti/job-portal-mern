const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const { connectToDb } = require("./connection");
const userRouter=require("./routes/userRoutes")
const companyRouter=require("./routes/companyRoutes")
const jobRouter=require("./routes/jobRoutes")
const applicationRouter=require("./routes/applicationRoutes")
const cookieParser = require('cookie-parser');
const path=require('path')

const PORT = process.env.PORT || 3000;
const _dirname=path.resolve()


//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
  origin:'https://job-portal-mern-zug2.onrender.com',
  credentials:true
}

app.use(cors(corsOptions));

//api routes
app.use("/api/v1/user", userRouter);
app.use("/api/v1/company", companyRouter);
app.use("/api/v1/job", jobRouter);
app.use("/api/v1/application", applicationRouter);

app.use(express.static(path.join(_dirname,"/frontend/dist")))
app.get("*",(_,res) => {
  res.sendFile(path.resolve(_dirname,"frontend","dist","index.html"))
})

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
