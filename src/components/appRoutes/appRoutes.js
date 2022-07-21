import ReactDOM from "react-dom/client";
import {
   BrowserRouter,
   Routes,
   Route,
} from "react-router-dom";
import Login from "../login/login";
import HomePage from "../Home/homePage";
import SignIn from "../signIn/signIn"
import { routes } from "./constants";
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