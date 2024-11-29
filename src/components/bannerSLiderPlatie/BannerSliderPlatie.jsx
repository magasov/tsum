import "./bannerPlatie.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import db from "./db.json";
import { Link } from "react-router-dom";

const BannerSliderPlatie = () => {
  return (
    <div className="bannerSlider">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true} // Зацикливает слайды
        autoplay={{ delay: 5000, disableOnInteraction: false }} // Автопрокрутка
      >
        {db.map((obj, index) => (
          <SwiperSlide key={index}>
            <Link to={obj.link}>
              <img src={obj.img} alt={`banner ${index + 1}`} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSliderPlatie;
