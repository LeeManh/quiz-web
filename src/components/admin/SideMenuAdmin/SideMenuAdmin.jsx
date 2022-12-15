import pathRoutes from "constants/pathRoutes";
import React from "react";

import {
  SideMenuContainer,
  MenuLink,
  QuesitonIcon,
  Logo,
  UserIcon,
} from "./SideMenuAdmin.styled";

const SideMenuAdmin = () => {
  return (
    <SideMenuContainer>
      <Logo to={pathRoutes.dashboard}>Quiz App</Logo>

      <MenuLink to={pathRoutes.adminQuizs}>
        <QuesitonIcon />
        <span>Quizs</span>
      </MenuLink>

      <MenuLink to={pathRoutes.adminUsers}>
        <UserIcon />
        <span>User</span>
      </MenuLink>
    </SideMenuContainer>
  );
};

export default SideMenuAdmin;
