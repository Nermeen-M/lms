import UnloggedRoutes from "./routes/UnloggedRoutes";
import AdminRoutes from "./routes/AdminRoutes";
import StudentRoutes from "./routes/StudentRoutes";
import { useUser } from "./state/UserContext";

export default function App() {
  const { user, uid } = useUser();
  const isTeacher = user.role == "teacher";
  // console.log("isTeacher", isTeacher);

  return (
    <div className="App">
      {!user.uid && <UnloggedRoutes />}
      {user.id && isTeacher && <AdminRoutes />}
      {user.id && !isTeacher && <StudentRoutes />}
    </div>
  );
}
