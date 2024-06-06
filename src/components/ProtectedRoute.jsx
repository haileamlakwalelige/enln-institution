// src/components/ProtectedRoute.js
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { logout } from "../store/authSlice";
// import { logout } from "../store/authSlice";

const ProtectedRoute = () => {
  const { loading } = useSelector((state) => state.auth);
  const token = localStorage.getItem("token");
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const dispatch = useDispatch();


  useEffect(() => {
    if (!isAuthenticated && token) {
      // If Redux state says not authenticated but token exists, force logout
      localStorage.removeItem("token");
      localStorage.removeItem("favorite");
      // Optionally dispatch logout action to clear Redux state
      dispatch(logout());
    }else if (isAuthenticated && !token){
       // If Redux state says not authenticated but token exists, force logout
       localStorage.removeItem("token");
       localStorage.removeItem("favorite");
       // Optionally dispatch logout action to clear Redux state
       dispatch(logout());
    }else if(!isAuthenticated && !token){
       // If Redux state says not authenticated but token exists, force logout
       localStorage.removeItem("token");
       localStorage.removeItem("favorite");
       // Optionally dispatch logout action to clear Redux state
       dispatch(logout());
    }
  }, [isAuthenticated, token, dispatch]);

  if (loading) {
    return <div>Loading...</div>; // Handle loading state while checking authentication
  }

  if (!isAuthenticated || !token) {
    return <Navigate to="/login" />; // Redirect to login if not authenticated or no token
  }

  return <Outlet />; // Render nested routes if authenticated
};

export default ProtectedRoute;
