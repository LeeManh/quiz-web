import React from "react";
import ItemQuiz from "../ItemQuiz/ItemQuiz";
import styled from "styled-components";
import breakPoints from "constants/breakPoints";

const ListQuizContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;

  @media screen and (max-width: ${breakPoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const ListQuiz = ({ quizs, user }) => {
  return (
    <ListQuizContainer>
      {quizs.map((quiz, index) => (
        <ItemQuiz key={quiz.id} quiz={quiz} user={user} />
      ))}
    </ListQuizContainer>
  );
};

export default ListQuiz;
