import React from "react";
import styled from "styled-components";

const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Label = styled.label`
  margin-left: 1rem;
`;
const ErrorMessage = styled.div`
  color: red;
`;
const TextAreaStyle = styled.textarea`
  padding: 1rem;
  font-family: inherit;
  font-size: 1.6rem;
`;

const TextArea = (props) => {
  const { row = 3, errorsMessage, name, register, label, ...rest } = props;

  const registerResult = register && name ? register(name) : {};

  return (
    <TextAreaContainer>
      {label && <Label>{label}</Label>}
      <TextAreaStyle rows={row} {...rest} {...registerResult}></TextAreaStyle>
      <ErrorMessage>{errorsMessage}</ErrorMessage>
    </TextAreaContainer>
  );
};

export default TextArea;
