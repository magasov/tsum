import React from "react";
import { Link } from "react-router-dom";

import "./product.scss";
import Favourites from "../favourites/Favourites";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import Skeleton from "../skeleton/Skeleton";

const Product = () => {
  const [data, setData] = React.useState([]);
  const [loadingSkeleton, setLoadingSkeleton] = React.useState(true);
  const [fav, setFav] = React.useState(null);

  const onClickFav = (id) => {
    
    setFav((prevFav) => ({
      ...prevFav,
      [id]: !prevFav[id],
    }));
  };

  React.useEffect(() => {
    const favouritesLocalArr = JSON.parse(localStorage.getItem("favourites")) || [];
    
    for(let key in fav){
      const product = data.find(product => product.id == key);
      if(fav[key]){
        if(!favouritesLocalArr.find(product => product.id == key)){
          favouritesLocalArr.push(product);
        }
      }else{
        favouritesLocalArr.splice(favouritesLocalArr.indexOf(product), 1);
      }
    }
    localStorage.setItem("favourites", JSON.stringify(favouritesLocalArr));
    console.log(favouritesLocalArr);
  }, [fav])

  React.useEffect(() => {
    fetch("https://66ea9bdb55ad32cda479a3ae.mockapi.io/items")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setLoadingSkeleton(false);
      });
    window.scrollTo(0, 0);
    const favouritesLocalArr = JSON.parse(localStorage.getItem("favourites")) || [];
    // console.log(favouritesLocalArr);
    
    if(favouritesLocalArr.length){
      const favouritesLocalArray = {};
      favouritesLocalArr.map(product => {
        favouritesLocalArray[product.id] = true;
        
      })
      setFav(favouritesLocalArray);
    }
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

          <Favourites />
    </>
  );
};

export default Product;
