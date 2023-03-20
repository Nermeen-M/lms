import UnloggedRoutes from "./routes/UnloggedRoutes";
import AdminRoutes from "./routes/AdminRoutes";
import StudentRoutes from "./routes/StudentRoutes";
import { useUser } from "./state/UserContext";

export default function App() {
  const { uid } = useUser();

  return (
    <div className="App">{uid ? <AdminRoutes /> : <UnloggedRoutes />}</div>
  );
}
