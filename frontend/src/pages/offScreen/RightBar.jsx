import {
  faHouseChimney,
  faVideo,
  faPersonWalkingArrowRight,
  faNewspaper,
  faPeopleArrows,
  faChildReaching,
  faPersonWalking,
  faPersonBooth,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

  const news = () => {
    navigate("/news");
  };

  const home = () => {
    navigate("/");
  };

  return (
    <div
      className="sideBar"
      style={{ display: isSidebarOpen ? "flex" : "none" }}
    >
      <h2>Controls</h2>
      <ul>
        <li onClick={home}>
          <FontAwesomeIcon icon={faHouseChimney} /> Home
        </li>
        <li>
          {" "}
          <FontAwesomeIcon icon={faVideo} /> HS Video
        </li>
        <li onClick={account}>
          <FontAwesomeIcon icon={faChildReaching} /> Account
        </li>
        <li>
          <FontAwesomeIcon icon={faPeopleArrows} /> Friends
        </li>
        <li onClick={news}>
          <FontAwesomeIcon icon={faNewspaper} /> News
        </li>
        <li>
          <FontAwesomeIcon icon={faPersonBooth} /> Followers
        </li>
        <li>
          <FontAwesomeIcon icon={faPersonWalking} /> Following
        </li>
        <li onClick={logOut}>
          <FontAwesomeIcon icon={faPersonWalkingArrowRight} /> Log Out
        </li>
      </ul>

      <>
        <h2 className="hidden">Your Friends</h2>
        <h5 className="hidden">Recent Chats</h5>
        <ul className="hidden">
          <li className="hidden">Friend</li>
          <li className="hidden">Friend</li>
          <li className="hidden">Friend</li>
          <li className="hidden">Friend</li>
          <li className="hidden">Friend</li>
          <li className="hidden">Friend</li>
          <li className="hidden">Friend</li>
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
