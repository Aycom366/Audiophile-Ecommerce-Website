import React, { useContext, useState, useEffect } from "react";

//the context to use with the whle app
const AppContext = React.createContext();

const getwindowsDimension = () => {
  const { innerWidth: width } = window;
  return width;
};

export const AppProvider = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const [getWidth, setGetWidth] = useState(getwindowsDimension);

  useEffect(() => {
    const handleResize = () => {
      setGetWidth(getwindowsDimension());
    };
    const resizing = window.addEventListener("resize", handleResize);
    return () => resizing();
  }, []);

  return (
    <AppContext.Provider value={{ isNavOpen, setIsNavOpen, getWidth }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
