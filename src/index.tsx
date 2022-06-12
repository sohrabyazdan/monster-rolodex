import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";

const app = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
app.render(
  <StrictMode>
    <App />
  </StrictMode>
);
