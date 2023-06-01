import React from "react";
import Header from "../offScreen/Header.jsx";
import Sidebar from "../offScreen/Sidebar.jsx";

export default function Home() {
  return (
    <>
      <Header />
      <div className="mainForHome">
        <Sidebar />
        <div className="homeMain">
          <br></br>
          <div className="makeAPost">
            <h3>Hello there Test!</h3>
            <h6>Make a Post</h6>
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
        </div>
      </div>
    </>
  );
}
