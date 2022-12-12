import React from "react";
import ClockIcon from "assets/images/clock-icon.png";
import PointIcon from "assets/images/point-icon.png";
import {
  IconImg,
  Infor,
  InforItem,
  InforText,
  ItemQuizContainer,
  Tag,
  Title,
} from "./ItemQuiz.styled";
import converToMinutesAndSecond from "utils/converToMinutesAndSecond";
import Ratings from "components/common/Ratings/Ratings";
import pathRoutes from "constants/pathRoutes";

const ItemQuiz = ({ quiz, user }) => {
  const findPoint = user.points.find((point) => +point.idQuiz === quiz.id);
  const userPoint = findPoint?.userMaxPoint || 0;

  return (
    <ItemQuizContainer to={`${pathRoutes.exam}/${quiz.id}`}>
      <Title>{quiz.title}</Title>

      <Tag>{quiz.difficulty}</Tag>

      <Infor>
        <InforItem>
          <IconImg src={ClockIcon} alt="" />
          <InforText>{converToMinutesAndSecond(quiz.time)}</InforText>
        </InforItem>
        <InforItem>
          <IconImg src={PointIcon} alt="" />
          <InforText>
            {userPoint}/{quiz.maxPoint} điểm
          </InforText>
        </InforItem>
      </Infor>

      <Ratings ratings={quiz.ratings} />
    </ItemQuizContainer>
  );
};

export default ItemQuiz;
