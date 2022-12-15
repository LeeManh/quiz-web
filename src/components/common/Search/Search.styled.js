import colors from "constants/colors";
import { AiOutlineSearch } from "react-icons/ai";
import styled from "styled-components";

export const SearchForm = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  width: 100%;
  height: 4rem;
  border-radius: 5px;
  border: 1px solid black;
  overflow: hidden;
  position: relative;
`;
export const InputSearch = styled.input`
  flex-grow: 1;
  padding: 1rem 2rem;
  background-color: ${colors.input};
  height: 100%;
  border: none;
  outline: none;
  padding-right: 6rem;
`;
export const ButtonSearch = styled.button`
  width: 6rem;
  height: 4rem;
  display: grid;
  place-items: center;
  background-color: white;
  cursor: pointer;
  border: none;
  outline: none;
  position: absolute;
  top: 0;
  right: 0;
`;
export const IconSearch = styled(AiOutlineSearch)`
  width: 2rem;
  height: 2rem;
`;
