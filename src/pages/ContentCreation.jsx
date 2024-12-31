import React from "react";
import ContentBanner from "../components/Content/ContentBanner";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Content from "../components/Content/Content";

const ContentCreation = () => {
  return (
    <div>
      <Header />
      <ContentBanner />
      <Content />
      <Footer />
    </div>
  );
};

export default ContentCreation;
