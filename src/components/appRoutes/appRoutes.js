import ReactDOM from "react-dom/client";
import {
   BrowserRouter,
   Routes,
   Route,
} from "react-router-dom";
import Login from "../Login/Login";
import HomePage from "../Home/HomePage";
import SignIn from "../SignIn/SignIn"
import { routes } from "./Constants";
import { Modal } from "../Modal/Modal";

export const AppRoutes = () => {
   return (<BrowserRouter>
      <Routes>
         <Route path={routes.login} element={<Login />} />
         <Route path={routes.home} element={<HomePage />} />
         <Route path={routes.signIn} element={<SignIn />} />
      </Routes>
   </BrowserRouter>)
}