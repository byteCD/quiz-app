import quizService from "../../services/QuizService";

export const SET_QUIZ = "SET_QUIZ";
export const SET_QUIZ_ERROR = "SET_QUIZ_ERROR";

export const setQuiz = (quiz) => ({
  type: SET_QUIZ,
  payload: quiz,
});

export const setQuizError = (error) => ({
  type: SET_QUIZ_ERROR,
  payload: error,
});

export const getQuiz = (category, difficulty, type) => {
  return (dispatch) => {
    quizService.getQuiz(category, difficulty, type).then((res) => {
      if (res.data.response_code === 1) {
        return dispatch(
          setQuizError(
            "Возникла ошибка! Пожалуйста, выберите другой тип викторины"
          )
        );
      }
      dispatch(setQuizError(""));
      dispatch(setQuiz(res.data.results));
    });
  };
};
