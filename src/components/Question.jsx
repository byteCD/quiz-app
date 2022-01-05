import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setQuiz } from "../redux/actions/quizActions";
import { setScore } from "../redux/actions/scoreActions";
import AnswersList from "./AnswersList";
import { StyledButton } from "./Button";

const QuestionHeading = styled.h4`
  text-align: center;
`;

const QuizOverButton = styled(StyledButton)`
  background-color: #a6202d;
  margin-top: 15px;
  border-radius: 5px;
  &:hover {
    background-color: #dc3545;
  }
`;

const Question = ({ question }) => {
  const dispatch = useDispatch();

  const overQuiz = () => {
    dispatch(setQuiz([]));
    dispatch(setScore(0));
  };

  return (
    <div>
      <QuestionHeading
        dangerouslySetInnerHTML={{ __html: `${question.question}` }}
      ></QuestionHeading>
      <AnswersList
        incorrectAnswers={question.incorrect_answers}
        correctAnswer={question.correct_answer}
      />
      <QuizOverButton onClick={overQuiz}>Закончить викторину</QuizOverButton>
    </div>
  );
};

export default Question;
