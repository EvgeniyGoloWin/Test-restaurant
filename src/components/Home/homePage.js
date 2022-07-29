import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "../../Redux/redux";
import { fetchProducts } from "../../Redux/reducers/ProductReduser";
import { Filters } from '../Filters/Filter';
import { ProductList } from '../ProductList/ProductList';
import './HomePage.css'

const API = 'https://random-data-api.com/api/restaurant/random_restaurant?size=100'




const HomePage = () => {
   const dispatch = useAppDispatch();
   const [modalActive, setModalActive] = useState(false);
   const [work, setWork] = useState(null)
   const { products, filteredProducts } = useAppSelector((state) => state.products);
   console.log(modalActive)
   const checkDay = (id) => {
      const test = products.filter((item) => item.uid === id)
      let date = new Date();
      let weekday = date.getDay();

      switch (weekday) {

         case 0:
            setWork(test[0].hours.sunday)
            break;
         case 1:
            setWork(test[0].hours.monday)
            break;
         case 2:
            setWork(test[0].hours.tuesday)
            break;
         case 3:
            setWork(test[0].hours.wednesday)
            break;
         case 4:
            setWork(test[0].hours.thursday)
            break;
         case 5:
            setWork(test[0].hours.friday)
            break;
         case 6:
            setWork(test[0].hours.saturday)
            break;
      }
   }

   useEffect(() => {
      dispatch(fetchProducts())
   }, [])
   const openModal = (e, id) => {
      checkDay(id)
      setModalActive(true)
   }

   const closeModal = (e) => {
      e.stopPropagation();
      setModalActive(false)
   }

   return (
      <div>
         <div className='wrapper'>
            <div className='wrapper-header'>
            </div>
            <div className='wrapper-main'>
               <Filters />
               <div className='products'>
                  <ProductList />
                  {/* {
                     filteredProducts.length ?
                        filteredProducts.map((item) => {
                           return <div key={item.uid} onClick={(e) => openModal(e, item.uid)}>
                              <img src={item.logo} />
                              <p>{item.name}</p>
                              <p>{item.type}</p>
                              <p>{item.description}</p>
                              <Modal key={item.uid} active={modalActive} close={closeModal}>
                                 <img src={item.logo} style={{ width: 20, height: 20 }} />
                                 <p>{item.review}</p>
                                 {modalActive &&
                                    <>
                                       <p>open at: {work.opens_at} close at: {work.closes_at}</p>
                                       <p>{work.is_closed ? "opened" : "closed"}</p>
                                    </>}
                              </Modal>
                           </div>
                        }) :
                        products.map((item) => {
                           return <div key={item.uid} onClick={(e) => openModal(e, item.uid)}>
                              <img src={item.logo} />
                              <p>{item.name}</p>
                              <p>{item.type}</p>
                              <p>{item.description}</p>
                              <Modal key={item.uid} active={modalActive} close={closeModal}>
                                 <img src={item.logo} style={{ width: 20, height: 20 }} />
                                 <p>{item.review}</p>
                                 {modalActive &&
                                    <>
                                       <p>open at: {work.opens_at} close at: {work.closes_at}</p>
                                       <p>{work.is_closed ? "opened" : "closed"}</p>
                                    </>}
                              </Modal>
                           </div>
                        })
                  } */}
               </div>
            </div>
            <div className='wrapper-footer'></div>
         </div>
      </div >
   );
}

export default HomePage;