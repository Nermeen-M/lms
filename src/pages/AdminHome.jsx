import AdminCourseItem from "../components/AdminCourseItem";
import EmptyState from "../components/shared/EmptyState";

import { useCourses } from "../state/CoursesContext";
import { useModal } from "../state/ModalContext";

export default function AdminHome() {
  const { courses } = useCourses();
  const { setModal } = useModal();

  const coursesList = courses.map((item) => (
    <AdminCourseItem key={item.id} item={item} />
  ));

  return (
    <div>
      <h1>Admin Home</h1>
      <button onClick={() => setModal(<p>Add new course</p>)}>Add new</button>
      {coursesList.length === 0 ? <EmptyState /> : coursesList}
    </div>
  );
}
