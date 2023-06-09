import React from "react";
import Login from "./pages/authentication/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/authentication/signup/Signup";
import Home from "./pages/mainPages/Home";
import Account from "./pages/mainPages/Account";
import News from "./pages/mainPages/News";
import PersonPage from "./pages/PersonPage";
import Friends from "./pages/mainPages/Friends";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/account" element={<Account />} />
        <Route path="/news" element={<News />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:idForPerson" element={<PersonPage />} />
      </Routes>
    </BrowserRouter>
  );
}

console.log(
  "This feature is for developers. Listening to any supposable hack you found will not work and will get your account hacked."
);
