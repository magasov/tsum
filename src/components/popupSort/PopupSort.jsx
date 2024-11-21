import React from "react";

import "./popupSort.scss";
import CloseIcon from "@mui/icons-material/Close";

const PopupSort = (setPopup) => {
  console.log({ setPopup });

  return (
    <div className="popup">
      <CloseIcon onClick={() => setPopup(false)} className="popup__close" />
      <div className="popup__main">
        <div className="popup__h3">
          <h3>Сортировка</h3>
        </div>
        <div className="popup__p">
          <p>Выбор ЦУМа</p>
          <p>Новые поступления</p>
          <p>По возрастанию цены</p>
          <p>По убыванию цены</p>
        </div>
      </div>
    </div>
  );
};

export default PopupSort;
