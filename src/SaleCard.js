import React from "react";
import "./SaleCard.css";
import { useStatevalue } from "./StateProvider";
import CurrencyFormat from "react-currency-format";

function SaleCard({ id, image, price, description, rating }) {
  const [{ basket }, dispatch] = useStatevalue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        image: image,
        price: price,
        description: description,
        rating: rating,
      },
    });
  };

  return (
    <div className="SaleCard">
      <img className="saleCard_image" src={image} alt="no internet" />
      <CurrencyFormat
        renderText={(value) => <p className="pricetag">{value}</p>}
        decimalScale={2}
        value={price}
        displayType="text"
        thousandSeparator={true}
        prefix="$"
      />
      <div className="description_div">
        <p className="description">{description}</p>
      </div>
      <p className="rating">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p>⭐</p>
          ))}
      </p>
      <button className="saleCard_button" onClick={addToBasket}>
        Add to Cart
      </button>
    </div>
  );
}

export default SaleCard;
