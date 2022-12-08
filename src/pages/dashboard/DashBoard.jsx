import React, { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";

import Pagination from "components/common/Pagination";
import { OverLay } from "GolbalStyles.styled";
import ListQuiz from "components/dashboard/ListQuiz/ListQuiz";
import {
  AvatarWrap,
  Button,
  ButtonSearch,
  Content,
  DashBoardContainer,
  HeaderContent,
  IconSearch,
  InforText,
  InputSearch,
  ListQuizWrap,
  MainContent,
  NavBar,
  NavBarIconWrap,
  NavBarTitle,
  PaginationWrap,
  SearchWrap,
  SelectLevel,
  SideMenu,
  TopSideMenu,
} from "./DashBoard.styled";
import { logout, selectAuth } from "redux/authSlice";

const DashBoard = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(selectAuth);

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const RenderNavBar = () => {
    return (
      <NavBar>
        <NavBarIconWrap onClick={() => setIsOpenMenu(true)}>
          <BiMenu />
        </NavBarIconWrap>
        <NavBarTitle>DashBoard</NavBarTitle>
      </NavBar>
    );
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (isOpenMenu) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isOpenMenu]);

  return (
    <>
      <RenderNavBar />

      <DashBoardContainer>
        <SideMenu show={isOpenMenu}>
          <TopSideMenu>
            <AvatarWrap>
              <img
                src="https://images.unsplash.com/photo-1669406999312-0821a42a3887?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=771&q=80"
                alt=""
              />
            </AvatarWrap>
            <InforText>User : {user.email}</InforText>
            <InforText>Point : {user.point}</InforText>
          </TopSideMenu>

          <Button onClick={handleLogout}>Đăng xuất</Button>
        </SideMenu>
        <OverLay show={isOpenMenu} onClick={() => setIsOpenMenu(false)} />

        <Content>
          <HeaderContent>
            <SearchWrap>
              <InputSearch placeholder="Search ..." />
              <ButtonSearch>
                <IconSearch />
              </ButtonSearch>
            </SearchWrap>

            <SelectLevel>
              <option value="1">Difficult</option>
              <option value="2">Medium</option>
              <option value="3">Easy</option>
            </SelectLevel>
          </HeaderContent>

          <MainContent>
            <ListQuizWrap>
              <ListQuiz />
            </ListQuizWrap>

            <PaginationWrap>
              <Pagination />
            </PaginationWrap>
          </MainContent>
        </Content>
      </DashBoardContainer>
    </>
  );
};

export default DashBoard;
