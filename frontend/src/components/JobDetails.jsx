import { useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from "@/utilis/const";
import { useParams } from "react-router-dom";
import { getSingleJob } from "@/store/jobSlice";
import { toast } from "sonner";

const JobDetails = () => {
  const params = useParams();
  const jobId = params.id;
  const { user } = useSelector((state) => state.auth);
  const { singleJob } = useSelector((state) => state.job);
  const dispatch = useDispatch();

  // Check if the user has already applied based on Redux state
  const isApplied = singleJob?.applications?.some(
    (application) => application.applicant === user?._id
  );



  const applyJobHandler = async () => {
    if (isApplied) {
      toast.error("You have already applied for this job.");
      return; // Exit if already applied
    }
    try {
      const res = await axios.get(
        `${APPLICATION_API_END_POINT}/apply/${jobId}`,
        { withCredentials: true }
      );

      if (res.status === 200) {
        const updatedSingleJob = {
          ...singleJob,
          applications: [...singleJob.applications, { applicant: user?._id }],
        };
        dispatch(getSingleJob(updatedSingleJob)); // helps us to real time UI update
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/getjob/${jobId}`, {
          withCredentials: true,
        });
        dispatch(getSingleJob(res.data.job));
      } catch (error) {
        console.error("Error fetching job data:", error);
      }
    };

    fetchJob();
  }, [dispatch, jobId]);

  return (
    <div className="px-4 my-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">{singleJob?.title}</h1>
            <div className="">
              <Badge className={"text-[#4834d4] font-bold"} variant="ghost">
                {singleJob?.position} Positions
              </Badge>
              <Badge className={"text-[#F83002] font-bold"} variant="ghost">
                {singleJob?.jobType}
              </Badge>
              <Badge className={"text-[#8e44ad] font-bold"} variant="ghost">
                {singleJob?.salary} LPA
              </Badge>
            </div>
          </div>

          <Button
            onClick={applyJobHandler}
            disabled={isApplied}
            className={`rounded-lg ${
              isApplied
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-[#7209b7] hover:bg-[#5f32ad]"
            }`}
          >
            {isApplied ? "Already Applied" : "Apply Now"}
          </Button>
        </div>
        <h3 className="text-xl font-medium mt-4">Job Description</h3>
        <hr className="my-4" />
        <div className="flex flex-col gap-4">
          <p>
            <b>Role: </b>
            {singleJob?.title}
          </p>
          <p>
            <b>Location </b>
            {singleJob?.location}
          </p>
          <p>
            <b>Description: </b>
            {singleJob?.description}
          </p>
          <p>
            <b>Experience: </b>
            {singleJob?.experience}+ years
          </p>
          <p>
            <b>Salary: </b>
            {singleJob?.salary} LPA
          </p>
          <p>
            <b>Total Applicants: {singleJob?.applications?.length} </b>
          </p>
          <p>
            <b>Posted Date: </b>
            {singleJob?.createdAt.split("T")[0]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
