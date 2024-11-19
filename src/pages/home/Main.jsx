import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import "./home.scss";
import Product from "../../components/product/Product";

const Main = () => {
  return (
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
              <li>Одежда</li>
              <li>Обувь</li>
              <li>Сумки</li>
              <li>Аксессуары</li>
              <li>Часы</li>
              <li>Ювелирные аксессуары</li>
              <li>Косметика</li>
              <li>Apple</li>
              <li>Интерьер</li>
            </ul>
          </aside>
          <div className="main__product">
            <nav className="main__nav">
              <Link>Выбор ЦУМА</Link>
              <Link>Бренды</Link>
              <Link>Материал корпуса</Link>
              <Link>Механизм</Link>
              <Link>Цвет циферблата</Link>
              <Link>Цена</Link>
              <Link>Другие</Link>
            </nav>
            <div className="main__count">370 товаров</div>
            <div className="main__pages">
              {/* product */}
              <Product />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
