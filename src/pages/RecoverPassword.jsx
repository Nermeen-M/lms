import { useState } from "react";
import { Link } from "react-router-dom";

import { recoverAccount } from "../scripts/firebase/auth";

export default function RecoverPassword() {
  const [email, setEmail] = useState("");

  async function onSubmit(event) {
    event.preventDefault();

    const result = await recoverAccount(email);

    result.status ? onSucess() : onFailure(result);
  }

  function onSucess() {
    const text =
      "Email with a reset link sent. Please check your SPAM/Junk folder as well.";
    alert(text);
  }

  function onFailure(result) {
    alert(result.message);
  }

  return (
    <div>
      <h1>Sometimes we forgot stuff</h1>
      <form onSubmit={(event) => onSubmit(event)}>
        <input
          placeholder="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <button>Recover account</button>
      </form>
      <hr />
      <Link to="/login">Go back to login</Link>
    </div>
  );
}
