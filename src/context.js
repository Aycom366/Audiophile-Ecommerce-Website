import React, { useContext, useState, useEffect } from "react";

//the context to use with the whle app
const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <AppContext.Provider value={{ isNavOpen, setIsNavOpen }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
