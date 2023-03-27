import { Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import RecoverPassword from "../pages/auth/RecoverPassword";
import NotFound from "../pages/NotFound";

// good
export default function UnloggedRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/recover-password" element={<RecoverPassword />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
