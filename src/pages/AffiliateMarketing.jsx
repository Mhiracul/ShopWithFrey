import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AffiliateBanner from "../components/Affiliate/AffiliateBanner";
import AffiliateMarketingg from "../components/Affiliate/AffiliateMarketingg";
import TheFaq from "../components/Affiliate/TheFaq";

const AffiliateMarketing = () => {
  return (
    <div>
      <Header />
      <AffiliateBanner />
      <AffiliateMarketingg />
      <TheFaq />
      <Footer />
    </div>
  );
};

export default AffiliateMarketing;
