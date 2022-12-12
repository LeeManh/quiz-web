import { Navigate, Outlet, useRoutes } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuth } from "redux/authSlice";

import Login from "pages/login/Login";
import DashBoard from "pages/dashboard/DashBoard";
import Exam from "pages/exam/Exam";
import pathRoutes from "constants/pathRoutes";

const ProtectedRoute = () => {
  const { isAuthenticated } = useSelector(selectAuth);

  return isAuthenticated ? <Outlet /> : <Navigate to={pathRoutes.login} />;
};
const RejectedRoute = () => {
  const { isAuthenticated } = useSelector(selectAuth);

  return !isAuthenticated ? <Outlet /> : <Navigate to={pathRoutes.dashboard} />;
};

const useRouteElements = () => {
  const elements = useRoutes([
    {
      path: "",
      element: (
        <RejectedRoute>
          <Outlet />
        </RejectedRoute>
      ),
      children: [{ path: pathRoutes.login, element: <Login /> }],
    },
    {
      path: "",
      element: (
        <ProtectedRoute>
          <Outlet />
        </ProtectedRoute>
      ),
      children: [
        { path: pathRoutes.dashboard, element: <DashBoard /> },
        { path: `${pathRoutes.exam}/:id`, element: <Exam /> },
      ],
    },
  ]);

  return elements;
};

export default useRouteElements;
