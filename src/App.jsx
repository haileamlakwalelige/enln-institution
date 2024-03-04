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
import ForgetPassword from "./screens/ForgetPassword";
import Categories from "./screens/Categories";
import AddToCart from "./screens/AddToCart";
import Lessons from "./screens/Lessons";
import OrganizationHome from "./screens/OrganizationHome";
import Checkout from "./screens/Checkout";
import GovForm from "./screens/GovForm";
import OrgForm from "./screens/OrgGov";
import VerticalCard from "./components/Reusable/VerticalCard";
import HeaderTop from "./components/Reusable/HeaderTop";
import HeaderMiddle from "./components/Reusable/HeaderMiddle";

const App = () => {
  return (
    <>
      {/* <Header /> */}
      <div className="mb-32">
      <HeaderTop />
      <HeaderMiddle />
      </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="course-content" element={<CourseLine />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/gov-home" element={<HomeGov />} />
          <Route path="/org-home" element={<OrganizationHome />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/gov-form" element={<GovForm />} />
          <Route path="org-form" element={<OrgForm />} />
          <Route path="vertical" element={<VerticalCard />} />
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
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/add-to-cart" element={<AddToCart />} />
          <Route path="/lesson" element={<Lessons />} />
        </Routes>
      <Footer />
    </>
  );
};

export default App;
