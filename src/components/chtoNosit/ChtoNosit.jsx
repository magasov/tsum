import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./chtoNosit.scss";
import db from "./db.json";

const ChtoNosit = () => {
  return (
    <div className="chtoNosit">
      <h3>Что носить прямо сейчас</h3>
      <Swiper
        spaceBetween={16}
        slidesPerView={1}
        loop={false}
        autoplay={{ delay: 3000 }}
      >
        {db.map((obj, index) => (
          <SwiperSlide key={index}>
            <Link to={obj.link}>
              <img src={obj.img} alt="images_products" />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ChtoNosit;
