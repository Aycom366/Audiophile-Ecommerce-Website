import React from "react";
import { Link } from "react-router-dom";
import CategoryNavigation from "../../components/CategoryNavigation";
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
      <CategoryNavigation />

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
              <Link to="/speaker" className="product-btn btn">
                see product
              </Link>
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

      <BestGear />
    </>
  );
}

export default Home;
