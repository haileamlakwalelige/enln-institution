import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./screens/HomePage";
import Footer from "./components/layout/Footer";
import CourseLine from "./components/courses/CourseLine";
import SignUp from "./screens/SignUp";
import Login from "./screens/Login";
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
import Checkout from "./screens/Checkout";
import HeaderTop from "./components/Reusable/HeaderTop";
import Navbar2 from "./components/layout/Navbar2";
import CourseDescription from "./screens/CourseDescription";
import CourseAll from "./components/courses/CourseAll";
import ScrollToTop from "./ScrollToTop";
import Pay from "./screens/Pay";
import Coursa from "./components/try/Coursa";
import Buy from "./screens/Buy";
import Payment from "./screens/Payment";
import ProtectedRoute from "./components/ProtectedRoute";
import { useEffect, useState } from "react";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in (e.g., by checking localStorage or cookies)
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);
  return (
    <>
      <HeaderTop />
      <Navbar2 />
      <div className="mt-32"></div>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={
            isLoggedIn ? <Navigate to="/dashboard" replace /> : <Login />
          }
        />
        <Route
          path="/signup"
          element={
            isLoggedIn ? <Navigate to="/dashboard" replace /> : <SignUp />
          }
        />
        <Route path="/coursa" element={<Coursa />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/pay" element={<Pay />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/buy/:slug" element={<Buy />} />{" "}
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/course-line/:slug" element={<CourseLine />} />
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
          zz
          <Route
            path="/Dashboard"
            element={
              <ProfileDashboard>
                <Dashboard />
              </ProfileDashboard>
            }
          />
        </Route>

        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/favorite" element={<AddToCart />} />
        <Route path="/course" element={<CourseAll />} />
        <Route path="/course/:slug" element={<CourseDescription />} />
        <Route path="*" element={<Four0four />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
