import { Navigate, Outlet, useRoutes } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuth } from "redux/authSlice";

import Login from "pages/login/Login";
import DashBoard from "pages/dashboard/DashBoard";
import Exam from "pages/exam/Exam";
import pathRoutes from "constants/pathRoutes";

import AdminLayout from "layouts/AdminLayout/AdminLayout";

import AdminQuiz from "pages/admin/AdminQuiz/AdminQuiz";
import AdminUser from "pages/admin/AdminUser/AdminUser";
import EditQuiz from "pages/admin/EditQuiz/EditQuiz";

const ProtectedRoute = () => {
  const { isAuthenticated } = useSelector(selectAuth);

  return isAuthenticated ? <Outlet /> : <Navigate to={pathRoutes.login} />;
};

const RejectedRoute = () => {
  const { isAuthenticated } = useSelector(selectAuth);

  return !isAuthenticated ? <Outlet /> : <Navigate to={pathRoutes.dashboard} />;
};

const RequireAuth = ({ allowedRolesArr }) => {
  const { user } = useSelector(selectAuth);
  const roles = user?.roles;

  return roles?.find((role) => allowedRolesArr?.includes(role)) ? (
    <Outlet />
  ) : user ? (
    <Navigate to={pathRoutes.dashboard} />
  ) : (
    <Navigate to={pathRoutes.login} />
  );
};

const useRouteElements = () => {
  const elements = useRoutes([
    {
      path: "",
      element: <RejectedRoute />,
      children: [{ path: pathRoutes.login, element: <Login /> }],
    },
    {
      path: "",
      element: <ProtectedRoute />,
      children: [
        { path: pathRoutes.dashboard, element: <DashBoard /> },
        { path: `${pathRoutes.exam}/:id`, element: <Exam /> },
      ],
    },
    {
      path: pathRoutes.admin,
      element: <RequireAuth allowedRolesArr={["admin"]} />,
      children: [
        {
          path: pathRoutes.adminQuizs,
          element: (
            <AdminLayout>
              <AdminQuiz />
            </AdminLayout>
          ),
        },
        {
          path: pathRoutes.adminUsers,
          element: (
            <AdminLayout>
              <AdminUser />
            </AdminLayout>
          ),
        },
        {
          path: `${pathRoutes.editQuiz}/:id`,
          element: (
            <AdminLayout>
              <EditQuiz />
            </AdminLayout>
          ),
        },
      ],
    },
  ]);

  return elements;
};

export default useRouteElements;
