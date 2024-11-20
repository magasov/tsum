import React from "react";
import { Link, useParams } from "react-router-dom";

import "./products.scss";
import Header from "../../components/header/Header";
import Loader from "../../components/loader/Loader";

const Products = () => {
  const { id } = useParams();
  const [product, setProduct] = React.useState(null);

  React.useEffect(() => {
    fetch(`https://66ea9bdb55ad32cda479a3ae.mockapi.io/items/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) =>
        console.error("Error fetching product details:", error)
      );
  }, [id]);

  if (!product) {
    return (
      <div className="loader__with">
        <Loader />
      </div>
    );
  }

  return (
    <div className="content">
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
            <button>Купить</button>
            <button>Добавить в избранное</button>
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
