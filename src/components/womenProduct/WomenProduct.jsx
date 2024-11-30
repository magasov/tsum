import React from "react";
import { Link } from "react-router-dom";

import "./product.scss";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import db from "./db.json";

const ProductCard = ({ item, isFav, onFavToggle }) => {
  const [hoveredIndex, setHoveredIndex] = React.useState(0);

  return (
    <div className="product">
      <div
        onMouseEnter={() => setHoveredIndex(1)}
        onMouseLeave={() => setHoveredIndex(0)}
      >
        <Link to={`/products/${item.id}`}>
          <img src={item.images[hoveredIndex]} alt="product" />
        </Link>
      </div>
      <div className="img__brand">
        <img src={item.title} alt="brand" />
      </div>
      <p>{item.desc}</p>
      <h4>{item.price} ₽</h4>
      {isFav ? (
        <StarIcon
          onClick={() => onFavToggle(item.id)}
          className="product__icon"
        />
      ) : (
        <StarBorderIcon
          onClick={() => onFavToggle(item.id)}
          className="product__icon"
        />
      )}
    </div>
  );
};

const WomenProduct = () => {
  const [fav, setFav] = React.useState({});

  const onClickFav = (id) => {
    setFav((prevFav) => ({
      ...prevFav,
      [id]: !prevFav[id],
    }));
  };

  return (
    <>
      {db.map((item) => (
        <ProductCard
          key={item.id}
          item={item}
          isFav={!!fav[item.id]}
          onFavToggle={onClickFav}
        />
      ))}
    </>
  );
};

export default WomenProduct;
