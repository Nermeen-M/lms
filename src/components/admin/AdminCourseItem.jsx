import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

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

  async function deleteHandler(id) {
    const message = `Are you sure you want to delete ${title}`;
    const result = window.confirm(message);

    if (!result) return;

    await deleteDocument(collectionName, id);
    dispatch({ type: "delete", payload: id });
  }

  return (
    <div className="course-card">
      <div className="image-container">
        <img src={!image ? placeholder : image} width="100" height="100" />
      </div>
      <div className="details">
        <h3>{title}</h3>
        <div className="buttons-group">
          <Link to={`/courses/${id}`}>
            <FontAwesomeIcon icon={solid("arrow-right")} />
          </Link>

          <button
            onClick={() =>
              setModal(
                <UpdateItemForm path={path} fields={fields} data={item} />
              )
            }
          >
            <FontAwesomeIcon icon={solid("pen-to-square")} />
          </button>
          <button onClick={() => deleteHandler(id)}>
            {" "}
            <FontAwesomeIcon icon={solid("trash-can")} />
          </button>
        </div>
      </div>
    </div>
  );
}
