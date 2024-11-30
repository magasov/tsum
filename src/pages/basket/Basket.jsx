import React from "react";
import { Link } from "react-router-dom";

import "./basket.scss";
import CloseIcon from "@mui/icons-material/Close";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export default function Basket() {
  const [basket, setBasket] = React.useState(
    JSON.parse(localStorage.getItem("basket")) || []
  );
  function deleteBasket(item) {
    const newBasket = basket.filter((product) => product != item);
    setBasket(newBasket);
    localStorage.setItem("basket", JSON.stringify(newBasket));
  }
  function addToBasket(id) {
    const updateBasket = basket.map((item) => {
      return item.id === id ? { ...item, quantity: item.quantity + 1 } : item;
    });

    setBasket(updateBasket);
    localStorage.setItem("basket", JSON.stringify(updateBasket));
  }

  function deleteToBasket(id) {
    const updateBasket = basket.map((item) => {
      return item.id === id
        ? {
            ...item,
            quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity,
          }
        : item;
    });

    setBasket(updateBasket);
    localStorage.setItem("basket", JSON.stringify(updateBasket));
  }

  return (
    <div>
      <Header />
      <div className="content-basket">
        {!basket.length && (
          <h1 style={{ textAlign: "center" }}>Корзина пуста</h1>
        )}
        <main className="basket__main">
          {!basket.length
            ? false
            : basket.map((items) => (
                <div className="product" key={items.id}>
                  <Link to={`/products/${items.id}`}>
                    <img src={items.image} alt="images" />
                  </Link>
                  <h3>{items.title}</h3>
                  <p>{items.desc}</p>
                  <div className="quantity-block">
                    <button
                      onClick={() => deleteToBasket(items.id)}
                      style={{ borderRadius: "6px 0 0 6px" }}
                    >
                      -
                    </button>
                    <p>{items.quantity}</p>
                    <button
                      onClick={() => addToBasket(items.id)}
                      style={{ borderRadius: "0 6px 6px 0" }}
                    >
                      +
                    </button>
                  </div>
                  <h4>{items.price} ₽</h4>
                  <CloseIcon
                    className="cross"
                    onClick={() => deleteBasket(items)}
                  />
                </div>
              ))}
        </main>
      </div>
      <Footer />
    </div>
  );
}
