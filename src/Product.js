import React from "react";
import "./Product.css";

function Product({ title, imgSrc, foot }) {
  return (
    <div className="productComponent">
      <div className="head">
        <strong> {title} </strong>
      </div>
      <div className="product_image">
        <img src={imgSrc} alt="No internet!" />
      </div>
      <div className="link">
        <a href="#">{foot}</a>
      </div>
    </div>
  );
}

export default Product;
