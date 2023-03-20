import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div>
      <h1>Welcome to our website</h1>
      <Link to="/login">Get started</Link>
    </div>
  );
}
