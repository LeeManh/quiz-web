import React from "react";

import LeftArrowImg from "assets/images/left-arrow.png";
import RightArrowImg from "assets/images/right-arrow.png";
import { Button, IconArrowImg, PaginationContainer } from "./Pagination.styled";
import { DOTS, usePagination } from "hooks/usePagination";

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });
  const lastPageNumber = paginationRange[paginationRange.length - 1];

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  return (
    <PaginationContainer>
      <Button onClick={onPrevious} disabled={currentPage === 1}>
        <IconArrowImg src={LeftArrowImg} alt="" />
      </Button>

      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <Button as="div" key={index}>
              ...
            </Button>
          );
        }
        return (
          <Button
            key={index}
            active={pageNumber === currentPage}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </Button>
        );
      })}

      <Button onClick={onNext} disabled={currentPage === lastPageNumber}>
        <IconArrowImg src={RightArrowImg} alt="" />
      </Button>
    </PaginationContainer>
  );
};

export default Pagination;
