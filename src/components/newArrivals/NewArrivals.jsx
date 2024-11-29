import "./newArrivals.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; // Для кнопок навигации
import db from "./db.json";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  // Разбиваем продукты на группы по 5
  const chunkedDb = [];
  for (let i = 0; i < db.length; i += 5) {
    chunkedDb.push(db.slice(i, i + 5));
  }

  return (
    <div className="content margin__content">
      <h3 className="h3_newText">Новые поступления</h3>
      <Swiper spaceBetween={16} slidesPerView={1}>
        {chunkedDb.map((group, groupIndex) => (
          <SwiperSlide key={groupIndex}>
            <div className="slide_group">
              {group.map((obj, index) => (
                <Link to="/man" className="slide_item" key={index}>
                  <img src={obj.img} alt="product" />
                  <p>{obj.text}</p>
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

export default NewArrivals;
