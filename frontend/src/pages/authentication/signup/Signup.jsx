import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="main">
      <form className="login">
        <div className="named"></div>
        <div className="seperate">
          <div className="inputs">
            <div className="names">
              <img
                style={{ width: "50px", height: "50px" }}
                src="./logo.png"
                alt="image"
              />

              <center>
                <h2 style={{ color: "black" }}>HS Social</h2>
              </center>
            </div>
            <h3>Sign Up</h3>
            <Link style={{ color: "black", marginTop: "10px" }} to="/login">
              Have an Account? Log In
            </Link>
            <label htmlFor="file">Choose File</label>

            <label htmlFor="file" className="fontDeduction1 imageClass1">
              <img src="/file.jpg" alt="image" />
              Select Profile Pic
            </label>
            <div>
              <input
                style={{ display: "none" }}
                id="file"
                className="underlineTwo"
                type="file"
              />
            </div>
            <label className="fontDeduction1">Username</label>
            <input type="text" name="username" />
            <label className="fontDeduction1">Full Name</label>
            <input type="text" name="username" />
            <label className="fontDeduction1">Email</label>
            <input type="text" name="username" />
            <label className="fontDeduction1">Password</label>
            <input type="text" name="password" />
          </div>
          <br></br>
          <div className="buttons">
            <button style={{ width: "100%", minWidth: "200px" }} type="submit">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
