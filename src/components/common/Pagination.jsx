import React from "react";
import styled from "styled-components";

import LeftArrowImg from "assets/images/left-arrow.png";
import RightArrowImg from "assets/images/right-arrow.png";

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
`;
const Button = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 4px;
  background-color: white;
  display: grid;
  place-items: center;
  outline: none;
  border: none;
  cursor: pointer;
`;
const ButtonUnActive = styled(Button)`
  color: #c4cdd5;
  background-color: #919eab;
  cursor: default;
`;

const IconArrowImg = styled.img``;

// const DOTS = styled.div``;

const Pagination = () => {
  return (
    <PaginationContainer>
      <ButtonUnActive disabled>
        <IconArrowImg src={LeftArrowImg} alt="" />
      </ButtonUnActive>
      <Button>1</Button>
      <Button>2</Button>
      <Button as="div">...</Button>
      <Button>9</Button>
      <Button>10</Button>
      <Button>
        <IconArrowImg src={RightArrowImg} alt="" />
      </Button>
    </PaginationContainer>
  );
};

export default Pagination;
