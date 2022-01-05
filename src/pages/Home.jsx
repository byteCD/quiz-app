import React from "react";
import { useSelector } from "react-redux";
import Page from "../components/Page";
import QuizSettings from "../components/QuizSettings";
import Quiz from "../components/Quiz";

const Home = () => {
  const quiz = useSelector((state) => state.quizReducer.quiz);

  return (
    <Page>
      {quiz.length === 0 && <QuizSettings />}
      {quiz.length > 0 && <Quiz />}
    </Page>
  );
};

export default Home;
