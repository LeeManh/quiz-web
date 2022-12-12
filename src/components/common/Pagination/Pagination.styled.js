import breakPoints from "constants/breakPoints";
import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
`;
export const Button = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 4px;
  background-color: ${(props) => (props.disabled ? "#919eab" : "white")};
  display: grid;
  place-items: center;
  outline: none;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  border: ${(props) => (props.active ? "2px solid blue" : "none")};
  font-weight: ${(props) => props.active && "bold"};
  color: ${(props) => props.active && "blue"};

  @media screen and (max-width: ${breakPoints.md}) {
    width: 28px;
    height: 28px;
    font-size: 1.2rem;
  }
`;
export const ButtonActive = styled(Button)``;

export const IconArrowImg = styled.img``;
