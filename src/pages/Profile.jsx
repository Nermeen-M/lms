import { useUser } from "../state/UserContext";

export default function Profile() {
  const { user } = useUser();

  return (
    <div className="container">
      <h1>Profile</h1>
      <h2>{user.name}</h2>
      <h3>{user.role} Profile</h3>
    </div>
  );
}
