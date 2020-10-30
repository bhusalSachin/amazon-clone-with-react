import React from "react";
import "./Welcome.css";

function Welcome() {
  return (
    <div className="welcome">
      <div className="greeting">
        <img
          className="user_logo"
          src="https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SR60,60_.png"
          alt="no internet"
        />
        <strong>Hi, Guest</strong>
      </div>
      <p className="recomendation">Recommendation for you!</p>
      <div className="photos">
        <div className="rowOne">
          <div className="product">
            <img
              className="photo"
              src="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-2309B35A28833317._V535730076_.jpg"
              alt="no internet"
            />
            <p> Headset </p>
          </div>
          <div className="product">
            <img
              className="photo"
              src="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-24DFAD952D7E33K5._V534177830_.jpg"
              alt="no internet"
            />
            <p> Vacuum Cleaner </p>
          </div>
        </div>
        <div className="rowTwo">
          <div className="product">
            <img
              className="photo"
              src="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-24E21FEF641AC212._V534177830_.jpg"
              alt="no internet"
            />
            <p> Bed Sheet </p>
          </div>
          <div className="product">
            <img
              className="photo"
              src="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-244373AC9B3C4612._V533746474_.jpg"
              alt="no internet"
            />
            <p> Mobile Phone </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
