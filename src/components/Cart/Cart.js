import React from "react";
import { useGlobalContext } from "../../context";

function Cart() {
  const { clearCart, CartInfo, getTotals, toggleQuantity } = useGlobalContext();
  if (CartInfo < 1) {
    return <h4>cart is currently empty</h4>;
  } else {
    return (
      <article className="cartcontainer">
        <div className="cartHeader">
          <h3>
            Cart (<span>{CartInfo.length}</span>)
          </h3>
          <button onClick={clearCart} className="cartAlike">
            Remove all
          </button>
        </div>
        {CartInfo.map((cart, index) => {
          const { name, slug, price, image, quantity } = cart;
          const newName = name.split(" Headphones");
          return (
            <div key={index} className="cartInfo">
              <div className="name">
                <div className="cart-img-container">
                  <img src={image.mobile} alt={name} />
                </div>
                <div className="cartitems">
                  <p>{newName[0]}</p>
                  <p>${price}</p>
                </div>
              </div>
              <div className="buttonContainer">
                <button
                  onClick={() => toggleQuantity(slug, "DEC")}
                  className="btn-counter-cart"
                >
                  -
                </button>
                <p className="btn-counter-cart">{quantity}</p>
                <button
                  onClick={() => toggleQuantity(slug, "INC")}
                  className="btn-counter-cart"
                >
                  +
                </button>
              </div>
            </div>
          );
        })}

        <div className="cartFooter">
          <h5 className="cartAlike">Total</h5>
          <h5>${getTotals()}</h5>
        </div>
        <button className="btn orange-background">Checkout</button>
      </article>
    );
  }
}

export default Cart;
