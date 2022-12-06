import { useRoutes } from "react-router-dom";

import Login from "pages/login/Login";
import DashBoard from "pages/dashboard/DashBoard";
import Exam from "pages/exam/Exam";

const useRouteElements = () => {
  const elements = useRoutes([
    { path: "/login", element: <Login /> },
    { path: "/dashboard", element: <DashBoard /> },
    { path: "/exam", element: <Exam /> },
  ]);

  return elements;
};

export default useRouteElements;
