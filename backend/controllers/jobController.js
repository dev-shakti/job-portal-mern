const Job = require("../models/jobModel");

// Register a new job
const postJob = async (req,res) => {
  console.log(req.body)
  try {
    const {
      title,
      description,
      requirements,
      salary,
      location,
      jobType,
      experience,
      position,
      companyId,
    } = req.body;
    const userId = req.userId;

    if (
      !title 
      || !description 
      || !requirements 
      || !salary 
      || !location 
      || !jobType 
      || !experience
      || !position 
      || !companyId
      ) {
        return res.status(400).json({
            message: "Something is missing."})
    };


    const job=await Job.create({
        title,
        description,
        requirements:requirements,
        salary,
        location,
        position:Number(position),
        jobType,
        experience,
        company:companyId,
        created_by:userId
    })
    return res.status(201).json({
        message: "New job created successfully.",
        job
    });
  } catch (error) {
    console.error("Error while post a job", error);
    return res
      .status(500)
      .json({ msg: "Server error. Please try again later." });
  }
};

// Get all jobs with optional keyword search
const getAllJobs = async (req,res) => {
  try {
    const keyword = req.query.keyword || "";
    const query = {
        $or: [
            { title: { $regex: keyword, $options: "i" } },
            { description: { $regex: keyword, $options: "i" } },
        ]
    };
    const jobs = await Job.find(query).populate({
      path: "company"
  }).sort({ createdAt: -1 });
    return res.status(200).json({ jobs });

  } catch (error) {
    console.error("Error while getting jobs", error);
    return res
      .status(500)
      .json({ msg: "Server error. Please try again later." });
  }
};

const getSingleJob = async (req,res) => {
  try {
    const jobId=req.params.id;
    const job=await Job.findById(jobId).populate("company");
    
    if(!job){
        return res.status(404).json({msg:"Job not found"})
    }
    return res.status(200).json({job})
  } catch (error) {
    console.error("Error while getting job", error);
    return res
      .status(500)
      .json({ msg: "Server error. Please try again later." });
  }
};

const getAdminJobs = async (req,res) => {
  
  try {
    const adminId=req.userId;
    const jobs = await Job.find({ created_by: adminId }).populate({
      path:'company',
      createdAt:-1
  });
    if (!jobs) {
        return res.status(404).json({message: "Jobs not found."});
    };
    return res.status(200).json({jobs});
  } catch (error) {
    console.error("Error while getting admin jobs", error);
    return res
      .status(500)
      .json({ msg: "Server error. Please try again later." });
  }
};

module.exports = {
  postJob,
  getAllJobs,
  getSingleJob,
  getAdminJobs,
};
