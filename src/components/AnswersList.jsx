import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { incrementQuestionNumber } from "../redux/actions/questionActions";
import { incrementScore } from "../redux/actions/scoreActions";
import Button from "./Button";

const Answer = styled.div`
  margin-top: 15px;
`;

const AnswersList = ({ incorrectAnswers, correctAnswer }) => {
  const dispatch = useDispatch();

  const shuffleAnswers = () => {
    const answers = incorrectAnswers.map((answer) => answer);

    answers.push(correctAnswer);
    answers.sort(() => Math.random() - 0.5);

    return answers;
  };

  const giveAnswer = (answer) => {
    dispatch(incrementQuestionNumber());

    if (correctAnswer === answer) {
      dispatch(incrementScore());
    }
  };

  return shuffleAnswers().map((answer) => (
    <Answer key={answer}>
      <Button
        onClick={() => giveAnswer(answer)}
        key={answer}
        dangerouslySetInnerHTML={{ __html: `${answer}` }}
      ></Button>
    </Answer>
  ));
};

export default AnswersList;
