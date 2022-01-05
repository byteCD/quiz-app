import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getQuiz } from "../redux/actions/quizActions";
import Button from "./Button";
import Error from "./Error";
import Select from "./Select";

const Setting = styled.p`
  margin: 15px 0;
`;

const QuizSetting = styled.div`
  margin: 15px 0;
`;

const StyledQuizSettings = styled.div`
  max-width: 500px;
  width: 100%;
  font-weight: 500;
`;

const QuizHeading = styled.h1`
  margin-bottom: 15px;
  text-align: center;
`;

const QuizSettings = () => {
  const [category, setCategory] = useState(23);
  const [difficulty, setDifficulty] = useState("easy");
  const [type, setType] = useState("boolean");
  const error = useSelector((state) => state.quizReducer.error);
  const dispatch = useDispatch();

  return (
    <StyledQuizSettings>
      <QuizHeading>Настройте свою викторину</QuizHeading>
      {error && <Error error={error} />}
      <QuizSetting>
        <Setting>Категория</Setting>
        <Select
          defaultValue={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value={23}>История</option>
          <option value={24}>Политика</option>
          <option value={18}>Компьютеры</option>
          <option value={10}>Животные</option>
          <option value={10}>География</option>
          <option value={20}>Мифология</option>
          <option value={21}>Спорт</option>
          <option value={10}>Книги</option>
          <option value={11}>Фильмы</option>
          <option value={12}>Музыка</option>
          <option value={15}>Видеоигры</option>
        </Select>
      </QuizSetting>
      <QuizSetting>
        <Setting>Сложность</Setting>
        <Select
          defaultValue={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="easy">Легкая</option>
          <option value="medium">Средняя</option>
          <option value="hard">Сложная</option>
        </Select>
      </QuizSetting>
      <QuizSetting>
        <Setting>Тип</Setting>
        <Select defaultValue={type} onChange={(e) => setType(e.target.value)}>
          <option value="boolean">Да / Нет</option>
          <option value="multiple">Несколько ответов</option>
        </Select>
      </QuizSetting>
      <Button onClick={() => dispatch(getQuiz(category, difficulty, type))}>
        Начать
      </Button>
    </StyledQuizSettings>
  );
};

export default QuizSettings;
