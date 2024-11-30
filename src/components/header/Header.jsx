import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./header.scss";
import TransitionsModal from "../profile/TransitionsModal";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import GradeIcon from "@mui/icons-material/Grade";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="content">
      <header className="header">
        <nav className="nav__left">
          <Link>Женское</Link>
          <Link to="/man">Мужское</Link>
          <Link>Детское</Link>
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
