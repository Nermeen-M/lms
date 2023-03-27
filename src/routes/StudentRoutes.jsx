import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import CourseDetails from "../pages/CourseDetails";
import StudyItemDetails from "../pages/StudyItemDetails";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";

export default function StudentRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses/:courseId" element={<CourseDetails />} />
      <Route path="/courses/:courseId/:fileId" element={<StudyItemDetails />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
