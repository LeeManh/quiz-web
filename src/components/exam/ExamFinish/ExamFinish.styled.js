import breakPoints from "constants/breakPoints";
import styled from "styled-components";

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
  width: 40%;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media screen and (max-width: ${breakPoints.sm}) {
    width: 100%;
  }
`;
export const PointText = styled.div`
  font-weight: bold;
  font-size: 1.6rem;
`;
export const ButtonBackDashBoardWrap = styled.div`
  display: flex;
  justify-content: center;
`;
