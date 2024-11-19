import React from "react";

import "./product.scss";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const Product = () => {
  const [data, setData] = React.useState([]);

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
          <StarBorderIcon />
        </div>
      ))}
    </>
  );
};

export default Product;
