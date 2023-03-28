import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import { deleteDocument } from "../../scripts/firebase/fireStore";
import placeholder from "../../assets/images/placeholder.jpg";
import fields from "../../data/studyItemFields.json";
import UpdateItemForm from "../form/UpdateItemForm";
import { useModal } from "../../state/ModalContext";
import { useItems } from "../../state/ItemsContext";

export default function AdminStudyMaterialItem({ item, path }) {
  const { dispatch } = useItems();
  const { id, title, file, url } = item;
  const { setModal } = useModal();

  async function deleteHandler(id) {
    const message = `Are you sure you want to delete ${title}`;
    const result = window.confirm(message);

    if (!result) return;

    await deleteDocument(path, id);
    dispatch({ type: "delete", payload: id });
  }

  return (
    <div className="study-item-card">
      <p>{title}</p>

      <div className="button-group">
        <button
          onClick={() =>
            setModal(
              <UpdateItemForm
                path={path}
                fields={!file ? fields.itemLink : fields.itemFile}
                data={item}
              />
            )
          }
        >
          <FontAwesomeIcon icon={solid("pen-to-square")} />
        </button>
        <button onClick={() => deleteHandler(id)}>
          <FontAwesomeIcon icon={solid("trash-can")} />
        </button>
      </div>
    </div>
  );
}
