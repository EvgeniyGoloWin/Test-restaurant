import { configureStore } from '@reduxjs/toolkit';
import productsReducer from "../redux/reducers/productReduser";
import userReducer from "../redux/reducers/usersReducer";
import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
   reducer: {
      products: productsReducer,
      user: userReducer,
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false,
   }),
})


export const useAppDispatch = () => useDispatch()
export const useAppSelector = useSelector