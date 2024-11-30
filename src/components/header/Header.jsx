import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./header.scss";
import TransitionsModal from "../profile/TransitionsModal";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import GradeIcon from "@mui/icons-material/Grade";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const onclickActive = (index) => setActive(index);
  console.log(active);

  const value = [
    {
      title: "Женское",
      link: "/women",
    },
    {
      title: "Мужское",
      link: "/man",
    },
    {
      title: "Детское",
      link: "/det",
    },
  ];
  return (
    <div className="content">
      <header className="header">
        <nav className="nav__left">
          {value.map((obj, index) => (
            <Link
              onClick={() => onclickActive(index)}
              key={index}
              className={active === index ? "active" : null}
              to={obj.link}
            >
              {obj.title}
            </Link>
          ))}
        </nav>
        <Link className="logo" to="/">
          <img src="/assets/img/icons/logo.svg" alt="" />
        </Link>
        <ul className="right__nav">
          <li>
            <SearchIcon />
          </li>
          <li onClick={() => setOpen(true)} style={{ cursor: "pointer" }}>
            <AccountCircleIcon />
          </li>
          <li>
            <Link to="/favourites"><GradeIcon /></Link>
          </li>
          <li>
            <Link to="/basket"><img src="/assets/img/icons/cart.svg" alt="" /></Link>
          </li>
        </ul>
      </header>
      {open && <TransitionsModal open={open} />}
    </div>
  );
};

export default Header;
