
import { setAllCompanies } from "@/store/companyslice";
import { COMPANY_API_END_POINT } from "@/utilis/const";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const useGetAllCompanies= () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllCompanies = async () => {
      try {
        const response = await axios.get(
          `${COMPANY_API_END_POINT}/getcompanies`,
          { withCredentials: true }
        );
        if (response.status === 200) {
          const companies = response.data.companies || [];
          dispatch(setAllCompanies(companies));
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchAllCompanies();
  }, [ dispatch]);
};
