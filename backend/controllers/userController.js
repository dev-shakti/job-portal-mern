const User=require("../models/userModel")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

//creating token
const createToken = (id) => {
    return jwt.sign({id},process.env.SECRET_KEY, {expiresIn:"1d"})
}

const userRegister = async(req,res) => {
   const {fullname,email,password, phoneNumber, role}=req.body;
   
   // Validate required fields
   if (!fullname || !email || !phoneNumber || !password){
       return res.status(400).json({msg:"All fields are required"});
   } 

  try {
     // Check if user already exists
    const  existingUser=await User.findOne({email});
    if(existingUser){
     return res.status(400).json({msg:"User already exist with this email."});
    }

     // Hash the password
    const hashedPassword=await bcrypt.hash(password, 10);

     // Create the new user
     const newUser = await User.create({
        fullname, 
        email,
        password:hashedPassword, 
        phoneNumber,
        role
    })
   
    return res.status(201).json({
        message: "Account created successfully.",
        userId: newUser._id
    });
  } catch (error) {
    console.error("Error while user registration", error);
    return res.status(500).json({ msg: "Server error. Please try again later." });
  }
}

const userLogin = async(req,res) => {
  const {email,password,role}=req.body;
   
   // Validate required fields
   if (!email || !password){
       return res.status(400).json({msg:"All fields are required"});
   } 

   try {
    // Find user by email
      const user=await User.findOne({email})
      if(!user) {
        return res.status(400).json({msg:"Incorrect email"});
      }

     // Check if the password matches
      const isMatchPassword=await bcrypt.compare(password, user.password)
      if(!isMatchPassword){
        return res.status(400).json({msg:"Incorrect password"});
      }

       // check role is correct or not
       if (role !== user.role) {
        return res.status(400).json({
            message: "Account doesn't exist with current role."});
    };

     // Create JWT token
    const token=createToken(user._id);

    user = {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
        phoneNumber: user.phoneNumber,
        role: user.role,
        profile: user.profile
    }

    // Set cookie with JWT
    return res.status(200).cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpsOnly: true, sameSite: 'strict' }).json({
        msg:`Welcome back ${user.fullname}`,
        user
    })

   } catch (error) {
    console.error("Error while user login", error);
    return res.status(500).json({ msg: "Server error. Please try again later." });
   }
}

const userLogout = async(req,res) => {
    try {
        return res.status(200).cookie("token", "", { maxAge: 0 }).json({
            message: "Logged out successfully."
        })
    } catch (error) {
        console.error("Error while user login", error);
        return res.status(500).json({ msg: "Server error. Please try again later." });
    }
}

const userupdate = async(req,res) => {
  try {
    const { fullname, email, phoneNumber, bio, skills } = req.body;
  } catch (error) {
    console.error("Error while updating user", error);
    return res.status(500).json({ msg: "Server error. Please try again later." });
  }
}