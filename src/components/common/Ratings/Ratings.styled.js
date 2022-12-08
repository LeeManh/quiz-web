import styled from "styled-components";

import breakPoints from "constants/breakPoints";

export const RatingWrap = styled.div`
  margin-top: 15px;
`;
export const StartImg = styled.img`
  width: 26px;
  height: 26px;
  object-fit: contain;

  @media screen and (max-width: ${breakPoints.md}) {
    width: 20px;
    height: 20px;
  }
`;
