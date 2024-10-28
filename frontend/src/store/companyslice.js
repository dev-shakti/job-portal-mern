import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading:false,
    singleCompany:null,
    companies:[],
    searchCompanyByText:""
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
    setLoading,
    setSearchCompanyByText
} = companySlice.actions;

export default companySlice.reducer;