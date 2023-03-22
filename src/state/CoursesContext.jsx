import { createContext, useContext, useReducer } from "react";

import itemsReducer from "./itemsReducer";

const Context = createContext(null);

export function CoursesProvider({ children }) {
  const [courses, dispatch] = useReducer(itemsReducer, []);

  const value = { courses, dispatch };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useCourses() {
  const context = useContext(Context);
  const errorMessage = "To use the courses context import it on index.js";

  if (!context) throw new Error(errorMessage);

  return context;
}
