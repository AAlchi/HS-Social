import React, { useEffect, useState } from "react";
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
  const [editingAccount, setEditingAccount] = useState(false);
  const [accountStatus, setAccountStatus] = useState("public");

  const handleAccountStatusChange = (event) => {
    const status = event.target.value;
    setAccountStatus(status);
  };

  const editAccount = () => {
    setEditingAccount(!editingAccount);
  };

  return (
    <div style={{ overflow: "hidden", height: "100vh" }}>
      <Header />
      <div className="mainForHome">
        <Sidebar />
        <div className="homeMain">
          <br></br>
          <div className="makeAPost">
            <h2>Your Account</h2>
            <div className="inputsForAccount">
              <div>
                <label>Full Name</label>
                {editingAccount ? (
                  <input type="text" />
                ) : (
                  <span style={{ padding: "10px" }}>
                    - ThisIsTheTestFullName
                  </span>
                )}
              </div>
              <div>
                <label>Username</label>
                {editingAccount ? (
                  <input type="text" />
                ) : (
                  <span style={{ padding: "10px" }}>
                    - ThisIsTheTestFullName
                  </span>
                )}
              </div>
              <div>
                <label>Email</label>
                {editingAccount ? (
                  <input type="text" />
                ) : (
                  <span style={{ padding: "10px" }}>
                    - ThisIsTheTestFullName
                  </span>
                )}
              </div>
              <div>
                <label>Account Status</label>

                {editingAccount ? (
                  <>
                    <div>
                      <label>Public</label>
                      <input
                        checked={accountStatus === "public"}
                        onChange={handleAccountStatusChange}
                        value="public"
                        type="radio"
                      />
                    </div>
                    <div>
                      <label>Private</label>
                      <input
                        checked={accountStatus === "private"}
                        onChange={handleAccountStatusChange}
                        value="private"
                        type="radio"
                      />
                    </div>
                  </>
                ) : (
                  <span style={{ padding: "10px" }}>- Private</span>
                )}
              </div>
            </div>
            <div>
              {editingAccount ? (
                <button
                  style={{ backgroundColor: "blue" }}
                  className="AccountConfirmButton"
                  onClick={editAccount}
                >
                  Update Account
                </button>
              ) : (
                <button
                  style={{ backgroundColor: "blue" }}
                  className="AccountConfirmButton"
                  onClick={editAccount}
                >
                  Edit Account
                </button>
              )}
              <button>Change Password</button>
              <button>Delete Account</button>
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
