import React from "react";
import "./Modal.css"


export const Modal = ({ active, children, close }) => {
   return (
      <div className={active ? "modal active" : "modal"} onClick={close}>
         <div className={active ? "modal__content active" : "modal__content"}>
            {children}
         </div>
      </div>
   )
}