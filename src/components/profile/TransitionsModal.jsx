

import * as React from 'react';
import "./profile.scss"



export default function TransitionsModal(open) {
  return (
    <div className="modal-parent">
      <div className="modal">
        <div className="modal-header">
            <span>УКАЖИТЕ ТЕЛЕФОН</span>
            <button className="close" onClick={open}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px">
                    <path d="M18.24 6.22a.75.75 0 0 1 0 1.06l-4.95 4.95 4.95 4.95a.75.75 0 0 1-1.06 1.06l-4.95-4.95-4.95 4.95a.75.75 0 1 1-1.06-1.06l4.95-4.95-4.95-4.95a.75.75 0 1 1 1.06-1.06l4.95 4.95 4.95-4.95a.75.75 0 0 1 1.06 0z" fill="#1B1B1B"> </path>
                </svg>
            </button>
        </div>
        <div className="modal-content">
            <p>Продолжая, вы даете <a href="#">согласие на обработку</a> персональных данных.</p>
            <input type="text" class="phone-input" placeholder="+7"></input>
            <p>Мы отправим вам смс с кодом для входа в личный кабинет</p>
        </div>
        <div className="modal-footer">
            <button>Вход по email</button>
        </div>
    </div>
    </div>



  // <div className='box'>
  //     <div className='CardProfile'>
  //       <div className='CardMain'>
  //         <div className="hSelection">
  //             <button viebox="0 0 24 24" className='btnCross'>
                // <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px">
                // <path d="M18.24 6.22a.75.75 0 0 1 0 1.06l-4.95 4.95 4.95 4.95a.75.75 0 0 1-1.06 1.06l-4.95-4.95-4.95 4.95a.75.75 0 1 1-1.06-1.06l4.95-4.95-4.95-4.95a.75.75 0 1 1 1.06-1.06l4.95 4.95 4.95-4.95a.75.75 0 0 1 1.06 0z" fill="#1B1B1B"> </path>
                // </svg>
  //             </button>
  //             <h4>Укажите телефон</h4>
  //             <p>Продолжая, вы даете согласие на обработку персональных данных.</p>

  //         </div>
  //       </div>
  //     </div>
  // </div>

  );
}