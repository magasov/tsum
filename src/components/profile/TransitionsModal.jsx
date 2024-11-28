// import React from "react";
// import "./profile.scss";
// const Profile = ({ open }) => {
//   return (
//     <div className="mainWindow">
//       <div className="contentWindow">
//         <span className="close" onClick={open}></span>
//       </div>
//     </div>
//   );
// };

// export default Profile;

import * as React from 'react';
import "./profile.scss"
// import './profile.css'



export default function TransitionsModal() {
  return (
  <div className='box'>
      <div className='CardProfile'>
      <div className='CardMain'>
        <selection class name="hSelection">
            <h4>Укажите телефон</h4>
            <button viebox="0 0 24 24"></button>
        </selection>
        <selection>
          
        </selection>
      </div>
      </div>
  </div>

    // <div>
    //   {/* <Button onClick={handleOpen}>Open modal</Button> */}
    //   <Modal
    //     aria-labelledby="transition-modal-title"
    //     aria-describedby="transition-modal-description"
    //     // open={open}
    //     // onClose={handleClose}
    //     closeAfterTransition
    //     slots={{ backdrop: Backdrop }}
    //     slotProps={{
    //       backdrop: {
    //         timeout: 500,
    //       },
    //     }}
    //   >
    //     <Fade>
    //       <Box>
              
    //       </Box>
    //     </Fade>
    //   </Modal>
    // </div>
  );
}