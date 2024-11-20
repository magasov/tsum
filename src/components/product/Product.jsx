import React from "react";
import { Link } from "react-router-dom";

import "./product.scss";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import Skeleton from "../skeleton/Skeleton";

const Product = () => {
  const [data, setData] = React.useState([]);
  const [loadingSkeleton, setLoadingSkeleton] = React.useState(true);
  const [fav, setFav] = React.useState({});

  const onClickFav = (id) => {
    setFav((prevFav) => ({
      ...prevFav,
      [id]: !prevFav[id],
    }));
  };

  React.useEffect(() => {
    fetch("https://66ea9bdb55ad32cda479a3ae.mockapi.io/items")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setLoadingSkeleton(false);
      });
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {loadingSkeleton
        ? [...new Array(6)].map((_, index) => <Skeleton />)
        : data.map((items) => (
            <div className="product" key={items.id}>
              <Link to={`/products/${items.id}`}>
                <img src={items.image} alt="images" />
              </Link>
              <h3>{items.title}</h3>
              <p>{items.desc}</p>
              <h4>{items.price} ₽</h4>
              {fav[items.id] ? (
                <StarIcon
                  onClick={() => onClickFav(items.id)}
                  className="product__icon"
                />
              ) : (
                <StarBorderIcon
                  onClick={() => onClickFav(items.id)}
                  className="product__icon"
                />
              )}
            </div>
          ))}
    </>
  );
};

export default Product;
