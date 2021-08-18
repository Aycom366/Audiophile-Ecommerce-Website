import React from "react";
import { useGlobalContext } from "../context";

function Overlay() {
  const { isNavOpen, isCartOpen } = useGlobalContext();
  return (
    <div
      className={`${
        isNavOpen || isCartOpen ? "overlay overlay-active" : "overlay"
      }`}
    ></div>
  );
}

export default Overlay;
