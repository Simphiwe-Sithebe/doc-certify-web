import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App";
import "./index.css";
import "./styles/theme.css";
import "tailwindcss/tailwind.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
