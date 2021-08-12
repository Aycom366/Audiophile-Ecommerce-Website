import React from "react";
import logo from "../../assets/shared/desktop/logo.svg";
import cart from "../../assets/shared/desktop/icon-cart.svg";
import { Link } from "react-router-dom";
import Navs from "../../components/Navs";
import { useGlobalContext } from "../../context";

function Navbar() {
  const { isNavOpen, setIsNavOpen } = useGlobalContext();

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
            <Link to="/">
              <img src={logo} alt="AudioPhile Logo" />
            </Link>
          </div>
        </section>

        <section className="navLinksContainer">
          <Link to="/">Home</Link>
          <Link to="/speaker">Speaker</Link>
          <Link to="/headphone">HeadPhone</Link>
          <Link to="/earphone">EarPhone</Link>
        </section>

        <section
          className={`${
            isNavOpen ? "mobileNavLinks shownavs" : "mobileNavLinks"
          }`}
        >
          <Navs />
        </section>

        <section className="cart">
          <img src={cart} alt="Cart Image" />
        </section>
      </section>
    </nav>
  );
}

export default Navbar;
