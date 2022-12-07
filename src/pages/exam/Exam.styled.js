import { Link } from "react-router-dom";
import styled from "styled-components";

import { Container } from "GolbalStyles.styled";

export const ExamContainer = styled(Container)`
  display: flex;
  padding: 0;
  min-height: 100vh;
`;
export const MainExam = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;
export const HeaderExam = styled.div`
  padding: 20px 15px;
  background-color: #d9d9d9;

  > *:not(:first-child) {
    margin-top: 10px;
  }
`;
export const Title = styled.div`
  font-weight: bold;
  font-size: 18px;
`;
export const TimeExist = styled.div`
  font-size: 14px;
`;
export const TimeLine = styled.div`
  width: 100%;
  height: 15px;
  border-radius: 4px;
  background-color: #41c54e;
`;
export const ContentExam = styled.div`
  background-color: #c4c4c4;
  flex-grow: 1;
  padding: 30px;
  display: flex;
  flex-direction: column;
`;
export const QuestionParam = styled.div`
  font-weight: bold;
  font-size: 18px;
`;
export const AnswerForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  padding-left: 20px;
`;
export const AnswerLabel = styled.label`
  display: flex;
  gap: 10px;
  cursor: pointer;

  > span {
    font-size: 18px;
  }
`;
export const ButtonsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
`;
export const Button = styled.button`
  border: none;
  outline: none;
  background-color: #eee7a9;
  font-weight: bold;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: auto;
`;
export const ButtonGotoWrap = styled.div`
  display: none;
  justify-content: center;
  margin-top: 30px;

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export const SideMenu = styled.div`
  background-color: #d9d9d9;
  padding: 30px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 769px) {
    max-width: 300px;
  }

  @media screen and (max-width: 768px) {
    max-width: 400px;
    position: fixed;
    z-index: 100;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 80%;
    width: 80%;
    display: ${(props) => (props.show ? "flex" : "none")};
  }
`;
export const ListBtnQuesion = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;

  @media screen and (max-width: 320px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
export const ButtonQuestion = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  border: ${(props) =>
    props.isActive ? " 2px solid black" : "1px solid rgba(0, 0, 0, 0.5)"};

  background-color: ${(props) => (props.isActive ? "#92FD9D" : "white")};
`;

export const ButtonRound = styled.button`
  background-color: #9f9d9f;
  padding: 14px 40px;
  border-radius: 40px;
  cursor: pointer;
  border: none;
  outline: none;
  font-weight: bold;
`;
export const ButtonBackDashBoard = styled(Link)`
  background-color: #9f9d9f;
  padding: 14px 40px;
  border-radius: 40px;
  cursor: pointer;
  border: none;
  outline: none;
  font-weight: bold;
  color: black;

  text-decoration: none;
`;

export const ExamFinishContainer = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: #c4c4c4;
`;
export const FinishWrap = styled.div`
  padding: 30px 30px 50px;
  background: #d9d9d9;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  width: 80%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ContentFinish = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;
export const ContentLeftFinish = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const PointText = styled.div`
  font-weight: bold;
  font-size: 16px;
`;
export const ButtonBackDashBoardWrap = styled.div`
  display: flex;
  justify-content: center;
`;
