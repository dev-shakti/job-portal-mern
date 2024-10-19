const Job = require("../models/jobModel");

const postJob = async (req,res) => {
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

    if (!title || !description || !requirements || !salary || !location || !jobType || !experience || !position || !companyId) {
        return res.status(400).json({
            message: "Something is missing."})
    };
    const job=await Job.create({
        title,
        description,
        requirements:requirements.splits(","),
        salary:Number(salary),
        location,
        jobType,
        experienceLevel:experience,
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

const getAllJobs = async (req,res) => {
  try {
    const keyword = req.query.keyword || "";
    const query = {
        $or: [
            { title: { $regex: keyword, $options: "i" } },
            { description: { $regex: keyword, $options: "i" } },
        ]
    };
    const jobs = await Job.find(query);
    if (!jobs) {
        return res.status(404).json({message: "Jobs not found."});
    };
    return res.status(200).json({jobs})
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
    const job=await Job.findOne(jobId)
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
    const adminId=req.params.id;
    const jobs=await Job.findOne({created_by:adminId});
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
