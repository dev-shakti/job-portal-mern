const express=require("express");
const router=express.Router();
const { 
    postJob, 
    getAllJobs, 
    getSingleJob, 
    getAdminJobs 
}=require("../controllers/jobController");
const authenticate=require("../middlewares/authenticate");

// Register a new job
router.post("/postjob", authenticate, postJob);

// Get all job for the authenticated user
router.get("/getjobs", authenticate, getAllJobs);

// Get a single job by ID
router.get("/getjob/:id", authenticate, getSingleJob);

// Get admin jobs by ID
router.get("/getadminjobs", authenticate, getAdminJobs);

module.exports=router;