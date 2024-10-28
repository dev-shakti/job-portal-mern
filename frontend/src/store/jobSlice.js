import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allJobs:[],
    singleJob:null,
    searchJobByText:""
  };
const jobSlice=createSlice({
    name:"job",
    initialState,
    reducers:{
        getAllJobs:(state,action) => {
            state.allJobs=action.payload;
        },
        getSingleJob:(state,action)=> {
            state.singleJob=action.payload;
        },
        setSearchJobByText:(state,action) => {
            state.searchJobByText=action.payload
        }
    }
})


export const { 
    getAllJobs,
    getSingleJob,
    setSearchJobByText
} = jobSlice.actions;

export default jobSlice.reducer;