import React from "react";
import BasketItem from "./BasketItem";
import Subtotal from "./Subtotal";
import "./Checkout.css";
import { useStatevalue } from "./StateProvider";

function Checkout() {
  const [{ basket }, dispatch] = useStatevalue();
  return (
    <div className="CheckoutPage">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="no internet"
        />

        <div className="basketList">
          <h2> Your Shopping Baskets </h2>
          {basket.map((item) => (
            <BasketItem
              id={item.id}
              imageSrc={item.image}
              itemDescription={item.description}
              itemPrice={item.price}
              itemRating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
