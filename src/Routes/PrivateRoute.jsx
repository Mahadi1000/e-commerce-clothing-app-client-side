/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../firebase/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
  
    if (loading) {
      return "loading...";
    }
  
    if (user) {
      return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  };
  
  export default PrivateRoute;