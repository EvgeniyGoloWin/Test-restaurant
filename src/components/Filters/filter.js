import React from 'react';
import { useAppDispatch, useAppSelector } from "../../Redux/redux";
import { setFilter } from "../../Redux/reducers/ProductReduser";
import "./Filter.css"


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