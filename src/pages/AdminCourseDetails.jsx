import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import AddItemForm from "../components/form/AddItemForm";
import data from "../data/studyItemData.json";
import { readDocuments } from "../scripts/firebase/fireStore";
import { useItems } from "../state/ItemsContext";
import { useModal } from "../state/ModalContext";
import fields from "../data/studyItemFields.json";
import EmptyState from "../components/shared/EmptyState";
import LoadingScreen from "../components/shared/LoadingScreen";

import AdminStudyMaterialItem from "../components/admin/AdminStudyMaterialItem";

export default function AdminCourseDetails() {
  const { id } = useParams();
  const { setModal } = useModal();
  const { items, dispatch } = useItems();
  const navigate = useNavigate();

  const [status, setStatus] = useState("loading");
  const path = `courses/${id}/studyItems`;

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

  function addFileHandler() {
    setModal(<AddItemForm path={path} fields={fields.itemFile} data={data} />);
  }
  function addLinkHandler() {
    setModal(<AddItemForm path={path} fields={fields.itemLink} data={data} />);
  }

  const studyItems = items.map((item) => (
    <AdminStudyMaterialItem key={item.id} item={item} path={path} />
  ));

  return (
    <div className="container">
      {/* Formating -1 */}
      {/* Check the final version of the BBQ to make this cleaner */}
      {/* By putting the loading and error cases outside */}
      {/* Making the main return only handle the ready scenario */}
      {status === "loading" && <LoadingScreen />}
      {status === "error" && <p>Error</p>}
      {status === "ready" && (
        <div>
          <h1>Study Materials</h1>
          <div className="buttons-group">
            <button className="primary-button" onClick={addFileHandler}>
              Add File
            </button>
            <button className="primary-button" onClick={addLinkHandler}>
              Add Link
            </button>
          </div>

          <div className="study-items-list">
            {studyItems.length === 0 ? <EmptyState /> : studyItems}
          </div>

          {/* Im not fond of using maring-auto as a class */}
          {/* Note that if i remove the button becomes 1 line */}
          <button className="primary-button" onClick={() => navigate(-1)}>
            Go back
          </button>
        </div>
      )}
    </div>
  );
}
