import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";

export default function Header() {
  return (
    <header>
      <Link className="logo" to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <Link to="/sign-up">Create account</Link>

      <Link to="/login">Login</Link>
    </header>
  );
}
