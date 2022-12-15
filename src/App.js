import React from "react";
import { ToastContainer } from "react-toastify";
import useRouteElements from "./hooks/useRouteElements";

const App = () => {
  const elements = useRouteElements();
  return (
    <>
      {elements}
      <ToastContainer />
    </>
  );
};

export default App;
