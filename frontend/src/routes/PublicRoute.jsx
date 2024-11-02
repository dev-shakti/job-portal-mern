import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const PublicRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/"); // Redirect to homepage or another route if user is authenticated
    }
  }, [user, navigate]);

  return !user ? children : null; // Render children only if user is not authenticated
};
