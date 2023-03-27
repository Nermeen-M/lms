import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { readDocument } from "../scripts/firebase/fireStore";
import LoadingScreen from "../components/shared/LoadingScreen";

export default function StudyItemDetails() {
  const { courseId, fileId } = useParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState("loading");
  const [currentItem, setCurrentItem] = useState({});

  useEffect(() => {
    loadData(courseId, fileId);
  }, []);

  async function loadData(courseId, fileId) {
    const collectionName = `courses/${courseId}/studyItems`;
    const data = await readDocument(collectionName, fileId).catch(onFail);

    onSuccess(data);
  }
  function onSuccess(data) {
    setCurrentItem(data.payload);
    setStatus("ready");
  }
  function onFail() {
    setStatus("error");
  }

  return (
    <div className="study-item-details">
      {status === "loading" && <LoadingScreen />}
      {status === "error" && <p>Error</p>}
      {status === "ready" && (
        <div className="container">
          <h1>{currentItem.title}</h1>
          <img src={currentItem.file} />
        </div>
      )}
      {/* Same with other page, remove the maring-auto class and becomes easier to read */}
      <button
        className="primary-button margin-auto"
        onClick={() => navigate(-1)}
      >
        Go back
      </button>
    </div>
  );
}
