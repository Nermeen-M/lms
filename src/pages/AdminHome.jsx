import AdminCourseItem from "../components/admin/AdminCourseItem";
import EmptyState from "../components/shared/EmptyState";
import AddUpdateCourseForm from "../components/admin/AddUpdateCourseForm";

import { useCourses } from "../state/CoursesContext";
import { useModal } from "../state/ModalContext";
import AddItemForm from "../components/form/AddItemForm";
import data from "../data/courseData.json";
import fields from "../data/courseFields.json";

export default function AdminHome() {
  const { courses } = useCourses();
  const { setModal } = useModal();

  const coursesList = courses.map((item) => (
    <AdminCourseItem key={item.id} item={item} />
  ));

  return (
    <div>
      <h1>Admin Home</h1>
      {/* <button onClick={() => setModal(<AddUpdateCourseForm />)}>Add new</button> */}
      <AddItemForm path="courses" fields={fields} data={data} />

      {coursesList.length === 0 ? <EmptyState /> : coursesList}
    </div>
  );
}
