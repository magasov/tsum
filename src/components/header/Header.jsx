import React, { useState } from "react";
import "./header.scss";
import TransitionsModal from "../profile/TransitionsModal";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="content">
      <header className="header">
        <ul>
          <li>Search</li>
          <li>
            <span onClick={() => setOpen(true)} sstyle={{ cursor: "pointer" }}>
              Profile
            </span>
          </li>
          <li>Faforit</li>
          <li>Back</li>
        </ul>
      </header>
      {(open && <TransitionsModal />)}
    </div>
  );
};

export default Header;
