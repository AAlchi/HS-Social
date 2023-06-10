import React from "react";
import Header from "../offScreen/Header.jsx";
import Sidebar from "../offScreen/Sidebar.jsx";
import RightBar from "../offScreen/RightBar.jsx";

export default function Friends() {
  return (
    <div style={{ overflow: "hidden", height: "100vh" }}>
      <Header />
      <div className="mainForHome">
        <Sidebar />
        <div className="homeMain">
          <br></br>
          <div className="makeAPost">
            <h2>Friends</h2>
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
