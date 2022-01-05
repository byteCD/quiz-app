export const SET_QUESTION_NUMBER = "SET_QUESTION_NUMBER";
export const INCREMENT_QUESTION_NUMBER = "INCREMENT_QUESTION_NUMBER";

export const setQuestionNumber = (number) => ({
  type: SET_QUESTION_NUMBER,
  payload: number,
});
export const incrementQuestionNumber = () => ({
  type: INCREMENT_QUESTION_NUMBER,
});
