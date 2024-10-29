const express=require("express");
const router=express.Router();
const { applyJobs, getAppliedJobs, getApplicants, updateStatus } = require('../controllers/applicationController');
const authenticate=require("../middlewares/authenticate");

router.get("/apply/:id",authenticate,applyJobs);
router.route("/get").get(authenticate, getAppliedJobs);
router.route("/:id/applicants").get(authenticate, getApplicants);
router.route("/status/:id/update").post(authenticate, updateStatus);

module.exports=router;