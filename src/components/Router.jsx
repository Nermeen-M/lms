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
    // React Fragment is the <>, so you are using 2 ways to call the same component
    // 1.- <React.Fragment></React.Fragment>
    // 2.- <></>
    // Stick to a single style
    <React.Fragment>
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
      {/* No comments -1 */}
      {/* {user.id && isTeacher && <AdminRoutes />}
      {user.id && !isTeacher && <StudentRoutes />} */}
    </React.Fragment>
  );
}
