import React from "react";
import { useGlobalContext } from "../context";

function Overlay() {
  const { isNavOpen } = useGlobalContext();
  return (
    <div
      className={`${isNavOpen ? "overlay overlay-active" : "overlay"}`}
    ></div>
  );
}

export default Overlay;
