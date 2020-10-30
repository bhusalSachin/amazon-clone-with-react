import React from "react";
import "./Home.css";
import Welcome from "./Welcome";
import Product from "./Product";
import SaleCard from "./SaleCard";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_TallHero_NonPrime_v2_en_US_1x._CB403670067_.jpg"
          alt="No intrnet"
        />
        <div className="rowOneContainer">
          <Welcome />
          <Product
            title="Deals & Promotions"
            imgSrc="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Deals_1x._SY304_CB430401028_.jpg"
            foot="Shop now"
          />
          <Product
            title="AmazonBasics"
            imgSrc="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
            foot="See more"
          />
          <Product
            title="Start on your holiday list early"
            imgSrc="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg"
            foot="Shop now"
          />
        </div>
        <div className="rowTwoContainer">
          <Product
            title="Computers & Accessories"
            imgSrc="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
            foot="Shop now"
          />
          <Product
            title="Electronics"
            imgSrc="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
            foot="See more"
          />
          <Product
            title="Get fit at home"
            imgSrc="https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg"
            foot="Explore more"
          />

          <Product
            title="Create with strip lights"
            imgSrc="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_StripLighting_379x304_1X_en_US._SY304_CB418597476_.jpg"
            foot="Shop now"
          />
        </div>
      </div>
      <div className="salesContainer">
        <img
          className="salesContainer_image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_LP_Dash_en_US.jpg"
          alt="no internet!!"
        />
        <div className="salesContainer_rowOne">
          <SaleCard
            image="https://m.media-amazon.com/images/I/81DWyrQQxPL._AC_UL480_FMwebp_QL65_.jpg"
            price={18.99}
            description="Fairywill Electric Toothbrush Powerful Sonic Cleaning - ADA Accepted Rechargeable Toothbrush with Timer, 5 Modes, 3 Brush Heads, 4 Hr Charge Last 30 Days Whitening Toothbrush for Adults and Kids Black"
            // rating="⭐⭐⭐⭐⭐"
            rating={5}
          />
          <SaleCard
            image="https://m.media-amazon.com/images/I/81dnabvOdML._MCnd_SEARCH281250_AC_UL480_FMwebp_QL65_.jpg"
            price={18.99}
            description="Amazon Brand - Goodthreads Women's Modal Fleece Popover Sweatshirt Dress"
            // rating="⭐⭐⭐⭐"
            rating={4}
          />
          <SaleCard
            image="https://m.media-amazon.com/images/I/81b8V4oyOiL._AC_UL480_FMwebp_QL65_.jpg"
            price={18.99}
            description="Amazon Essentials Women's Classic Fit Lightweight Long-Sleeve Crewneck Sweater"
            // rating="⭐⭐⭐"
            rating={3}
          />
        </div>
        <div className="salesContainer_rowTwo">
          <SaleCard
            id="12321232"
            image="https://images-na.ssl-images-amazon.com/images/I/41vMYgD92xL._AC_US240_FMwebp_QL65_.jpg"
            price={349.0}
            description="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L, Silver"
            // rating="⭐⭐⭐⭐"
            rating={4}
          />
          <SaleCard
            id="90989089"
            image="https://images-na.ssl-images-amazon.com/images/I/41O4rjSlneL._AC_US240_FMwebp_QL65_.jpg"
            price={20.88}
            description="SanDisk 128GB Extreme microSDXC UHS-I Memory Card with Adapter - C10, U3, V30, 4K, A2, Micro SD - SDSQXA1-128G-GN6MA"
            // rating="⭐⭐"
            rating={2}
          />
          <SaleCard
            id="12121212"
            image="https://images-na.ssl-images-amazon.com/images/I/41Q-WavqjiL._AC_US240_FMwebp_QL65_.jpg"
            price={20.89}
            description="HP 63 | Ink Cartridge | Black | F6U62AN"
            // rating="⭐⭐⭐⭐⭐"
            rating={5}
          />
          <SaleCard
            id="12121213"
            image="https://images-na.ssl-images-amazon.com/images/I/41bjpRqJneL._AC_US240_FMwebp_QL65_.jpg"
            price={32.0}
            description="Roku Premiere | HD/4K/HDR Streaming Media Player, Simple Remote and Premium HDMI Cable"
            // rating="⭐⭐⭐⭐⭐"
            rating={5}
          />
        </div>
        <div className="salesContainer_rowThree">
          <SaleCard
            id="12121214"
            image="https://images-na.ssl-images-amazon.com/images/I/21zodo7QkUL._AC_US240_FMwebp_QL65_.jpg"
            price={18.59}
            description="Apple EarPods with Lightning Connector - White"
            // rating="⭐⭐⭐⭐"
            rating={4}
          />
          <SaleCard
            id="12121215"
            image="https://images-na.ssl-images-amazon.com/images/I/31Z2u1Hd6rL._AC_US240_FMwebp_QL65_.jpg"
            price={177.9}
            description="Fitbit Versa 2 Health and Fitness Smartwatch with Heart Rate, Music, Alexa Built-In, Sleep and Swim Tracking, Petal/Copper Rose, One Size (S and L Bands Included)"
            // rating="⭐⭐"
            rating={2}
          />
          <SaleCard
            id="12121216"
            image="https://images-na.ssl-images-amazon.com/images/I/415eNkQbAAL._AC_US240_FMwebp_QL65_.jpg"
            price={39.99}
            description="TOZO T6 True Wireless Earbuds Bluetooth Headphones Touch Control with Wireless Charging Case IPX8 Waterproof TWS Stereo Earphones in-Ear Built-in Mic Headset Premium Deep Bass for Sport Black"
            // rating="⭐⭐⭐"
            rating={3}
          />
          <SaleCard
            id="12121217"
            image="https://images-na.ssl-images-amazon.com/images/I/31KSWaj8AtL._AC_US240_FMwebp_QL65_.jpg"
            price={25.98}
            description="Wyze Cam 1080p HD Indoor Wireless Smart Home Camera with Night Vision, 2-Way Audio, Works with Alexa & the Google Assistant, One Pack, White - WYZEC2"
            // rating="⭐⭐⭐⭐⭐"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
