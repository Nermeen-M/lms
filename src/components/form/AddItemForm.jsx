import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import FieldsGenerator from "./FieldsGenerator";
import { createDocumentWithManualId } from "../../scripts/firebase/fireStore";
import { useModal } from "../../state/ModalContext";
import { useItems } from "../../state/ItemsContext";

export default function AddItemForm({ path, fields, data }) {
  const { setModal } = useModal();
  const { dispatch } = useItems();

  const [form, setForm] = useState(data);
  const manualId = uuidv4() + "_" + Date.now();

  // const isStudyItem = path.includes("studyItem");

  async function submitHandler(event) {
    event.preventDefault();

    const result = await createDocumentWithManualId(path, manualId, form);

    result.status ? onSuccess() : onFailure(result.message);
  }

  function onSuccess() {
    dispatch({ type: "create", payload: { id: manualId, ...form } });
    setModal(null);
  }

  function onFailure(errorMessage) {
    alert(errorMessage);
  }

  return (
    <div className="form">
      <h2>Add item</h2>
      <form onSubmit={(event) => submitHandler(event)}>
        <FieldsGenerator fields={fields} state={[form, setForm]} path={path} />
        <button>Confirm</button>
      </form>
    </div>
  );
}
