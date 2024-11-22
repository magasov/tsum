import { Link } from "react-router-dom";
import "./footer.scss";
import appStore from "./img/app-store.298680ce.svg";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="columsF">
          <div className="colum1">
            <h4>О ЦУМ</h4>
            <ul>
              <li>
                <Link to="/">О магазине</Link>
              </li>
              <li>
                <Link to="/">Новости и события</Link>
              </li>
              <li>
                <Link to="/">Пункты выдачи заказов ЦУМ</Link>
              </li>
              <li>
                <Link to="/">Контакты</Link>
              </li>
              <li>
                <Link to="/">Наша история</Link>
              </li>
              <li>
                <Link to="/">Карьера</Link>
              </li>
              <li>
                <Link to="/">Коллекция</Link>
              </li>
            </ul>
          </div>
          <div className="colum2">
            <h4>ОНЛАЙН ПОКУПКИ</h4>
            <ul>
              <li>
                <Link to="/">Мобильное приложение</Link>
              </li>
              <li>
                <Link to="/">Оплата</Link>
              </li>
              <li>
                <Link to="/">Доставка</Link>
              </li>
              <li>
                <Link to="/">Обмен и возврат</Link>
              </li>
              <li>
                <Link to="/">Условия продажи</Link>
              </li>
              <li>
                <Link to="/">Скидка на первый заказ</Link>
              </li>
            </ul>
          </div>
          <div className="colum3">
            <h4>УСЛУГИ</h4>
            <ul>
              <li>
                <Link to="/">Шопинг-сервисы</Link>
              </li>
              <li>
                <Link to="/">Подарочная карта</Link>
              </li>
              <li>
                <Link to="/">Подарочная упаковка</Link>
              </li>
              <li>
                <Link to="/">Кафе и рестораны</Link>
              </li>
              <li>
                <Link to="/">Такси для клинтов</Link>
              </li>
              <li>
                <Link to="/">Карта лояльности</Link>
              </li>
            </ul>
          </div>
          <div className="colum4">
            <h4>КОНТАКТЫ</h4>
            <ul>
              <li>
                <Link to="/">+7 800 500 80 00</Link>
              </li>
              <li>
                <Link to="/">+7 495 933 73 00</Link>
              </li>
              <li>
                <Link to="/">hotline@tsum.ru</Link>
              </li>
            </ul>
            <h4>НАШЕ ПРИЛОЖЕНИЕ</h4>
            <div className="footerApp">
              <div className="footerAppL">
                <Link to="/">
                  <img
                    src="qrInst.svg"
                    width="94"
                    height="94"
                    title="QR код"
                    data-testid="qr-code"
                  />
                </Link>
              </div>
              <div className="footerAppR">
                <ul>
                  <li>
                    <Link to="/">
                      <svg
                        src={appStore}
                        style={{ width: "90px", height: "24px" }}
                      ></svg>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <img src="./img/google-play.svg" alt="#" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/"></Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footerDown">
        <div className="footerDownContent">
          <div className="footerDC1">
            <p>
            © ООО «Меркури Мода», 2024
            </p>
          </div>
          <div className="footerDC2">
            <p>
              Политика конфиденциальности
            </p>
          </div>
          <div className="footerDC3">
            <p>
              Мы в социальных сетях
            </p>
          </div>
          <div className="footerDC4">
            <p>
              Россия
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
