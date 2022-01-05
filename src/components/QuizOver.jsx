import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setQuestionNumber } from "../redux/actions/questionActions";
import { setQuiz } from "../redux/actions/quizActions";
import { setScore } from "../redux/actions/scoreActions";
import Button from "./Button";

const QuizOverHeading = styled.h1`
  margin-bottom: 15px;
`;

const Score = styled.h2`
  margin-bottom: 15px;
`;

const StyledQuizOver = styled.div`
  text-align: center;
`;

const QuizOver = () => {
  const dispatch = useDispatch();
  const score = useSelector((state) => state.scoreReducer.score);

  const playMore = () => {
    dispatch(setQuiz([]));
    dispatch(setScore(0));
    dispatch(setQuestionNumber(0));
  };

  return (
    <StyledQuizOver>
      <QuizOverHeading>Спасибо за игру!</QuizOverHeading>
      <Score>Ваш счет: {score}</Score>
      <Button onClick={playMore}>Играть еще</Button>
    </StyledQuizOver>
  );
};

export default QuizOver;
