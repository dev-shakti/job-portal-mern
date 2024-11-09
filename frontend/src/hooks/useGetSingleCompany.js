import { setSingleCompany } from "@/store/companyslice";
import { COMPANY_API_END_POINT } from "@/utilis/const";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";


export const useGetSingleCompany = ({ companyId }) => {
  const dispatch=useDispatch()
  
  useEffect(() => {
    if (!companyId) {
      console.error("Invalid company ID");
      return;
    }
    const fetchSingleCompany = async () => {
      try {
        const response = await axios.get(
          `${COMPANY_API_END_POINT}/getCompany/${companyId}`,
          { withCredentials: true }
        );
        if (response.status === 200) {
          dispatch(setSingleCompany(response.data.company))
        }
      } catch (error) {
        console.error(error);
      }
    };
      fetchSingleCompany();
    
  }, [companyId, dispatch]);
};
