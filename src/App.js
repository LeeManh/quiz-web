import React from "react";
import useRouteElements from "./hooks/useRouteElements";

const App = () => {
  const elements = useRouteElements();
  return <>{elements}</>;
};

export default App;
