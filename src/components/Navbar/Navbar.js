import React, { useEffect } from "react";
import logo from "../../assets/shared/desktop/logo.svg";
import cartIcon from "../../assets/shared/desktop/icon-cart.svg";
import { Link } from "react-router-dom";
import Navs from "../../components/Navs";
import { useGlobalContext } from "../../context";
import Cart from "../Cart/Cart";

function Navbar() {
  const {
    isNavOpen,
    setIsNavOpen,
    setIsCartOpen,
    isCartOpen,
    getWidth,
    cartLength,
  } = useGlobalContext();

  //if nav is open after exceding 768px
  useEffect(() => {
    if (getWidth > 768 && isNavOpen === true) {
      setIsNavOpen(false);
    }
  }, [getWidth]);

  return (
    <nav className="nav">
      <section className="nav-center">
        <section className="nav-logo">
          <div
            onClick={() => setIsNavOpen(!isNavOpen)}
            className={`${isNavOpen ? "bars is-active" : "bars"}`}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="logo">
            <Link onClick={() => setIsNavOpen(false)} to="/">
              <img src={logo} alt="AudioPhile-Logo" />
            </Link>
          </div>
        </section>

        <section className="navLinksContainer">
          <Link to="/">Home</Link>
          <Link to="/speakers">Speaker</Link>
          <Link to="/headphones">HeadPhone</Link>
          <Link to="/earphones">EarPhone</Link>
        </section>

        <section
          className={`${
            isNavOpen ? "mobileNavLinks shownavs" : "mobileNavLinks"
          }`}
        >
          <Navs />
        </section>

        <section onClick={() => setIsCartOpen(!isCartOpen)} className="cart">
          <img src={cartIcon} alt="Cart-Image" />
          <p onClick={() => setIsCartOpen(!isCartOpen)} className="amount">
            {cartLength}
          </p>
        </section>

        <section
          className={`${
            isCartOpen ? "cart-container show-cart-container" : "cart-container"
          }`}
        >
          <Cart />
        </section>
      </section>
    </nav>
  );
}

export default Navbar;
