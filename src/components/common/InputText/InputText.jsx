import React from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 1.6rem;
`;
const InputLabel = styled.label`
  margin-left: 1rem;
  font-weight: bold;
`;
const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: none;
  outline: none;
  border-radius: 4px;
  flex-grow: 1;
`;
const ErrorMessage = styled.div`
  color: red;
`;

const InputText = (props) => {
  const {
    type = "text",
    label,
    placeholder,
    name,
    register,
    errorsMessage,
    ...rest
  } = props;

  const registerResult = register && name ? register(name) : {};

  return (
    <InputContainer>
      {label && <InputLabel>{label}</InputLabel>}
      <Input
        {...rest}
        {...registerResult}
        type={type}
        placeholder={placeholder}
      />
      <ErrorMessage>{errorsMessage}</ErrorMessage>
    </InputContainer>
  );
};

export default InputText;
