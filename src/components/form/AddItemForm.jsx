import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import FieldsGenerator from "./FieldsGenerator";
import { createDocumentWithManualId } from "../../scripts/firebase/fireStore";
import { useModal } from "../../state/ModalContext";
import { useCourses } from "../../state/CoursesContext";

export default function AddItemForm({ path, fields, data }) {
  const { setModal } = useModal();
  const { dispatch } = useCourses();

  const [form, setForm] = useState(data);
  const manualId = uuidv4() + "_" + Date.now();

  async function onSubmit(event) {
    event.preventDefault();

    const result = await createDocumentWithManualId(path, manualId, form);

    result ? onSuccess() : onFailure(result.message);
  }

  function onSuccess() {
    dispatch({ type: "create", payload: { id: manualId, ...form } });
    setModal(null);
  }

  function onFailure(errorMessage) {
    alert(errorMessage);
  }

  return (
    <div className="formulary">
      <h2>Add item</h2>
      <form onSubmit={(event) => onSubmit(event)}>
        <FieldsGenerator fields={fields} state={[form, setForm]} path={path} />
        <button>Confirm</button>
      </form>
    </div>
  );
}
