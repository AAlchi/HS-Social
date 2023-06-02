import React from "react";
import Login from "./pages/authentication/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/authentication/signup/Signup";
import Home from "./pages/mainPages/Home";
import Account from "./pages/mainPages/Account";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
