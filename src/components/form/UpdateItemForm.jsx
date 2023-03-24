import { useState } from "react";

import FieldsGenerator from "../../components/form/FieldsGenerator";
import { updateDocument } from "../../scripts/firebase/fireStore";
import { useModal } from "../../state/ModalContext";
import { useItems } from "../../state/ItemsContext";

export default function UpdateItemForm({ path, fields, data }) {
  const { setModal } = useModal();
  const { dispatch } = useItems();

  const [form, setForm] = useState(data);

  async function submitHandler(event) {
    event.preventDefault();

    const result = await updateDocument(path, form.id, form);

    result.status ? onSuccess() : onFailure(result.message);
  }

  function onSuccess() {
    dispatch({ type: "update", payload: form });
    setModal(null);
  }

  function onFailure(errorMessage) {
    alert(errorMessage);
  }

  return (
    <div className="formulary">
      <h2>Edit item</h2>
      <form onSubmit={(event) => submitHandler(event)}>
        <FieldsGenerator fields={fields} state={[form, setForm]} />
        <button>Confirm</button>
      </form>
    </div>
  );
}
