import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ConsultationBanner from "../components/Consultation/ConsultationBanner";
import Consult from "../components/Consultation/Consult";

const Consultation = () => {
  return (
    <div>
      <Header />
      <ConsultationBanner />
      <Consult />
      <Footer />
    </div>
  );
};

export default Consultation;
