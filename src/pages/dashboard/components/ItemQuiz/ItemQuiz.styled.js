import styled from "styled-components";
import { Link } from "react-router-dom";

export const ItemQuizContainer = styled(Link)`
  padding: 10px;
  border: 1px solid black;
  border-radius: 4px;
  cursor: pointer;
`;
export const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
`;
export const Infor = styled.div`
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  column-gap: 20px;
`;
export const InforItem = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
`;
export const InforText = styled.div`
  font-size: 14px;
`;
export const IconImg = styled.img`
  width: 26px;
  height: 26px;
  object-fit: contain;
`;
export const RatingWrap = styled.div`
  margin-top: 15px;
`;
export const StartImg = styled.img`
  width: 26px;
  height: 26px;
  object-fit: contain;

  @media screen and (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
