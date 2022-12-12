import styled from "styled-components";
import { Link } from "react-router-dom";
import colors from "constants/colors";

export const ItemQuizContainer = styled(Link)`
  padding: 1rem;
  border: 1px solid black;
  border-radius: 4px;
  cursor: pointer;
`;
export const Title = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
`;
export const Infor = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  column-gap: 2rem;
`;
export const InforItem = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
`;
export const InforText = styled.div`
  font-size: 1.4rem;
`;
export const IconImg = styled.img`
  width: 2.6rem;
  height: 2.6rem;
  object-fit: contain;
`;

export const Tag = styled.div`
  margin-top: 1rem;
  padding: 3px 6px;
  background-color: ${colors["gray-dark"]};
  display: inline-block;
  border-radius: 4px;
  font-size: 1.2rem;
`;
