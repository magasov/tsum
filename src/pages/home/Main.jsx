import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import "./home.scss";

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
          <div className="main__product">s</div>
        </div>
      </div>
    </div>
  );
};

export default Main;
