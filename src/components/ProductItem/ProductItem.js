import React, { useState } from "react";
import { Modal } from "../Modal/Modal";
import './ProductItem.css'



export const ProductItem = ({
   id,
   name,
   logo,
   type,
   hours,
   review,
   description }) => {

   const [show, setShow] = useState(false)

   const toggleModal = () => {
      setShow(!show);
   }

   const showHours = () => {
      let hours_array = [];
      let today = new Date();

      switch (today.getDay()) {
         case 1:
            hours_array = [hours.monday.opens_at, hours.monday.closes_at, hours.monday.is_closed ? "open now" : 'closed, sorry']
            break
         case 2:
            hours_array = [hours.tuesday.opens_at, hours.tuesday.closes_at, hours.tuesday.is_closed ? "open now" : 'closed, sorry']
            break
         case 3:
            hours_array = [hours.wednesday.opens_at, hours.wednesday.closes_at, hours.wednesday.is_closed ? "open now" : 'closed, sorry']
            break
         case 4:
            hours_array = [hours.thursday.opens_at, hours.thursday.closes_at, hours.thursday.is_closed ? "open now" : 'closed, sorry']
            break
         case 5:
            hours_array = [hours.friday.opens_at, hours.friday.closes_at, hours.friday.is_closed ? "open now" : 'closed, sorry']
            break
         case 6:
            hours_array = [hours.saturday.opens_at, hours.saturday.closes_at, hours.saturday.is_closed ? "open now" : 'closed, sorry']
            break
         case 7:
            hours_array = [hours.sunday.opens_at, hours.sunday.closes_at, hours.sunday.is_closed ? "open now" : 'closed, sorry']
            break
      }

      return {
         opens_at: hours_array[0],
         closes_at: hours_array[1],
         status: hours_array[2]
      };
   }

   return (
      <> <div className={"product-block"} onClick={toggleModal}>
         <h4 className={"product-block-h4"}>{id}</h4>
         <img className={"product-block-img"} src={logo} alt={name} />
         <h3 className={"product-block-h3"}>{name}</h3>
         <h3 className={"product-block-h3"}>{type}</h3>
         <h4 className={"product-block-h4"}>{description}</h4>
      </div>
         <Modal handleClose={toggleModal} show={show}>
            <img className="modal-img" src={logo} alt={name} />
            <p>{review}</p>
            <p>
               opens_at: {showHours().opens_at}<br />
               closes_at: {showHours().closes_at}<br />
               We are {showHours().status}
            </p>
         </Modal></>
   );
};