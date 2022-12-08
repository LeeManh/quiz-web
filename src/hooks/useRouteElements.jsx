import { Navigate, Outlet, useRoutes } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuth } from "redux/authSlice";

import Login from "pages/login/Login";
import DashBoard from "pages/dashboard/DashBoard";
import Exam from "pages/exam/Exam";

const ProtectedRoute = () => {
  const { isAuthenticated } = useSelector(selectAuth);

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
const RejectedRoute = () => {
  const { isAuthenticated } = useSelector(selectAuth);

  return !isAuthenticated ? <Outlet /> : <Navigate to="/dashboard" />;
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
      children: [{ path: "login", element: <Login /> }],
    },
    {
      path: "",
      element: (
        <ProtectedRoute>
          <Outlet />
        </ProtectedRoute>
      ),
      children: [
        { path: "dashboard", element: <DashBoard /> },
        { path: "exam", element: <Exam /> },
      ],
    },
  ]);

  return elements;
};

export default useRouteElements;
