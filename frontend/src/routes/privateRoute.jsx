import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/auth/login"); // Redirect to login if user is not authenticated
    }
  }, [user, navigate]);

  return user ? children : null; // Render children only if user is authenticated
};
