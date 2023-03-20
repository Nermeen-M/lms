import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { createAccount } from "../scripts/firebase/auth";

export default function SignUp() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onSubmit(event) {
    event.preventDefault();

    const result = await createAccount(email, password);

    result.status ? onSucess(result) : onFailure(result);
  }

  function onSucess(result) {
    navigate("/home");
  }

  function onFailure(result) {
    alert(`Cannot create an account, ${result.message}`);
  }

  return (
    <div>
      <h1>Welcome to the boot camp</h1>
      <form onSubmit={(event) => onSubmit(event)}>
        <input
          placeholder="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <button>Create account</button>
      </form>
      <hr />
      <Link to="/login">Login instead</Link>
    </div>
  );
}
