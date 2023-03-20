import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import CourseDetails from "../pages/CourseDetails";
import StudyItemDetails from "../pages/StudyItemDetails";
import Profile from "../pages/Profile";

export default function StudentRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:courseName" element={<CourseDetails />} />
      <Route path="/:courseName/:fileName" element={<StudyItemDetails />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
