import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Question from "./Question";
import QuizOver from "./QuizOver";

const StyledQuiz = styled.div`
  max-width: 500px;
  width: 100%;
`;

const Quiz = () => {
  const quiz = useSelector((state) => state.quizReducer.quiz);
  const questionNumber = useSelector(
    (state) => state.questionReducer.questionNumber
  );

  return (
    quiz.length > 0 && (
      <StyledQuiz>
        {questionNumber !== quiz.length - 1 && (
          <Question question={quiz[questionNumber]} />
        )}
        {questionNumber === quiz.length - 1 && <QuizOver />}
      </StyledQuiz>
    )
  );
};

export default Quiz;
