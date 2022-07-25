import React from "react";
import Login from "./components/Login/Login";
import { useDispatch } from "react-redux"
import { AppRoutes } from "./components/AppRoutes/AppRoutes";


const App = () => {

  const dispatch = useDispatch();
  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
