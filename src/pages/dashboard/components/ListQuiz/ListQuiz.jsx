import React from "react";
import ItemQuiz from "../ItemQuiz/ItemQuiz";
import styled from "styled-components";

const ListQuizContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ListQuiz = () => {
  return (
    <ListQuizContainer>
      {Array.from({ length: 6 }, (_, i) => i).map((item, index) => (
        <ItemQuiz key={index} />
      ))}
    </ListQuizContainer>
  );
};

export default ListQuiz;