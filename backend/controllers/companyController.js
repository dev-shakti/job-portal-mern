const Company = require("../models/companyModel");

const registerCompany = async (req, res) => {
  try {
    const { name, description, website, location, logo } = req.body;

       // Check if company name is provided
    if(!name){
        return res.status(400).json({msg:"Company name is required"});
    }

    // Check if the company already exists
    const company=await Company.findOne({name:companyName});
    if(company){
        return res.status(400).json({msg:"You can't register same company."});
    }

    const newCompany=await Company({
        name:companyName,
        description,
        website,
        location,
        logo,
        userId:req.id
    })

    await newCompany.save();

    return res.status(201).json({message: "Company registered successfully.",newCompany});

  } catch (error) {
    console.error("Error while register user", error);
    return res
      .status(500)
      .json({ msg: "Server error. Please try again later." });
  }
};

const getCompanies = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error while getting companies", error);
    return res
      .status(500)
      .json({ msg: "Server error. Please try again later." });
  }
};

const getCompanyById = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error while getting company", error);
    return res
      .status(500)
      .json({ msg: "Server error. Please try again later." });
  }
};

const updateCompany = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error while updating company", error);
    return res
      .status(500)
      .json({ msg: "Server error. Please try again later." });
  }
};

module.exports = {
  registerCompany,
  getCompanies,
  getCompanyById,
  updateCompany,
};
