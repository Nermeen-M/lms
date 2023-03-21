import { createContext, useContext, useState, useEffect } from "react";

const Context = createContext();

export function UserProvider({ children, storageKey }) {
  // const [uid, setUid] = useState(loadUID(storageKey));
  const [user, setUser] = useState(loadUser("user-data"));

  // const value = { uid, setUid, saveUID, user, setUser, saveUser };
  const value = { user, setUser, saveUser };

  // function loadUID(storageKey) {
  //   const data = localStorage.getItem(storageKey);
  //   return data;
  // }

  function loadUser(storagekeyy) {
    const stringData = localStorage.getItem(storagekeyy);
    const data = JSON.parse(stringData) || {};
    return data;
  }

  // function saveUID(uid) {
  //   localStorage.setItem(storageKey, uid);
  // }

  async function saveUser(user) {
    // localStorage.setItem("user-data", JSON.stringify(user));

    const key = "user-data";
    const data = JSON.stringify(user);

    localStorage.setItem(key, data);
  }

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useUser() {
  const context = useContext(Context);

  if (!context) throw new Error("useUser() must be used within <UserProvider>");

  return context;
}
