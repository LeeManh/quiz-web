import Pagination from "components/Pagination";
import { OverLay } from "GolbalStyles.styled";
import React, { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";

import ListQuiz from "./components/ListQuiz/ListQuiz";
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

const DashBoard = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  useEffect(() => {
    if (isOpenMenu) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isOpenMenu]);

  return (
    <>
      <NavBar>
        <NavBarIconWrap onClick={() => setIsOpenMenu(true)}>
          <BiMenu />
        </NavBarIconWrap>
        <NavBarTitle>DashBoard</NavBarTitle>
      </NavBar>

      <DashBoardContainer>
        <SideMenu show={isOpenMenu}>
          <TopSideMenu>
            <AvatarWrap>
              <img
                src="https://images.unsplash.com/photo-1669406999312-0821a42a3887?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=771&q=80"
                alt=""
              />
            </AvatarWrap>
            <InforText>User : lemanh123@gmail.com</InforText>
            <InforText>Point : 1233</InforText>
          </TopSideMenu>

          <Button>Logout</Button>
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
