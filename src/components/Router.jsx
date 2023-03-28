import React from "react";

import UnloggedRoutes from "../routes/UnloggedRoutes";
import AdminRoutes from "../routes/AdminRoutes";
import StudentRoutes from "../routes/StudentRoutes";
import Navigation from "./shared/Navigation";

import { useUser } from "../state/UserContext";

export default function Router() {
  const { user } = useUser();
  const isTeacher = user.role == "teacher";

  return (
    <>
      {!user.id && <UnloggedRoutes />}
      {user.id && (
        <>
          <Navigation />
          <div className="main-content">
            {isTeacher && <AdminRoutes />}
            {!isTeacher && <StudentRoutes />}
          </div>
        </>
      )}
    </>
  );
}
