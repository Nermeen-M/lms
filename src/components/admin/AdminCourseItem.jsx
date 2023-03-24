import { deleteDocument } from "../../scripts/firebase/fireStore";
import { useItems } from "../../state/ItemsContext";
import { useModal } from "../../state/ModalContext";
import fields from "../../data/courseFields.json";
import placeholder from "../../assets/images/placeholder.jpg";

import UpdateItemForm from "../form/UpdateItemForm";

export default function AdminCourseItem({ item, path }) {
  const { dispatch } = useItems();
  const { setModal } = useModal();

  const { id, title, image } = item;
  const collectionName = "courses";
  const isEditMode = true;

  async function deleteHandler(id) {
    const message = `Are you sure you want to delete ${title}`;
    const result = window.confirm(message);

    if (!result) return;

    await deleteDocument(collectionName, id);
    dispatch({ type: "delete", payload: id });
  }

  return (
    <div>
      <h1>{title}</h1>
      <img src={!image ? placeholder : image} width="100" height="100" />
      <button
        onClick={() =>
          setModal(<UpdateItemForm path={path} fields={fields} data={item} />)
        }
      >
        Edit
      </button>
      <button onClick={() => deleteHandler(id)}>Delete</button>
    </div>
  );
}
