import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    singleCompany:null,
    companies:[],
    searchCompanyByText:""
}
    

const companySlice=createSlice({
    name:"company",
    initialState,
    reducers:{
        setSingleCompany:(state,action) => {
            state.singleCompany=action.payload;
        },
        setAllCompanies:(state,action) => {
            state.companies=action.payload;
        },
        setSearchCompanyByText:(state,action) => {
            state.searchCompanyByText=action.payload
        }
    }
})


export const { 
    setSingleCompany,
    setAllCompanies,
    setSearchCompanyByText,
} = companySlice.actions;

export default companySlice.reducer;