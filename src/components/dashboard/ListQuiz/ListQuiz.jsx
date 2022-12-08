import React from "react";
import ItemQuiz from "../ItemQuiz/ItemQuiz";
import styled from "styled-components";
import breakPoints from "constants/breakPoints";
import quizs from "data/quizs";

const ListQuizContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media screen and (max-width: ${breakPoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const ListQuiz = () => {
  return (
    <ListQuizContainer>
      {quizs.map((quiz, index) => (
        <ItemQuiz key={quiz.id} quiz={quiz} />
      ))}
    </ListQuizContainer>
  );
};

export default ListQuiz;
