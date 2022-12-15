import colors from "constants/colors";
import { Container } from "GolbalStyles.styled";
import styled from "styled-components";

export const AdminLayoutContainer = styled(Container)`
  display: flex;
  padding-left: 0;
  padding-right: 0;
  min-height: 100vh;
  overflow: hidden;
`;

export const ContentWrap = styled.div`
  flex: 1;
  min-width: 0rem;
  background-color: ${colors["gray-dark"]};
  padding: 4rem 2rem 4rem 0;
`;
