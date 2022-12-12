import React from "react";
import pathRoutes from "constants/pathRoutes";
import {
  ButtonBackDashBoardWrap,
  ContentFinish,
  ContentLeftFinish,
  ExamFinishContainer,
  FinishWrap,
  PointText,
} from "./ExamFinish.styled";
import { Title } from "../../dashboard/ItemQuiz/ItemQuiz.styled";
import { ButtonBackDashBoard } from "pages/exam/Exam.styled";

const ExamFinish = ({ point, maxPoint, quiz, resultSubmit }) => {
  return (
    <ExamFinishContainer>
      <FinishWrap>
        <Title>{quiz.title}</Title>

        <ContentFinish>
          <ContentLeftFinish>
            <div>
              <span>Số câu trả lời đúng:</span>
              <span>{resultSubmit.numberCorrectAnswer}</span>
            </div>
            <div>
              <span>Số câu trả lời sai:</span>
              <span>{resultSubmit.numberWrongAnswer}</span>
            </div>
            <div>
              <span>Số câu chưa trả lời:</span>
              <span>{resultSubmit.numberUnAnswered}</span>
            </div>
            <div>
              <span>Tổng số câu hỏi:</span>
              <span>{resultSubmit.totalNumberQuestions}</span>
            </div>
          </ContentLeftFinish>

          <PointText>
            Điểm số: {point} / {maxPoint}
          </PointText>
        </ContentFinish>

        <ButtonBackDashBoardWrap>
          <ButtonBackDashBoard to={pathRoutes.dashboard}>
            Dashboard
          </ButtonBackDashBoard>
        </ButtonBackDashBoardWrap>
      </FinishWrap>
    </ExamFinishContainer>
  );
};

export default ExamFinish;
