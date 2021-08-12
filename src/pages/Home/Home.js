import React from "react";
import arrow from "../../assets/shared/desktop/icon-arrow-right.svg";
import speaker from "../../assets/shared/desktop/image-speakers.png";
import headphone from "../../assets/shared/desktop/image-headphones.png";
import earphone from "../../assets/shared/desktop/image-earphones.png";
import { Link } from "react-router-dom";
import BestGear from "../../components/BestGear";

function Home() {
  return (
    <>
      <section className="section-home">
        <section className="home-container">
          <section className="home-container-info">
            <h4>NEW PRODUCT</h4>
            <h1>
              XX99 MARK 11
              <br />
              HEADPHONES
            </h1>
            <p>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <div className="home-btn btn">see product</div>
          </section>
        </section>
      </section>
      {/* Product navigation section */}
      <section className="products">
        <section className="product-container">
          <Link className="HomeCategoryContainer" to="/headphone">
            <div className="homeimage">
              <div className="img-home">
                <img src={headphone} alt="HeadPhone" />
              </div>
            </div>
            <div className="homeCategoryInfo">
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
          <Link className="HomeCategoryContainer" to="/speaker">
            <div className="homeimage">
              <div className="img-home">
                <img src={speaker} alt="Speaker" />
              </div>
            </div>
            <div className="homeCategoryInfo">
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
          <Link className="HomeCategoryContainer" to="/earphone">
            <div className="homeimage">
              <div className="img-home">
                <img src={earphone} alt="EarPhones" />
              </div>
            </div>
            <div className="homeCategoryInfo">
              <h3>EarPhones</h3>
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
        </section>
      </section>
      {/* see product section */}
      <section className="speaker-Z">
        <section className="speaker-Z-container">
          <div className="speaker-img">
            <div className="img-speaker"></div>
          </div>
          <div className="spkInfo">
            <div className="speaker-info">
              <h1>
                ZX9
                <br />
                SPEAKER
              </h1>
              <p>
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <div className="product-btn btn">see product</div>
            </div>
          </div>
        </section>
      </section>

      <section className="section-Z7">
        <section className="Z7-container">
          <article className="Z7-info">
            <h2>Z7 SPEAKER</h2>
            <Link>
              <button className="btn Z7-btn">SEE PRODUCT</button>
            </Link>
          </article>
        </section>
      </section>

      <section className="earphone-Z">
        <section className="earphone-Z-container">
          <article className="Z-earphone"></article>
          <article className="earphone-container-info">
            <h2>YX1 EARPHONES</h2>
            <Link>
              <button className="btn earphone-btn">SEE PRODUCT</button>
            </Link>
          </article>
        </section>
      </section>

      <section className="bringing">
        <BestGear />
      </section>
    </>
  );
}

export default Home;
