import { Container } from "GolbalStyles.styled";
import { AiOutlineSearch } from "react-icons/ai";
import styled from "styled-components";

export const DashBoardContainer = styled(Container)`
  background-color: #c4c4c4;
  display: flex;

  @media screen and (min-width: 1025px) {
    padding-left: 0;
  }

  @media screen and (max-width: 1024px) {
    margin-top: 65px;
  }
`;

export const SideMenu = styled.div`
  max-width: 300px;
  background-color: #d9d9d9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  padding: 30px 20px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  @media screen and (max-width: 1024px) {
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    transform: ${(props) =>
      props.show ? "translateX(0)" : "translateX(-100%)"};
    transition: all 0.3s;
  }
`;

export const OverLay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: ${(props) => (props.show ? "block" : "none")};
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
  background-color: #c4c4c4;
  padding: 15px 30px;

  @media screen and (max-width: 1024px) {
    padding: 15px 0;
  }
`;
export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
export const SearchWrap = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  height: 40px;
  border-radius: 5px;
  border: 1px solid black;
  overflow: hidden;
`;
export const InputSearch = styled.input`
  flex-grow: 1;
  padding: 10px 20px;
  background-color: #f3f1f1;
  height: 100%;
  border: none;
  outline: none;
`;
export const ButtonSearch = styled.button`
  width: 60px;
  height: 40px;
  display: grid;
  place-items: center;
  background-color: white;
  cursor: pointer;
  border: none;
  outline: none;
`;
export const IconSearch = styled(AiOutlineSearch)`
  width: 20px;
  height: 20px;
`;
export const SelectLevel = styled.select`
  max-width: 300px;
  width: 30%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid black;
  padding: 0 20px;
`;
export const MainContent = styled.div`
  margin-top: 15px;
`;
export const ListQuizWrap = styled.div`
  padding: 30px;
  background-color: #d9d9d9;
  border-radius: 4px;
`;
export const PaginationWrap = styled.div`
  margin-top: 20px;
  display: grid;
  place-items: center;
`;

export const NavBar = styled(Container)`
  background-color: #545151;
  height: 65px;
  position: fixed;
  top: 0;
  width: 100vw;
  display: none;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 1024px) {
    display: flex;
  }
`;
export const NavBarIconWrap = styled.div`
  background-color: #d9d9d9;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  display: grid;
  place-items: center;
  cursor: pointer;

  > svg {
    font-size: 24px;
  }
`;
export const NavBarTitle = styled.span`
  text-align: center;
  width: 100%;
  font-weight: bold;
  color: white;
  font-size: 20px;
`;
