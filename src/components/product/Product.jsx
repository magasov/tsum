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

  const currentUser = JSON.parse(localStorage.getItem('user'));
  const userId = currentUser ? currentUser.login : 'guest';

  const onClickFav = (id) => {
    setFav((prevFav) => {
      const newFav = { ...prevFav, [id]: !prevFav[id] };
      saveFavourites(newFav);
      return newFav;
    });
  };

  const saveFavourites = (fav) => {
    let favouritesLocalArray = [];
    for (let key in fav) {
      if (fav[key]) {
        const product = data.find(product => product.id == key);
        if (product) {
          favouritesLocalArray.push(product);
        }
      }
    }
    localStorage.setItem(`favourites_${userId}`, JSON.stringify(favouritesLocalArray));
  };

  React.useEffect(() => {
    fetch("https://66ea9bdb55ad32cda479a3ae.mockapi.io/items")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setLoadingSkeleton(false);
      });
    window.scrollTo(0, 0);
    const favouritesLocalArray = JSON.parse(localStorage.getItem(`favourites_${userId}`)) || [];
    
    if (favouritesLocalArray.length) {
      const favouritesLocalObj = {};
      favouritesLocalArray.forEach(product => {
        favouritesLocalObj[product.id] = true;
      });
      setFav(favouritesLocalObj);
    }
  }, [userId]);

  return (
    <>
      {loadingSkeleton
        ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
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