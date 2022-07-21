import React from 'react';
import { useAppDispatch, useAppSelector } from "../../redux/index";
import { setFilter } from "../../redux/reducers/productReduser";
import "./filter.css"


export const Filters = () => {
   const { productTypes } = useAppSelector((state) => state.products);
   const dispatch = useAppDispatch();

   const handleSetFilter = (product) => dispatch(setFilter({ product: product }))

   return (
      <div className="filters-container">
         {productTypes.map((product, id) => (
            <div className='filter' key={product + id}>
               <input
                  className='input-filter'
                  onClick={() => handleSetFilter(product)}
                  type="checkbox"
                  id={product + '-id'}
               />
               {product}
            </div>
         ))}
      </div>
   );
};