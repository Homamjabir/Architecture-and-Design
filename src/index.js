import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import './i18n';
import App from "./App";
import "./index.css";
import { Suspense } from "react";
 
ReactDOM.render(
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </BrowserRouter>, 
  document.getElementById("root")
);