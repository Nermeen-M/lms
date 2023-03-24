import { useState, useEffect } from "react";

import Router from "./components/Router";
import LoadingScreen from "./components/shared/LoadingScreen";
import Modal from "./components/shared/Modal";

export default function App() {
  return (
    <div className="App">
      <Router />
      <Modal />
    </div>
  );
}
