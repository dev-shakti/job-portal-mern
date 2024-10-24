import { getAllJobs } from "@/store/jobSlice"
import { JOB_API_END_POINT } from "@/utilis/const"
import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

export const useGetAllJobs = () => {
    const dispatch=useDispatch();

    useEffect(() => {
       const fetchAllJobs = async() => {
          try {
            const response=await axios.get(`${JOB_API_END_POINT}/getJobs`,{withCredentials:true});
             if(response.status===200){
                   dispatch(getAllJobs(response.data.jobs))
             }
          } catch (error) {
            console.error(error)
          }
       }

       fetchAllJobs()
    },[dispatch])
}