const Company = require("../models/companyModel");
const getDataUri = require("../utilis/dataUri");
const cloudinary = require("../utilis/clodinary");
const mongoose=require('mongoose');

const registerCompany = async (req, res) => {
  try {
    const { name, description, website, location, logo } = req.body;

    // Check if company name is provided
    if (!name) {
      return res.status(400).json({ msg: "Company name is required" });
    }

    // Check if the company already exists
    const company = await Company.findOne({ name });
    if (company) {
      return res.status(400).json({ msg: "You can't register same company." });
    }

    const newCompany = await Company({
      name,
      description,
      website,
      location,
      logo,
      userId: req.userId,
    });

    await newCompany.save();

    return res
      .status(201)
      .json({ msg: "Company registered successfully.", newCompany });
  } catch (error) {
    console.error("Error while register user", error);
    return res
      .status(500)
      .json({ msg: "Server error. Please try again later." });
  }
};

const getCompanies = async (req, res) => {
  try {
    const userId = req.userId;
    const companies = await Company.find({ userId });
    if (companies.length === 0) {
      return res.status(404).json({ msg: "No such companies found" });
    }
    return res.status(200).json({ companies });
  } catch (error) {
    console.error("Error while getting companies", error);
    return res
      .status(500)
      .json({ msg: "Server error. Please try again later." });
  }
};

const getCompanyById = async (req, res) => {
  const companyId = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(companyId)) {
      return res.status(400).json({ message: "Invalid company ID" });
    }
    const company = await Company.findById(companyId);
    if (!company) {
      return res.status(404).json({ msg: "company not found" });
    }
    return res.status(200).json({ company });
  } catch (error) {
    console.error("Error while getting company", error);
    return res
      .status(500)
      .json({ msg: "Server error. Please try again later." });
  }
};

const updateCompany = async (req, res) => {
  try {
    const { name, description, website, location } = req.body;

    const file = req.file;
    const fileUri = getDataUri(file);
    const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
    const logo = cloudResponse.secure_url;

    const id = req.params.id;
    // Update company by ID and return the updated document
    const company = await Company.findByIdAndUpdate(
      id,
      { name, description, website, location, logo },
      { new: true }
    );

    if (!company) {
      return res.status(404).json({ msg: "company not found" });
    }
    return res.status(200).json({
      message: "Company information updated.",
      company,
    });
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
