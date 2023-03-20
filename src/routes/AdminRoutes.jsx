import { Routes, Route } from "react-router-dom";

import AdminHome from "../pages/AdminHome";
import AdminCourseDetails from "../pages/AdminCourseDetails";
import Profile from "../pages/Profile";

export default function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AdminHome />} />
      <Route path="/course-details" element={<AdminCourseDetails />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
