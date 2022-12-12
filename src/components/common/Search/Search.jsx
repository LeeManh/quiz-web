import React from "react";
import {
  ButtonSearch,
  IconSearch,
  InputSearch,
  SearchForm,
} from "./Search.styled";

const Search = ({ value, onChange, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit();
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <InputSearch placeholder="Search ..." value={value} onChange={onChange} />
      <ButtonSearch>
        <IconSearch />
      </ButtonSearch>
    </SearchForm>
  );
};

export default Search;
