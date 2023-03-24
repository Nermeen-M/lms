import React from "react";

import UnloggedRoutes from "../routes/UnloggedRoutes";
import AdminRoutes from "../routes/AdminRoutes";
import StudentRoutes from "../routes/StudentRoutes";

import { useUser } from "../state/UserContext";

export default function Router() {
  const { user } = useUser();
  const isTeacher = user.role == "teacher";

  return (
    <React.Fragment>
      {!user.id && <UnloggedRoutes />}
      {user.id && isTeacher && <AdminRoutes />}
      {user.id && !isTeacher && <StudentRoutes />}
    </React.Fragment>
  );
}
