import { deleteDocument } from "../../scripts/firebase/fireStore";

import placeholder from "../../assets/images/placeholder.jpg";
// import FormDelete from "components/FormDelete";
// import FormImage from "components/FormImage";
// import FormUpdate from "components/FormUpdate";
import fields from "../../data/studyItemFields.json";
import UpdateItemForm from "../form/UpdateItemForm";
import { useModal } from "../../state/ModalContext";
import { useItems } from "../../state/ItemsContext";

export default function AdminStudyMaterialItem({ item, path }) {
  const { dispatch } = useItems();
  const { id, title, file, url } = item;

  const { setModal } = useModal();

  const studyItemType = file === "" ? url : file;

  //   const ImageForm = <FormImage path={path} data={item} imageKey="image_url" />;
  //   const UpdateForm = <FormUpdate path={path} fields={fields} data={item} />;
  //   const DeleteForm = <FormDelete path={path} id={item.id} />;
  async function deleteHandler(id) {
    const message = `Are you sure you want to delete ${title}`;
    const result = window.confirm(message);

    if (!result) return;

    await deleteDocument(path, id);
    dispatch({ type: "delete", payload: id });
  }

  return (
    <article className="study-item-card">
      <h2>{title}</h2>
      {file && (
        <img src={!file ? placeholder : file} width="100" height="100" />
      )}
      {url && (
        <a target="_blank" href={url}>
          {title}
        </a>
      )}

      <div className="button-group">
        <button
          onClick={() =>
            setModal(
              <UpdateItemForm
                path={path}
                fields={!file ? fields.itemLink : fields.itemFile}
                data={item}
                // type={studyItemType}
              />
            )
          }
        >
          Edit
        </button>
        <button onClick={() => deleteHandler(id)}>Delete</button>
      </div>
    </article>
  );
}
