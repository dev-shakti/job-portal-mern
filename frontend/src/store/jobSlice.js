import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading:false,
    allJobs:[],
    allAdminJobs:[],
    singleJob:null,
    searchJobByText:"",
    allAppliedJobs:[]
  };
const jobSlice=createSlice({
    name:"job",
    initialState,
    reducers:{
        getAllJobs:(state,action) => {
            state.allJobs=action.payload;
        },
        getAllAdminJobs:(state,action) => {
            state.allAdminJobs=action.payload;
        },
        getSingleJob:(state,action)=> {
            state.singleJob=action.payload;
        },
        setSearchJobByText:(state,action) => {
            state.searchJobByText=action.payload
        },
        setLoading:(state,action) => {
            state.isLoading=action.payload
        },
        setAllAppliedJobs: (state,action) => {
            state.allAppliedJobs=action.payload
        }
    }
})


export const { 
    getAllJobs,
    getSingleJob,
    setSearchJobByText,
    setLoading,
    getAllAdminJobs,
    setAllAppliedJobs
} = jobSlice.actions;

export default jobSlice.reducer;