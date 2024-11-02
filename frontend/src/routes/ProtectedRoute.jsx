import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
    const { user } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    useEffect(()=>{
        if(user === null || user.role !== 'recruiter'){
            navigate("/");
        }
    },[user, navigate]);

    return  <>{children}</>;
};
