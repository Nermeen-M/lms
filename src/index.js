import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { ModalProvider } from "./state/ModalContext";
import { UserProvider } from "./state/UserContext";
import { CoursesProvider } from "./state/CoursesContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ModalProvider>
      <UserProvider storageKey="user-uid">
        <CoursesProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CoursesProvider>
      </UserProvider>
    </ModalProvider>
  </React.StrictMode>
);
