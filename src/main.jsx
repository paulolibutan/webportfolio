import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { ToggleContextProvider } from "./context/ToggleContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ToggleContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ToggleContextProvider>
);
