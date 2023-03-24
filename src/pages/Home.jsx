import { useState, useEffect } from "react";

import { useItems } from "../state/ItemsContext";
import { readDocuments } from "../scripts/firebase/fireStore";
import CourseItem from "../components/CourseItem";
import LoadingScreen from "../components/shared/LoadingScreen";

export default function Home() {
  const { items, dispatch } = useItems();
  const [status, setStatus] = useState("loading");

  const path = "courses";

  useEffect(() => {
    loadData(path);
  }, []);

  async function loadData(path) {
    const result = await readDocuments(path);
    result.status ? onSuccess(result.payload) : onFailure(result.message);
  }

  function onSuccess(data) {
    dispatch({ type: "initializeArray", payload: data });
    setStatus("ready");
  }

  function onFailure(errorMessage) {
    alert(errorMessage);
    setStatus("error");
  }

  const coursesList = items.map((item) => (
    <CourseItem key={item.id} item={item} />
  ));

  return (
    <div id="home">
      {status === "loading" && <LoadingScreen />}
      {status === "error" && <p>Error</p>}
      {status === "ready" && (
        <div className="container">
          <h1>Home</h1>
          <h2>Courses</h2>
          <div className="courses-list">{coursesList}</div>
        </div>
      )}
    </div>
  );
}
