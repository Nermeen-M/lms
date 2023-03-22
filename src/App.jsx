import { useState, useEffect } from "react";

import { readDocuments } from "./scripts/firebase/fireStore";
import { useCourses } from "./state/CoursesContext";
import Router from "./components/Router";
import LoadingScreen from "./components/shared/LoadingScreen";
import Modal from "./components/shared/Modal";

export default function App() {
  const { dispatch } = useCourses();

  const [status, setStatus] = useState("loading");
  const collectionName = "courses";

  useEffect(() => {
    loadData(collectionName);
  }, []);

  async function loadData(collectionName) {
    const data = await readDocuments(collectionName).catch(onFail);
    onSuccess(data);
  }

  function onSuccess(data) {
    dispatch({ type: "initializeArray", payload: data });
    setStatus("ready");
  }

  function onFail() {
    setStatus("error");
  }

  return (
    <div className="App">
      {status === "loading" && <LoadingScreen />}
      {status === "error" && <p>Error</p>}
      {status === "ready" && <Router />}
      <Modal />
    </div>
  );
}
