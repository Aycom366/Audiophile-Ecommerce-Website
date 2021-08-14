import React from "react";
import { category } from "../../dataCategory.js";

function DetailsCategory({
  children,
  classInfo,
  newProduct,
  name,
  info,
  url,
  image,
}) {
  return (
    <section className="category">
      <section className={classInfo}>
        <div className="category-img">
          <img src={image} alt={name} />
        </div>
        <section className="category-info-container">
          <div className="category-info">
            <p
              className={`${
                newProduct ? "categoryInfoP " : "categoryInfoP displayNone"
              }`}
            >
              New Product
            </p>
            <h1>{name}</h1>
            <p>{info}</p>
            {children}
          </div>
        </section>
      </section>
    </section>
  );
}
DetailsCategory.defaultProps = {
  classInfo: "category-container",
};
export default DetailsCategory;
