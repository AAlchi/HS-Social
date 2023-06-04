import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function RightBar() {
  const isSidebarOpen = useSelector((state) => state.someSlice.isSidebarOpen);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    navigate("/login");
  };

  const account = () => {
    navigate("/account");
  };

  const home = () => {
    navigate("/");
  };

  const toggleSidebar = () => {
    dispatch({ type: "TOGGLE_SIDEBAR" });
  };

  return (
    <div
      className="sideBar rightBar"
      style={{
        display: isSidebarOpen ? "flex" : "none",
      }}
    >
      <h2>Your Friends</h2>
      <h5>Recent Chats</h5>
      <ul>
        <li>Friend</li>
        <li>Friend</li>
        <li>Friend</li>
        <li>Friend</li>
        <li>Friend</li>
        <li>Friend</li>
        <li>Friend</li>
        <li>Friend</li>
        <li>Friend</li>
        <li>Friend</li>
        <li>Friend</li>
        <li>Friend</li>
        <li>Friend</li>
        <li>Friend</li>
      </ul>
      <br></br>
      <br></br>
      <h3>&copy; 2023 HS Social</h3>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}
