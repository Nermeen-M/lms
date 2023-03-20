import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { login } from "../scripts/firebase/auth";
import { readDocument } from "../scripts/firebase/fireStore";
import { useUser } from "../state/UserContext";

export default function Login() {
  const navigate = useNavigate();
  const { setUid, saveUID, setUser, saveUser } = useUser();

  const [email, setEmail] = useState("nermeen.mamdouh.nm@gmail.com");
  const [password, setPassword] = useState("123456");
  const [remember, setRemember] = useState(false);

  async function onSubmit(event) {
    event.preventDefault();
    const result = await login(email, password);

    result.status ? onSucess(result) : onFailure(result);
  }

  async function onSucess(result) {
    const userData = await getUserData(result.payload);
    console.log("user Data", userData);
    setUid(result.payload);
    setUser(userData);

    if (remember) {
      console.log("Login.jsx preparing to save...", result.payload);
      saveUID(result.payload);
      await saveUser(userData);
    }

    navigate("/home");
  }

  function onFailure(result) {
    alert(`Cannot login, ${result.message}`);
  }

  async function getUserData(userId) {
    const collectionName = "users";
    const data = await readDocument(collectionName, userId);
    // await setUser(data);
    return data;
  }

  return (
    <div>
      <h1>Login to continue studying</h1>
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
        <label>
          <input
            type="checkbox"
            checked={remember}
            onChange={() => setRemember(!remember)}
          />
          Remember me
        </label>
        <br />
        <button>Login</button>
      </form>
      <Link to="/recover-password">Forgot password?</Link>
      <br />
      <Link to="/sign-up">Create a new account</Link>
    </div>
  );
}
