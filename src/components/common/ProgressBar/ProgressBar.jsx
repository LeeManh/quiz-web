import colors from "constants/colors";
import React from "react";

import styled from "styled-components";

const ProgressBarContainer = styled.div`
  width: 100%;
  height: ${(props) => (props.height ? props.height : "1.8rem")};
  background-color: ${colors["gray-dark"]};
  border-radius: 4px;
  position: relative;
`;
const Filter = styled.div`
  position: absolute;
  border-radius: inherit;
  height: 100%;
  width: ${(props) => (props.width ? `${props.width}%` : "100%")};
  background-color: #41c54e;
  transition: all 0.1s;
`;

const ProgressBar = ({ percent }) => {
  return (
    <ProgressBarContainer>
      <Filter width={percent}></Filter>
    </ProgressBarContainer>
  );
};

export default ProgressBar;
