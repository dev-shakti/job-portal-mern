const jwt=require("jsonwebtoken");

const authenticate = async(req,res,next) => {
     try {
        const token=req.cookies.token;
        if(!token){
            return res.status(401).json({msg:"Authorization token is required"});
        }
        
        // Verify the token 
        const decode=jwt.verify(token, process.env.SECRET_KEY);
        console.log(decode)
        if(!decode){
            return res.status(401).json({msg:"Invalid token"});
        }

        req.id=decode.id;
        next()
     } catch (error) {
        console.error("Error during authentication:", error);
        return res.status(401).json({ msg: "Invalid or expired token" });
     }
}

module.exports=authenticate;