import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

// import { useCourses } from "../state/useCourses";

export default function AdminCourseItem({ item }) {
  //   const { dispatch } = useCourses();

  const { id, title, image } = item;

  async function editHandler() {
    // setModal(
    //   <AddUpdateCategoryForm
    //     collectionName={collectionName}
    //     formStatus={"edit"}
    //     setModal={setModal}
    //     item={item}
    //   />
    // );
  }

  async function deleteHandler(id) {
    // const message = `Are you sure you want to delete ${title}`;
    // const result = window.confirm(message);
    // if (!result) return;
    // await deleteDocument(collectionName, id);
    // dispatch({ type: "delete", payload: id });
  }

  <div className="course-item">
    <img width="100" src={image} />
    <h3>{title}</h3>
    <button onClick={editHandler}>
      <FontAwesomeIcon icon={solid("pen-to-square")} />
    </button>
    <button onClick={() => deleteHandler(id)}>
      <FontAwesomeIcon icon={solid("trash-can")} />
    </button>
  </div>;
}
