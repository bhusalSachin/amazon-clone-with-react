import React from "react";
import "./BasketItem.css";
import { useStatevalue } from "./StateProvider";
import CurrencyFormart from "react-currency-format";

function BasketItem({ id, imageSrc, itemDescription, itemPrice, itemRating }) {
  const [{ basket }, dispatch] = useStatevalue();

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };

  if (basket.length != 0) {
    return (
      <div className="BasketItem">
        <div className="basketItem_left">
          <img className="basketItem_image" src={imageSrc} alt="no internet!" />
        </div>
        <div className="basketItem_right">
          <div className="basketItem_description">
            <strong>{itemDescription}</strong>
          </div>
          <div className="basketItem_price">
            <CurrencyFormart
              renderText={(value) => <strong>{value}</strong>}
              decimalScale={2}
              value={itemPrice}
              displayType="text"
              thousandSeparator={true}
              prefix="$"
            />
          </div>
          <div className="basketItem_rating">
            {Array(itemRating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
          <button className="basketItem_button" onClick={removeFromCart}>
            Remove from the cart
          </button>
        </div>
      </div>
    );
  }
  return null;
}

export default BasketItem;
