import { combineReducers } from "redux";
import todoReducer from "./todo_reducer";
import errorReducer from "./error_reducer";

const rootReducer = combineReducers({
  todos: todoReducer,
  errors: errorReducer
});

export default rootReducer;
