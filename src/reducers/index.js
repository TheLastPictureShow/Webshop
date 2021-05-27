import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import berlinReducer from "./berlin";
import spiceReducer from "./spices";
import { combineReducers } from "redux";

const allReducer = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  berlin: berlinReducer,
  spices: spiceReducer,
});

export default allReducer;
