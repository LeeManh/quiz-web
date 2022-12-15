import React from "react";

import styled from "styled-components";

const SelectOptContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 1.6rem;
`;
const SelectOptLabel = styled.label`
  margin-left: 1rem;
  font-weight: bold;
`;

const Select = styled.select`
  padding: 1rem;
  border: none;
  outline: none;
  border-radius: 4px;
  flex-grow: 1;
`;

const SelectOpt = (props) => {
  const { label, options, register, name, ...rest } = props;

  const registerResult = register && name ? register(name) : {};

  return (
    <SelectOptContainer>
      <SelectOptLabel>{label}</SelectOptLabel>
      <Select {...rest} {...registerResult} {...rest}>
        {options.map((opt, i) => (
          <option value={opt.value} key={i}>
            {opt.title}
          </option>
        ))}
      </Select>
    </SelectOptContainer>
  );
};

export default SelectOpt;
