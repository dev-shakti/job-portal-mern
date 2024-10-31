import { setAllApplicants } from "@/store/applicationSlice";
import { APPLICATION_API_END_POINT} from "@/utilis/const";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetAllApplicants = (jobId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllApplicants = async () => {
      try {
        const response = await axios.get(
          `${APPLICATION_API_END_POINT}/${jobId}/applicants`,
          { withCredentials: true }
        );
       
          dispatch(setAllApplicants(response.data.job));
    
      } catch (error) {
        console.error(error);
      }
    };

    fetchAllApplicants();
  }, [dispatch,jobId]);
};

export default useGetAllApplicants;
