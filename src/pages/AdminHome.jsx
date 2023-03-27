import { useState, useEffect } from "react";

import AdminCourseItem from "../components/admin/AdminCourseItem";
import EmptyState from "../components/shared/EmptyState";
import LoadingScreen from "../components/shared/LoadingScreen";
import AddItemForm from "../components/form/AddItemForm";
import { readDocuments } from "../scripts/firebase/fireStore";
import { useItems } from "../state/ItemsContext";
import { useModal } from "../state/ModalContext";
import data from "../data/courseData.json";
import fields from "../data/courseFields.json";

export default function AdminHome() {
  const { items, dispatch } = useItems();
  const { setModal } = useModal();

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
    <AdminCourseItem key={item.id} item={item} path={path} />
  ));

  // same as AdminCourseDetails, but the loading and eror outside to clean the code
  return (
    <div id="admin-home">
      {status === "loading" && <LoadingScreen />}
      {status === "error" && <p>Error</p>}
      {status === "ready" && (
        <div className="container">
          <h1>Home</h1>
          <h2>Courses</h2>
          <button
            className="primary-button center"
            onClick={() =>
              setModal(<AddItemForm path={path} fields={fields} data={data} />)
            }
          >
            Add new course
          </button>
          <div className="courses-list">
            {coursesList.length === 0 ? <EmptyState /> : coursesList}
          </div>
        </div>
      )}
    </div>
  );
}
