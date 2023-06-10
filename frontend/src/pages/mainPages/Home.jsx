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
import People from "../components/People.jsx";

export default function Home() {
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
          <h2 style={{ marginLeft: "0px" }}>People You Might Know</h2>
          <People />
          <h2 style={{ color: "black" }}>Your Feed</h2>

          {data.posts
            .sort((a, b) => {
              const first = new Date(a.date);
              const second = new Date(b.date);
              return first - second;
            })
            .map((post) => (
              <div className="postCard">
                <div className="postCardFirst">
                  <label className="fontDeduction1 imageClass1">
                    <img src="/file.jpg" alt="image" />
                    {post.username}
                  </label>
                  <label className="fontDeduction1 imageClass1">
                    Published on {post.date}
                  </label>
                </div>
                <div className="postCardFourth">
                  <div className="postCardSecond">
                    <img src={post.image} alt="image" />
                  </div>
                  <label className="fontDeduction1 imageClass1">
                    {post.description}
                  </label>
                  <div className="postCardThird">
                    <label className="fontDeduction1 imageClass1">
                      <FontAwesomeIcon icon={faThumbsUp} color="blue" />
                      Like
                    </label>
                    <label className="fontDeduction1 imageClass1">
                      <FontAwesomeIcon icon={faThumbsDown} />
                      Dislike
                    </label>
                    <label className="fontDeduction1 imageClass1">
                      <FontAwesomeIcon icon={faFlag} />
                      Report
                    </label>
                    <label className="fontDeduction1 imageClass1">
                      <FontAwesomeIcon icon={faComment} />
                      Leave A Comment
                    </label>
                  </div>
                </div>
              </div>
            ))}

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
