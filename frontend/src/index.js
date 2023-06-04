import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App";
import "./css/sideBar.css";
import { Provider } from "react-redux";
import store from "./store";
import "./css/card.css";
import "./css/account.css";
import "./css/people.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
