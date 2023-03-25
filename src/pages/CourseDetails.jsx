import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { readDocuments } from "../scripts/firebase/fireStore";
import { useItems } from "../state/ItemsContext";

import LoadingScreen from "../components/shared/LoadingScreen";

import StudyMaterialItem from "../components/StudyMaterialItem";

export default function CourseDetails() {
  const { courseId } = useParams();
  const { items, dispatch } = useItems();
  const navigate = useNavigate();

  const [status, setStatus] = useState("loading");
  const path = `courses/${courseId}/studyItems`;

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const result = await readDocuments(path);

    result.status ? onSucess(result.payload) : onFailure(result.message);
  }

  function onSucess(data) {
    dispatch({ type: "initializeArray", payload: data });
    setStatus("ready");
  }

  function onFailure(errorMessage) {
    alert(errorMessage);
    setStatus("error");
  }

  const studyItems = items.map((item) => (
    <StudyMaterialItem key={item.id} item={item} path={path} />
  ));

  return (
    <div className="container">
      {status === "loading" && <LoadingScreen />}
      {status === "error" && <p>Error</p>}
      {status === "ready" && (
        <>
          <h1>Study Materials</h1>
          <div className="study-items-list">
            {studyItems.length === 0 ? (
              <p>There are no items in this list.</p>
            ) : (
              studyItems
            )}
          </div>

          <button
            className="primary-button margin-auto"
            onClick={() => navigate(-1)}
          >
            Go back
          </button>
        </>
      )}
    </div>
  );
}
