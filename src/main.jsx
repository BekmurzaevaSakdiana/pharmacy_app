import React from "react";
import { createRoot } from "react-dom";
import App from "./App.jsx";
import "./App.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
