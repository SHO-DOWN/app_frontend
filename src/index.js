import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Router from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App/Assets/css/general.css";
import "./App/Assets/css/style.scss";


ReactDOM.render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>,

  document.getElementById("root")
);

reportWebVitals();
