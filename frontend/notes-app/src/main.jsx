import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; // Make sure the path is correct
import "./App.css";          // optional: if you want global styles

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
