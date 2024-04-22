import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ element: Element, ...rest }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    // Store the current page URL in localStorage
    localStorage.setItem('prevPage', window.location.pathname);
    // Redirect to the login page
    return <Navigate to="/login" />;
  }

  // Render the private route component
  return <Route {...rest} element={<Element />} />;
};

export default PrivateRoute;
