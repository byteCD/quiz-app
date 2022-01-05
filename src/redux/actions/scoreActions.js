export const INCREMENT_SCORE = "INCREMENT_SCORE";
export const SET_SCORE = "SET_SCORE";

export const incrementScore = () => ({
  type: INCREMENT_SCORE,
});
export const setScore = (score) => ({
  type: SET_SCORE,
  payload: score,
});
