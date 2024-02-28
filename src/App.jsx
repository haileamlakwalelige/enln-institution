import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Header from "./components/Reusable/HeaderBefore";
import HomePage from "./screens/HomePage";
import Footer from "./components/layout/Footer";
import CourseLine from "./components/courses/CourseLine";
import SignUp from "./screens/SignUp";
import Login from "./screens/Login";
import HomeGov from "./screens/HomeGov";
import ProfileDashboard from "./components/Profile/ProfileDashboard";
import Support from "./components/Profile/Support";
import { Setting } from "./components/Profile/Setting";
import MyCourses from "./components/Profile/MyCourses";
import Certificate from "./components/Profile/Certificate";
import Dashboard from "./components/Profile/Dashboard";
import Four0four from "./components/Reusable/Four0four";

const App = () => {
  return (
    <>
      {/* <Header /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="course-line" element={<CourseLine />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/gov-home" element={<HomeGov />} />
          <Route
            path="/certificate"
            element={
              <ProfileDashboard>
                <Certificate />
              </ProfileDashboard>
            }
          />
          <Route
            path="/settings"
            element={
              <ProfileDashboard>
                <Setting />
              </ProfileDashboard>
            }
          />
          <Route
            path="/support"
            element={
              <ProfileDashboard>
                <Support />
              </ProfileDashboard>
            }
          />
          <Route
            path="/my-courses"
            element={
              <ProfileDashboard>
                <MyCourses />
              </ProfileDashboard>
            }
          />
          <Route
            path="/Dashboard"
            element={
              <ProfileDashboard>
                <Dashboard />
              </ProfileDashboard>
            }
          />
          <Route path="*" element={<Four0four />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
