import React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./home.scss";
import WomenProduct from "../../components/womenProduct/WomenProduct";
import PopupSort from "../../components/popupSort/PopupSort";

const MainWomen = () => {
  const [count, setCount] = React.useState(["0"]);

  const [popup, setPopup] = React.useState(false);

  fetch("https://66ea9bdb55ad32cda479a3ae.mockapi.io/items")
    .then((res) => res.json())
    .then((data) => setCount(data.length));

  return (
    <>
      <div className="content">
        <div className="main">
          <Header />
          <div className="main__nav">
            <Link to="/">Главная</Link>/<Link to="/">Каталог</Link>/
            <Link to="/">Мужское</Link>/<Link to="/">Часы</Link>
          </div>
          <div className="main__h1">
            <h1>Мужские часы</h1>
          </div>
          <div className="main__main">
            <aside>
              <ul>
                <li>Верхняя одежда</li>
                <li>Трикотаж</li>
                <li>Брюки</li>
                <li>Платья</li>
                <li>Футболки и топы</li>
                <li>Юбки</li>
                <li>Деним</li>
                <li>Толстовки</li>
                <li>Жакеты и костюмы</li>
                <li>Рубашки и блузы</li>
                <li>Кожа</li>
                <li>Спорт</li>
                <li>Комбинезоны</li>
                <li>Шорты</li>
                <li>Бельё</li>
                <li>Домашняя одежда</li>
                <li>Пляжная одежда</li>
              </ul>
            </aside>
            <div className="main__product">
              <nav className="main__nav">
                <Link onClick={() => setPopup(true)}>Выбор ЦУМА</Link>
                <Link>Бренды</Link>
                <Link>Материал корпуса</Link>
                <Link>Механизм</Link>
                <Link>Цвет циферблата</Link>
                <Link>Цена</Link>
                <Link>Другие</Link>
              </nav>
              {popup && <PopupSort setPopup={setPopup} />}
              <div className="main__count">{count} товаров</div>
              <div className="main__pages">
                <WomenProduct />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainWomen;
