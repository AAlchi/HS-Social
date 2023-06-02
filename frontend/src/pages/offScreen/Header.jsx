import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Header() {
  const phone = useSelector((state) => state.someSlice.phone);

  const dispatch = useDispatch();

  const changePhone = () => {
    dispatch({ type: "TOGGLE_SIDEBAR" });
  };

  return (
    <header>
      <div className="headerLogo">
        <div>
          <img src="/logo.png" alt="image" />
          <h1 style={{ fontSize: "30px" }}>HS Social</h1>
        </div>
      </div>
      <div onClick={changePhone} id="phone" className="phone">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </header>
  );
}
