import React, { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { createSearchParams, useNavigate } from "react-router-dom";

import Pagination from "components/common/Pagination/Pagination";
import { OverLay } from "GolbalStyles.styled";
import ListQuiz from "components/dashboard/ListQuiz/ListQuiz";
import {
  AvatarWrap,
  Button,
  Content,
  DashBoardContainer,
  HeaderContent,
  InforText,
  ListQuizWrap,
  MainContent,
  NavBar,
  NavBarIconWrap,
  NavBarTitle,
  PaginationWrap,
  SelectLevel,
  SelectLevelWrap,
  SideMenu,
  TopSideMenu,
} from "./DashBoard.styled";
import { logout, selectAuth } from "redux/authSlice";
import quizs from "data/quizs";
import useQueryConfig from "hooks/useQueryConfig";
import pathRoutes from "constants/pathRoutes";
import Search from "components/common/Search/Search";
import useSearchQuiz from "hooks/useSearchQuiz";

const DashBoard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector(selectAuth);

  const { handleChangeSearch, handleSubmitSearch, inputSearch } =
    useSearchQuiz();

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [difficulty, setDifficulty] = useState("all");

  const queryConfig = useQueryConfig();

  const start = (queryConfig.page - 1) * queryConfig.limit;
  const end = queryConfig.page * queryConfig.limit;

  const allQuizs = quizs.filter((quiz) => {
    if (
      queryConfig?.search &&
      !quiz.title
        .toLocaleLowerCase()
        .includes(queryConfig.search?.toLocaleLowerCase())
    )
      return false;

    if (queryConfig?.difficulty && queryConfig.difficulty === "all")
      return true;

    if (queryConfig?.difficulty && quiz.difficulty !== queryConfig.difficulty)
      return false;

    return true;
  });

  const quizsRender = allQuizs.slice(start, end);

  const userPoint = user.points.reduce(
    (sum, point) => point.userMaxPoint + sum,
    0
  );

  const handleChangeDifficulty = (e) => {
    setDifficulty(e.target.value);
    navigate({
      to: pathRoutes.dashboard,
      search: createSearchParams({
        ...queryConfig,
        page: 1,
        difficulty: e.target.value,
      }).toString(),
    });
  };

  const onPageChange = (page) => {
    navigate({
      to: pathRoutes.dashboard,
      search: createSearchParams({
        ...queryConfig,
        page,
      }).toString(),
    });
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const openMenu = () => {
    setIsOpenMenu(true);
  };
  const closeMenu = () => {
    setIsOpenMenu(false);
  };

  useEffect(() => {
    if (isOpenMenu) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isOpenMenu]);

  return (
    <>
      <NavBar>
        <NavBarIconWrap onClick={openMenu}>
          <BiMenu />
        </NavBarIconWrap>
        <NavBarTitle>DashBoard</NavBarTitle>
      </NavBar>

      <DashBoardContainer>
        <SideMenu show={isOpenMenu}>
          <TopSideMenu>
            <AvatarWrap>
              <img src={user.avatar} alt="" />
            </AvatarWrap>
            <InforText>User : {user.email}</InforText>
            <InforText>Point : {userPoint}</InforText>
          </TopSideMenu>

          <Button onClick={handleLogout}>Logout</Button>
        </SideMenu>
        <OverLay show={isOpenMenu} onClick={closeMenu} />

        <Content>
          <HeaderContent>
            <Search
              value={inputSearch}
              onChange={handleChangeSearch}
              onSubmit={handleSubmitSearch}
            />

            <SelectLevelWrap>
              <SelectLevel value={difficulty} onChange={handleChangeDifficulty}>
                <option value="all">All</option>
                <option value="hard">Hard</option>
                <option value="medium">Medium</option>
                <option value="easy">Easy</option>
              </SelectLevel>
            </SelectLevelWrap>
          </HeaderContent>

          <MainContent>
            <ListQuizWrap>
              {queryConfig.search && (
                <div style={{ marginBottom: "1.5rem" }}>
                  Kết quả tìm kiếm cho : {queryConfig.search}
                </div>
              )}
              <ListQuiz quizs={quizsRender} user={user} />
            </ListQuizWrap>

            <PaginationWrap>
              <Pagination
                totalCount={allQuizs.length}
                siblingCount={1}
                currentPage={+queryConfig.page}
                pageSize={+queryConfig.limit}
                onPageChange={onPageChange}
              />
            </PaginationWrap>
          </MainContent>
        </Content>
      </DashBoardContainer>
    </>
  );
};

export default DashBoard;
