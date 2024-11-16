// UserContext.js
import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(
    !!localStorage.getItem("formData")
  );

  return (
    <UserContext.Provider value={{ isUserLoggedIn, setIsUserLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};
