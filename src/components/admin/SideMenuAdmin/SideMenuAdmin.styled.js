import styled from "styled-components";
import { BsPatchQuestionFill } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import colors from "constants/colors";
import breakPoints from "constants/breakPoints";

export const SideMenuContainer = styled.div`
  background-color: ${colors["gray-dark"]};
  width: 30%;
  max-width: 30rem;
  flex-shrink: 0;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: ${breakPoints.md}) {
    width: min-content;
  }
`;
export const Logo = styled(Link)`
  font-size: 2rem;
  margin-bottom: 5rem;
  text-align: center;
  display: block;

  @media screen and (max-width: ${breakPoints.md}) {
    font-size: 1.6rem;
  }
`;
export const MenuLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
  font-size: 2rem;
  padding: 1rem 2rem;
  border-radius: 1rem;
  transition: all 0.3s;
  user-select: none;
  width: 100%;

  &:hover {
    background-color: ${colors.gray};
  }

  &.active {
    background-color: ${colors.gray};
  }

  @media screen and (max-width: ${breakPoints.md}) {
    width: min-content;

    > span {
      display: none;
    }
  }
`;

export const QuesitonIcon = styled(BsPatchQuestionFill)``;
export const UserIcon = styled(BiUser)``;
