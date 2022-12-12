import breakPoints from "constants/breakPoints";
import colors from "constants/colors";
import styled, { css } from "styled-components";

export const SideMenuButtonCotainer = styled.div`
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

  @media screen and (max-width: ${breakPoints.md}) {
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

  ${(props) => {
    if (props.isActive) {
      return css`
        background-color: ${colors.green};
      `;
    } else if (props.isAnswered) {
      return css`
        background-color: ${colors["gray-dark"]};
      `;
    }
    return css`
      background-color: white;
    `;
  }}

  user-select: none;
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
