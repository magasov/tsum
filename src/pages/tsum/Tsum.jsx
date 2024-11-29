import React from "react";

import "./tsum.scss";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import NewArrivals from "../../components/newArrivals/NewArrivals";
import BannerSlider from "../../components/bannerSLider/BannerSlider";
import ChtoNosit from "../../components/chtoNosit/ChtoNosit";
import DolcheGabanna from "../../components/dolcheGabanna/DolcheGabanna";
import Sumki from "../../components/sumki/Sumki";
import Footer from "../../components/footer/Footer";
import BannerSliderPlatie from "../../components/bannerSLiderPlatie/BannerSliderPlatie";
import Sapogy from "../../components/sapogy/Sapogy";
import Palto from "../../components/palto/Palto";
import Sertificat from "../../components/sertificat/Sertificat";
import Mailing from "../../components/mailing/Mailing";

const Tsum = () => {
  return (
    <div className="tsum">
      <Header />
      <Navbar />

      <div className="content">
        <div className="banner"></div>
        <NewArrivals />
        <BannerSlider />
        <ChtoNosit />
        <img
          class="banners__center"
          src="https://st-cdn.tsum.com/sig/2b9c27dc958b42e9673d7755b693f4b7/width/1800/photos/6/2/62e0c6dd81c800ccf1a67c558f4bfe9293be0bb0.jpg"
          alt=""
        />
        <DolcheGabanna />
        <Sumki />
        <BannerSliderPlatie />
        <Sapogy />
        <Palto />
        <Sertificat />
        <Mailing />
      </div>
      <Footer />
    </div>
  );
};

export default Tsum;
