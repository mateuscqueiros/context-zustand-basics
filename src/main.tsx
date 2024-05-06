import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { TrucoStoreProvider } from "./context/truco.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TrucoStoreProvider>
      <App />
    </TrucoStoreProvider>
  </React.StrictMode>,
);
