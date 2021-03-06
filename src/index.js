import React, { Fragment, StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";

const app = ReactDOM.createRoot(document.getElementById("app"));
app.render(
  <StrictMode>
    <Fragment>
      <App />
    </Fragment>
  </StrictMode>
);
