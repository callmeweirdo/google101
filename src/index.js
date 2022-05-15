import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ResultContextProvider } from "./context/ResultContextProvider";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ResultContextProvider>
      <Router>
        <App />
      </Router>
    </ResultContextProvider>
  </React.StrictMode>
);
