import { useRoutes } from "react-router-dom";

import Login from "pages/login/Login";
import DashBoard from "../pages/dashboard/DashBoard";

const useRouteElements = () => {
  const elements = useRoutes([
    { path: "/login", element: <Login /> },
    { path: "/dashboard", element: <DashBoard /> },
  ]);

  return elements;
};

export default useRouteElements;
