const express=require("express");
const router=express.Router();
const { 
    userRegister, 
    userLogin, 
    userLogout, 
    userProfileUpdate
}=require("../controllers/userController");
const authenticate=require("../middlewares/authenticate");
const singleUpload = require("../middlewares/multer");

router.post("/register",singleUpload, userRegister)
router.post("/login", userLogin)
router.put("/profile/update",authenticate,singleUpload,userProfileUpdate)
router.get("/logout",userLogout)

module.exports=router