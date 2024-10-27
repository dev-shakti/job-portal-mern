import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    singleCompany:null
}
    

const companySlice=createSlice({
    name:"company",
    initialState,
    reducers:{
        registerSingleCompany:(state,action) => {
            state.singleCompany=action.payload;
        },
    }
})


export const { registerSingleCompany} = companySlice.actions;

export default companySlice.reducer;