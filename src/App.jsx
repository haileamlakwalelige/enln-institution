import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Header from "./components/Reusable/HeaderBefore";
import HomePage from "./screens/HomePage";
import Footer from "./components/layout/Footer";
import CourseLine from "./components/courses/CourseLine";
import SignUp from "./screens/SignUp";
import Login from "./screens/Login";
import HomeGov from "./screens/HomeGov";

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
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
