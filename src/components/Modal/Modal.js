import React from "react";
import "./Modal.css"


export const Modal = ({ show, children, handleClose }) => {
   return (
      <div className={show ? "modal active" : "modal"} onClick={handleClose}>
         <div className={show ? "modal__content active" : "modal__content"}>
            {children}
         </div>
      </div>
   )
}