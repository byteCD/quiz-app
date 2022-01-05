import { combineReducers } from "redux";
import quizReducer from "./quizReducer";
import scoreReducer from "./scoreReducer";
import questionReducer from "./questionReducer";

const rootReducer = combineReducers({
  quizReducer,
  scoreReducer,
  questionReducer,
});

export default rootReducer;
