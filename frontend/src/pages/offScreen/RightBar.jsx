import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
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
      className="sideBar"
      style={{ display: isSidebarOpen ? "flex" : "none" }}
    >
      <h2>Controls</h2>
      <ul>
        <li onClick={home}>Home</li>
        <li>HS Video</li>
        <li onClick={account}>Account</li>
        <li>Friends</li>
        <li>News</li>
        <li>Followers</li>
        <li>Following</li>
        <li onClick={logOut}>Log Out</li>
      </ul>

      <>
        <h2 className="hidden">Your Friends</h2>
        <h5 className="hidden">Recent Chats</h5>
        <ul className="hidden">
          <li className="hidden">Homee</li>
          <li className="hidden">HS Video</li>
          <li className="hidden">Account</li>
          <li className="hidden">Friends</li>
          <li className="hidden">Followers</li>
          <li className="hidden">Following</li>
          <li className="hidden">Log Out</li>
        </ul>
      </>
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
