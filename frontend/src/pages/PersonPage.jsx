import React, { useEffect, useState } from "react";
import Header from "./offScreen/Header.jsx";
import Sidebar from "./offScreen/Sidebar.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faFlag,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import RightBar from "./offScreen/RightBar.jsx";

export default function PersonPage() {
  return (
    <div style={{ overflow: "hidden", height: "100vh" }}>
      <Header />
      <div className="mainForHome">
        <Sidebar />
        <div className="homeMain">
          <br></br>
          <div className="makeAPost">
            <h2>Test</h2>
            <div className="allBanners">
              <div className="banner">
                <img
                  style={{ width: "100%", height: "300px" }}
                  src="./tree.jpg"
                />
              </div>
              <div className="bannerTwo">
                <img
                  style={{
                    width: "125px",
                    height: "125px",
                    borderRadius: "50%",
                  }}
                  src="./tree.jpg"
                />
              </div>
            </div>
          </div>

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
