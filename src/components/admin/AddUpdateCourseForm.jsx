import { useState, useRef } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import {
  createDocumentWithManualId,
  updateDocument,
} from "../../scripts/firebase/fireStore";
import { uploadFile, downloadFile } from "../../scripts/firebase/cloudStorage";
import { useCourses } from "../../state/CoursesContext";
import { useModal } from "../../state/ModalContext";
import ImagePreview from "../ImagePreview";
import LoadingScreen from "../shared/LoadingScreen";
import placeholder from "../../assets/images/placeholder.jpg";

export default function AddUpdateCourseForm() {
  const { dispatch } = useCourses();
  const { setModal } = useModal();

  const imageRef = useRef(null);
  const [isloading, setIsloading] = useState(false);
  const manualId = uuidv4() + "_" + Date.now();
  const collectionName = "courses";
  const initialValues = { title: "", image: null };

  function validate(values) {
    const errors = {};

    if (!values.title) {
      errors.title = "Required";
    } else if (values.title.trim().length === 0) {
      errors.title = "Must contains character";
    }

    if (!values.image) {
      errors.image = "Required";
    }

    return errors;
  }

  async function onSubmit(values, { setSubmitting }) {
    // setSubmitting(false);
    setIsloading(true);
    const file = values.image;
    const filePath = `courses/${manualId}_${file.name}`;

    await uploadFile(file, filePath);
    values.image = await downloadFile(filePath);

    await createDocumentWithManualId(collectionName, manualId, values);
    dispatch({ type: "create", payload: { id: manualId, ...values } });

    setIsloading(false);
    setModal(null);
  }

  return (
    <div>
      {isloading ? (
        <LoadingScreen />
      ) : (
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validate={validate}
        >
          {({ values, setFieldValue }) => (
            <Form>
              <label htmlFor="title">Title</label>
              <Field name="title" type="text" />
              <ErrorMessage name="title" />

              <label htmlFor="image">Image</label>
              {/* {isloading && (
            <div className="spinner">
              <FontAwesomeIcon icon={solid("spinner")} spin />
            </div>
          )} */}
              <input
                // name="image"
                ref={imageRef}
                hidden
                type="file"
                accept="image/png, image/jpeg"
                onChange={(event) => {
                  setFieldValue("image", event.target.files[0]);
                }}
              />
              {values.image && <ImagePreview file={values.image} />}
              <button
                onClick={() => {
                  imageRef.current.click();
                }}
              >
                Upload
              </button>
              <ErrorMessage name="image" />

              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
}
