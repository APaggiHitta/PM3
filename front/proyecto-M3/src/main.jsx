import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/UserContext/UserProvider.jsx";
import { TurnsProvider } from "./context/TurnsContext/TurnsProvider.jsx";

import "./main.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <TurnsProvider>
          <App />
        </TurnsProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
