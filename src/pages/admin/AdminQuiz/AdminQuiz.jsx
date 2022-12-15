import TableQuiz from "components/admin/AdminQuiz/TableQuiz/TableQuiz";
import ModalConfirm from "components/common/ModalConfirm/ModalConfirm";

import Pagination from "components/common/Pagination/Pagination";
import Search from "components/common/Search/Search";
import pathRoutes from "constants/pathRoutes";
import { OverLay } from "GolbalStyles.styled";
import useQueryConfig from "hooks/useQueryConfig";
import useSearchQuiz from "hooks/useSearchQuiz";
import { Button } from "pages/exam/Exam.styled";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSearchParams, useNavigate } from "react-router-dom";
import { deleteQuiz, selectAllQuizs } from "redux/quizSlice";
import getQuizs from "utils/quizs";
import {
  ActionWrap,
  AdminQuizContainer,
  AdminQuizContent,
  AdminQuizHeader,
  PaginationWrap,
  SearchWrap,
} from "./AdminQuiz.styled";

const AdminQuiz = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const quizs = useSelector(selectAllQuizs);
  const queryConfig = useQueryConfig();

  const { handleChangeSearch, handleSubmitSearch, inputSearch } =
    useSearchQuiz();

  const { allQuizs, quizsRender } = getQuizs(quizs, queryConfig);

  const onPageChange = (page) => {
    navigate({
      to: pathRoutes.adminQuizs,
      search: createSearchParams({
        ...queryConfig,
        page,
      }).toString(),
    });
  };

  const [isShow, setIsShow] = useState(false);
  const [idQuizDelete, setIdQuizDelete] = useState("");

  const handleDelteQuiz = (id) => {
    setIsShow(true);
    setIdQuizDelete(id);
  };

  const handleClickBtnModal = (isConfirm) => {
    if (isConfirm && idQuizDelete) {
      dispatch(deleteQuiz({ id: idQuizDelete }));
    } else {
      setIdQuizDelete("");
    }

    setIsShow(false);
  };

  useEffect(() => {
    if (isShow) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isShow]);

  return (
    <>
      <AdminQuizContainer>
        <AdminQuizHeader>
          <span>Quản lý Quizs</span>
        </AdminQuizHeader>

        <ActionWrap>
          <SearchWrap>
            <Search
              value={inputSearch}
              onChange={handleChangeSearch}
              onSubmit={handleSubmitSearch}
            />
          </SearchWrap>

          <Button>Thêm quiz</Button>
        </ActionWrap>

        <AdminQuizContent>
          {queryConfig.search && (
            <div style={{ marginBottom: "1.5rem" }}>
              Kết quả tìm kiếm cho : {queryConfig.search}
            </div>
          )}
          <TableQuiz quizs={quizsRender} handleDelteQuiz={handleDelteQuiz} />
          <ModalConfirm
            title="Xóa quiz"
            message="Bạn có muốn xóa quiz này không?"
            isShow={isShow}
            onClickBtn={handleClickBtnModal}
          />
          <OverLay />
        </AdminQuizContent>

        <PaginationWrap>
          <Pagination
            totalCount={allQuizs.length}
            siblingCount={1}
            currentPage={+queryConfig.page}
            pageSize={+queryConfig.limit}
            onPageChange={onPageChange}
          />
        </PaginationWrap>
      </AdminQuizContainer>
    </>
  );
};

export default AdminQuiz;
