import { getAllAdminJobs } from "@/store/jobSlice";
import { JOB_API_END_POINT } from "@/utilis/const";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const useGetAllAdminJobs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllAdminJobs = async () => {
      try {
        const response = await axios.get(`${JOB_API_END_POINT}/getadminjobs`, {
          withCredentials: true,
        });
        if (response.status === 200) {
          dispatch(getAllAdminJobs(response.data.jobs));
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchAllAdminJobs();
  }, [dispatch]);
};
