import React from "react";
import Header from "../offScreen/Header.jsx";
import Sidebar from "../offScreen/Sidebar.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faFlag,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import data from "./data.js";
import RightBar from "../offScreen/RightBar.jsx";

export default function Account() {
  return (
    <div style={{ overflow: "hidden", height: "100vh" }}>
      <Header />
      <div className="mainForHome">
        <Sidebar />
        <div className="homeMain">
          <br></br>
          <div className="makeAPost">
            <h3>Hello there Test!</h3>
            <h6>Make a Post</h6>
            <input type="file" id="file" style={{ display: "none" }} />
            <label htmlFor="file" className="fontDeduction1 imageClass1">
              <img src="/file.jpg" alt="image" />
              Select a Pic
            </label>
            <label className="fontDeduction1">Share something</label>
            <input
              className="classNameForInputBecauseIDontKnowWhatElseToNameThis"
              type="text"
              name="username"
            />
            <div className="buttons">
              <button style={{ width: "80%", minWidth: "200px" }} type="submit">
                Post
              </button>
            </div>
          </div>
          <h2 style={{ color: "black" }}>Your Feed</h2>

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
        <RightBar />
      </div>
    </div>
  );
}
