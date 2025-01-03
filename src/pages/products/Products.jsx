import React from "react";
import { Link, useParams } from "react-router-dom";

import "./products.scss";
import Header from "../../components/header/Header";
import Loader from "../../components/loader/Loader";

const Products = () => {
  const { id } = useParams();
  const [product, setProduct] = React.useState(null);
  const [fav, setFav] = React.useState({});
  const [basket, setBasket] = React.useState(JSON.parse(localStorage.getItem("basket")) || []);
  const [addBasketMessage, setAddBasketMessage] = React.useState(false);
  const [messageStyle, setMessageStyle] = React.useState({
    position: "fixed",
    top: "-60px",
    right: "20px",
    backgroundColor: "#F94F0D",
    color: "white",
    padding: "14px",
    borderRadius: "10px",
    fontSize: "18px",
    opacity: 0,
    transition: "all 0.34s"
  })

  const onClickFav = () => {
    setFav((prevFav) => ({
      ...prevFav,
      [product.id]: !prevFav[product.id],
    }));
  };

  const onClickBasket = () => {
    if(!basket.some(item => item.id == product.id)){
      const newProduct = {...product, quantity : 1};
      const updateBasket = [...basket, newProduct];
      setBasket(updateBasket);
      
      localStorage.setItem("basket", JSON.stringify(updateBasket));
    }else{
      const updateBasket = basket.map(item => {
        return item.id === product.id ? {...item, quantity: item.quantity + 1} : item;
      })

      setBasket(updateBasket);
      localStorage.setItem("basket", JSON.stringify(updateBasket));
    }
  }
  React.useEffect(() => {
    let favouritesLocalArray = JSON.parse(localStorage.getItem("favourites")) || [];
    
    for(let key in fav){
      if(fav[key]){
        if(!favouritesLocalArray.some(item => item.id == key)){
          favouritesLocalArray.push(product);
        }
      }else{
        favouritesLocalArray = favouritesLocalArray.filter(item => item.id != key);
      }
    }
    localStorage.setItem("favourites", JSON.stringify(favouritesLocalArray));
    favouritesLocalArray = JSON.parse(localStorage.getItem("favourites"));
  }, [fav])

  React.useEffect(() => {
    fetch(`https://66ea9bdb55ad32cda479a3ae.mockapi.io/items/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) =>
        console.error("Error fetching product details:", error)
      );
      const favouritesLocalArray = JSON.parse(localStorage.getItem("favourites")) || [];
    
      if(favouritesLocalArray.length){
        const favouritesLocalObj = {};
        favouritesLocalArray.map(product => {
          favouritesLocalObj[product.id] = true;
          
        })
        setFav(favouritesLocalObj);
      }
  }, [id]);

  const showMessage = () => {
    setAddBasketMessage(true);
    setTimeout(() => {
      setMessageStyle(prevStyle => ({
        ...prevStyle,
        top: "20px",
        opacity: 1
      }))
    }, 200)
    setTimeout(() => {
      setMessageStyle(prevStyle => ({
        ...prevStyle,
        top: "60px",
        opacity: 0
      }))
      setTimeout(() => {
        setAddBasketMessage(false)
        setMessageStyle(prevStyle => ({
          ...prevStyle,
          top: "-60px",
        }))
      }
      , 100)
    }, 800)
  }

  if (!product) {
    return (
      <div className="loader__with">
        <Loader />
      </div>
    );
  }

  return (
    <div className="content">
      {
        addBasketMessage && (<div style={messageStyle}>Товар добавлен в корзину</div>)
      }
      <Header />
      <div className="main__nav">
        <Link to="/">Главная</Link>/<Link to="/">Каталог</Link>/
        <Link to="/">Мужское</Link>/<Link to="/">Часы</Link>/
        <Link to="/">Не ювелирные</Link>
      </div>
      <div className="products">
        <div className="products__one">
          <div className="products__slider">
            <img src={product.image} alt={product.title} />
          </div>
          <img src={product.image} alt={product.title} />
        </div>
        <div className="products__two">
          <h2>{product.title}</h2>
          <p>{product.desc}</p>
          <p>от {product.price} ₽</p> <br /> <br />
          <b>
            Цвет: <span>{product.color}бесцветный</span>
          </b>
          <br />
          <div className="products__btn">
            <button onClick={() => {
              onClickBasket();
              showMessage();
            }}>Купить</button>
            {
              (fav[product.id]) ?
              <button onClick={() => onClickFav()}>Удалить из избранного</button> :
              <button onClick={() => onClickFav()}>Добавить в избранное</button>
            }
          </div>
        </div>
      </div>
      <div className="products__title">
        <div className="products__title-one">
          <h3>Описание</h3>
          <p>
            Механизм с автоматическим подзаводом Корпус: сталь, чёрный
            керамический безель Чёрный циферблат Стальной браслет Часы, минуты
          </p>
        </div>
        <div className="products__title-two">
          <h3>Информация</h3>
          <p>
            Бренд: <span>{product.title}</span>
          </p>
          <p>
            Артикул: <span>{product.articul || "ARTICUL123"}</span>
          </p>
          <br />
          <p>Телефон: +7(495) 935-77-90</p>
          <p>Время работы: 10:00 – 22:00</p>
        </div>
        <div className="products__title-three">
          <h3>Доставка</h3>
          <ul>
            <li>
              Дополнительную информацию об изделии можно получить по телефону
              +7(495) 935-77-90.
            </li>
            <li>Количество товара ограничено.</li>
            <li>Товар может быть продан.</li>
            <li>
              На данное изделие не распространяется действие карт лояльности и
              подарочных карт (кроме специальных акций).
            </li>
            <li>
              Бесплатная доставка по России полностью предоплаченного изделия.
            </li>
            <li>
              Данные документа, удостоверяющего личность плательщика и
              получателя заказов, должны совпадать.
            </li>
            <li>Изделия не подлежат обмену и возврату.</li>
            <li>Не является публичной офертой.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Products;
