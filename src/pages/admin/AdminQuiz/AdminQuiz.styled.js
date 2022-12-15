import breakPoints from "constants/breakPoints";
import colors from "constants/colors";
import styled from "styled-components";

export const AdminQuizContainer = styled.div``;

export const AdminQuizHeader = styled.div`
  font-size: 2rem;
  padding-left: 2rem;
`;

export const AdminQuizContent = styled.div`
  margin-top: 3rem;
  padding: 2rem;
  background-color: ${colors.gray};
  border-radius: 1rem;
  width: 100%;
  overflow: hidden;
`;

export const ActionWrap = styled.div`
  margin-top: 3rem;
  background-color: ${colors.gray};
  padding: 2rem;
  border-radius: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;

  @media screen and (max-width: ${breakPoints.sm}) {
    flex-direction: column;
  }
`;

export const SearchWrap = styled.div`
  width: 40%;
  @media screen and (max-width: ${breakPoints.sm}) {
    width: 100%;
  }
`;

export const PaginationWrap = styled.div`
  margin-top: 2rem;
`;
