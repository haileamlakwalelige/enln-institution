import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Header from "./components/Reusable/HeaderBefore";
import HomePage from "./screens/HomePage";
import Footer from "./components/layout/Footer";
import CourseLine from "./components/courses/CourseLine";
import SignUp from "./screens/SignUp";
import Login from "./screens/Login";

const App = () => {
  return (
    <>
      {/* <Header /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="course-line" element={<CourseLine />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
