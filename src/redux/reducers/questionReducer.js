import {
  SET_QUESTION_NUMBER,
  INCREMENT_QUESTION_NUMBER,
} from "../actions/questionActions";

const initialState = {
  questionNumber: 0,
};

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUESTION_NUMBER: {
      return {
        ...state,
        questionNumber: action.payload,
      };
    }
    case INCREMENT_QUESTION_NUMBER: {
      return {
        ...state,
        questionNumber: state.questionNumber + 1,
      };
    }
    default:
      return state;
  }
};

export default questionReducer;
