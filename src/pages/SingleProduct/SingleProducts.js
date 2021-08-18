import React from "react";
import { useGlobalContext } from "../../context";
import { Link, useHistory, useParams } from "react-router-dom";
import CategoryNavigation from "../../components/CategoryNavigation";
import BestGear from "../../components/BestGear";
import ProductInfo from "../../components/ProductCategory/ProductInfo";
import ProductFeatures from "../../components/ProductFeatures/ProductFeatures";
import ProductGalleries from "../../components/ProductGalleries/ProductGalleries";
import Like from "../../components/Like/Like";

function SingleProduct() {
  //firstly get the name coming from categories page
  const { slug } = useParams();

  //get the getProduct from context
  const { getProduct } = useGlobalContext();

  let history = useHistory();

  let Products = getProduct(slug);
  if (!Products) {
    return (
      <section className="error">
        <div className="error-container contain">
          <h1 data-aos="fade-left">No such Product could be found...</h1>
          <Link
            data-aos="fade-left"
            data-aos-delay="200"
            to="/"
            className="btn orange-background"
          >
            Return Home
          </Link>
        </div>
      </section>
    );
  } else {
    return (
      <>
        {/* Go backk button section */}
        <section data-aos="fade-left" className="go-back">
          <div className=" contain">
            <button onClick={history.goBack}>Go Back</button>
          </div>
        </section>

        {/* Product Info and adding to cart */}
        <ProductInfo Products={Products} />

        {/* Features and in the box */}
        <ProductFeatures Products={Products} />

        {/* Galleries */}
        <ProductGalleries Products={Products} />

        {/* you may also like */}
        <Like Products={Products} />

        <CategoryNavigation />
        <BestGear />
      </>
    );
  }
}

export default SingleProduct;
