import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import { AppContextWrapper } from "./context/coin.context";

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <AppContextWrapper>
    <App />
  </AppContextWrapper> 
  </BrowserRouter>
</React.StrictMode>,
  document.getElementById("root")
);
