import { INCREMENT_SCORE, SET_SCORE } from "../actions/scoreActions";

const initialState = {
  score: 0,
};

const scoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_SCORE: {
      return {
        ...state,
        score: state.score + 1,
      };
    }
    case SET_SCORE: {
      return {
        ...state,
        score: action.payload,
      };
    }
    default:
      return state;
  }
};

export default scoreReducer;
