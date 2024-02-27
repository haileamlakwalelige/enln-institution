import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Reusable/HeaderBefore";
import HomePage from "./screens/HomePage";

const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
