import React from "react";
import { Link } from "react-router-dom";
import arrow from "../assets/shared/desktop/icon-arrow-right.svg";
import speaker from "../assets/shared/desktop/image-speakers.png";
import headphone from "../assets/shared/desktop/image-headphones.png";
import earphone from "../assets/shared/desktop/image-earphones.png";
import { useGlobalContext } from "../context";

function Navs() {
  const { IsNavOpen, setIsNavOpen } = useGlobalContext();
  return (
    <main>
      <Link
        data-aos="fade-right"
        data-aos-delay="5000"
        onClick={() => setIsNavOpen(false)}
        className="mobileCategoryContainer"
        to="/headphone"
      >
        <div className="mobileimage">
          <div className="img">
            <img src={headphone} alt="HeadPhone" />
          </div>
        </div>
        <div className="mobileCategoryInfo">
          <h3>HeadPhones</h3>
          <div className="mobileCategorySection">
            <p>
              Shop now
              <span>
                <img src={arrow} alt="arrow-right" />
              </span>
            </p>
          </div>
        </div>
      </Link>
      <Link
        data-aos="zoom-in"
        onClick={() => setIsNavOpen(false)}
        className="mobileCategoryContainer"
        to="/speaker"
      >
        <div className="mobileimage">
          <div className="img">
            <img src={speaker} alt="HeadPhone" />
          </div>
        </div>
        <div className="mobileCategoryInfo">
          <h3>Speakers</h3>
          <div className="mobileCategorySection">
            <p>
              Shop now
              <span>
                <img src={arrow} alt="arrow-right" />
              </span>
            </p>
          </div>
        </div>
      </Link>
      <Link
        data-aos="fade-left"
        onClick={() => setIsNavOpen(false)}
        className="mobileCategoryContainer"
        to="/earphone"
      >
        <div className="mobileimage">
          <div className="img">
            <img src={earphone} alt="HeadPhone" />
          </div>
        </div>
        <div className="mobileCategoryInfo">
          <h3>Earphones</h3>
          <div className="mobileCategorySection">
            <p>
              Shop now
              <span>
                <img src={arrow} alt="arrow-right" />
              </span>
            </p>
          </div>
        </div>
      </Link>
    </main>
  );
}

export default Navs;
