import { Link } from "react-router-dom";
import "./footer.scss";
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
            <div className="NP" style={{height: "48px"}}>
              <h4>НАШЕ ПРИЛОЖЕНИЕ</h4>
            </div>
            <div className="footerApp">
              <div className="footerAppL">
                <Link to="/">
                <img   src="img/qrcod.png" style={{ width: "100px", height: "100px"}} alt="#" />
                </Link>
              </div>
              <div className="footerAppR">
                <ul>
                  <li>
                    <Link to="/">
                      <img src="img/app_store.png" alt="#" />                        
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <img src="img/google_s.png" alt="#" />                        
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                    <img src="img/app_gall.png" alt="#" />                        
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr style={{width: "99.9%", height: "0.5px", backgroundColor: "gray"}}/>
      <div className="footerDown">
        <div className="footerDownContent">
          <div className="footerDC">
            <p>
            © ООО «Меркури Мода», 2024
            </p>
          </div>
          <div className="footerDC">
            <p>
              Политика конфиденциальности
            </p>
          </div>
          <div className="footerDC">
            <p>
              Мы в социальных сетях
            </p>
          </div>
          <div className="footerDC">
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
