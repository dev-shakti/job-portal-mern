import { setAllAppliedJobs } from "@/store/jobSlice"
import { APPLICATION_API_END_POINT } from "@/utilis/const"
import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

export const useGetAllAppliedJobs = () => {
    const dispatch=useDispatch();
    useEffect(() => {
        const fetchAllAppliedJobs = async() => {
              try {
               const res=await axios.get(`${APPLICATION_API_END_POINT}/get`, {
                 withCredentials:true
               })
               if(res.status===200){
                 dispatch(setAllAppliedJobs(res.data.application));
               }
              } catch (error) {
               console.error(error);
              }
        }
   
        fetchAllAppliedJobs()
     },[])
}