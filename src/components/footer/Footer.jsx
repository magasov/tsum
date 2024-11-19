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
                    <li><a href="#">О магазине</a></li>
                    <li><a href="#">Новости и события</a></li>
                    <li><a href="#">Пункты выдачи заказов ЦУМ</a></li>
                    <li><a href="#">Контакты</a></li>
                    <li><a href="#">Наша история</a></li>
                    <li><a href="#">Карьера</a></li>
                    <li><a href="#">Коллекция</a></li>
                  </ul>
                </div>
                <div className="colum2">
                  <h4>ОНЛАЙН ПОКУПКИ</h4>
                  <ul>
                    <li><a href="#">Мобильное приложение</a></li>
                    <li><a href="#">Оплата</a></li>
                    <li><a href="#">Доставка</a></li>
                    <li><a href="#">Обмен и возврат</a></li>
                    <li><a href="#">Условия продажи</a></li>
                    <li><a href="#">Скидка на первый заказ</a></li>
                  </ul>
                </div>
                <div className="colum3">
                  <h4>УСЛУГИ</h4>
                  <ul>
                    <li><a href="#">Шопинг-сервисы</a></li>
                    <li><a href="#">Подарочная карта</a></li>
                    <li><a href="#">Подарочная упаковка</a></li>
                    <li><a href="#">Кафе и рестораны</a></li>
                    <li><a href="#">Такси для клинтов</a></li>
                    <li><a href="#">Карта лояльности</a></li>
                  </ul>
                </div>
                <div className="colum4">
                  <h4>КОНТАКТЫ</h4>
                  <ul>
                    <li><a href="#">Помощь</a></li>
                    <li><a href="#">+7 800 500 80 00</a></li>
                    <li><a href="#">+7 495 933 73 00</a></li>
                    <li><a href="#">hotline@tsum.ru</a></li>
                  </ul>
                  <h4>НАШЕ ПРИЛОЖЕНИЕ</h4>
                  <div className="footerApp">
                    <div className="footerAppL">
                      <a href="#">
                        <img src="qrInst.svg" width="94" height="94" title="QR код" data-testid="qr-code" />
                      </a>
                    </div>
                    <div className="footerAppR">
                      <ul>
                      <li><a href="#"><svg src={appStore} style={{width:"90px", height:"24px"}}></svg></a></li>
                      <li><a href="#"><img src="./img/google-play.svg" alt="#"/></a></li>
                      <li><a href="#"></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </footer>

  );
};

export default Footer;
