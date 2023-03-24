import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import AddItemForm from "../components/form/AddItemForm";
import data from "../data/studyItemData.json";
// import fields from "../data/studyItemFields.json";
import { readDocuments } from "../scripts/firebase/fireStore";
import { useItems } from "../state/ItemsContext";
import { useModal } from "../state/ModalContext";
import fields from "../data/studyItemFields.json";

import AdminStudyMaterialItem from "../components/admin/AdminStudyMaterialItem";

export default function AdminCourseDetails() {
  const { id } = useParams();
  const { setModal } = useModal();
  const { items, dispatch } = useItems();
  const navigate = useNavigate();

  const [status, setStatus] = useState("loading");
  const [studyItemType, setStudyItemType] = useState("");
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
    // setStudyItemType("file");
    setModal(<AddItemForm path={path} fields={fields.itemFile} data={data} />);
  }
  function addLinkHandler() {
    // setStudyItemType("link");
    setModal(<AddItemForm path={path} fields={fields.itemLink} data={data} />);
  }

  const studyItems = items.map((item) => (
    <AdminStudyMaterialItem key={item.id} item={item} path={path} />
  ));

  return (
    <div>
      Admin Course Details
      <button onClick={addFileHandler}>Add File</button>
      <button onClick={addLinkHandler}>Add Link</button>
      {studyItems}
    </div>
  );
}
