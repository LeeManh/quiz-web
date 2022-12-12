import styled from "styled-components";

import { Container } from "GolbalStyles.styled";
import colors from "constants/colors";
import breakPoints from "constants/breakPoints";
import arrowDown from "assets/images/arrow-down.png";

export const DashBoardContainer = styled(Container)`
  background-color: ${colors["gray-dark"]};
  display: flex;

  @media screen and (min-width: 1025px) {
    padding-left: 0;
  }

  @media screen and (max-width: ${breakPoints.lg}) {
    margin-top: 65px;
    min-height: calc(100vh - 65px);
  }
`;

export const SideMenu = styled.div`
  width: 300px;
  background-color: ${colors.gray};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  padding: 30px 20px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  @media screen and (max-width: ${breakPoints.lg}) {
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    transform: ${(props) =>
      props.show ? "translateX(0)" : "translateX(-100%)"};
    transition: all 0.3s;
  }
`;

export const TopSideMenu = styled.div`
  > *:not(:first-child) {
    margin-top: 15px;
  }
`;
export const AvatarWrap = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto;
  border-radius: 100%;
  overflow: hidden;
  cursor: pointer;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const InforText = styled.div`
  font-weight: bold;
`;

export const Button = styled.div`
  width: 100%;
  padding: 14px 20px;
  background: white;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
`;

export const Content = styled.div`
  flex-grow: 1;
  background-color: ${colors["gray-dark"]};
  padding: 15px 30px;

  @media screen and (max-width: ${breakPoints.lg}) {
    padding: 15px 0;
  }
`;
export const HeaderContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
`;
export const SelectLevelWrap = styled.div`
  position: relative;

  &::after {
    z-index: 1;
    content: url(${arrowDown});
    position: absolute;
    pointer-events: none;
    top: 50%;
    right: 0;
    transform: translateY(calc(-50% + 3px)) scale(0.6);
  }
`;

export const SelectLevel = styled.select`
  width: 200px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid black;
  padding: 0 20px;
  margin-left: auto;
  outline: none;
  appearance: none;

  @media screen and (max-width: ${breakPoints.md}) {
    padding: 0 10px;
  }

  /* IE11 hide native button  */
  &::-ms-expand {
    display: none;
  }
`;
export const MainContent = styled.div`
  margin-top: 15px;
`;
export const ListQuizWrap = styled.div`
  padding: 30px;
  background-color: ${colors.gray};
  border-radius: 4px;
`;
export const PaginationWrap = styled.div`
  margin-top: 20px;
  display: grid;
  place-items: center;
`;

export const NavBar = styled(Container)`
  background-color: ${colors.navbar};
  height: 65px;
  position: fixed;
  z-index: 100;
  top: 0;
  width: 100vw;
  display: none;
  align-items: center;
  text-align: center;

  @media screen and (max-width: ${breakPoints.lg}) {
    display: flex;
  }
`;
export const NavBarIconWrap = styled.div`
  background-color: ${colors.gray};
  width: 32px;
  height: 32px;
  border-radius: 4px;
  display: grid;
  place-items: center;
  cursor: pointer;

  > svg {
    font-size: 2.4rem;
  }
`;
export const NavBarTitle = styled.span`
  text-align: center;
  width: 100%;
  font-weight: bold;
  color: white;
  font-size: 2rem;
  user-select: none;
`;
