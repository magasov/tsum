import React from "react";

import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="content">
      <nav className="navbar">
        <Link to="/">Новинки</Link>
        <Link to="/">Бренды</Link>
        <Link to="/">Одежда</Link>
        <Link to="/">Обувь</Link>
        <Link to="/">Сумки</Link>
        <Link to="/">Аксессуары</Link>
        <Link to="/">Подарочные карты</Link>
        <Link to="/">Часы</Link>
        <Link to="/">Ювелирные украшения</Link>
        <Link to="/">Косметика</Link>
        <Link to="/">Интерьер</Link>
        <Link to="/">Новости</Link>
      </nav>
    </div>
  );
};

export default Navbar;
