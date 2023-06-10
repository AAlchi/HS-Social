import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/");
  };
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
            <h3>Log In</h3>
            <Link style={{ color: "black", marginTop: "10px" }} to="/signup">
              Need an Account? Sign Up
            </Link>
            <label className="fontDeduction1">Username</label>
            <input type="text" name="username" />
            <label className="fontDeduction1">Password</label>
            <input type="text" name="password" />
          </div>
          <br></br>
          <div className="buttons">
            <button
              onClick={handleLogin}
              style={{ width: "100%", minWidth: "200px" }}
              type="submit"
            >
              Log In
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
