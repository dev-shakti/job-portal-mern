const express=require("express");
const router=express.Router();
const { 
    registerCompany, 
    getCompanies, 
    getCompanyById, 
    updateCompany 
}=require("../controllers/companyController");
const authenticate=require("../middlewares/authenticate");

// Register a new company
router.post("/registercompany", authenticate, registerCompany);

// Get all companies for the authenticated user
router.get("/getCompanies", authenticate, getCompanies);

// Get a company by ID
router.get("/getCompany/:id", authenticate, getCompanyById);

// Update a company by ID
router.put("/updateCompany/:id", authenticate, updateCompany);

module.exports=router;