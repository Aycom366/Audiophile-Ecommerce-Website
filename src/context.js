import React, { useContext, useState, useReducer, useEffect } from "react";
import data from "./data";
import reducer from "./reducer";

//the context to use with the whle app
const AppContext = React.createContext();

const getwindowsDimension = () => {
  const { innerWidth: width } = window;
  return width;
};

//useReducer intial state. current state
const initialState = {
  cart: [],
  total: 0,
  amount: 0,
};

const getLocalStorage = () => {
  let cartList = localStorage.getItem("cart");
  if (cartList) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

export const AppProvider = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const [isCartOpen, setIsCartOpen] = useState(false);

  const [CartInfo, setCartInfo] = useState(getLocalStorage());

  const [getWidth, setGetWidth] = useState(getwindowsDimension);

  const [cartLength, setCartLength] = useState(CartInfo.length);

  //carts items

  const getData = () => {
    let newData = data.map((item) => {
      return item;
    });
    return newData;
  };

  const getProduct = (slug) => {
    //initialise getData to tempProducts
    let tempProducts = [...getData()];

    //then find the objects that matches with just only the name
    const product = tempProducts.find((product) => product.slug === slug);

    //then return product
    return product;
  };

  //get the window width to other global context
  useEffect(() => {
    //get values in the json data when the app is first loaded
    getData();

    const handleResize = () => {
      setGetWidth(getwindowsDimension());
    };
    const resizing = window.addEventListener("resize", handleResize);
    return () => resizing();
  }, []);

  //an useFfect to update localstorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(CartInfo));
    setCartLength(CartInfo.length);
  }, [CartInfo]);

  //
  // UseReducer
  //
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider
      value={{
        isNavOpen,
        isCartOpen,
        setIsCartOpen,
        setIsNavOpen,
        getWidth,
        getProduct,
        CartInfo,
        setCartInfo,
        cartLength,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
