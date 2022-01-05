import { SET_QUIZ, SET_QUIZ_ERROR } from "../actions/quizActions";

const initialState = {
  quiz: [],
  error: "",
};

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUIZ: {
      return {
        ...state,
        quiz: action.payload,
      };
    }
    case SET_QUIZ_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default quizReducer;
