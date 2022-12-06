import React from "react";
import styled from "styled-components";
import ClockIcon from "assets/images/clock-icon.png";
import PointIcon from "assets/images/point-icon.png";
import StartActive from "assets/images/start-active.png";
import StartUnActive from "assets/images/start-unactive.png";

const ItemQuizContainer = styled.div`
  padding: 10px;
  border: 1px solid black;
  border-radius: 4px;
  cursor: pointer;
`;
const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
`;
const Infor = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
  column-gap: 20px;
`;
const InforItem = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
`;
const InforText = styled.div`
  font-size: 14px;
`;
const IconImg = styled.img`
  width: 26px;
  height: 26px;
  object-fit: contain;
`;
const RatingWrap = styled.div`
  margin-top: 15px;
`;
const StartImg = styled.img`
  width: 26px;
  height: 26px;
  object-fit: contain;
`;

const ItemQuiz = () => {
  return (
    <ItemQuizContainer>
      <Title>Kiểm tra an toàn bảo mật thông tin 2...</Title>

      <Infor>
        <InforItem>
          <IconImg src={ClockIcon} alt="" />
          <InforText>7 phút</InforText>
        </InforItem>
        <InforItem>
          <IconImg src={PointIcon} alt="" />
          <InforText>200/250 điểm</InforText>
        </InforItem>
      </Infor>

      <RatingWrap>
        <StartImg src={StartActive} alt="" />
        <StartImg src={StartActive} alt="" />
        <StartImg src={StartActive} alt="" />
        <StartImg src={StartActive} alt="" />
        <StartImg src={StartUnActive} alt="" />
      </RatingWrap>
    </ItemQuizContainer>
  );
};

export default ItemQuiz;
