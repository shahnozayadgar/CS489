import React, { createContext, useState, useContext } from "react";

// Create a context
const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  const [userID, setUserID] = useState(null); // Initialize with `null` or a default value

  return (
    <UserContext.Provider value={{ userID, setUserID }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook for using UserContext
export const useUser = () => {
  return useContext(UserContext);
};
