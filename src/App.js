import React from "react";
import Login from "./components/login/login";
import { useDispatch } from "react-redux"
import { AppRoutes } from "./components/appRoutes/appRoutes";


const App = () => {

  const dispatch = useDispatch();
  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
