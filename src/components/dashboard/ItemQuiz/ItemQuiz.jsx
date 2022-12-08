import React from "react";
import ClockIcon from "assets/images/clock-icon.png";
import PointIcon from "assets/images/point-icon.png";
import {
  IconImg,
  Infor,
  InforItem,
  InforText,
  ItemQuizContainer,
  Title,
} from "./ItemQuiz.styled";
import converToMinutesAndSecond from "utils/converToMinutesAndSecond";
import Ratings from "components/common/Ratings/Ratings";

const ItemQuiz = ({ quiz }) => {
  return (
    <ItemQuizContainer to="/exam">
      <Title>{quiz.title}</Title>

      <Infor>
        <InforItem>
          <IconImg src={ClockIcon} alt="" />
          <InforText>{converToMinutesAndSecond(quiz.time)}</InforText>
        </InforItem>
        <InforItem>
          <IconImg src={PointIcon} alt="" />
          <InforText>200/{quiz.maxPoint} điểm</InforText>
        </InforItem>
      </Infor>

      <Ratings ratings={quiz.ratings} />
    </ItemQuizContainer>
  );
};

export default ItemQuiz;
