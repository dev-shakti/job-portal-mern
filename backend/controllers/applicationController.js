const Application = require("../models/applicationModel");
const Job = require("../models/jobModel");


const applyJobs = async (req, res) => {
  try {
    const jobId = req.params.id;
    const userId = req.userId;

    if (!jobId) {
      return res.status(400).json({
        message: "Job id is required.",
      });
    }

    // check if the user has already applied for the job
    const existingApplication = await Application.findOne({
      job: jobId,
      applicant: userId,
    });
    if (existingApplication) {
      return res.status(400).json({
        message: "You have already applied for this job.",
      });
    }

    // check if the jobs exists
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({
        message: "Job not found",
        success: false,
      });
    }

    // create a new application
    const newApplication = await Application.create({
      job: jobId,
      applicant: userId,
    });
    job.applications.push(newApplication._id);
    await job.save();
    return res.status(201).json({
      message: "Job applied successfully."
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ msg: "Server error. Please try again later." });
  }
};

module.exports = { applyJobs };
