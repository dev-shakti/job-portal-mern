const express=require('express');
require("dotenv").config()
const cors=require("cors")
const app=express();

const PORT=process.env.PORT || 3000;

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

//routes
app.get("/" , (req,res) => {
    res.json({msg:"Welcome to Job portal"})
})

//listening to app
app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`)
})