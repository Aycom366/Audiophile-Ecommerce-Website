import React from "react";
import im from "../../assets/cart/image-xx99-mark-two-headphones.jpg";
import { useGlobalContext } from "../../context";

function Cart() {
  const { cartLength, CartInfo } = useGlobalContext();
  if (cartLength < 1) {
    return <h5>cart is currently empty</h5>;
  }
  return (
    <>
      <article className="cartcontainer">
        <div className="cartHeader">
          <h3>
            Cart (<span>{cartLength}</span>)
          </h3>
          <button className="cartAlike">Remove all</button>
        </div>
        {CartInfo.map((cart, index) => {
          const { name, slug, price, image, quantity } = cart;

          return (
            <div key={index} className="cartInfo">
              <div className="name">
                <div className="cart-img-container">
                  <img src={image.mobile} alt={name} />
                </div>
                <div className="cartitems">
                  <p>XX99</p>
                  <p>${price}</p>
                </div>
              </div>
              <div className="buttonContainer">
                <button className="btn-counter-cart">-</button>
                <p className="btn-counter-cart">{quantity}</p>
                <button className="btn-counter-cart">+</button>
              </div>
            </div>
          );
        })}

        <div className="cartFooter">
          <h5 className="cartAlike">Total</h5>
          <h5>$100</h5>
        </div>
        <button className="btn orange-background">Checkout</button>
      </article>
    </>
  );
}

export default Cart;
