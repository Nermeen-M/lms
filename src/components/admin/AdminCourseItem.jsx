import { deleteDocument } from "../../scripts/firebase/fireStore";
import { useCourses } from "../../state/CoursesContext";
import { useModal } from "../../state/ModalContext";
import AddUpdateCourseForm from "./AddUpdateCourseForm";

export default function AdminCourseItem({ item }) {
  const { dispatch } = useCourses();
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
      <img src={image} width="100" height="100" />
      <button
        onClick={() =>
          setModal(<AddUpdateCourseForm isEditMode={isEditMode} item={item} />)
        }
      >
        Edit
      </button>
      <button onClick={() => deleteHandler(id)}>Delete</button>
    </div>
  );
}
