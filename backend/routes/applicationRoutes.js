const express=require("express");
const router=express.Router();
const { applyJobs } = require('../controllers/applicationController');
const authenticate=require("../middlewares/authenticate");

router.get("/apply/:id",authenticate,applyJobs);

module.exports=router;