import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import MovieContextProvider from "./context/MovieContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MovieContextProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </MovieContextProvider>
);

reportWebVitals();
