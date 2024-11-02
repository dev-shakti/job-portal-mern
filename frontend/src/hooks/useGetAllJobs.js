import { getAllJobs } from "@/store/jobSlice";
import { JOB_API_END_POINT } from "@/utilis/const";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useGetAllJobs = () => {
  const dispatch = useDispatch();
  const { searchQuery } = useSelector((state) => state.job);
  const url = searchQuery
    ? `${JOB_API_END_POINT}/getJobs?keyword=${searchQuery}`
    : ` ${JOB_API_END_POINT}/getJobs`;

  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        const response = await axios.get(
          url,
          { withCredentials: true }
        );
        if (response.status === 200) {
          dispatch(getAllJobs(response.data.jobs));
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchAllJobs();
  }, [dispatch, searchQuery]);
};
