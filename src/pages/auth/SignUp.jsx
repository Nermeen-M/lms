import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { createAccount } from "../../scripts/firebase/auth";
import { createDocumentWithManualId } from "../../scripts/firebase/fireStore";

// import { useUser } from "../../state/UserContext";

export default function SignUp() {
  const navigate = useNavigate();
  // const { setUid, user, setUser } = useUser();
  // const { user, setUser } = useUser();

  const [name, setName] = useState("Mina");
  const [email, setEmail] = useState("Mina@m.com");
  const [password, setPassword] = useState("123456");
  const [isloading, setIsLoading] = useState(false);
  const collectionName = "users";

  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    const result = await createAccount(email, password);

    result.status ? onSucess(result) : onFailure(result);
  }

  async function onSucess(result) {
    const userData = { uid: result.payload, name: name, role: "student" };
    await createDocumentWithManualId(collectionName, result.payload, userData);

    // await setUser(userData);
    // await setUid(result.payload);
    setIsLoading(false);
    navigate("/login");
  }

  function onFailure(result) {
    setIsLoading(false);
    alert(`Cannot create an account, ${result.message}`);
  }

  return (
    <div>
      {isloading && <p>Loading...</p>}

      <h1>Welcome to the boot camp</h1>
      <form onSubmit={(event) => onSubmit(event)}>
        <input
          placeholder="name"
          type="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <br />
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
