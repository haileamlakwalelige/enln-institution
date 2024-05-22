import { Route, Routes } from "react-router-dom";
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
import Lessons from "./screens/Lessons";
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

const App = () => {
  return (
    <>
      <HeaderTop />
      <Navbar2 />
      <div className="mt-32"></div>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/course-line" element={<CourseLine />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/buy/:id" element={<Buy />} />{" "}
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/coursa" element={<Coursa />} />
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
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/add-to-cart" element={<AddToCart />} />
        <Route path="/lesson" element={<Lessons />} />
        <Route path="/course" element={<CourseAll />} />
        <Route path="/course/:id" element={<CourseDescription />} />
        <Route path="*" element={<Four0four />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
