import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading:false,
    singleCompany:null,
    companies:[]
}
    

const companySlice=createSlice({
    name:"company",
    initialState,
    reducers:{
        setLoading:(state,action) => {
            state.isLoading=action.payload;
        },
        setSingleCompany:(state,action) => {
            state.singleCompany=action.payload;
        },
        getAllCompanies:(state,action) => {
            state.companies=action.payload;
        },
    }
})


export const { 
    setSingleCompany,
    getAllCompanies,
    setLoading
} = companySlice.actions;

export default companySlice.reducer;