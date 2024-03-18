import React from "react";
import ReactDOM from "react-dom/client";
import { DataProvider } from "./context/dataContext.jsx";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/style.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>
);
