import { Routes, Route } from "react-router-dom";

import AdminHome from "../pages/AdminHome";
import AdminCourseDetails from "../pages/AdminCourseDetails";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";

export default function AdminRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<AdminHome />} />
      <Route path="/courses/:courseName" element={<AdminCourseDetails />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
