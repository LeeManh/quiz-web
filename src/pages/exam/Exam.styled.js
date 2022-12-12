import { Link } from "react-router-dom";
import styled from "styled-components";

import { Container } from "GolbalStyles.styled";
import breakPoints from "constants/breakPoints";
import colors from "constants/colors";

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
  font-size: 1.8rem;
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
  font-size: 1.8rem;
`;
export const AnswerForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  padding-left: 20px;
`;
export const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: ${colors.gray};
  border: 1px solid black;
  border-radius: 4px;

  &::after {
    content: "";
    position: absolute;
    display: none;

    left: 6px;
    top: 3px;

    width: 3px;
    height: 8px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`;
export const AnswerLabel = styled.label`
  cursor: pointer;
  display: inline-block;

  position: relative;
  padding-left: 4rem;
  margin-bottom: 1.2rem;
  user-select: none;
  font-size: 1.8rem;

  > input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked ~ ${Checkmark} {
      background-color: #2196f3;
    }
    &:checked ~ ${Checkmark}:after {
      display: block;
    }
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
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  margin-top: auto;
`;
export const ButtonGotoWrap = styled.div`
  display: none;
  justify-content: center;
  margin-top: 30px;

  @media screen and (max-width: ${breakPoints.md}) {
    display: flex;
  }
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
