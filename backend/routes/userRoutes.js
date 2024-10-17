const express=require("express");
const router=express.Router();
const { 
    userRegister, 
    userLogin, 
    userLogout, 
    userProfileUpdate
}=require("../controllers/userController");
const authenticate=require("../middlewares/authenticate")

router.post("/register", userRegister)
router.post("/login", userLogin)
router.patch("/profile/update",authenticate,userProfileUpdate)
router.get("/logout",userLogout)

module.exports=router