import { createContext, useContext, useState, useEffect } from "react";

const Context = createContext();

export function UserProvider({ children, storageKey }) {
  const [uid, setUid] = useState(loadUID(storageKey));
  const [user, setUser] = useState(loadUser("user-data"));

  const value = { uid, setUid, saveUID, user, setUser, saveUser };

  function loadUID(storageKey) {
    const data = localStorage.getItem(storageKey);
    return data;
  }

  function loadUser(storagekeyy) {
    const data = localStorage.getItem(storagekeyy);
    return data;
  }

  function saveUID(uid) {
    localStorage.setItem(storageKey, uid);
  }

  async function saveUser(user) {
    localStorage.setItem("user-data", JSON.stringify(user));
  }

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useUser() {
  const context = useContext(Context);

  if (!context) throw new Error("useUser() must be used within <UserProvider>");

  return context;
}
