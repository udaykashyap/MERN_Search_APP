import React from "react";
import { Route, Routes } from "react-router";
import AdminPage from "../Page/AdminPage";
import Greeting from "./Greeting";

const Router = () => {
  return (
    <Routes>
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/" element={<Greeting />} />
    </Routes>
  );
};

export default Router;
