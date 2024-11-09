import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allApplicants:{ applications: [] }, 
  };
const applicationSlice=createSlice({
    name:"application",
    initialState,
    reducers:{
        setAllApplicants:(state,action) => {
            state.allApplicants=action.payload || { applications: [] };;
        },
    }
})


export const { setAllApplicants} = applicationSlice.actions;

export default applicationSlice.reducer;