import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.scss";
import { DarkModeContextProvider } from "./organism/context/DarkModeContext";

ReactDOM.render(
  <DarkModeContextProvider>
    <App />
  </DarkModeContextProvider>,
  document.getElementById("root")
);
