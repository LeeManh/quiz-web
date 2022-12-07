import React from "react";
import ClockIcon from "assets/images/clock-icon.png";
import PointIcon from "assets/images/point-icon.png";
import StartActive from "assets/images/start-active.png";
import StartUnActive from "assets/images/start-unactive.png";
import {
  IconImg,
  Infor,
  InforItem,
  InforText,
  ItemQuizContainer,
  RatingWrap,
  StartImg,
  Title,
} from "./ItemQuiz.styled";

const ItemQuiz = () => {
  return (
    <ItemQuizContainer to="/exam">
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
