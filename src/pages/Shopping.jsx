import React from "react";
import Header from "../components/Header/Header";
import ShoppingBanner from "../components/Shopping/ShoppingBanner";
import Footer from "../components/Footer/Footer";
import Shop from "../components/Shopping/Shop";
import Shopp from "../components/Shopping/Shopp";
import ShopPay from "../components/Shopping/ShopPay";

const Shopping = () => {
  return (
    <div>
      <Header />
      <ShoppingBanner />
      <Shop />
      <Shopp />
      <ShopPay />
      <Footer />
    </div>
  );
};

export default Shopping;
