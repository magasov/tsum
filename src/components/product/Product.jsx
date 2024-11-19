import React from "react";
import "./product.scss";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

const Product = () => {
  const [data, setData] = React.useState([]);
  const [fav, setFav] = React.useState({});

  const onClickFav = (id) => {
    setFav((prevFav) => ({
      ...prevFav,
      [id]: !prevFav[id],
    }));
  };

  React.useEffect(() => {
    fetch("https://66ea9bdb55ad32cda479a3ae.mockapi.io/items").then((res) => {
      return res.json().then((res) => setData(res));
    });
  }, []);

  return (
    <>
      {data.map((items) => (
        <div className="product" key={items.id}>
          <img src={items.image} alt="images" />
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
