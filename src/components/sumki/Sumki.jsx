import "./sumki.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import db from "./db.json";
import { Link } from "react-router-dom";

const Sumki = () => {
  const chunkedDb = [];
  for (let i = 0; i < db.length; i += 5) {
    chunkedDb.push(db.slice(i, i + 5));
  }

  return (
    <div className="content">
      <h3 className="h3_newText">Сумки в вашу коллекцию</h3>
      <Swiper spaceBetween={16} slidesPerView={1}>
        {chunkedDb.map((group, groupIndex) => (
          <SwiperSlide key={groupIndex}>
            <div className="slide_group">
              {group.map((obj, index) => (
                <Link
                  to={`/product/${obj.link}`}
                  className="slide_item"
                  key={index}
                >
                  <img src={obj.image_url} alt="product" />
                  <img src={obj.brand_logo} alt="logo" />
                </Link>
              ))}
              {groupIndex === chunkedDb.length - 1 && (
                <Link to="/man" className="block__add">
                  Смотреть еще
                </Link>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Sumki;
